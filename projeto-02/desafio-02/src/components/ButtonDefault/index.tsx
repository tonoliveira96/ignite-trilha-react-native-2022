import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonDefaultTypes, Container, Title } from './styles';

type ButtonDefaultProps = TouchableOpacityProps & {
  icon?: JSX.Element;
  title: string;
  variant: ButtonDefaultTypes;
};

export function ButtonDefault({ title, icon, variant, ...rest }: ButtonDefaultProps) {
  return (
    <Container variant={variant} {...rest}>
      {icon && (icon)}
      <Title variant={variant}>{title}</Title>
    </Container>
  );
}