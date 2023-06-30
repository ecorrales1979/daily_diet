import styled, { css } from 'styled-components/native'

import theme from '@/theme'

type ButtonBooleanType = 'yes' | 'no'

interface TypeProps {
  type: ButtonBooleanType
}

export interface ButtonBooleanProps extends TypeProps {
  active: boolean
}

const colors = {
  default: { bg: theme.palette.gray_6 },
  yes: { bg: theme.palette.greenLight, details: theme.palette.greenDark },
  no: { bg: theme.palette.redLight, details: theme.palette.redDark }
}

export const Container = styled.TouchableOpacity<ButtonBooleanProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 8px;
  border-radius: 6px;
  padding: 16px;
  ${({ active, theme, type }) => css`
    background-color: ${!active ? colors.default : colors[type].bg};
    border: 1px solid ${!active ? colors.default : colors[type].details};
  `}
`

export const Icon = styled.View<TypeProps>`
  border-radius: 4px;
  width: 8px;
  height: 8px;
  ${({ type }) => css`
    background-color: ${colors[type].details};
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.bold};
  `}
`
