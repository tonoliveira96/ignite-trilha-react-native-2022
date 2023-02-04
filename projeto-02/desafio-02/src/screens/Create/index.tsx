import { ButtonDefault } from '@components/ButtonDefault';
import { Header } from '@components/Header';
import { InDietButton } from '@components/InDietButton';
import { InputForm } from '@components/InputForm';
import { LabelInput } from '@components/InputForm/styles';
import { useNavigation } from '@react-navigation/native';
import { mealCreate } from '@storage/mealsCreate';
import { AppError } from '@utils/AppErros';
import { maskDate, maskTime } from '@utils/mask';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, ContainerTwoColumns, Form } from './styles';

export interface MealProps {
  id: string;
  inDiet: boolean;
  name: string;
  description: string;
  date: string;
  time: string;
}

export function Create() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [inDiet, setInDiet] = useState<boolean>(true);

  const [checked, setChecked] = useState<boolean>(false);

  function handleInDiet(value: 'sim' | 'nao') {
    setInDiet(value === 'sim');
  }

  async function handleNew() {
    const meal: MealProps = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: name,
      description: description,
      date: date,
      time: time,
      inDiet: inDiet,
    };
    if (
      name.length < 1 ||
      description.length < 1 ||
      date.length < 1
    ) {
      return Alert.alert("Atenção!", "Preencha todos os campos.");
    }
    try {
      await mealCreate(meal);
      navigation.navigate("home");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova refeição", error.message);
      } else {
        Alert.alert("Nova refeição", "Não foi possível criar uma nova refeição");
        console.log(error);
      }
    }
  }

  console.log(inDiet);

  return (
    <Container>
      <Header title='Nova Refeição' variant='deafult' />
      <Form>
        <InputForm
          title='Nome'
          placeholder='Refeição'
          onChangeText={setName}
          onSubmitEditing={handleNew}
          returnKeyType="done"
        />
        <InputForm
          title='Descrição'
          placeholder='Descreva sua refeição'
          onChangeText={(e) => { setDescription(e); }}
          onSubmitEditing={handleNew}
          returnKeyType="done"
        />
        <ContainerTwoColumns>
          <InputForm
            title='Data'
            placeholder='00/00/0000'
            value={date}
            onChangeText={(e) => { setDate(maskDate(e)); }}
            onSubmitEditing={handleNew}
            returnKeyType="done"
            maxLength={10}
            keyboardType='numeric'
            style={{ marginRight: 6 }}
          />
          <InputForm
            title='Hora'
            placeholder='00:00'
            value={time}
            onChangeText={(e) => { setTime(maskTime(e)); }}
            onSubmitEditing={handleNew}
            returnKeyType="done"
            keyboardType='numeric'
            maxLength={5}
            style={{ marginLeft: 6 }}
          />
        </ContainerTwoColumns>
        <LabelInput style={{ marginTop: 12 }}>Está dentro da dieta?</LabelInput>
        <ContainerTwoColumns>
          <InDietButton
            style={{ marginRight: 6 }}
            value={true}
            title='Sim'
            onPress={() => handleInDiet('sim')}
            checked={checked && inDiet}
          />
          <InDietButton
            style={{ marginLeft: 6 }}
            value={false}
            title='Não'
            onPress={() => handleInDiet('nao')}
            checked={checked && inDiet}
          />
        </ContainerTwoColumns>
        <ButtonDefault
          onPress={handleNew}
          variant="primary"
          title='Cadastrar refeição'
        />
      </Form>
    </Container>
  );
}
