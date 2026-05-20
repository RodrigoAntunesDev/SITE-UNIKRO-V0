'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NeonCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'blue' | 'purple' | 'accent'
  hover?: boolean
}

export function NeonCard({
  children,
  className,
  glowColor = 'blue',
  hover = true,
}: NeonCardProps) {
  const glowColors = {
    blue: 'hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] border-[#00D9FF]/20 hover:border-[#00D9FF]/50',
    purple: 'hover:shadow-[0_0_30px_rgba(122,0,255,0.3)] border-[#7A00FF]/20 hover:border-[#7A00FF]/50',
    accent: 'hover:shadow-[0_0_30px_rgba(176,38,255,0.3)] border-[#B026FF]/20 hover:border-[#B026FF]/50',
  }

  return (
    <motion.div
      className={cn(
        'relative rounded-xl p-6 transition-all duration-300',
        'bg-[rgba(15,15,30,0.85)] backdrop-blur-xl border',
        hover && glowColors[glowColor],
        className
      )}
      whileHover={hover ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
