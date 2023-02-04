import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type inDietValuetypes = 'sim' | 'nao';

export const Container = styled(TouchableOpacity)`
 flex: 1;
 align-items: center;
 justify-content: space-around;
 flex-direction: row;
 padding: 20px 48px;
 border-radius:6px;
 ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const ButtonText = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;