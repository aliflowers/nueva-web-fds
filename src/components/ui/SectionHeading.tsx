import { cn } from '@/utils/cn'

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="text-xs font-medium tracking-[0.2em] text-ink2">{eyebrow}</div>
      ) : null}
      <h2 className={cn('mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl')}>{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-ink2">{subtitle}</p> : null}
    </div>
  )
}

