import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type ButtonDefaultProps = TouchableOpacityProps & {
  icon?: JSX.Element;
  title: string;
}

export function ButtonDefault({ title, icon }: ButtonDefaultProps) {
  return (
    <Container>
      {icon && (icon)}
      <Title>{title}</Title>
    </Container>
  );
}