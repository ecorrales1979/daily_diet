import { Container, Icon, InfoCardProps, Subtitle, Title } from './styles'

interface Props extends InfoCardProps {
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
    <Container type={type} showIcon={showIcon}>
      {showIcon && <Icon name="arrow-up-right" type={type} />}
      <Title type={type}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
