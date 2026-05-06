import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/utils/cn'
import { useLanguage } from '@/hooks/useLanguage'

export type ServiceCardProps = {
  id: string
  index: number
  titleKey: string
  descKey: string
  bulletsKeys: string[]
  ctaKey: string
}

export function ServiceCard({ id, index, titleKey, descKey, bulletsKeys, ctaKey }: ServiceCardProps) {
  const { t } = useLanguage()
  const imageByService: Record<string, string> = {
    strategy: '/estrategia_digital_fds.png',
    ads: '/publicidad_paga_fds.png',
    design: '/diseño_grafico_fds.png',
    seo: '/seo_optimizacion.png',
    social: '/marketing_en_redes_sociales.png',
    consulting: '/consultoria.png',
  }
  const imageSrc = imageByService[id] ?? '/estrategia_digital_fds.png'

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-surface p-7 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-surface2 hover:ring-white/20">
      <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full bg-brand-700/15 blur-2xl transition group-hover:bg-brand-700/25" />
      <div className="relative">
        <div className="mb-5 overflow-hidden rounded-xl ring-1 ring-white/10">
          <Image
            src={imageSrc}
            alt={t(titleKey)}
            width={960}
            height={600}
            className="h-32 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-medium tracking-[0.2em] text-ink2">{String(index).padStart(2, '0')}</div>
            <h3 className="mt-3 font-display text-xl tracking-tight text-ink">{t(titleKey)}</h3>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink2">{t(descKey)}</p>

        <ul className="mt-5 grid gap-2 text-sm text-ink">
          {bulletsKeys.map((k) => (
            <li key={k} className="flex items-start gap-2">
              <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700')} />
              <span className="text-ink2">{t(k)}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition group-hover:text-brand-700"
        >
          {t(ctaKey)}
          <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
