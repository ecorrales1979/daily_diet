import styled, { css } from 'styled-components/native'

export interface MealType {
  type: 'good' | 'bad'
}

export const Container = styled.View`
  flex: 1;
`

export const MealsHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.palette.gray_1};
    font-size: ${theme.fontSize.md}px;
    font-family: ${theme.fontFamily.regular};
  `}
  margin-bottom: 8px;
`

export const DateIndicator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.palette.gray_1};
    font-size: ${theme.fontSize.lg}px;
    font-family: ${theme.fontFamily.bold};
  `}
  margin-top: 32px;
`

export const Meal = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.gray_5};
  margin-top: 8px;
`

export const MealDivider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.palette.gray_5};
`

export const MealStatus = styled.View<MealType>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, type }) =>
    type === 'good' ? theme.palette.greenLight : theme.palette.redLight};
`

export const HourIndicator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.palette.gray_1};
    font-size: ${theme.fontSize.xs}px;
    font-family: ${theme.fontFamily.bold};
  `}
`

export const MealText = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.palette.gray_2};
    font-size: ${theme.fontSize.md}px;
    font-family: ${theme.fontFamily.regular};
  `}
`
