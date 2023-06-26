import { Text } from 'react-native';

import { ButtonBooleanProps, Container, Icon, Label } from './styles';
import { capitalize } from '../../utils/formatters';

type Props = ButtonBooleanProps

export function ButtonBoolean({ active, type }: Props) {
  return (
    <Container active={active} type={type}>
      <Icon type={type} />
      <Label>{capitalize(type)}</Label>
      <Text></Text>
    </Container>
  )
}