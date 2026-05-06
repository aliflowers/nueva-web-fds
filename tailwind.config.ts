import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        ink: 'var(--ink)',
        ink2: 'var(--ink2)',
        brand: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.55)',
        soft: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        xl: '1.25rem'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config
