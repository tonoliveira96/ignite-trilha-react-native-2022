import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type DietStatusProps = {
  inDiet: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HeaderHome = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const DietCard = styled(TouchableOpacity)<DietStatusProps>`
  width: 100%;
  align-items: center;
  position: relative;
  margin: 24px 0;
  height: 102px;
  border-radius: 8px;
  padding: 20px;
  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const SectioHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-top: 24px;
`;

export const SectionItem = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  margin-top: 8px;
  padding: 10px;
`;

export const SectionMealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
  `}
`;

export const SectionMealItemDivisor = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const SectionMealTitle = styled.Text`
  width: 70%;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
`;

export const DietStatus = styled.View<DietStatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;

export const Openicon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))`
  position: absolute;
  right: 0;
  margin-top: 8px;
  margin-right: 8px;
`;
