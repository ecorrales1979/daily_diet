import { Button } from '@/components/button'
import * as S from './styles'

export default function Meals(): JSX.Element {
  return (
    <S.Container>
      <S.MealsHeader>Meals</S.MealsHeader>
      <Button variant="contained" label="New Meal" icon="plus" fullWidth />
      <S.DateIndicator>28.06.23</S.DateIndicator>
      <S.Meal>
        <S.HourIndicator>20:00</S.HourIndicator>
        <S.MealDivider />
        <S.MealText>Pizza</S.MealText>
        <S.MealStatus type="bad" />
      </S.Meal>
      <S.Meal>
        <S.HourIndicator>12:00</S.HourIndicator>
        <S.MealDivider />
        <S.MealText>Baked fish and salad</S.MealText>
        <S.MealStatus type="good" />
      </S.Meal>
    </S.Container>
  )
}
