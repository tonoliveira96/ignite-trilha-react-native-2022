import { ButtonDefault } from '@components/ButtonDefault';
import { Header } from '@components/Header';
import { InDietButton } from '@components/InDietButton';
import { InputForm } from '@components/InputForm';
import { LabelInput } from '@components/InputForm/styles';
import React from 'react';

import { Container, ContainerTwoColumns, Form } from './styles';

export function Create() {
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
          <InDietButton value='sim' title='Sim' />
          <InDietButton value='nao' title='Não' />
        </ContainerTwoColumns>
        <ButtonDefault variant="primary" title='Cadastrar refeição' />
      </Form>
    </Container>
  );
}
