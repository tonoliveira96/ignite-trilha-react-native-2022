import { ButtonDefault } from '@components/ButtonDefault';
import { CircleStatus } from '@components/CircleStatus';
import { ContainerForm } from '@components/ContainerForm';
import { Header } from '@components/Header';
import { useRoute } from '@react-navigation/native';
import { Pencil, Trash } from 'phosphor-react-native';
import React from 'react';

import { Container, Content, DateDetails, Description, DetailDietStatus, DetailDietStatusText, Title } from './styles';

export function Details() {
  const route = useRoute();

  const { name } = route

  return (
    <Container>
      <Header title='Refeição' variant='green' />
      <ContainerForm>
        <Content>
          <Title>Nomeee</Title>
          <Description>Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Description>
          <DateDetails>Data e hora</DateDetails>
          <Description>12/08/2022 às 16:00</Description>
          <DetailDietStatus>
            <CircleStatus dietStatus />
            <DetailDietStatusText>dentro da dieta</DetailDietStatusText>
          </DetailDietStatus>
        </Content>
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
