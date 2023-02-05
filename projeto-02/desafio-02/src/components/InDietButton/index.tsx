import { CircleStatus } from '@components/CircleStatus';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from './styles';

type InDietButtonProps = TouchableOpacityProps & {
  title: string;
  value: boolean;
  checked?: boolean;
  refButton:  React.Ref<TouchableOpacity>;
};

export function InDietButton({ title, value, checked, onPress, refButton, ...rest }: InDietButtonProps) {
  return (
    <Container value={value} selected={checked} onPress={onPress} ref={refButton}>
      <CircleStatus dietStatus={value} {...rest} />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}