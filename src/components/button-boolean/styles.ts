import styled, { css } from 'styled-components/native'

type ButtonBooleanType = 'yes' | 'no'

interface TypeProps {
  type: ButtonBooleanType
}

export interface ButtonBooleanProps extends TypeProps {
  active: boolean
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
    background-color: ${!active
      ? theme.palette.gray_6
      : type === 'yes'
      ? theme.palette.greenLight
      : theme.palette.redLight};
    border: 1px solid
      ${!active
        ? theme.palette.gray_6
        : type === 'yes'
        ? theme.palette.greenDark
        : theme.palette.redDark};
  `}
`

export const IconDefault = styled.View`
  border-radius: 4px;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.palette.gray_6};
`

export const IconGood = styled(IconDefault)`
  background-color: ${({ theme }) => theme.palette.greenDark};
`

export const IconBad = styled(IconDefault)`
  background-color: ${({ theme }) => theme.palette.redDark};
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.bold};
  `}
`
