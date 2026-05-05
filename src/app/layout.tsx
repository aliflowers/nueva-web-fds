import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'

import { LanguageProvider } from '@/context/LanguageContext'

import './globals.css'

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const fontDisplay = Syne({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Feng Digital Services',
  description: 'Premium digital marketing, design, SEO and paid media.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fontSans.variable} ${fontDisplay.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg font-sans text-ink" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
