import { Image, Text } from 'react-native';
import { Container, DietCard, HeaderHome, ImageProfile, Openicon, SubtitleDietCard, TitleDietCard } from './styles';
import logo from "@assets/Logo.png";
export function Home() {
  return (
    <Container>
      <HeaderHome>
        <Image source={logo} />
        <ImageProfile source={{ uri: 'https://github.com/tonoliveira96.png' }} />
      </HeaderHome>
      <DietCard>
        <Openicon />
        <TitleDietCard>90,89%</TitleDietCard>
        <SubtitleDietCard>das refeições dentro da dieta</SubtitleDietCard>
      </DietCard>
    </Container>
  );
}