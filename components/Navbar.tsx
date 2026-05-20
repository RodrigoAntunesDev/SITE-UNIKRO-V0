'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Gamepad2 } from 'lucide-react'
import { GlowButton } from './GlowButton'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Cadastro', href: '/cadastro' },
  { name: 'Download', href: '/download' },
  { name: 'Doações', href: '/doacoes' },
  { name: 'Rankings', href: '/rankings' },
  { name: 'Informações', href: '/informacoes' },
  { name: 'Discord', href: '/discord' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1020]/95 backdrop-blur-xl shadow-[0_0_30px_rgba(0,217,255,0.1)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gamepad2 className="w-10 h-10 text-[#00D9FF]" />
                <div className="absolute inset-0 blur-xl bg-[#00D9FF]/30" />
              </motion.div>
              <span className="font-mono text-2xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#7A00FF] bg-clip-text text-transparent glow-text-blue">
                UNIKRO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-[#00D9FF]'
                      : 'text-white/80 hover:text-[#00D9FF]'
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D9FF] to-[#7A00FF]"
                      layoutId="navbar-indicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <GlowButton href="/painel" variant="primary" size="md">
                PAINEL DE CONTROLE
              </GlowButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-26 left-4 right-4 bg-[#0B1020]/95 backdrop-blur-xl rounded-2xl border border-[#00D9FF]/20 p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      pathname === item.href
                        ? 'bg-[#00D9FF]/10 text-[#00D9FF]'
                        : 'text-white/80 hover:bg-[#00D9FF]/5 hover:text-[#00D9FF]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-[#00D9FF]/10">
                  <GlowButton
                    href="/painel"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    PAINEL DE CONTROLE
                  </GlowButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
