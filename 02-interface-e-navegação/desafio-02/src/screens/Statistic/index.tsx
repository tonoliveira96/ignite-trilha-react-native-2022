import { ContainerForm } from '@components/ContainerForm';
import { Header } from '@components/Header';
import React from 'react';

import { CadrSubtitle, CardMain, CardSatus, CardTitle, Container, ContainerTwoColumns, Content, StatisticTitle } from './styles';

export function Statistic() {
  return (
    <Container>
      <Header title='' variant='green' percentage='90,86%'/>

      <ContainerForm>
        <Content>
          <StatisticTitle>Estatísticas gerais</StatisticTitle>
          <CardMain>
            <CardTitle>22</CardTitle>
            <CadrSubtitle>melhor sequência de pratos dentro da dieta</CadrSubtitle>
          </CardMain>
          <CardMain>
            <CardTitle>109</CardTitle>
            <CadrSubtitle>refeições registradas</CadrSubtitle>
          </CardMain>
          <ContainerTwoColumns>
            <CardSatus style={{marginRight: 6}} variant="green">
              <CardTitle>22</CardTitle>
              <CadrSubtitle>refeições dentro da dieta</CadrSubtitle>
            </CardSatus>
            <CardSatus style={{marginLeft: 6}} variant="red">
              <CardTitle>109</CardTitle>
              <CadrSubtitle>refeições fora da dieta</CadrSubtitle>
            </CardSatus>
          </ContainerTwoColumns>
        </Content>
      </ContainerForm>
    </Container>
  );
}