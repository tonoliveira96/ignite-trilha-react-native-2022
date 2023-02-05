import indiet from "@assets/indiet.png";
import outdiet from "@assets/outdiet.png";
import { ButtonDefault } from '@components/ButtonDefault';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { Container, FeedbackMessage, FeedbackTitle } from './styles';

export function Feedback() {
  const navigation = useNavigation();
  const { params } = useRoute();

  function handleBack() {
    navigation.navigate("home");
  }

  const title = params?.indiet ? <FeedbackTitle>Continue assim!</FeedbackTitle> : <FeedbackTitle>Que pena!</FeedbackTitle>;
  const message = params?.indiet ?
    'Você continua dentro da dieta. Muito bem!' :
    'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!';

  return (
    <Container>
      {title}
      <FeedbackMessage>{message}</FeedbackMessage>
      <Image source={params?.indiet ? indiet : outdiet} />
      <ButtonDefault
        title='Ir para a página inicial'
        variant='primary'
        onPress={handleBack}
        style={{ marginTop: 30 }}
      />
    </Container>
  );
}