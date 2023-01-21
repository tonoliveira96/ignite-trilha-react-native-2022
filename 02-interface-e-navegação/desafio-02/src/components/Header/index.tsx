import React from 'react';
import {
  BackButton,
  BackIcon,
  Container,
  ContainerPercentage,
  SubtitleDietCard,
  Title,
  TitleDietCard,
  VariantsHeader,
} from './styles';


interface HeaderProps {
  title: string;
  variant: VariantsHeader;
  percentage?: string;
}

export function Header({ title, variant, percentage }: HeaderProps) {
  return (
    <Container variant={variant}>
      <BackButton variant={variant}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}
