import { Text } from 'react-native'

import * as S from './styles'
import { capitalize } from '@/utils/formatters'

type Props = S.ButtonBooleanProps

export function ButtonBoolean({ active, type }: Props): JSX.Element {
  return (
    <S.Container active={active} type={type}>
      {!active ? (
        <S.IconDefault />
      ) : type === 'yes' ? (
        <S.IconGood />
      ) : (
        <S.IconBad />
      )}
      <S.Label>{capitalize(type)}</S.Label>
      <Text></Text>
    </S.Container>
  )
}
