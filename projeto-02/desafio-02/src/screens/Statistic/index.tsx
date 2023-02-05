import { ContainerForm } from '@components/ContainerForm';
import { Header } from '@components/Header';
import { useFocusEffect } from '@react-navigation/native';
import { DietSummaryProps } from '@screens/Home';
import { getSummary } from '@storage/getSummary';
import React, { useCallback, useState } from 'react';
import { CadrSubtitle, CardMain, CardSatus, CardTitle, Container, ContainerTwoColumns, Content, StatisticTitle } from './styles';

export function Statistic() {

  const [dietSummary, setDietSummary] = useState<DietSummaryProps>({
    inDietTotal: 0,
    mealsTotal: 0,
    outDietTotal: 0,
    percentage: 0
  });

  async function fetchSummary() {
    try {
      const data = await getSummary();
      setDietSummary(data);
    } catch (err) {

    }
  }

  useFocusEffect(useCallback(()=>{
    fetchSummary()
  },[]))

  return (
    <Container>
      <Header 
      title='' 
      variant={dietSummary.percentage >= 50? 'green': 'red'} 
      percentage={`${dietSummary.percentage.toFixed(2)}%`} />

      <ContainerForm>
        {dietSummary && (
          <Content>
          <StatisticTitle>Estatísticas gerais</StatisticTitle>
          <CardMain>
            <CardTitle>{dietSummary.inDietTotal}</CardTitle>
            <CadrSubtitle>melhor sequência de pratos dentro da dieta</CadrSubtitle>
          </CardMain>
          <CardMain>
            <CardTitle>{dietSummary.mealsTotal}</CardTitle>
            <CadrSubtitle>refeições registradas</CadrSubtitle>
          </CardMain>
          <ContainerTwoColumns>
            <CardSatus style={{ marginRight: 6 }} variant="green">
              <CardTitle>{dietSummary.inDietTotal}</CardTitle>
              <CadrSubtitle>refeições dentro da dieta</CadrSubtitle>
            </CardSatus>
            <CardSatus style={{ marginLeft: 6 }} variant="red">
              <CardTitle>{dietSummary.outDietTotal}</CardTitle>
              <CadrSubtitle>refeições fora da dieta</CadrSubtitle>
            </CardSatus>
          </ContainerTwoColumns>
        </Content>
        )}
      </ContainerForm>
    </Container>
  );
}