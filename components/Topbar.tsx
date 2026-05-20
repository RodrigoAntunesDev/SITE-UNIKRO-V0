'use client'

import { motion } from 'framer-motion'
import { Signal, Users, MessageCircle, Headphones } from 'lucide-react'
import { FaFacebook } from 'react-icons/fa'

export function Topbar() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B1020]/80 backdrop-blur-md border-b border-[#00D9FF]/10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#00D9FF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
              </span>
              <Signal className="w-4 h-4" />
              <span className="text-white/80">Servidor</span>
              <span className="text-[#00ff88] font-semibold">Online</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-2 text-white/80">
              <Users className="w-4 h-4 text-[#00D9FF]" />
              <span>Players:</span>
              <motion.span
                className="text-[#00D9FF] font-semibold"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                1,247
              </motion.span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/unikro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[#00D9FF] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Discord</span>
            </a>
            
            <a
              href="#"
              className="flex items-center gap-2 text-white/80 hover:text-[#00D9FF] transition-colors"
            >
              <Headphones className="w-4 h-4" />
              <span className="hidden sm:inline">Suporte</span>
            </a>
            
            <a
              href="https://facebook.com/unikro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[#00D9FF] transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
