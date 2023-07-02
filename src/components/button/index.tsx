import { type Feather } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface Props extends TouchableOpacityProps, S.ButtonProps {
  label: string
  icon?: keyof typeof Feather.glyphMap
}

export function Button({ icon, label, variant, ...rest }: Props): JSX.Element {
  return (
    <S.Container variant={variant} {...rest}>
      {icon && <S.Icon name={icon} variant={variant} />}
      <S.Label variant={variant}>{label}</S.Label>
    </S.Container>
  )
}
