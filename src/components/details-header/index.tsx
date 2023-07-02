import * as S from './styles'

interface Props extends S.DetailsHeaderProps {
  title: string
  subtitle: string
}

export function DetailsHeader({ subtitle, title, type }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Icon name="arrow-left" type={type} />
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
