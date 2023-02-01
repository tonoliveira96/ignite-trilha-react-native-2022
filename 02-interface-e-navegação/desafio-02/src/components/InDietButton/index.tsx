import { CircleStatus } from '@components/CircleStatus';
import React from 'react';
import { ButtonText, Container } from './styles';

interface InDietButtonProps {
  title: string;
  value: boolean
}

export function InDietButton({ title, value }: InDietButtonProps) {
  return (
    <Container>
      <CircleStatus dietStatus={value} />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}