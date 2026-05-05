'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { useLanguage } from '@/hooks/useLanguage'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/utils/cn'

type NavItem = {
  id: string
  labelKey: string
}

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const items = useMemo<NavItem[]>(() => {
    return [
      { id: 'services', labelKey: 'nav.services' },
      { id: 'process', labelKey: 'nav.process' },
      { id: 'pricing', labelKey: 'nav.pricing' },
      { id: 'results', labelKey: 'nav.results' },
      { id: 'testimonials', labelKey: 'nav.testimonials' },
      { id: 'about', labelKey: 'nav.about' },
      { id: 'faq', labelKey: 'nav.faq' },
    ]
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  function scrollTo(id: string) {
    if (pathname !== '/') {
      router.push(id === 'top' ? '/' : `/#${id}`)
      return
    }

    const el = document.getElementById(id)
    if (!el) {
      router.push(id === 'top' ? '/' : `/#${id}`)
      return
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-white/10',
        scrolled ? 'bg-bg/65 backdrop-blur supports-[backdrop-filter]:bg-bg/45' : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('top')
          }}
          className="flex items-center gap-3"
        >
          <Image
            src="/cropped-FDS-Transparente-2-3-300x190.webp"
            alt="Feng Digital Services"
            width={170}
            height={108}
            priority
            className="h-12 w-auto md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {items.map((it) => (
            <button
              key={it.id}
              className="text-sm text-ink2 transition hover:text-ink"
              onClick={() => scrollTo(it.id)}
              type="button"
            >
              {t(it.labelKey)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="hidden items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-ink ring-1 ring-white/10 transition hover:bg-brand-700/15 hover:text-white md:flex"
            aria-label="Language"
          >
            <span className="text-base leading-none">{lang === 'es' ? '🇪🇸' : '🇺🇸'}</span>
            <span className="font-medium tracking-wide">{lang.toUpperCase()}</span>
          </button>
          <Button
            className="hidden md:inline-flex"
            onClick={() => scrollTo('contact')}
            type="button"
          >
            {t('nav.cta')}
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink ring-1 ring-white/10 transition hover:bg-brand-700/15 hover:text-white md:hidden"
            aria-label="Menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/70 backdrop-blur"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '6%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '6%', opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-surface shadow-glow"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="text-sm font-medium text-ink2">Feng Digital Services</div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink ring-1 ring-white/10"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLang('es')}
                    className={cn(
                      'flex-1 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 transition',
                      lang === 'es' ? 'bg-white/10 text-ink' : 'bg-white/5 text-ink2 hover:bg-white/8'
                    )}
                  >
                    🇪🇸 ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={cn(
                      'flex-1 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 transition',
                      lang === 'en' ? 'bg-white/10 text-ink' : 'bg-white/5 text-ink2 hover:bg-white/8'
                    )}
                  >
                    🇺🇸 EN
                  </button>
                </div>

                <div className="mt-6 grid gap-2">
                  {items.map((it) => (
                    <button
                      key={it.id}
                      type="button"
                      className="rounded-xl bg-white/5 px-4 py-3 text-left text-base text-ink ring-1 ring-white/10 hover:bg-white/8"
                      onClick={() => {
                        setOpen(false)
                        scrollTo(it.id)
                      }}
                    >
                      {t(it.labelKey)}
                    </button>
                  ))}
                </div>

                <Button
                  className="mt-6 w-full"
                  onClick={() => {
                    setOpen(false)
                    scrollTo('contact')
                  }}
                  type="button"
                >
                  {t('nav.cta')}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
