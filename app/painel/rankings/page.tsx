'use client'

import { motion } from 'framer-motion'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { DashboardSidebar } from '@/components/DashboardSidebar'
import { RankingTable } from '@/components/RankingTable'
import { Trophy } from 'lucide-react'

export default function RankingsPainelPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <DashboardSidebar>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              Rankings <span className="text-[#00D9FF]">Globais</span>
            </h1>
            <p className="text-white/60">Veja sua posição entre os melhores jogadores</p>
          </motion.div>

          <RankingTable showFull />
        </div>
      </DashboardSidebar>
    </main>
  )
}
