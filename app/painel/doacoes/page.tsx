'use client'

import { motion } from 'framer-motion'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { DashboardSidebar } from '@/components/DashboardSidebar'
import { NeonCard } from '@/components/NeonCard'
import { GlowButton } from '@/components/GlowButton'
import { 
  Coins, 
  Calendar, 
  CreditCard, 
  CheckCircle,
  Clock,
  Gift,
  Plus
} from 'lucide-react'

const donations = [
  {
    id: 1,
    date: '2024-01-15',
    amount: 100,
    cash: 1100,
    method: 'Pix',
    status: 'completed',
    bonus: '10%',
  },
  {
    id: 2,
    date: '2024-01-10',
    amount: 50,
    cash: 525,
    method: 'Mercado Pago',
    status: 'completed',
    bonus: '5%',
  },
  {
    id: 3,
    date: '2024-01-05',
    amount: 200,
    cash: 2400,
    method: 'Pix',
    status: 'completed',
    bonus: '20%',
  },
  {
    id: 4,
    date: '2024-01-01',
    amount: 150,
    cash: 1650,
    method: 'Cartão',
    status: 'completed',
    bonus: '10%',
  },
]

const totalDonated = donations.reduce((acc, d) => acc + d.amount, 0)
const totalCash = donations.reduce((acc, d) => acc + d.cash, 0)

export default function DoacoesPainelPage() {
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
              Histórico de <span className="text-[#00D9FF]">Doações</span>
            </h1>
            <p className="text-white/60">Veja todas as suas contribuições e recargas de cash</p>
          </motion.div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <NeonCard className="text-center">
                <Coins className="w-8 h-8 mx-auto mb-2 text-[#00D9FF]" />
                <div className="text-2xl font-mono font-bold text-white">
                  {totalCash.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm text-white/60">Cash Total</div>
              </NeonCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <NeonCard className="text-center">
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-[#00ff88]" />
                <div className="text-2xl font-mono font-bold text-white">
                  R$ {totalDonated}
                </div>
                <div className="text-sm text-white/60">Total Doado</div>
              </NeonCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <NeonCard className="text-center">
                <Gift className="w-8 h-8 mx-auto mb-2 text-[#7A00FF]" />
                <div className="text-2xl font-mono font-bold text-white">
                  {donations.length}
                </div>
                <div className="text-sm text-white/60">Transações</div>
              </NeonCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <NeonCard className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-[#B026FF]" />
                <div className="text-lg font-bold text-white">VIP</div>
                <div className="text-sm text-white/60">30 dias restantes</div>
              </NeonCard>
            </motion.div>
          </div>

          {/* Quick Recharge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <NeonCard>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Recarregar Cash</h3>
                  <p className="text-white/60 text-sm">Faça uma nova recarga e ganhe bônus</p>
                </div>
                <GlowButton href="/doacoes" variant="primary">
                  <Plus className="w-5 h-5" />
                  Nova Recarga
                </GlowButton>
              </div>
            </NeonCard>
          </motion.div>

          {/* Transactions List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <NeonCard>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00D9FF]" />
                Transações Recentes
              </h3>

              <div className="space-y-4">
                {donations.map((donation, index) => (
                  <motion.div
                    key={donation.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">R$ {donation.amount}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#00ff88]/10 text-[#00ff88]">
                          +{donation.bonus} bônus
                        </span>
                      </div>
                      <div className="text-sm text-white/50">
                        {donation.method} • {new Date(donation.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-mono font-bold text-[#00D9FF]">
                        +{donation.cash.toLocaleString('pt-BR')}
                      </div>
                      <div className="text-xs text-white/50">Cash</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </NeonCard>
          </motion.div>
        </div>
      </DashboardSidebar>
    </main>
  )
}
