'use client'

import { useMemo, useState } from 'react'

import plans from '@/data/plans.json'

import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from '@/components/PricingCard'
import { useLanguage } from '@/hooks/useLanguage'

type PlanJson = {
  id: string
  nameKey: string
  descKey: string
  monthly: string
  quarterly: string
  recommended: boolean
  features: Array<{ labelKey: string; valueKey: string }>
}

export function PricingSection() {
  const { t } = useLanguage()
  const [period, setPeriod] = useState<'monthly' | 'quarterly'>('monthly')

  const periodLabel = period === 'monthly' ? t('pricing.toggle.monthly') : t('pricing.toggle.quarterly')

  const items = useMemo(() => plans as PlanJson[], [])

  return (
    <section id="pricing" className="section-neutral-elevated border-t border-white/10 py-20 md:py-32">
      <Container>
        <MotionInView>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading title={t('pricing.title')} subtitle={t('pricing.subtitle')} />
            <div className="flex items-center gap-2 rounded-2xl bg-surface p-2 ring-1 ring-white/10">
              <button
                type="button"
                onClick={() => setPeriod('monthly')}
                className={
                  period === 'monthly'
                    ? 'rounded-xl bg-surface2 px-4 py-2 text-sm font-medium text-ink'
                    : 'rounded-xl px-4 py-2 text-sm text-ink2 hover:bg-surface2 hover:text-ink'
                }
              >
                {t('pricing.toggle.monthly')}
              </button>
              <button
                type="button"
                onClick={() => setPeriod('quarterly')}
                className={
                  period === 'quarterly'
                    ? 'rounded-xl bg-surface2 px-4 py-2 text-sm font-medium text-ink'
                    : 'rounded-xl px-4 py-2 text-sm text-ink2 hover:bg-surface2 hover:text-ink'
                }
              >
                {t('pricing.toggle.quarterly')}
              </button>
              <div className="hidden rounded-xl bg-brand-700/20 px-3 py-2 text-xs font-medium text-brand-200 ring-1 ring-brand-700/30 sm:block">
                {t('pricing.toggle.save')}
              </div>
            </div>
          </div>
        </MotionInView>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((p, idx) => (
            <MotionInView key={p.id} delay={idx * 0.06}>
              <PricingCard
                nameKey={p.nameKey}
                descKey={p.descKey}
                amount={period === 'monthly' ? p.monthly : p.quarterly}
                periodLabel={periodLabel}
                recommended={p.recommended}
                features={p.features}
              />
            </MotionInView>
          ))}
        </div>
      </Container>
    </section>
  )
}
