import { Avatar, Container, Logo } from './styles'

import LogoImg from '@/assets/logo.png'

export function Header(): JSX.Element {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Avatar />
    </Container>
  )
}
