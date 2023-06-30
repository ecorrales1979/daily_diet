import { Text } from 'react-native'

import {
  ButtonBooleanProps,
  Container,
  IconBad,
  IconDefault,
  IconGood,
  Label
} from './styles'
import { capitalize } from '@/utils/formatters'

type Props = ButtonBooleanProps

export function ButtonBoolean({ active, type }: Props): JSX.Element {
  return (
    <Container active={active} type={type}>
      {!active ? <IconDefault /> : type === 'yes' ? <IconGood /> : <IconBad />}
      <Label>{capitalize(type)}</Label>
      <Text></Text>
    </Container>
  )
}
