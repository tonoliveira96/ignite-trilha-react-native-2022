import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type VariantsHeader = {
  variant: 'deafult' | 'green' | 'red';
};

export const Container = styled.View<VariantsHeader>`
  width: 100%;
  height: 132px;
  align-items: center;
  padding: 24px;
  flex-direction: row;
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'green':
        return theme.COLORS.GREEN_LIGHT;
      case 'red':
        return theme.COLORS.RED_LIGHT;
      default: 
        return theme.COLORS.GRAY_500;
    }
  }};
`;

export const TitleDietCard = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubtitleDietCard = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ContainerPercentage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const BackButton = styled(TouchableOpacity)``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.RED_DARK,
}))``;
