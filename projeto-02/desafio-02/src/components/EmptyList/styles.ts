import styled from 'styled-components/native';
import { ListBullets } from "phosphor-react-native";

export const Container = styled.View`
 flex: 1;
 padding: 24px 0;
 justify-content: center;
 align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const IconList = styled(ListBullets).attrs(({ theme }) => ({
  size: 48,
  color: theme.COLORS.GRAY_200
}))``;