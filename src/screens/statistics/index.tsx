import { useMemo } from 'react'

import * as S from './styles'
import { DetailsContent } from '@/components/details-content'
import { DetailsHeader } from '@/components/details-header'
import { InfoCard } from '@/components/info-card'

export default function Statistics(): JSX.Element {
  const amount = 90.86

  const type = useMemo(() => {
    return amount < 70 ? 'bad' : 'good'
  }, [amount])

  return (
    <S.Container type={type}>
      <DetailsHeader
        type={type}
        title={`${amount}%`}
        subtitle="of meals within the diet"
      />

      <DetailsContent>
        <S.Text>General Statistics</S.Text>
        <InfoCard
          title="22"
          subtitle="best sequence of meals within the diet"
        />
        <InfoCard title="109" subtitle="registered meals" />
        <S.CardsContainer>
          <InfoCard
            title="99"
            subtitle="meals within the diet"
            fullWidth
            type="good"
          />
          <InfoCard
            title="10"
            subtitle="meals without the diet"
            fullWidth
            type="bad"
          />
        </S.CardsContainer>
      </DetailsContent>
    </S.Container>
  )
}
