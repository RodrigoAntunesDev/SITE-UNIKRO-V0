'use client'

import { motion } from 'framer-motion'
import { Topbar } from '@/components/Topbar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { NeonCard } from '@/components/NeonCard'
import { GlowButton } from '@/components/GlowButton'
import { 
  Download, 
  HardDrive, 
  Laptop, 
  Cpu, 
  Monitor, 
  Disc,
  Cloud,
  ExternalLink,
  CheckCircle,
  Info
} from 'lucide-react'
import { FaGoogleDrive, FaCloudDownloadAlt } from 'react-icons/fa'
import { SiMega } from 'react-icons/si'

const downloadOptions = [
  {
    id: 'full',
    name: 'Cliente Completo',
    description: 'Versão completa com todos os arquivos necessários',
    size: '2.8 GB',
    recommended: true,
    links: [
      { name: 'Google Drive', icon: FaGoogleDrive, url: '#' },
      { name: 'MEGA', icon: SiMega, url: '#' },
      { name: 'Torrent', icon: FaCloudDownloadAlt, url: '#' },
    ],
  },
  {
    id: 'lite',
    name: 'Cliente Lite',
    description: 'Versão reduzida para conexões mais lentas',
    size: '1.2 GB',
    recommended: false,
    links: [
      { name: 'Google Drive', icon: FaGoogleDrive, url: '#' },
      { name: 'MEGA', icon: SiMega, url: '#' },
    ],
  },
  {
    id: 'patch',
    name: 'Patch Atualização',
    description: 'Apenas as últimas atualizações do servidor',
    size: '120 MB',
    recommended: false,
    links: [
      { name: 'Google Drive', icon: FaGoogleDrive, url: '#' },
      { name: 'Download Direto', icon: Cloud, url: '#' },
    ],
  },
]

const systemRequirements = {
  minimum: [
    { label: 'Sistema Operacional', value: 'Windows 7/8/10/11', icon: Monitor },
    { label: 'Processador', value: 'Intel Core 2 Duo 2.0GHz', icon: Cpu },
    { label: 'Memória RAM', value: '2 GB', icon: HardDrive },
    { label: 'Placa de Vídeo', value: 'Intel HD Graphics 4000', icon: Laptop },
    { label: 'Espaço em Disco', value: '4 GB disponíveis', icon: Disc },
  ],
  recommended: [
    { label: 'Sistema Operacional', value: 'Windows 10/11', icon: Monitor },
    { label: 'Processador', value: 'Intel Core i3 ou superior', icon: Cpu },
    { label: 'Memória RAM', value: '4 GB', icon: HardDrive },
    { label: 'Placa de Vídeo', value: 'NVIDIA GT 730 ou superior', icon: Laptop },
    { label: 'Espaço em Disco', value: '6 GB disponíveis', icon: Disc },
  ],
}

const installSteps = [
  'Baixe o cliente completo através de um dos links acima',
  'Extraia os arquivos usando WinRAR ou 7-Zip',
  'Execute o arquivo "UnikRO.exe" como administrador',
  'Aguarde o patcher baixar as atualizações',
  'Crie sua conta no site e comece a jogar!',
]

export default function DownloadPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <Topbar />
      <Navbar />
      
      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
              <Download className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[#00D9FF] text-sm font-medium">Download Center</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              Baixe o <span className="text-[#00D9FF]">Cliente</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Escolha a melhor opção de download para sua conexão e comece sua aventura em Midgard
            </p>
          </motion.div>

          {/* Download Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {downloadOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NeonCard
                  className={`h-full ${option.recommended ? 'ring-2 ring-[#00D9FF]/50' : ''}`}
                  glowColor={option.recommended ? 'blue' : 'purple'}
                >
                  {option.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-[#00D9FF] rounded-full text-xs font-bold text-[#050816] uppercase">
                        Recomendado
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      option.recommended ? 'bg-[#00D9FF]/10' : 'bg-[#7A00FF]/10'
                    }`}>
                      <Download className={`w-8 h-8 ${
                        option.recommended ? 'text-[#00D9FF]' : 'text-[#7A00FF]'
                      }`} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{option.name}</h3>
                    <p className="text-white/60 text-sm mb-3">{option.description}</p>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm">
                      <HardDrive className="w-4 h-4" />
                      {option.size}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {option.links.map((link) => (
                      <GlowButton
                        key={link.name}
                        href={link.url}
                        variant={option.recommended ? 'primary' : 'accent'}
                        size="md"
                        className="w-full justify-center"
                      >
                        <link.icon className="w-5 h-5" />
                        {link.name}
                        <ExternalLink className="w-4 h-4" />
                      </GlowButton>
                    ))}
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>

          {/* Installation Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <NeonCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
                  <Info className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">Como Instalar</h3>
                  <p className="text-white/60 text-sm">Siga estes passos simples</p>
                </div>
              </div>

              <div className="space-y-4">
                {installSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00D9FF] font-mono font-bold">{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                      <span className="text-white/80">{step}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </NeonCard>
          </motion.div>

          {/* System Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
              Requisitos do <span className="text-[#00D9FF]">Sistema</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Minimum */}
              <NeonCard>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  Mínimos
                </h3>
                <div className="space-y-3">
                  {systemRequirements.minimum.map((req) => (
                    <div key={req.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <req.icon className="w-5 h-5 text-white/40" />
                      </div>
                      <div>
                        <div className="text-sm text-white/50">{req.label}</div>
                        <div className="text-white/80">{req.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </NeonCard>

              {/* Recommended */}
              <NeonCard glowColor="blue">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00D9FF]" />
                  Recomendados
                </h3>
                <div className="space-y-3">
                  {systemRequirements.recommended.map((req) => (
                    <div key={req.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center">
                        <req.icon className="w-5 h-5 text-[#00D9FF]" />
                      </div>
                      <div>
                        <div className="text-sm text-white/50">{req.label}</div>
                        <div className="text-white/80">{req.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </NeonCard>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
