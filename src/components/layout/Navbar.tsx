'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MoonStar, Sun, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/utils/cn'

type NavItem = {
  id: string
  labelKey: string
}

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
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

  const isLight = theme === 'light'
  const logoSrc = isLight ? '/FDS%20transparente.png' : '/cropped-FDS-Transparente-2-3-300x190.webp'
  const logoWrapClass = 'relative h-12 w-[112px] shrink-0 overflow-hidden md:h-14 md:w-[170px]'
  const logoClass = cn(
    'h-full w-full origin-left object-contain',
    isLight ? 'scale-[1.45] md:scale-[1.4]' : 'scale-100'
  )
  const headerButtonClass =
    isLight
      ? 'bg-ink text-bg ring-1 ring-ink/20 hover:bg-ink2 hover:text-bg'
      : 'bg-white/5 text-ink ring-1 ring-white/10 hover:bg-brand-700/15 hover:text-white'

  return (
    <>
      <header
      className={cn(
        'sticky top-0 z-[70] border-b border-white/10',
        scrolled ? 'bg-bg/65 backdrop-blur supports-[backdrop-filter]:bg-bg/45' : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-2 md:gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('top')
          }}
          className={cn('flex items-center', logoWrapClass)}
        >
          <Image
            src={logoSrc}
            alt="Feng Digital Services"
            width={170}
            height={108}
            priority
            className={logoClass}
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
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
            onClick={toggleTheme}
            className={cn('hidden items-center gap-2 rounded-xl px-3 py-2 text-sm transition lg:flex', headerButtonClass)}
            aria-label={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
            title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
          >
            {theme === 'dark' ? <Sun size={16} /> : <MoonStar size={16} />}
            <span className="font-medium tracking-wide">{theme === 'dark' ? t('theme.light') : t('theme.dark')}</span>
          </button>

          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className={cn('hidden items-center gap-2 rounded-xl px-3 py-2 text-sm transition lg:flex', headerButtonClass)}
            aria-label="Language"
          >
            <span className="text-base leading-none">{lang === 'es' ? '🇪🇸' : '🇺🇸'}</span>
            <span className="font-medium tracking-wide">{lang.toUpperCase()}</span>
          </button>
          <Button
            className="hidden lg:inline-flex"
            onClick={() => scrollTo('contact')}
            type="button"
            variant={theme === 'light' ? 'secondary' : 'primary'}
          >
            {t('nav.cta')}
          </Button>

          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden',
              headerButtonClass
            )}
            aria-label="Menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </Container>

      </header>

      <AnimatePresence>
        {open ? (
          <div className="fixed inset-0 z-[90] lg:hidden">
            <motion.button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/70 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '6%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '6%', opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-white/10 bg-surface shadow-glow opacity-100 sm:w-[86%] sm:max-w-sm"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <div className="text-sm font-medium text-ink2">Feng Digital Services</div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink ring-1 ring-white/10"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-4 py-5">
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setLang('es')}
                    className={cn(
                      'rounded-xl px-3 py-2 text-sm ring-1 transition',
                      lang === 'es'
                        ? 'bg-ink text-bg ring-ink/20'
                        : 'bg-surface2 text-ink2 ring-white/10 hover:bg-white/8'
                    )}
                  >
                    🇪🇸 ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={cn(
                      'rounded-xl px-3 py-2 text-sm ring-1 transition',
                      lang === 'en'
                        ? 'bg-ink text-bg ring-ink/20'
                        : 'bg-surface2 text-ink2 ring-white/10 hover:bg-white/8'
                    )}
                  >
                    🇺🇸 EN
                  </button>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={cn(
                      'inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 transition',
                      isLight
                        ? 'bg-surface2 text-ink ring-white/10 hover:bg-ink hover:text-bg'
                        : 'bg-white/5 text-ink ring-white/10 hover:bg-white/8'
                    )}
                    aria-label={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
                    title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <MoonStar size={16} />}
                  </button>
                </div>

                <div className="mt-6 grid gap-2">
                  {items.map((it) => (
                    <button
                      key={it.id}
                      type="button"
                      className={cn(
                        'rounded-xl px-4 py-3 text-left text-base ring-1',
                        isLight
                          ? 'bg-surface2 text-ink ring-white/10 hover:bg-ink hover:text-bg'
                          : 'bg-white/5 text-ink ring-white/10 hover:bg-white/8'
                      )}
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
                  variant={isLight ? 'secondary' : 'primary'}
                >
                  {t('nav.cta')}
                </Button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
