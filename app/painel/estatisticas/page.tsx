'use client'

import { motion } from 'framer-motion'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { DashboardSidebar } from '@/components/DashboardSidebar'
import { NeonCard } from '@/components/NeonCard'
import { 
  BarChart3, 
  Clock, 
  Swords, 
  Coins,
  TrendingUp,
  Calendar
} from 'lucide-react'

const weeklyStats = [
  { day: 'Seg', hours: 4 },
  { day: 'Ter', hours: 6 },
  { day: 'Qua', hours: 8 },
  { day: 'Qui', hours: 5 },
  { day: 'Sex', hours: 7 },
  { day: 'Sáb', hours: 12 },
  { day: 'Dom', hours: 10 },
]

const maxHours = Math.max(...weeklyStats.map(s => s.hours))

const stats = [
  { label: 'Total de Horas', value: '234h', change: '+12h', icon: Clock, color: '#00D9FF' },
  { label: 'Kills PvP', value: '1,247', change: '+89', icon: Swords, color: '#7A00FF' },
  { label: 'Zeny Farmado', value: '45M', change: '+5M', icon: Coins, color: '#00ff88' },
  { label: 'MVPs Mortos', value: '89', change: '+7', icon: TrendingUp, color: '#B026FF' },
]

export default function EstatisticasPage() {
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
              Suas <span className="text-[#00D9FF]">Estatísticas</span>
            </h1>
            <p className="text-white/60">Acompanhe seu progresso e desempenho</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NeonCard className="text-center">
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-mono font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 mb-2">{stat.label}</div>
                  <div className="text-xs text-[#00ff88]">{stat.change} esta semana</div>
                </NeonCard>
              </motion.div>
            ))}
          </div>

          {/* Weekly Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <NeonCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Tempo de Jogo Semanal</h3>
                  <p className="text-sm text-white/60">Horas jogadas por dia</p>
                </div>
              </div>

              {/* Simple Bar Chart */}
              <div className="flex items-end justify-between gap-3 h-48">
                {weeklyStats.map((stat, index) => (
                  <motion.div
                    key={stat.day}
                    className="flex-1 flex flex-col items-center gap-2"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-sm text-white/60">{stat.hours}h</div>
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-[#00D9FF] to-[#7A00FF] transition-all duration-500"
                      style={{ height: `${(stat.hours / maxHours) * 100}%` }}
                    />
                    <div className="text-xs text-white/50">{stat.day}</div>
                  </motion.div>
                ))}
              </div>
            </NeonCard>
          </motion.div>

          {/* Activity Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <NeonCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#7A00FF]/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#7A00FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Resumo de Atividade</h3>
                  <p className="text-sm text-white/60">Últimos 30 dias</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Quests Completadas', value: 47 },
                  { label: 'Dungeons', value: 23 },
                  { label: 'WoE Participações', value: 8 },
                  { label: 'Eventos', value: 12 },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <div className="text-2xl font-mono font-bold text-white mb-1">{item.value}</div>
                    <div className="text-xs text-white/50">{item.label}</div>
                  </div>
                ))}
              </div>
            </NeonCard>
          </motion.div>
        </div>
      </DashboardSidebar>
    </main>
  )
}
