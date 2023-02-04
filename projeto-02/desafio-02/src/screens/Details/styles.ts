import { SafeAreaView } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  /* padding: 24px;
  margin-top: -24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; */
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const DateDetails = styled.Text`
  margin-top: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const DetailDietStatus = styled.View`
  width: 144px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 8px;
  border-radius: 25px;
  margin-top: 24px;
`;

export const DetailDietStatusText = styled.Text`
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
