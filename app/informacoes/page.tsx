'use client'

import { motion } from 'framer-motion'
import { Topbar } from '@/components/Topbar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { NeonCard } from '@/components/NeonCard'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { 
  Info, 
  Gauge, 
  Swords, 
  Shield, 
  Terminal, 
  Sparkles, 
  Calendar,
  Coins,
  ScrollText,
  Clock
} from 'lucide-react'

const serverInfo = [
  {
    id: 'rates',
    title: 'Rates do Servidor',
    icon: Gauge,
    content: [
      { label: 'Base EXP', value: '100x' },
      { label: 'Job EXP', value: '100x' },
      { label: 'Drop Rate', value: '50x' },
      { label: 'Card Drop', value: '10x' },
      { label: 'MVP Card', value: '5x' },
      { label: 'Quest EXP', value: '50x' },
    ],
  },
  {
    id: 'classes',
    title: 'Sistema de Classes',
    icon: Swords,
    content: `
      • Todas as classes até 4ª job disponíveis
      • Level máximo: Base 200 / Job 70
      • Sistema de Rebirth disponível
      • Skills customizadas exclusivas
      • Balanceamento focado em PvP e PvM
    `,
  },
  {
    id: 'pvp',
    title: 'Sistema PvP',
    icon: Shield,
    content: `
      • Arena PvP 24 horas
      • Ranking semanal com premiação
      • Torneios mensais com prêmios em Cash
      • Sistema de Duel 1v1
      • Mapas PvP exclusivos
      • Sistema de Kill Count
    `,
  },
  {
    id: 'woe',
    title: 'Sistema WoE',
    icon: Shield,
    content: `
      • WoE 1.0: Quartas e Sábados - 20:00 às 21:00
      • WoE 2.0: Sextas e Domingos - 20:00 às 21:00
      • Sistema de pontuação por guilda
      • Rewards exclusivos para Top 3 guildas
      • God Items disponíveis
      • Economia de castelo ativa
    `,
  },
  {
    id: 'commands',
    title: 'Comandos Disponíveis',
    icon: Terminal,
    content: `
      @rates - Ver rates do servidor
      @go [cidade] - Teleporte para cidades
      @storage - Abrir armazém
      @autoloot - Loot automático
      @alootid [id] - Loot específico
      @jailtime - Ver tempo de prisão
      @time - Hora do servidor
      @channel - Lista de canais
      @whosell [item] - Buscar vendedores
      @whobuys [item] - Buscar compradores
    `,
  },
  {
    id: 'custom',
    title: 'Sistemas Customizados',
    icon: Sparkles,
    content: `
      • Sistema de Conquistas com recompensas
      • Daily Login Rewards
      • Sistema de Missões Diárias
      • Ranking de Guildas
      • Sistema de Títulos
      • Pets com habilidades especiais
      • Montarias exclusivas
      • Sistema de Crafting avançado
    `,
  },
  {
    id: 'events',
    title: 'Eventos Automáticos',
    icon: Calendar,
    content: `
      • Poring Catcher - A cada 2 horas
      • Disguise - A cada 3 horas
      • Find the Mushroom - A cada 4 horas
      • Devil Square - 12:00 e 20:00
      • MVP Room - 14:00 e 22:00
      • Eventos de GM aos finais de semana
    `,
  },
  {
    id: 'farm',
    title: 'Informações de Farm',
    icon: Coins,
    content: `
      • Melhor mapa low level: Payon Dungeon
      • Melhor mapa mid level: Geffenia
      • Melhor mapa high level: Abyss Lake
      • Melhor mapa para Zeny: Geffenia
      • MVP mais farmado: Baphomet, Eddga
      • Instância mais rentável: Old Glast Heim
    `,
  },
  {
    id: 'rules',
    title: 'Regras do Servidor',
    icon: ScrollText,
    content: `
      1. Proibido o uso de programas ilegais (bots, hacks)
      2. Proibido RMT (venda de itens por dinheiro real)
      3. Respeite todos os jogadores e staff
      4. Proibido divulgar outros servidores
      5. Proibido bug abuse - reporte bugs encontrados
      6. Proibido dual login em WoE/PvP
      7. Conta compartilhada por sua conta e risco
      8. Penalidades: Warning > Jail > Ban temporário > Ban permanente
    `,
  },
  {
    id: 'woe-schedule',
    title: 'Horários da WoE',
    icon: Clock,
    content: [
      { day: 'Quarta-feira', time: '20:00 - 21:00', type: 'WoE 1.0' },
      { day: 'Sexta-feira', time: '20:00 - 21:00', type: 'WoE 2.0' },
      { day: 'Sábado', time: '20:00 - 21:00', type: 'WoE 1.0' },
      { day: 'Domingo', time: '20:00 - 21:00', type: 'WoE 2.0' },
    ],
  },
]

export default function InformacoesPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <Topbar />
      <Navbar />
      
      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
              <Info className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[#00D9FF] text-sm font-medium">Guia Completo</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              Informações do <span className="text-[#00D9FF]">Servidor</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Tudo que você precisa saber sobre o UnikRO em um só lugar
            </p>
          </motion.div>

          {/* Server Info Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NeonCard className="p-0 overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {serverInfo.map((item, index) => (
                  <AccordionItem key={item.id} value={item.id} className="border-b border-[#00D9FF]/10 last:border-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center group-hover:bg-[#00D9FF]/20 transition-colors">
                          <item.icon className="w-5 h-5 text-[#00D9FF]" />
                        </div>
                        <span className="text-white font-semibold">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      {Array.isArray(item.content) ? (
                        item.id === 'rates' ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                            {(item.content as { label: string; value: string }[]).map((rate) => (
                              <div
                                key={rate.label}
                                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                              >
                                <div className="text-2xl font-mono font-bold text-[#00D9FF] mb-1">
                                  {rate.value}
                                </div>
                                <div className="text-sm text-white/60">{rate.label}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-3 pt-2">
                            {(item.content as { day: string; time: string; type: string }[]).map((schedule, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                              >
                                <div>
                                  <div className="text-white font-medium">{schedule.day}</div>
                                  <div className="text-sm text-white/50">{schedule.type}</div>
                                </div>
                                <div className="text-[#00D9FF] font-mono font-semibold">
                                  {schedule.time}
                                </div>
                              </div>
                            ))}
                          </div>
                        )
                      ) : (
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <pre className="text-white/80 whitespace-pre-wrap font-sans text-sm leading-relaxed">
                            {item.content}
                          </pre>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </NeonCard>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
