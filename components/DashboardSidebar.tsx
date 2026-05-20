'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  User,
  Users,
  Coins,
  Trophy,
  Settings,
  BarChart3,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronRight,
} from 'lucide-react'

const sidebarItems = [
  { name: 'Minha Conta', href: '/painel', icon: User },
  { name: 'Personagens', href: '/painel/personagens', icon: Users },
  { name: 'Doações', href: '/painel/doacoes', icon: Coins },
  { name: 'Rankings', href: '/painel/rankings', icon: Trophy },
  { name: 'Estatísticas', href: '/painel/estatisticas', icon: BarChart3 },
  { name: 'Configurações', href: '/painel/configuracoes', icon: Settings },
]

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#0B1020]/95 backdrop-blur-xl border-r border-[#00D9FF]/10 z-50 transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#00D9FF]/10">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-mono text-xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#7A00FF] bg-clip-text text-transparent">
              UNIKRO
            </span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-white/60 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-[#00D9FF]/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#7A00FF]/20 flex items-center justify-center">
              <User className="w-6 h-6 text-[#00D9FF]" />
            </div>
            <div>
              <div className="text-white font-semibold">ShadowBlade</div>
              <div className="text-xs text-white/50">Conta Premium</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#00D9FF]/10 text-[#00D9FF]'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#00D9FF]/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sair</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#050816]/80 backdrop-blur-xl border-b border-[#00D9FF]/10">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-white/60 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 ml-auto">
              {/* Notifications */}
              <button className="relative p-2 text-white/60 hover:text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#00D9FF] rounded-full" />
              </button>

              {/* Cash Balance */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20">
                <Coins className="w-4 h-4 text-[#00D9FF]" />
                <span className="text-[#00D9FF] font-mono font-semibold">12,500</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
