import { CircleStatus } from '@components/CircleStatus';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from './styles';

type InDietButtonProps = TouchableOpacityProps & {
  title: string;
  value: boolean;
};

export function InDietButton({ title, value, ...rest }: InDietButtonProps) {
  return (
    <Container>
      <CircleStatus dietStatus={value} {...rest} />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}