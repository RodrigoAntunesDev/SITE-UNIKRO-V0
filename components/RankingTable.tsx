'use client'

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NeonCard } from './NeonCard'
import { Crown, Swords, Coins, Medal, Trophy, Star } from 'lucide-react'

interface RankingPlayer {
  position: number
  name: string
  class: string
  guild: string
  score: number
}

const pvpRankings: RankingPlayer[] = [
  { position: 1, name: 'ShadowBlade', class: 'Assassino Cruz', guild: 'Immortals', score: 15420 },
  { position: 2, name: 'DragonSlayer', class: 'Cavaleiro Rúnico', guild: 'Phoenix', score: 14890 },
  { position: 3, name: 'MysticWizard', class: 'Arquimago', guild: 'Arcane Order', score: 13750 },
  { position: 4, name: 'HolyPriest', class: 'Arcebispo', guild: 'Divine Light', score: 12340 },
  { position: 5, name: 'StormArcher', class: 'Sentinela', guild: 'Wind Walkers', score: 11980 },
  { position: 6, name: 'IronFist', class: 'Shura', guild: 'Dragon Fist', score: 11450 },
  { position: 7, name: 'DarkNight', class: 'Guilhotina Cruz', guild: 'Shadows', score: 10890 },
  { position: 8, name: 'FireMage', class: 'Bruxo', guild: 'Inferno', score: 10340 },
  { position: 9, name: 'IceQueen', class: 'Feiticeira', guild: 'Frost', score: 9870 },
  { position: 10, name: 'BladeStorm', class: 'Renegado', guild: 'Chaos', score: 9450 },
]

const woeRankings: RankingPlayer[] = [
  { position: 1, name: 'WarLord', class: 'Cavaleiro Rúnico', guild: 'Immortals', score: 25 },
  { position: 2, name: 'Commander', class: 'Guardião Real', guild: 'Phoenix', score: 22 },
  { position: 3, name: 'General', class: 'Mecânico', guild: 'Iron Legion', score: 19 },
  { position: 4, name: 'Captain', class: 'Arcebispo', guild: 'Divine Light', score: 17 },
  { position: 5, name: 'Strategist', class: 'Arquimago', guild: 'Arcane Order', score: 15 },
  { position: 6, name: 'Knight', class: 'Cavaleiro Rúnico', guild: 'Steel', score: 14 },
  { position: 7, name: 'Defender', class: 'Guardião Real', guild: 'Shield', score: 12 },
  { position: 8, name: 'Warrior', class: 'Shura', guild: 'Dragon Fist', score: 10 },
  { position: 9, name: 'Vanguard', class: 'Sentinela', guild: 'Arrows', score: 9 },
  { position: 10, name: 'Sentinel', class: 'Arcebispo', guild: 'Holy', score: 8 },
]

const zenyRankings: RankingPlayer[] = [
  { position: 1, name: 'Merchant King', class: 'Criador', guild: 'Trade Empire', score: 9999999999 },
  { position: 2, name: 'GoldDigger', class: 'Genetic', guild: 'Wealth', score: 8750000000 },
  { position: 3, name: 'RichBoy', class: 'Mercador', guild: 'Fortune', score: 7500000000 },
  { position: 4, name: 'MoneyMaker', class: 'Criador', guild: 'Golden', score: 6200000000 },
  { position: 5, name: 'TycoonX', class: 'Genetic', guild: 'Elite', score: 5800000000 },
  { position: 6, name: 'Banker', class: 'Mercador', guild: 'Bank', score: 4500000000 },
  { position: 7, name: 'Investor', class: 'Criador', guild: 'Stock', score: 3900000000 },
  { position: 8, name: 'Trader', class: 'Genetic', guild: 'Market', score: 3200000000 },
  { position: 9, name: 'Dealer', class: 'Mercador', guild: 'Trade', score: 2800000000 },
  { position: 10, name: 'Collector', class: 'Criador', guild: 'Items', score: 2400000000 },
]

function formatScore(score: number, type: string): string {
  if (type === 'zeny') {
    if (score >= 1000000000) return `${(score / 1000000000).toFixed(1)}B`
    if (score >= 1000000) return `${(score / 1000000).toFixed(1)}M`
    return score.toLocaleString('pt-BR')
  }
  return score.toLocaleString('pt-BR')
}

