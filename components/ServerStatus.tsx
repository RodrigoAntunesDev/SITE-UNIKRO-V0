'use client'

import { motion } from 'framer-motion'
import { Signal, RefreshCw } from 'lucide-react'

interface ServerStatusProps {
  status?: 'online' | 'offline' | 'maintenance'
  players?: number
  lastUpdate?: string
}

export function ServerStatus({ 
  status = 'online', 
  players = 1247, 
  lastUpdate = 'Agora' 
}: ServerStatusProps) {
  const statusConfig = {
    online: {
      color: '#00ff88',
      text: 'Online',
      bgColor: 'bg-[#00ff88]/10',
      borderColor: 'border-[#00ff88]/30',
    },
    offline: {
      color: '#ff4444',
      text: 'Offline',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
    },
    maintenance: {
      color: '#ffaa00',
      text: 'Manutenção',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
    },
  }

  const config = statusConfig[status]

  return (
    <motion.div
      className={`inline-flex items-center gap-4 px-6 py-3 rounded-2xl ${config.bgColor} border ${config.borderColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Status Indicator */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          {status === 'online' && (
            <span 
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: config.color }}
            />
          )}
          <span 
            className="relative inline-flex rounded-full h-3 w-3"
            style={{ backgroundColor: config.color }}
          />
        </span>
        <Signal className="w-4 h-4" style={{ color: config.color }} />
        <span className="font-semibold" style={{ color: config.color }}>
          {config.text}
        </span>
      </div>

      {/* Separator */}
      <div className="w-px h-6 bg-white/20" />

      {/* Players */}
      {status === 'online' && (
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-sm">Players:</span>
          <motion.span
            className="font-mono font-semibold text-[#00D9FF]"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {players.toLocaleString('pt-BR')}
          </motion.span>
        </div>
      )}

      {/* Refresh */}
      <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors group">
        <RefreshCw className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
      </button>
    </motion.div>
  )
}
