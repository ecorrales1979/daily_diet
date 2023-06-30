import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

type CardType = 'default' | 'good' | 'bad'

interface TypeProps {
  type: CardType
}

export interface InfoCardProps extends TypeProps {
  showIcon?: boolean
}

export const Container = styled.View<InfoCardProps>`
  position: relative;
  align-items: center;
  border-radius: 8px;
  ${({ showIcon, theme, type }) => css`
    background-color: ${type === 'default'
      ? theme.palette.gray_6
      : type === 'good'
      ? theme.palette.greenLight
      : theme.palette.redLight};
    padding: ${showIcon ? 20 : 16}px 16px;
    gap: ${showIcon ? 4 : 8}px;
  `}
`

export const Icon = styled(Feather).attrs<TypeProps>(({ theme, type }) => ({
  size: 16,
  color: type === 'good' ? theme.palette.greenDark : theme.palette.redDark,
  position: 'absolute',
  top: 8,
  right: 8
}))``

export const Title = styled.Text<TypeProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxl}px;
    font-family: ${theme.fontFamily.bold};
    color: ${theme.palette.gray_1};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.regular};
    color: ${theme.palette.gray_2};
  `}
`
