'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Gamepad2, Mail, MapPin } from 'lucide-react'
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const footerLinks = {
  navegacao: [
    { name: 'Home', href: '/' },
    { name: 'Cadastro', href: '/cadastro' },
    { name: 'Download', href: '/download' },
    { name: 'Rankings', href: '/rankings' },
  ],
  comunidade: [
    { name: 'Discord', href: '/discord' },
    { name: 'Fórum', href: '#' },
    { name: 'Wiki', href: '#' },
    { name: 'Guias', href: '#' },
  ],
  suporte: [
    { name: 'FAQ', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Contato', href: '#' },
  ],
}

const socialLinks = [
  { icon: FaDiscord, href: 'https://discord.gg/unikro', label: 'Discord' },
  { icon: FaFacebook, href: 'https://facebook.com/unikro', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/unikro', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://youtube.com/unikro', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[#00D9FF]/10 bg-[#0B1020]/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Gamepad2 className="w-10 h-10 text-[#00D9FF]" />
              <span className="font-mono text-2xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#7A00FF] bg-clip-text text-transparent">
                UNIKRO
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              O verdadeiro Ragnarok renasceu. Junte-se a milhares de jogadores
              em uma aventura épica com sistemas exclusivos e eventos únicos.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#00D9FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-white mb-4">Comunidade</h3>
            <ul className="space-y-3">
              {footerLinks.comunidade.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#00D9FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#00D9FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 space-y-2">
              <a
                href="mailto:contato@unikro.com"
                className="flex items-center gap-2 text-white/60 hover:text-[#00D9FF] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contato@unikro.com
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                Brasil
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#00D9FF]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 UnikRO. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Ragnarok Online é uma marca registrada da Gravity Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
