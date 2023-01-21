import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type VariantsHeader = 'deafult' | 'green' | 'red';

type Props = {
  variant: VariantsHeader;
};

export const Container = styled.View<Props>`
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
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const SubtitleDietCard = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ContainerPercentage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const BackButton = styled(TouchableOpacity)<Props>`
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'green':
        return theme.COLORS.GREEN_DARK;
      case 'red':
        return theme.COLORS.RED_DARK;
      default:
        return theme.COLORS.GRAY_500;
    }
  }};
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
}))``;
