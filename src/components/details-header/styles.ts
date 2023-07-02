import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export interface DetailsHeaderProps {
  type: 'good' | 'bad'
}

export const Container = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 32px;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxl}px;
    font-family: ${theme.fontFamily.bold};
    color: ${theme.palette.gray_1};
  `};
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.regular};
    color: ${theme.palette.gray_2};
  `};
`

export const Icon = styled(Feather).attrs<DetailsHeaderProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'good' ? theme.palette.greenDark : theme.palette.redDark
  })
)`
  position: absolute;
  top: 24px;
  left: 24px;
`
