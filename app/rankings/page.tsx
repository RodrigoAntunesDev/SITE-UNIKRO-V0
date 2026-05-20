'use client'

import { motion } from 'framer-motion'
import { Topbar } from '@/components/Topbar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { RankingTable } from '@/components/RankingTable'
import { Trophy } from 'lucide-react'

export default function RankingsPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
              <Trophy className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[#00D9FF] text-sm font-medium">Competição</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              Rankings <span className="text-[#00D9FF]">Globais</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Confira os melhores jogadores do servidor em diferentes categorias.
              Lute pelo topo e eternize seu nome em Midgard!
            </p>
          </motion.div>

          {/* Full Rankings */}
          <RankingTable showFull />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
