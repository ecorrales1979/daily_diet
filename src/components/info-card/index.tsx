import * as S from './styles'

interface Props extends S.InfoCardProps {
  title: string
  subtitle: string
}

export function InfoCard({
  showIcon,
  subtitle,
  title,
  type
}: Props): JSX.Element {
  return (
    <S.Container type={type} showIcon={showIcon}>
      {showIcon && <S.Icon name="arrow-up-right" type={type} />}
      <S.Title type={type}>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
