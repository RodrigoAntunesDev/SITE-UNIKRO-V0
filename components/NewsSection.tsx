'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NeonCard } from './NeonCard'
import { Calendar, ArrowRight, Tag, Sparkles, Bell } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface NewsItem {
  id: string
  title: string
  excerpt: string
  category: 'noticia' | 'evento' | 'atualizacao'
  date: string
  image?: string
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Grande Atualização de Inverno',
    excerpt: 'Novos mapas, monstros e equipamentos chegam ao servidor! Prepare-se para a maior atualização do ano.',
    category: 'atualizacao',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Evento de Ano Novo',
    excerpt: 'Participe do nosso evento especial e ganhe prêmios exclusivos! Válido de 1 a 15 de janeiro.',
    category: 'evento',
    date: '2024-01-01',
  },
  {
    id: '3',
    title: 'WoE: Novos Castelos',
    excerpt: 'A disputa pelos castelos ficou ainda mais intensa! Três novos castelos foram adicionados.',
    category: 'noticia',
    date: '2024-01-10',
  },
  {
    id: '4',
    title: 'Balanceamento de Classes',
    excerpt: 'Ajustes importantes foram feitos em diversas classes para melhorar a experiência PvP.',
    category: 'atualizacao',
    date: '2024-01-08',
  },
  {
    id: '5',
    title: 'Torneio PvP Semanal',
    excerpt: 'Inscrições abertas para o torneio desta semana! Prêmios incríveis para os vencedores.',
    category: 'evento',
    date: '2024-01-12',
  },
  {
    id: '6',
    title: 'Novo Sistema de Quest',
    excerpt: 'Sistema de missões completamente renovado com recompensas exclusivas.',
    category: 'atualizacao',
    date: '2024-01-05',
  },
]

const categoryColors = {
  noticia: { bg: 'bg-[#00D9FF]/10', text: 'text-[#00D9FF]', border: 'border-[#00D9FF]/30' },
  evento: { bg: 'bg-[#B026FF]/10', text: 'text-[#B026FF]', border: 'border-[#B026FF]/30' },
  atualizacao: { bg: 'bg-[#00ff88]/10', text: 'text-[#00ff88]', border: 'border-[#00ff88]/30' },
}

const categoryLabels = {
  noticia: 'Notícia',
  evento: 'Evento',
  atualizacao: 'Atualização',
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const colors = categoryColors[item.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <NeonCard className="h-full group cursor-pointer">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
          >
            <Tag className="w-3 h-3" />
            {categoryLabels[item.category]}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/50">
            <Calendar className="w-3 h-3" />
            {new Date(item.date).toLocaleDateString('pt-BR')}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {item.excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-[#00D9FF] text-sm font-medium group-hover:gap-3 transition-all">
          <span>Ler mais</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </NeonCard>
    </motion.div>
  )
}

export function NewsSection() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredNews = activeTab === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeTab)

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
            <Bell className="w-4 h-4 text-[#00D9FF]" />
            <span className="text-[#00D9FF] text-sm font-medium">Novidades</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Notícias & <span className="text-[#00D9FF]">Eventos</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Fique por dentro de todas as novidades, atualizações e eventos do servidor
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex justify-center mb-8 bg-transparent gap-2">
            <TabsTrigger
              value="all"
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 data-[state=active]:bg-[#00D9FF]/10 data-[state=active]:border-[#00D9FF]/30 data-[state=active]:text-[#00D9FF] transition-all"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="noticia"
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 data-[state=active]:bg-[#00D9FF]/10 data-[state=active]:border-[#00D9FF]/30 data-[state=active]:text-[#00D9FF] transition-all"
            >
              Notícias
            </TabsTrigger>
            <TabsTrigger
              value="evento"
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 data-[state=active]:bg-[#B026FF]/10 data-[state=active]:border-[#B026FF]/30 data-[state=active]:text-[#B026FF] transition-all"
            >
              Eventos
            </TabsTrigger>
            <TabsTrigger
              value="atualizacao"
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 data-[state=active]:bg-[#00ff88]/10 data-[state=active]:border-[#00ff88]/30 data-[state=active]:text-[#00ff88] transition-all"
            >
              Atualizações
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item, index) => (
                <NewsCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
