'use client'

import { motion } from 'framer-motion'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { DashboardSidebar } from '@/components/DashboardSidebar'
import { NeonCard } from '@/components/NeonCard'
import { GlowButton } from '@/components/GlowButton'
import { 
  User, 
  Swords, 
  Shield, 
  Clock, 
  MapPin, 
  Star,
  Settings
} from 'lucide-react'

const characters = [
  {
    id: 1,
    name: 'ShadowBlade',
    class: 'Assassino Cruz',
    level: 99,
    jobLevel: 70,
    guild: 'Immortals',
    online: true,
    lastSeen: 'Online agora',
    stats: { str: 120, agi: 99, vit: 50, int: 20, dex: 80, luk: 60 },
  },
  {
    id: 2,
    name: 'MysticWizard',
    class: 'Arquimago',
    level: 95,
    jobLevel: 65,
    guild: 'Arcane Order',
    online: false,
    lastSeen: 'Há 2 dias',
    stats: { str: 10, agi: 30, vit: 40, int: 130, dex: 99, luk: 20 },
  },
  {
    id: 3,
    name: 'HolyPriest',
    class: 'Arcebispo',
    level: 90,
    jobLevel: 60,
    guild: 'Divine Light',
    online: false,
    lastSeen: 'Há 5 dias',
    stats: { str: 10, agi: 30, vit: 99, int: 110, dex: 50, luk: 40 },
  },
]

export default function PersonagensPage() {
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
              Seus <span className="text-[#00D9FF]">Personagens</span>
            </h1>
            <p className="text-white/60">Gerencie seus personagens e veja suas estatísticas</p>
          </motion.div>

          <div className="grid gap-6">
            {characters.map((char, index) => (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NeonCard className="relative overflow-hidden">
                  {/* Status Badge */}
                  {char.online && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                        Online
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Character Info */}
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00D9FF]/20 to-[#7A00FF]/20 flex items-center justify-center text-3xl">
                        ⚔️
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{char.name}</h3>
                        <p className="text-[#00D9FF] text-sm mb-2">{char.class}</p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1 text-white/60">
                            <Star className="w-4 h-4" />
                            Lv. {char.level}/{char.jobLevel}
                          </span>
                          <span className="flex items-center gap-1 text-white/60">
                            <Shield className="w-4 h-4" />
                            {char.guild}
                          </span>
                          <span className="flex items-center gap-1 text-white/60">
                            <Clock className="w-4 h-4" />
                            {char.lastSeen}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex-1 grid grid-cols-3 md:grid-cols-6 gap-3">
                      {Object.entries(char.stats).map(([stat, value]) => (
                        <div
                          key={stat}
                          className="text-center p-3 rounded-xl bg-white/5 border border-white/10"
                        >
                          <div className="text-lg font-mono font-bold text-[#00D9FF]">{value}</div>
                          <div className="text-xs text-white/50 uppercase">{stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                    <GlowButton variant="accent" size="sm">
                      <Settings className="w-4 h-4" />
                      Configurar
                    </GlowButton>
                    <GlowButton variant="accent" size="sm">
                      <MapPin className="w-4 h-4" />
                      Localização
                    </GlowButton>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>
      </DashboardSidebar>
    </main>
  )
}
