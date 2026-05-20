'use client'

import { motion } from 'framer-motion'
import { NeonCard } from './NeonCard'
import { 
  Users, 
  Coins, 
  Clock, 
  Trophy, 
  Activity,
  TrendingUp,
  Calendar,
  Gamepad2
} from 'lucide-react'

const stats = [
  { label: 'Personagens', value: '5', icon: Users, color: '#00D9FF' },
  { label: 'Cash', value: '12,500', icon: Coins, color: '#00ff88' },
  { label: 'Tempo de Jogo', value: '234h', icon: Clock, color: '#7A00FF' },
  { label: 'Ranking PvP', value: '#47', icon: Trophy, color: '#B026FF' },
]

const recentActivity = [
  { action: 'Login realizado', time: 'Há 5 minutos', icon: Activity },
  { action: 'Doação de R$100', time: 'Há 2 dias', icon: Coins },
  { action: 'Personagem criado: Wizard', time: 'Há 5 dias', icon: Users },
  { action: 'Conquista desbloqueada', time: 'Há 1 semana', icon: Trophy },
]

const characters = [
  { name: 'ShadowBlade', class: 'Assassino Cruz', level: 99, online: true },
  { name: 'MysticWizard', class: 'Arquimago', level: 95, online: false },
  { name: 'HolyPriest', class: 'Arcebispo', level: 90, online: false },
]

export function DashboardStats() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-serif font-bold text-white mb-2">
          Bem-vindo, <span className="text-[#00D9FF]">ShadowBlade</span>
        </h1>
        <p className="text-white/60">Aqui está um resumo da sua conta</p>
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
              <div className="text-sm text-white/60">{stat.label}</div>
            </NeonCard>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Characters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <NeonCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Seus Personagens</h3>
            </div>

            <div className="space-y-3">
              {characters.map((char, index) => (
                <motion.div
                  key={char.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#7A00FF]/20 flex items-center justify-center">
                    <span className="text-xl">⚔️</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{char.name}</span>
                      {char.online && (
                        <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                      )}
                    </div>
                    <div className="text-sm text-white/50">
                      {char.class} • Lv. {char.level}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </NeonCard>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <NeonCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#7A00FF]/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#7A00FF]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Atividade Recente</h3>
            </div>

            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white/40" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm">{item.action}</div>
                    <div className="text-xs text-white/40">{item.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </NeonCard>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <NeonCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#B026FF]/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#B026FF]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Ações Rápidas</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Recarregar Cash', icon: Coins, color: '#00ff88' },
              { label: 'Ver Rankings', icon: Trophy, color: '#00D9FF' },
              { label: 'Download', icon: Activity, color: '#7A00FF' },
              { label: 'Suporte', icon: Users, color: '#B026FF' },
            ].map((action, index) => (
              <motion.button
                key={action.label}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${action.color}15` }}
                >
                  <action.icon className="w-5 h-5" style={{ color: action.color }} />
                </div>
                <span className="text-sm text-white/80">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </NeonCard>
      </motion.div>
    </div>
  )
}
