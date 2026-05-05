import { Star } from 'lucide-react'

import { cn } from '@/utils/cn'
import { useLanguage } from '@/hooks/useLanguage'

export type TestimonialCardProps = {
  quoteKey: string
  name: string
  role: string
  country: string
}

export function TestimonialCard({ quoteKey, name, role, country }: TestimonialCardProps) {
  const { t } = useLanguage()

  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()

  return (
    <div className="group rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/7 hover:ring-white/20">
      <div className="flex items-center gap-1 text-brand-600">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink">“{t(quoteKey)}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700/20 text-sm font-semibold text-ink ring-1 ring-white/10 transition group-hover:bg-brand-700/30'
          )}
        >
          {initials}
        </div>
        <div>
          <div className="text-sm font-medium text-ink">{name}</div>
          <div className="text-xs text-ink2">
            {role} · {country}
          </div>
        </div>
      </div>
    </div>
  )
}
