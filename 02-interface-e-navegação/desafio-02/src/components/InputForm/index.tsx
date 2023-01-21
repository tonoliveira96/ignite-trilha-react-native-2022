import React from 'react';
import { useTheme } from 'styled-components';
import { Container, InputComponent, LabelInput } from './styles';

interface InputFormProps {
  title: string;
  placeholder?: string;
}

export function InputForm({ title, placeholder }: InputFormProps) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <LabelInput>{title}</LabelInput>
      <InputComponent placeholder={placeholder} placeholderTextColor={COLORS.GRAY_400} />
    </Container>
  );
}
