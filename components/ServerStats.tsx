'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NeonCard } from './NeonCard'
import { Users, UserPlus, Swords, Shield } from 'lucide-react'

interface Stat {
  label: string
  value: number
  suffix?: string
  icon: React.ElementType
  color: string
}

const stats: Stat[] = [
  { label: 'Jogadores Online', value: 1247, icon: Users, color: '#00D9FF' },
  { label: 'Contas Registradas', value: 45892, icon: UserPlus, color: '#7A00FF' },
  { label: 'Personagens', value: 89234, icon: Swords, color: '#B026FF' },
  { label: 'Guildas', value: 342, icon: Shield, color: '#00ff88' },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * value))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count.toLocaleString('pt-BR')}</span>
}

export function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <NeonCard className="text-center group">
        <div
          className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ 
            backgroundColor: `${stat.color}15`,
            boxShadow: `0 0 30px ${stat.color}20`
          }}
        >
          <Icon className="w-8 h-8" style={{ color: stat.color }} />
        </div>
        <div className="text-4xl font-mono font-bold mb-2" style={{ color: stat.color }}>
          <AnimatedCounter value={stat.value} />
          {stat.suffix}
        </div>
        <div className="text-white/60 font-medium">{stat.label}</div>
      </NeonCard>
    </motion.div>
  )
}

export function ServerStats() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Estatísticas do <span className="text-[#00D9FF]">Servidor</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Junte-se a milhares de jogadores em uma comunidade ativa e vibrante
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
