import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, InputComponent, LabelInput } from './styles';

interface InputFormProps extends TextInputProps {
  title: string;
}

export function InputForm({ title, placeholder, ...rest }: InputFormProps) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <LabelInput>{title}</LabelInput>
      <InputComponent placeholderTextColor={COLORS.GRAY_400} {...rest} />
    </Container>
  );
}
