import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

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

export const DietCard = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  position: relative;
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

export const Openicon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  right: 0;
  margin-top: 8px;
  margin-right: 8px;
`;
