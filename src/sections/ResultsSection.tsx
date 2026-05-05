'use client'

import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatsCounter } from '@/components/StatsCounter'
import { useLanguage } from '@/hooks/useLanguage'

export function ResultsSection() {
  const { t } = useLanguage()
  return (
    <section id="results" className="section-blue border-t border-white/10 py-20 md:py-28">
      <Container>
        <MotionInView>
          <SectionHeading title={t('results.title')} subtitle={t('results.subtitle')} />
        </MotionInView>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <StatsCounter label={t('stats.clients')} value={150} />
          <StatsCounter label={t('stats.sales')} value={60} />
          <StatsCounter label={t('stats.years')} value={8} />
          <StatsCounter label={t('stats.countries')} value={12} />
        </div>
      </Container>
    </section>
  )
}
