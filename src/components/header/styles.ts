import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #000;
  background-color: ${({ theme }) => theme.palette.gray_5};
`
