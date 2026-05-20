'use client'

import { motion } from 'framer-motion'
import { NeonCard } from './NeonCard'
import { GlowButton } from './GlowButton'
import { Check, Crown, Star, Sparkles } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface FounderPack {
  id: string
  name: string
  price: number
  available: number
  total: number
  tier: 'bronze' | 'elite'
  rewards: string[]
  featured?: boolean
}

const founderPacks: FounderPack[] = [
  {
    id: 'bronze',
    name: 'Founder Bronze',
    price: 100,
    available: 72,
    total: 100,
    tier: 'bronze',
    rewards: [
      'Visual exclusivo de Fundador',
      'Ticket VIP de 30 dias',
      'Aura especial Bronze',
      '1.000 Moedas Premium',
      'Título exclusivo "Fundador"',
      'Acesso antecipado a eventos',
    ],
  },
  {
    id: 'elite',
    name: 'Founder Elite',
    price: 150,
    available: 45,
    total: 100,
    tier: 'elite',
    featured: true,
    rewards: [
      'Todos benefícios do Bronze',
      'Montaria exclusiva Elite',
      'Nome colorido especial',
      'Efeito premium de aura',
      '3.000 Moedas Premium',
      'Pet exclusivo Elite',
      'Prioridade no suporte',
      'Badge Elite permanente',
    ],
  },
]

function FounderPackCard({ pack, index }: { pack: FounderPack; index: number }) {
  const tierColors = {
    bronze: {
      gradient: 'from-amber-600 to-amber-800',
      glow: 'rgba(217, 119, 6, 0.4)',
      text: '#d97706',
      border: 'border-amber-600/30',
    },
    elite: {
      gradient: 'from-[#7A00FF] to-[#B026FF]',
      glow: 'rgba(122, 0, 255, 0.4)',
      text: '#B026FF',
      border: 'border-[#7A00FF]/30',
    },
  }

  const colors = tierColors[pack.tier]
  const availablePercent = (pack.available / pack.total) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {pack.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 bg-gradient-to-r from-[#7A00FF] to-[#B026FF] rounded-full text-xs font-bold text-white uppercase tracking-wider">
            Mais Popular
          </span>
        </div>
      )}
      
      <NeonCard
        className={`relative overflow-hidden ${pack.featured ? 'ring-2 ring-[#7A00FF]/50' : ''}`}
        glowColor={pack.tier === 'elite' ? 'purple' : 'blue'}
      >
        {/* Animated Border */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(45deg, transparent 40%, ${colors.glow} 50%, transparent 60%)`,
            backgroundSize: '200% 200%',
            animation: 'shimmer 3s infinite',
          }}
        />

        {/* Header */}
        <div className="relative text-center mb-6">
          <div
            className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}
            style={{ boxShadow: `0 0 40px ${colors.glow}` }}
          >
            {pack.tier === 'elite' ? (
              <Crown className="w-10 h-10 text-white" />
            ) : (
              <Star className="w-10 h-10 text-white" />
            )}
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">{pack.name}</h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-sm text-white/60">R$</span>
            <span className="text-4xl font-mono font-bold" style={{ color: colors.text }}>
              {pack.price}
            </span>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white/60">Disponíveis</span>
            <span style={{ color: colors.text }} className="font-semibold">
              {pack.available}/{pack.total}
            </span>
          </div>
          <Progress value={availablePercent} className="h-2 bg-white/10" />
        </div>

        {/* Rewards */}
        <ul className="space-y-3 mb-8">
          {pack.rewards.map((reward, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.text }} />
              <span className="text-white/80 text-sm">{reward}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <GlowButton
          href="/doacoes"
          variant={pack.tier === 'elite' ? 'secondary' : 'primary'}
          size="lg"
          className="w-full justify-center"
        >
          <Sparkles className="w-5 h-5" />
          ADQUIRIR AGORA
        </GlowButton>
      </NeonCard>
    </motion.div>
  )
}

export function FounderPacks({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="relative py-12">
      <div className="max-w-5xl mx-auto px-4">
        {showHeader && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A00FF]/10 border border-[#7A00FF]/30 mb-6">
              <Crown className="w-4 h-4 text-[#B026FF]" />
              <span className="text-[#B026FF] text-sm font-medium">Edição Limitada</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Pacotes <span className="text-[#B026FF]">Fundador</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Garanta seu lugar na história do UnikRO com benefícios exclusivos
              disponíveis apenas para os primeiros fundadores
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {founderPacks.map((pack, index) => (
            <FounderPackCard key={pack.id} pack={pack} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
