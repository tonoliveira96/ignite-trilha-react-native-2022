import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  BackButton,
  BackIcon,
  Container, Title, VariantsHeader
} from './styles';
interface HeaderProps {
  title: string;
  variant: VariantsHeader;
  percentage?: string;
}

export function Header({ title, variant, percentage }: HeaderProps) {
  const navigation = useNavigation()
  function handleBack(){
    navigation.goBack()
  }
  return (
    <Container variant={variant}>
      <BackButton variant={variant} onPress={handleBack}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}
