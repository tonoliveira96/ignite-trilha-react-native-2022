import styled, { css } from 'styled-components/native';

interface Props{
  inDiet: boolean;
}

export const Container = styled.View`
 flex: 1;
 align-items: center;
 justify-content: center;
 padding: 30px;
`;

export const FeedbackTitle = styled.Text<Props>`
  ${({ theme, inDiet }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${ inDiet ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const FeedbackMessage = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  margin-bottom: 24px;
`