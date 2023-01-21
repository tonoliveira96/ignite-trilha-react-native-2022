import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
