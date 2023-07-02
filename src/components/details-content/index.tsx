import { PropsWithChildren } from 'react'

import * as S from './styles'

export function DetailsContent({ children }: PropsWithChildren): JSX.Element {
  return <S.Container>{children}</S.Container>
}
