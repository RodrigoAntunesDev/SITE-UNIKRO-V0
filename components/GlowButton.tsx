'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  type = 'button',
}: GlowButtonProps) {
  const variants = {
    primary: {
      bg: 'bg-gradient-to-r from-[#00D9FF] to-[#00D9FF]',
      glow: 'hover:shadow-[0_0_30px_rgba(0,217,255,0.6)]',
      text: 'text-[#050816]',
      border: 'border-[#00D9FF]',
    },
    secondary: {
      bg: 'bg-gradient-to-r from-[#7A00FF] to-[#B026FF]',
      glow: 'hover:shadow-[0_0_30px_rgba(122,0,255,0.6)]',
      text: 'text-white',
      border: 'border-[#7A00FF]',
    },
    accent: {
      bg: 'bg-transparent border-2',
      glow: 'hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]',
      text: 'text-[#00D9FF]',
      border: 'border-[#00D9FF]',
    },
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const style = variants[variant]
  const sizeStyle = sizes[size]

  const buttonContent = (
    <motion.span
      className={cn(
        'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300',
        style.bg,
        style.glow,
        style.text,
        style.border,
        sizeStyle,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  )

  if (href && !disabled) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} type={type} className="inline-block">
      {buttonContent}
    </button>
  )
}
