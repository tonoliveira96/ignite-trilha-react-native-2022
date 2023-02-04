import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  BackButton,
  BackIcon,
  Container, ContainerPercentage, SubtitleDietCard, Title, TitleDietCard, VariantsHeader
} from './styles';
interface HeaderProps {
  title: string;
  variant: VariantsHeader;
  percentage?: string;
}

export function Header({ title, variant, percentage }: HeaderProps) {
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container variant={variant}>
      <BackButton variant={variant} onPress={handleBack}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
      {percentage && (
        <ContainerPercentage>
          <TitleDietCard>90,89%</TitleDietCard>
          <SubtitleDietCard>das refeições dentro da dieta</SubtitleDietCard>
        </ContainerPercentage >
      )}
    </Container>
  );
}
