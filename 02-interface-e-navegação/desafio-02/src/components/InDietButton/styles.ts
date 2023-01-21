import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type inDietValuetypes = 'sim' | 'nao';

type IconValue = {
  value: inDietValuetypes;
};

export const Container = styled(TouchableOpacity)`
 flex: 1;
 align-items: center;
 justify-content: center;
 flex-direction: row;
 padding: 20px;
 border-radius:6px;
 ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const IconValue = styled.View<IconValue>`
width: 8px;
height: 8px;
border-radius: 4px;
margin-right: 8px;

background-color: ${({ theme, value }) => value === 'sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ButtonText = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;