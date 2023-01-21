import React from 'react';

import { ButtonText, Container, IconValue, inDietValuetypes } from './styles';

interface InDietButtonProps {
  title: string;
  value: inDietValuetypes
}

export function InDietButton({ title, value }: InDietButtonProps) {
  return (
    <Container>
      <IconValue value={value} />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}