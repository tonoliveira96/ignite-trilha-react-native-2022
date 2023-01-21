import { Image } from 'react-native';
import {
  Container,
  DietCard,
  HeaderHome,
  ImageProfile,
  Openicon,
  SubtitleDietCard,
  TitleDietCard,
} from './styles';
import { Plus } from 'phosphor-react-native';
import logo from '@assets/Logo.png';

import { ButtonDefault } from '@components/ButtonDefault';
export function Home() {
  return (
    <Container>
      <HeaderHome>
        <Image source={logo} />
        <ImageProfile
          source={{ uri: 'https://github.com/tonoliveira96.png' }}
        />
      </HeaderHome>
      <DietCard>
        <Openicon />
        <TitleDietCard>90,89%</TitleDietCard>
        <SubtitleDietCard>das refeições dentro da dieta</SubtitleDietCard>
      </DietCard>
      <ButtonDefault
        title='Nova refeição'
        icon={<Plus size={18} color='#FFF' />}
      />
    </Container>
  );
}
