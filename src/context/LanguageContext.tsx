'use client'

import React, { createContext, useEffect, useMemo, useState } from 'react'

import en from '@/i18n/en.json'
import es from '@/i18n/es.json'

export type Language = 'es' | 'en'

type Dictionary = Record<string, string>

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

const dictionaries: Record<Language, Dictionary> = {
  en,
  es,
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem('lang')
  if (stored === 'es' || stored === 'en') return stored
  const fromNavigator = window.navigator.language?.toLowerCase() ?? ''
  return fromNavigator.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('es')

  useEffect(() => {
    setLang(getInitialLanguage())
  }, [])

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    return {
      lang,
      setLang,
      t: (key: string) => dictionaries[lang][key] ?? key,
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

