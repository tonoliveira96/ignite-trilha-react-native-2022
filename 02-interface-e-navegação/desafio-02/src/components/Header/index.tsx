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


interface HeaderProps extends VariantsHeader {
  title: string;
  percentage?: string;
}

export function Header({ title, variant, percentage }: HeaderProps) {
  return (
    <Container variant={variant}>
      <BackButton>
        <BackIcon />
      </BackButton>
      {variant === 'deafult' && <Title>{title}</Title>}
      {variant !== 'deafult' && (
        <ContainerPercentage>
          <TitleDietCard>{percentage}</TitleDietCard>
          <SubtitleDietCard>das refeições dentro da dieta</SubtitleDietCard>
        </ContainerPercentage>
      )}
    </Container>
  );
}
