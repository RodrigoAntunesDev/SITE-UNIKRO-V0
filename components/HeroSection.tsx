'use client'

import { motion } from 'framer-motion'
import { GlowButton } from './GlowButton'
import { ChevronRight, Download, MessageCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hero Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0B1020] to-[#050816]" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
          </span>
          <span className="text-[#00D9FF] text-sm font-medium">Servidor Online • 1,247 Jogadores</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-[#00D9FF] via-[#7A00FF] to-[#B026FF] bg-clip-text text-transparent">
            UNIKRO
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/80 font-serif mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          O verdadeiro Ragnarok renasceu.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Experimente a aventura definitiva em Midgard. Sistemas exclusivos,
          eventos épicos e uma comunidade vibrante esperam por você.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GlowButton href="/cadastro" variant="primary" size="lg">
            COMEÇAR AGORA
            <ChevronRight className="w-5 h-5" />
          </GlowButton>
          
          <GlowButton href="/download" variant="accent" size="lg">
            <Download className="w-5 h-5" />
            DOWNLOAD
          </GlowButton>
          
          <GlowButton href="/discord" variant="secondary" size="lg">
            <MessageCircle className="w-5 h-5" />
            DISCORD
          </GlowButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#00D9FF]/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-[#00D9FF]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
