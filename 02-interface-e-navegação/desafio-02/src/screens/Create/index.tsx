import { Header } from '@components/Header';
import { InputForm } from '@components/InputForm';
import React from 'react';

import { Container, ContainerDateAndTime, Form } from './styles';

export function Create() {
  return (
    <Container>
      <Header title='Nova Refeição' variant='deafult' />
      <Form>
        <InputForm title='Nome' placeholder='Refeição' />
        <InputForm title='Descrição' placeholder='Descreva sua refeição' />
        <ContainerDateAndTime>
          <InputForm title='Data' placeholder='00/00/0000' />
          <InputForm title='Hora' placeholder='00:00' />
        </ContainerDateAndTime>
      </Form>
    </Container>
  );
}
