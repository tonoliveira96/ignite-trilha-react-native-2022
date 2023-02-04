import { ButtonDefault } from '@components/ButtonDefault';
import { CircleStatus } from '@components/CircleStatus';
import { ContainerForm } from '@components/ContainerForm';
import { Header } from '@components/Header';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { MealProps } from '@screens/Create';
import { getMealByid } from '@storage/getMealById';
import { removwMealByid } from '@storage/removeMealById';
import { Pencil, Trash } from 'phosphor-react-native';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { Container, Content, DateDetails, Description, DetailDietStatus, DetailDietStatusText, Title } from './styles';

export function Details() {
  const route = useRoute();
  const [meal, setMeal] = useState<MealProps>({} as MealProps);

  const navigation = useNavigation();
  const { params } = route;

  async function fecthById() {
    try {
      const data: MealProps[] = await getMealByid(params?.id);
      setMeal(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeMeal() {
    try {
      await removwMealByid(params?.id);
      navigation.navigate('home');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    Alert.alert("Remover", "Deseja remover essa refeição?",
      [
        { text: 'Sim', onPress: removeMeal },
        { text: 'Não', style: 'cancel' }
      ]);
  }

  useFocusEffect(useCallback(() => {
    fecthById();
  }, []));

  return (
    <Container>
      <Header title='Refeição' variant={meal.inDiet ? 'green' : 'red'} />
      <ContainerForm>
        {meal && (
          <Content>
            <Title>{meal?.name}</Title>
            <Description>{meal?.description}</Description>
            <DateDetails>Data e hora</DateDetails>
            <Description>{`${meal?.date} às ${meal?.time}`}</Description>
            <DetailDietStatus>
              <CircleStatus dietStatus={meal.inDiet} />
              <DetailDietStatusText>{meal.inDiet ? 'dentro da dieta' : 'fora da dieta'}</DetailDietStatusText>
            </DetailDietStatus>
          </Content>
        )}
        <ButtonDefault
          variant='primary'
          title='Editar refeição'
          icon={<Pencil size={18} color="#FFF" />}
        />
        <ButtonDefault
          variant='secondary'
          title='Excluir refeição'
          icon={<Trash size={18} />}
          onPress={handleDelete}
        />
      </ContainerForm>
    </Container>
  );
}
