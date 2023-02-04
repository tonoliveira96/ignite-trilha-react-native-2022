import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

export function ContainerForm({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}