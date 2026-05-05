'use client'

import { cn } from '@/utils/cn'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-brand-600/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-11 px-4 text-sm',
        size === 'lg' && 'h-12 px-5 text-base',
        variant === 'primary' && 'bg-brand-700 text-white hover:bg-brand-600 shadow-soft',
        variant === 'secondary' && 'bg-white/5 text-ink ring-1 ring-white/10 hover:bg-white/8',
        variant === 'ghost' && 'bg-transparent text-ink hover:bg-white/5',
        className
      )}
      {...props}
    />
  )
}

