import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: 12px;
  background-color: ${({ theme }) => theme.palette.gray_7};
  border-radius: 20px 20px 0 0;
  padding: 32px 24px;
`
