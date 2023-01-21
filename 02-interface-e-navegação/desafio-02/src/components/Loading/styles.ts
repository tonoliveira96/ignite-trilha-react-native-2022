import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme})=>({
  color: theme.COLORS.GRAY_600
}))``;
