'use client'

import { motion } from 'framer-motion'
import { Topbar } from '@/components/Topbar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { NeonCard } from '@/components/NeonCard'
import { GlowButton } from '@/components/GlowButton'
import { 
  MessageCircle, 
  Users, 
  Mic, 
  Headphones,
  Hash,
  Bell,
  ExternalLink,
  Star,
  Shield,
  HelpCircle
} from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'

const serverStats = [
  { label: 'Membros', value: '5,420', icon: Users },
  { label: 'Online Agora', value: '342', icon: Mic },
  { label: 'Canais de Texto', value: '15', icon: Hash },
  { label: 'Canais de Voz', value: '8', icon: Headphones },
]

const channels = [
  { name: 'geral', description: 'Chat geral da comunidade', icon: MessageCircle, members: 892 },
  { name: 'suporte', description: 'Tire suas dúvidas com a staff', icon: HelpCircle, members: 234 },
  { name: 'anúncios', description: 'Novidades e atualizações', icon: Bell, members: 5420 },
  { name: 'trade', description: 'Compra e venda de itens', icon: Star, members: 567 },
  { name: 'recrutamento', description: 'Encontre uma guilda', icon: Shield, members: 345 },
]

const features = [
  'Suporte em tempo real com a staff',
  'Notificações de eventos e atualizações',
  'Comunidade ativa 24/7',
  'Canais de voz para party e WoE',
  'Sorteios exclusivos para membros',
  'Acesso antecipado a novidades',
]

export default function DiscordPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <Topbar />
      <Navbar />
      
      <section className="relative pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 mb-6">
              <FaDiscord className="w-4 h-4 text-[#5865F2]" />
              <span className="text-[#5865F2] text-sm font-medium">Comunidade Oficial</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              Junte-se ao nosso <span className="text-[#5865F2]">Discord</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Conecte-se com milhares de jogadores, participe de eventos exclusivos
              e receba suporte em tempo real
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <NeonCard className="relative overflow-hidden" glowColor="purple">
              {/* Discord Banner */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#5865F2] to-[#7A00FF] opacity-30" />
              
              <div className="relative pt-16">
                {/* Server Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00D9FF] to-[#7A00FF] flex items-center justify-center shadow-2xl">
                    <span className="font-mono text-3xl font-bold text-white">U</span>
                  </div>
                </div>

                {/* Server Name */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-serif font-bold text-white mb-2">UnikRO Community</h2>
                  <p className="text-white/60">Servidor Oficial do UnikRO</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {serverStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#5865F2]" />
                      <div className="text-xl font-mono font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Join Button */}
                <div className="flex justify-center">
                  <GlowButton
                    href="https://discord.gg/unikro"
                    variant="secondary"
                    size="lg"
                    className="bg-[#5865F2] hover:bg-[#4752C4]"
                  >
                    <FaDiscord className="w-6 h-6" />
                    ENTRAR NO DISCORD
                    <ExternalLink className="w-5 h-5" />
                  </GlowButton>
                </div>
              </div>
            </NeonCard>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Channels Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <NeonCard>
                <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Hash className="w-5 h-5 text-[#5865F2]" />
                  Canais Populares
                </h3>

                <div className="space-y-3">
                  {channels.map((channel, index) => (
                    <motion.div
                      key={channel.name}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#5865F2]/30 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#5865F2]/10 flex items-center justify-center">
                        <channel.icon className="w-5 h-5 text-[#5865F2]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">#{channel.name}</div>
                        <div className="text-xs text-white/50">{channel.description}</div>
                      </div>
                      <div className="text-xs text-white/40">
                        {channel.members} membros
                      </div>
                    </motion.div>
                  ))}
                </div>
              </NeonCard>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <NeonCard>
                <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#00D9FF]" />
                  Benefícios
                </h3>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#00D9FF]" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20">
                  <p className="text-sm text-white/70 text-center">
                    <span className="text-[#5865F2] font-semibold">+5.000</span> jogadores já fazem parte da nossa comunidade!
                  </p>
                </div>
              </NeonCard>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
