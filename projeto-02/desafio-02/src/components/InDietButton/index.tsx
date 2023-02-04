import { CircleStatus } from '@components/CircleStatus';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from './styles';

type InDietButtonProps = TouchableOpacityProps & {
  title: string;
  value: boolean;
  checked?: boolean;
};

export function InDietButton({ title, value, checked, ...rest }: InDietButtonProps) {
  return (
    <Container value={value} selected={checked}>
      <CircleStatus dietStatus={value} {...rest} />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}