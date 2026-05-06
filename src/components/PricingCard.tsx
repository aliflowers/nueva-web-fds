'use client'

import { Check, Sparkles, X } from 'lucide-react'

import { PayPalButtonWrapper } from '@/components/PayPalButtonWrapper'
import { cn } from '@/utils/cn'
import { useLanguage } from '@/hooks/useLanguage'

export type PlanFeature = {
  labelKey: string
  valueKey: string
}

export type PricingCardProps = {
  nameKey: string
  descKey: string
  amount: string
  periodLabel: string
  recommended?: boolean
  features: PlanFeature[]
}

export function PricingCard({ nameKey, descKey, amount, periodLabel, recommended, features }: PricingCardProps) {
  const { t } = useLanguage()
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-surface p-7 ring-1 ring-white/10',
        recommended && 'bg-surface2 ring-white/20 shadow-glow'
      )}
    >
      {recommended ? (
        <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-brand-700 px-3 py-1 text-xs font-medium text-white">
          <Sparkles size={14} />
          {t('pricing.recommended')}
        </div>
      ) : null}

      <h3 className="font-display text-2xl tracking-tight text-ink">{t(nameKey)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink2">{t(descKey)}</p>

      <div className="mt-6 flex items-end gap-2">
        <div className="font-display text-4xl tracking-tight text-ink">${amount}</div>
        <div className="pb-1 text-sm text-ink2">/{periodLabel}</div>
      </div>

      <div className="mt-6 grid gap-2 text-sm">
        {features.map((f) => (
          <div key={f.labelKey} className="flex items-start justify-between gap-4 rounded-xl bg-bg/50 px-4 py-3 ring-1 ring-white/10">
            <div className="text-ink2">{t(f.labelKey)}</div>
            <div className="flex items-center gap-2 text-ink">
              {t(f.valueKey) === '✗' ? (
                <X size={16} className="text-ink2" />
              ) : (
                <Check size={16} className="text-brand-600" />
              )}
              <span className="font-medium">{t(f.valueKey)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <PayPalButtonWrapper amount={amount} planName={t(nameKey)} />
        <div className="mt-3 text-xs text-ink2">{t('pricing.microcopy')}</div>
      </div>
    </div>
  )
}
