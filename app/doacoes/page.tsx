'use client'

import { motion } from 'framer-motion'
import { Topbar } from '@/components/Topbar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { FounderPacks } from '@/components/FounderPacks'
import { DonationPanel } from '@/components/DonationPanel'
import { Coins, Crown, Gift } from 'lucide-react'

export default function DoacoesPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <Topbar />
      <Navbar />
      
      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A00FF]/10 border border-[#7A00FF]/30 mb-6">
              <Coins className="w-4 h-4 text-[#B026FF]" />
              <span className="text-[#B026FF] text-sm font-medium">Cash Shop</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              Loja de <span className="text-[#B026FF]">Doações</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Apoie o servidor e ganhe benefícios exclusivos. Sua doação ajuda a manter
              o UnikRO online e com atualizações constantes.
            </p>
          </motion.div>

          {/* Founder Packs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A00FF]/10 border border-[#7A00FF]/30 mb-4">
                <Crown className="w-4 h-4 text-[#B026FF]" />
                <span className="text-[#B026FF] text-sm font-medium">Edição Limitada</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Pacotes <span className="text-[#B026FF]">Fundador</span>
              </h2>
              <p className="text-white/60">
                Garanta seu lugar na história do UnikRO com benefícios exclusivos
              </p>
            </div>
            <FounderPacks showHeader={false} />
          </motion.div>

          {/* Divider */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#00D9FF]/20" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-6 py-2 bg-[#050816] text-white/60 text-sm flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#00D9FF]" />
                ou faça uma recarga personalizada
              </span>
            </div>
          </div>

          {/* Cash Recharge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Recarga de <span className="text-[#00D9FF]">Cash</span>
              </h2>
              <p className="text-white/60">
                Escolha o valor que deseja recarregar e aproveite os bônus
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <DonationPanel />
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
