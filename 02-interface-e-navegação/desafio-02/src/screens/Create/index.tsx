import { ButtonDefault } from '@components/ButtonDefault';
import { Header } from '@components/Header';
import { InDietButton } from '@components/InDietButton';
import { InputForm } from '@components/InputForm';
import { LabelInput } from '@components/InputForm/styles';
import { useNavigation } from '@react-navigation/native';
import { mealCreate } from '@storage/mealsCreate';
import { AppError } from '@utils/AppErros';
import React from 'react';
import { Alert } from 'react-native';

import { Container, ContainerTwoColumns, Form } from './styles';

export function Create() {
  const navigation = useNavigation()
  async function handleNew(){
    try {
      
      await mealCreate('')
      navigation.navigate("home");
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert("Nova refeição", error.message)
      }else{
        Alert.alert("Nova refeição", "Não foi possível criar uma nova refeição");
        console.log(error)
      }
      
    }
  }
  return (
    <Container>
      <Header title='Nova Refeição' variant='deafult' />
      <Form>
        <InputForm title='Nome' placeholder='Refeição' />
        <InputForm title='Descrição' placeholder='Descreva sua refeição' />
        <ContainerTwoColumns>
          <InputForm title='Data' placeholder='00/00/0000' />
          <InputForm title='Hora' placeholder='00:00' />
        </ContainerTwoColumns>
        <LabelInput>Está dentro da dieta?</LabelInput>
        <ContainerTwoColumns>
          <InDietButton value={true} title='Sim' />
          <InDietButton value={false} title='Não' />
        </ContainerTwoColumns>
        <ButtonDefault variant="primary" title='Cadastrar refeição' />
      </Form>
    </Container>
  );
}
