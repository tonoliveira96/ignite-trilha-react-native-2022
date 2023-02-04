import React from 'react';
import { Container, IconList, Message } from './styles';

export function EmptyList() {
  return (
    <Container>
      <IconList />
      <Message>Você ainda não adicionou nenhuma refeição.</Message>
    </Container>
  );
}