import { ButtonDefault } from '@components/ButtonDefault';
import { Header } from '@components/Header';
import { InDietButton } from '@components/InDietButton';
import { InputForm } from '@components/InputForm';
import { LabelInput } from '@components/InputForm/styles';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Container, ContainerTwoColumns, Form } from './styles';

interface MealProps {
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
  const [inDiet, setInDiet] = useState(false);

  async function handleNew() {
    const meal: MealProps = {
      name: name,
      description: description,
      date: date,
      time: time,
      inDiet: inDiet,
    };

    console.log(meal);
    //   await mealCreate(meal);
    //   navigation.navigate("home");
    // } catch (error) {
    //   if (error instanceof AppError) {
    //     Alert.alert("Nova refeição", error.message);
    //   } else {
    //     Alert.alert("Nova refeição", "Não foi possível criar uma nova refeição");
    //     console.log(error);
    //   }
    // }
  }
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
            onChangeText={(e) => { setDate(e); }}
            onSubmitEditing={handleNew}
            returnKeyType="done"
            keyboardType='numeric'
            style={{marginRight: 6}}
          />
          <InputForm
            title='Hora'
            placeholder='00:00'
            onChangeText={(e) => { setTime(e); }}
            onSubmitEditing={handleNew}
            returnKeyType="done"
            keyboardType='numeric'
            style={{marginLeft: 6}}
          />
        </ContainerTwoColumns>
        <LabelInput style={{marginTop: 12}}>Está dentro da dieta?</LabelInput>
        <ContainerTwoColumns>
          <InDietButton
            style={{marginRight: 6}}
            value={true}
            title='Sim'
          />
          <InDietButton
           style={{marginLeft: 6}}
            value={false}
            title='Não'
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
