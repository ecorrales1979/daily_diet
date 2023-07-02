import * as S from './styles'

interface Props extends Partial<S.InfoCardProps> {
  title: string
  subtitle: string
}

export function InfoCard({
  fullWidth = false,
  showIcon = false,
  subtitle,
  title,
  type = 'default'
}: Props): JSX.Element {
  return (
    <S.Container type={type} showIcon={showIcon} fullWidth={fullWidth}>
      {showIcon && <S.Icon name="arrow-up-right" type={type} />}
      <S.Title showIcon={showIcon}>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
