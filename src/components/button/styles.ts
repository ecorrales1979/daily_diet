import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export type ButtonStyleType = 'contained' | 'outlined'

export interface ButtonProps {
  variant: ButtonStyleType
  fullWidth?: boolean
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  ${({ fullWidth, theme, variant }) => css`
    background-color: ${variant === 'contained'
      ? theme.palette.gray_2
      : 'transparent'};
    border: ${variant === 'contained'
      ? theme.palette.gray_2
      : theme.palette.gray_1};
    margin: 0 ${fullWidth ? 0 : 'auto'};
  `}
  border-radius: 6px;
  padding: 16px 24px;
`

export const Label = styled.Text<ButtonProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'contained'
      ? theme.palette.white
      : theme.palette.gray_1};
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.bold};
  `};
  color: ${({ theme, variant }) =>
    variant === 'contained' ? theme.palette.white : theme.palette.gray_1};
`

export const Icon = styled(Feather).attrs<ButtonProps>(
  ({ theme, variant }) => ({
    size: 18,
    color: variant === 'contained' ? theme.palette.white : theme.palette.gray_1
  })
)``
