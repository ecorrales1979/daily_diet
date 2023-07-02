import React from 'react'

import { Header } from '@/components/header'
import { InfoCard } from '@/components/info-card'
import Meals from '@/components/meals'
import * as S from './styles'

export function Home(): JSX.Element {
  return (
    <S.Container>
      <Header />
      <InfoCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        type="good"
        showIcon
      />
      <Meals />
    </S.Container>
  )
}
