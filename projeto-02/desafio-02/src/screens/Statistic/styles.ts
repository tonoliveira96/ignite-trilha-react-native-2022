import styled, { css } from 'styled-components/native';

type CardStatusType = {
  variant: 'green' | 'red';
}

export const Container = styled.View`
 flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const StatisticTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const CardMain = styled.View`
  width: 100%;
  align-items:center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  padding: 24px 12px;
  margin-top: 12px;
`;

export const CardSatus = styled.View<CardStatusType>`
  flex: 1;
  align-items:center;
  background-color: ${({ theme, variant }) => variant ==='green' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  padding: 24px 12px;
  margin-top: 12px;
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const CadrSubtitle = styled.Text`
 text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const ContainerTwoColumns = styled.View`
  width: 100%;
  flex-direction: row;
`;