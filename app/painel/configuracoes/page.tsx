'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { DashboardSidebar } from '@/components/DashboardSidebar'
import { NeonCard } from '@/components/NeonCard'
import { GlowButton } from '@/components/GlowButton'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { 
  Settings, 
  User, 
  Mail, 
  Lock, 
  Bell, 
  Shield,
  Eye,
  EyeOff,
  Save
} from 'lucide-react'

export default function ConfiguracoesPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    discord: true,
    events: true,
    woe: true,
  })

  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <DashboardSidebar>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              <span className="text-[#00D9FF]">Configurações</span>
            </h1>
            <p className="text-white/60">Gerencie sua conta e preferências</p>
          </motion.div>

          {/* Account Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <NeonCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Informações da Conta</h3>
                  <p className="text-sm text-white/60">Atualize seus dados pessoais</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Usuário</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <Input
                      type="text"
                      defaultValue="ShadowBlade"
                      disabled
                      className="pl-12 py-6 bg-white/5 border-white/10 text-white/50"
                    />
                  </div>
                  <p className="text-xs text-white/40">O nome de usuário não pode ser alterado</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <Input
                      type="email"
                      defaultValue="shadowblade@email.com"
                      className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                    />
                  </div>
                </div>

                <GlowButton variant="primary" size="md">
                  <Save className="w-5 h-5" />
                  Salvar Alterações
                </GlowButton>
              </div>
            </NeonCard>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NeonCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#7A00FF]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#7A00FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Segurança</h3>
                  <p className="text-sm text-white/60">Altere sua senha e configurações de segurança</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Senha Atual</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Digite sua senha atual"
                      className="pl-12 pr-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60">Nova Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <Input
                      type="password"
                      placeholder="Digite a nova senha"
                      className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60">Confirmar Nova Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <Input
                      type="password"
                      placeholder="Confirme a nova senha"
                      className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                    />
                  </div>
                </div>

                <GlowButton variant="secondary" size="md">
                  <Lock className="w-5 h-5" />
                  Alterar Senha
                </GlowButton>
              </div>
            </NeonCard>
          </motion.div>

          {/* Notification Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <NeonCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#B026FF]/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#B026FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Notificações</h3>
                  <p className="text-sm text-white/60">Configure suas preferências de notificação</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'email', label: 'Notificações por Email', description: 'Receba atualizações no seu email' },
                  { key: 'discord', label: 'Notificações do Discord', description: 'Receba notificações pelo Discord' },
                  { key: 'events', label: 'Alertas de Eventos', description: 'Seja notificado sobre novos eventos' },
                  { key: 'woe', label: 'Lembrete de WoE', description: 'Lembrete antes das guerras de castelo' },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div>
                      <div className="text-white font-medium">{item.label}</div>
                      <div className="text-sm text-white/50">{item.description}</div>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, [item.key]: checked }))
                      }
                    />
                  </div>
                ))}
              </div>
            </NeonCard>
          </motion.div>
        </div>
      </DashboardSidebar>
    </main>
  )
}
