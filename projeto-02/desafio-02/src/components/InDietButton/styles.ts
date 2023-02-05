import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type inDietValuetypes = 'sim' | 'nao';

type Props = {
  value: boolean;
  selected?: boolean;
};

export const Container = styled(TouchableOpacity) <Props>`
 flex: 1;
 align-items: center;
 justify-content: space-around;
 flex-direction: row;
 padding: 20px 48px;
 border-radius:6px;
 ${({ theme, value, selected }) => css`
    background-color: ${selected && value ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border: 1px solid  ${selected && value ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const ButtonText = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;