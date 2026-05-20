'use client'

import { motion } from 'framer-motion'

export function FloatingLights() {
  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 2,
    color: Math.random() > 0.5 ? '#00D9FF' : '#7A00FF',
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full"
          style={{
            width: light.size,
            height: light.size,
            left: `${light.x}%`,
            top: `${light.y}%`,
            background: light.color,
            boxShadow: `0 0 ${light.size * 4}px ${light.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: light.delay,
          }}
        />
      ))}
    </div>
  )
}
