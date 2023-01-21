import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

type DietStatusProps = {
  inDiet: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HeaderHome = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
`;

export const ImageProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const DietCard = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  position: relative;
  margin: 24px 0;
  height: 102px;
  border-radius: 8px;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
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

export const SectioHeader = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-top: 24px;
`;

export const SectionItem = styled.View`
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
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_XS}px;
  padding-right: 8px;
`;

export const SectionMealTitle = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
  padding: 0 8px;
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
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  right: 0;
  margin-top: 8px;
  margin-right: 8px;
`;
