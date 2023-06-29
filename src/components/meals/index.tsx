import { Button } from '../button'
import {
  Container,
  DateIndicator,
  HourIndicator,
  Meal,
  MealDivider,
  MealStatus,
  MealText,
  MealsHeader
} from './styles'

export default function Meals(): JSX.Element {
  return (
    <Container>
      <MealsHeader>Meals</MealsHeader>
      <Button variant="contained" label="New Meal" icon="plus" fullWidth />
      <DateIndicator>28.06.23</DateIndicator>
      <Meal>
        <HourIndicator>20:00</HourIndicator>
        <MealDivider />
        <MealText>Pizza</MealText>
        <MealStatus type="bad" />
      </Meal>
      <Meal>
        <HourIndicator>12:00</HourIndicator>
        <MealDivider />
        <MealText>Baked fish and salad</MealText>
        <MealStatus type="good" />
      </Meal>
    </Container>
  )
}
