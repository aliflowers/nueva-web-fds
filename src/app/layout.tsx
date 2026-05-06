import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'

import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored === 'light' || stored === 'dark'
                    ? stored
                    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg font-sans text-ink" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
