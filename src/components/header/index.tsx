import * as S from './styles'

import LogoImg from '@/assets/logo.png'

export function Header(): JSX.Element {
  return (
    <S.Container>
      <S.Logo source={LogoImg} />
      <S.Avatar />
    </S.Container>
  )
}