function RankingRow({ player, type, index }: { player: RankingPlayer; type: string; index: number }) {
  const isTop3 = player.position <= 3
  const positionColors = {
    1: 'from-yellow-400 to-amber-600',
    2: 'from-gray-300 to-gray-500',
    3: 'from-amber-600 to-amber-800',
  }

  return (
    <motion.tr
      className={`border-b border-[#00D9FF]/10 hover:bg-[#00D9FF]/5 transition-colors ${
        isTop3 ? 'bg-[#00D9FF]/5' : ''
      }`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          {isTop3 ? (
            <div
              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                positionColors[player.position as keyof typeof positionColors]
              } flex items-center justify-center`}
            >
              {player.position === 1 ? (
                <Crown className="w-4 h-4 text-white" />
              ) : (
                <Medal className="w-4 h-4 text-white" />
              )}
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 font-mono text-sm">
              {player.position}
            </div>
          )}
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D9FF]/20 to-[#7A00FF]/20 flex items-center justify-center">
            <span className="text-lg">👤</span>
          </div>
          <div>
            <div className={`font-semibold ${isTop3 ? 'text-[#00D9FF]' : 'text-white'}`}>
              {player.name}
            </div>
            <div className="text-xs text-white/50">{player.class}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 hidden sm:table-cell">
        <span className="text-white/70">{player.guild}</span>
      </td>
      <td className="py-4 px-4 text-right">
        <span className={`font-mono font-semibold ${isTop3 ? 'text-[#00D9FF]' : 'text-white/80'}`}>
          {formatScore(player.score, type)}
          {type === 'woe' && ' vitórias'}
        </span>
      </td>
    </motion.tr>
  )
}

export function RankingTable({ showFull = false }: { showFull?: boolean }) {
  const displayCount = showFull ? 10 : 5

  return (
    <section className="relative py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
            <Trophy className="w-4 h-4 text-[#00D9FF]" />
            <span className="text-[#00D9FF] text-sm font-medium">Competição</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Rankings <span className="text-[#00D9FF]">Globais</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Os melhores jogadores do servidor em diferentes categorias
          </p>
        </motion.div>

        <NeonCard className="overflow-hidden">
          <Tabs defaultValue="pvp" className="w-full">
            <TabsList className="flex justify-center mb-6 bg-transparent gap-2 p-0">
              <TabsTrigger
                value="pvp"
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/60 data-[state=active]:bg-[#00D9FF]/10 data-[state=active]:border-[#00D9FF]/30 data-[state=active]:text-[#00D9FF] transition-all"
              >
                <Swords className="w-4 h-4 mr-2" />
                PvP
              </TabsTrigger>
              <TabsTrigger
                value="woe"
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/60 data-[state=active]:bg-[#7A00FF]/10 data-[state=active]:border-[#7A00FF]/30 data-[state=active]:text-[#7A00FF] transition-all"
              >
                <Star className="w-4 h-4 mr-2" />
                WoE
              </TabsTrigger>
              <TabsTrigger
                value="zeny"
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/60 data-[state=active]:bg-[#00ff88]/10 data-[state=active]:border-[#00ff88]/30 data-[state=active]:text-[#00ff88] transition-all"
              >
                <Coins className="w-4 h-4 mr-2" />
                Zeny
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pvp" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#00D9FF]/20">
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium w-16">#</th>
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium">Jogador</th>
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium hidden sm:table-cell">Guilda</th>
                      <th className="text-right py-3 px-4 text-white/50 text-sm font-medium">Pontos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pvpRankings.slice(0, displayCount).map((player, index) => (
                      <RankingRow key={player.name} player={player} type="pvp" index={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="woe" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#7A00FF]/20">
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium w-16">#</th>
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium">Jogador</th>
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium hidden sm:table-cell">Guilda</th>
                      <th className="text-right py-3 px-4 text-white/50 text-sm font-medium">Vitórias</th>
                    </tr>
                  </thead>
                  <tbody>
                    {woeRankings.slice(0, displayCount).map((player, index) => (
                      <RankingRow key={player.name} player={player} type="woe" index={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="zeny" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#00ff88]/20">
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium w-16">#</th>
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium">Jogador</th>
                      <th className="text-left py-3 px-4 text-white/50 text-sm font-medium hidden sm:table-cell">Guilda</th>
                      <th className="text-right py-3 px-4 text-white/50 text-sm font-medium">Zeny</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zenyRankings.slice(0, displayCount).map((player, index) => (
                      <RankingRow key={player.name} player={player} type="zeny" index={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </NeonCard>
      </div>
    </section>
  )
}
