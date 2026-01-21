'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'intro'
}

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
  intro: 'w-32 h-32 text-4xl md:w-40 md:h-40 md:text-5xl',
}

export function Logo({ className, size = 'md' }: LogoProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg bg-accent font-bold text-primary',
        sizeClasses[size],
        className
      )}
    >
      <span className="tracking-tight">DD</span>
    </div>
  )
}
