"use client"

import Image from 'next/image'
import { Link2, PlayCircle, Share2, Users } from 'lucide-react'

import { Container } from '@/components/ui/Container'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/cn'

export function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const logoSrc = isLight ? '/FDS%20transparente.png' : '/cropped-FDS-Transparente-2-3-300x190.webp'
  const logoWrapClass = 'relative h-14 w-[170px] overflow-hidden'
  const logoClass = cn(
    'h-full w-full origin-left object-contain',
    isLight ? 'scale-[1.4]' : 'scale-100'
  )

  return (
    <footer className="border-t border-white/10 bg-surface">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className={cn('flex items-center', logoWrapClass)}>
              <Image
                src={logoSrc}
                alt="Feng Digital Services"
                width={188}
                height={119}
                className={logoClass}
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink2">{t('footer.desc')}</p>
            <div className="mt-6 flex items-center gap-3">
              <a className="rounded-xl bg-white/5 p-2 text-ink2 ring-1 ring-white/10 hover:bg-white/8 hover:text-ink" href="#" aria-label="Instagram">
                <Share2 size={18} />
              </a>
              <a className="rounded-xl bg-white/5 p-2 text-ink2 ring-1 ring-white/10 hover:bg-white/8 hover:text-ink" href="#" aria-label="Facebook">
                <Users size={18} />
              </a>
              <a className="rounded-xl bg-white/5 p-2 text-ink2 ring-1 ring-white/10 hover:bg-white/8 hover:text-ink" href="#" aria-label="LinkedIn">
                <Link2 size={18} />
              </a>
              <a className="rounded-xl bg-white/5 p-2 text-ink2 ring-1 ring-white/10 hover:bg-white/8 hover:text-ink" href="#" aria-label="YouTube">
                <PlayCircle size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-10 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-sm font-medium text-ink">{t('footer.services')}</div>
              <div className="mt-4 grid gap-2 text-sm text-ink2">
                <a href="/#services" className="hover:text-ink">{t('nav.services')}</a>
                <a href="/#pricing" className="hover:text-ink">{t('nav.pricing')}</a>
                <a href="/#results" className="hover:text-ink">{t('nav.results')}</a>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-ink">{t('footer.company')}</div>
              <div className="mt-4 grid gap-2 text-sm text-ink2">
                <a href="/#about" className="hover:text-ink">{t('nav.about')}</a>
                <a href="/#faq" className="hover:text-ink">{t('nav.faq')}</a>
                <a href="/privacy-policy" className="hover:text-ink">{t('footer.privacy')}</a>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-ink">{t('footer.contact')}</div>
              <div className="mt-4 grid gap-2 text-sm text-ink2">
                <div>{t('footer.address')}</div>
                <a className="hover:text-ink" href="mailto:contact_us@fengdigitalservices.com">
                  {t('footer.email')}
                </a>
                <a className="hover:text-ink" href="tel:+17867063986">
                  {t('footer.phone')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-ink2">{t('footer.copyright')}</div>
      </Container>
    </footer>
  )
}
