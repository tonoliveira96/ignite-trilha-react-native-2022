import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonDefaultTypes = 'primary' | 'secondary';

interface Props {
  variant: ButtonDefaultTypes;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme, variant }) => variant === 'primary' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  margin-top: 12px;
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, variant }) => variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
