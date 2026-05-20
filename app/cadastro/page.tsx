'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Topbar } from '@/components/Topbar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { NeonCard } from '@/components/NeonCard'
import { GlowButton } from '@/components/GlowButton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { 
  User, 
  Mail, 
  Lock, 
  UserPlus, 
  LogIn, 
  KeyRound,
  Eye,
  EyeOff,
  AlertCircle,
  Check
} from 'lucide-react'

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <Topbar />
      <Navbar />
      
      <section className="relative pt-32 pb-20">
        <div className="max-w-lg mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Sua <span className="text-[#00D9FF]">Aventura</span> Começa Aqui
            </h1>
            <p className="text-white/60">
              Crie sua conta ou faça login para acessar o painel
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NeonCard className="relative overflow-hidden">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="w-full bg-white/5 p-1 rounded-xl mb-6">
                  <TabsTrigger
                    value="login"
                    className="flex-1 py-3 rounded-lg data-[state=active]:bg-[#00D9FF]/10 data-[state=active]:text-[#00D9FF] transition-all"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="flex-1 py-3 rounded-lg data-[state=active]:bg-[#00D9FF]/10 data-[state=active]:text-[#00D9FF] transition-all"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Cadastro
                  </TabsTrigger>
                  <TabsTrigger
                    value="recovery"
                    className="flex-1 py-3 rounded-lg data-[state=active]:bg-[#00D9FF]/10 data-[state=active]:text-[#00D9FF] transition-all"
                  >
                    <KeyRound className="w-4 h-4 mr-2" />
                    Recuperar
                  </TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Usuário ou Email</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        type="text"
                        placeholder="Digite seu usuário ou email"
                        className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Senha</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
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

                  <GlowButton variant="primary" size="lg" className="w-full justify-center mt-6">
                    <LogIn className="w-5 h-5" />
                    ENTRAR
                  </GlowButton>
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="register" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Usuário</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        type="text"
                        placeholder="Escolha um nome de usuário"
                        className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        type="email"
                        placeholder="Digite seu email"
                        className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Senha</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Crie uma senha forte"
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
                    <label className="text-sm text-white/60">Confirmar Senha</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirme sua senha"
                        className="pl-12 pr-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60 mb-2">Requisitos da senha:</p>
                    <ul className="space-y-1">
                      {['Mínimo 8 caracteres', 'Uma letra maiúscula', 'Um número', 'Um caractere especial'].map((req) => (
                        <li key={req} className="flex items-center gap-2 text-sm text-white/40">
                          <Check className="w-4 h-4 text-[#00ff88]" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <GlowButton variant="primary" size="lg" className="w-full justify-center mt-6">
                    <UserPlus className="w-5 h-5" />
                    CRIAR CONTA
                  </GlowButton>
                </TabsContent>

                {/* Recovery Form */}
                <TabsContent value="recovery" className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#00D9FF]/5 border border-[#00D9FF]/20 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#00D9FF] mt-0.5" />
                    <p className="text-sm text-white/70">
                      Digite seu email cadastrado. Enviaremos um link para redefinir sua senha.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        type="email"
                        placeholder="Digite seu email cadastrado"
                        className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50"
                      />
                    </div>
                  </div>

                  <GlowButton variant="primary" size="lg" className="w-full justify-center mt-6">
                    <KeyRound className="w-5 h-5" />
                    ENVIAR LINK
                  </GlowButton>
                </TabsContent>
              </Tabs>
            </NeonCard>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
