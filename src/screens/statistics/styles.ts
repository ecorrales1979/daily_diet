import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export interface TypeProps {
  type: 'good' | 'bad'
}

export const Container = styled(SafeAreaView)<TypeProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'good' ? theme.palette.greenLight : theme.palette.redLight};
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.bold};
    color: ${theme.palette.gray_1};
  `};
  text-align: center;
  margin-bottom: 8px;
`

export const CardsContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`
