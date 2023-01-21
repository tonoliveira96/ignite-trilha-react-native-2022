import { ButtonDefault } from '@components/ButtonDefault';
import { ContainerForm } from '@components/ContainerForm';
import { Header } from '@components/Header';
import { InDietButton } from '@components/InDietButton';
import { InputForm } from '@components/InputForm';
import { LabelInput } from '@components/InputForm/styles';
import { Pencil, Trash } from 'phosphor-react-native';
import React from 'react';

import { Container, ContainerTwoColumns, Form } from './styles';

export function Details() {
  return (
    <Container>
      <Header title='Refeição' variant='green' />
      <ContainerForm>
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
        </Form>
        <ButtonDefault
          variant='primary'
          title='Editar refeição'
          icon={<Pencil size={18} />}
        />
        <ButtonDefault
          variant='secondary'
          title='Excluir refeição'
          icon={<Trash size={18} />}
        />
      </ContainerForm>
    </Container>
  );
}
