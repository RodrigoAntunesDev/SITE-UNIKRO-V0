'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NeonCard } from './NeonCard'
import { GlowButton } from './GlowButton'
import { 
  Coins, 
  Gift, 
  CreditCard, 
  QrCode, 
  Copy, 
  Check,
  Sparkles,
  Percent,
  Timer
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const suggestedAmounts = [10, 20, 50, 100, 200, 500]

const bonusTable = [
  { min: 50, bonus: 5 },
  { min: 100, bonus: 10 },
  { min: 200, bonus: 20 },
  { min: 500, bonus: 30 },
]

const paymentMethods = [
  { id: 'pix', name: 'Pix', icon: QrCode, description: 'Pagamento instantâneo' },
  { id: 'mercadopago', name: 'Mercado Pago', icon: CreditCard, description: 'Cartão, boleto e mais' },
  { id: 'card', name: 'Cartão de Crédito', icon: CreditCard, description: 'Visa, Mastercard' },
]

function getBonus(amount: number): number {
  for (let i = bonusTable.length - 1; i >= 0; i--) {
    if (amount >= bonusTable[i].min) {
      return bonusTable[i].bonus
    }
  }
  return 0
}

export function DonationPanel() {
  const [amount, setAmount] = useState<number>(50)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [selectedMethod, setSelectedMethod] = useState<string>('pix')
  const [showPixCode, setShowPixCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const currentAmount = customAmount ? parseInt(customAmount) || 0 : amount
  const bonus = getBonus(currentAmount)
  const cashAmount = Math.floor(currentAmount * 10 * (1 + bonus / 100))

  const pixCode = 'unikro@pagamentos.com.br'

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Cash Recharge Section */}
      <NeonCard className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00D9FF]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center">
              <Coins className="w-6 h-6 text-[#00D9FF]" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">Recarga de Cash</h3>
              <p className="text-white/60 text-sm">Escolha o valor para recarregar</p>
            </div>
          </div>

          {/* Suggested Amounts */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
            {suggestedAmounts.map((value) => (
              <motion.button
                key={value}
                onClick={() => {
                  setAmount(value)
                  setCustomAmount('')
                }}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  amount === value && !customAmount
                    ? 'bg-[#00D9FF] text-[#050816]'
                    : 'bg-white/5 border border-white/10 text-white hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                R${value}
              </motion.button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <label className="block text-white/60 text-sm mb-2">Ou digite um valor personalizado:</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">R$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Digite o valor"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00D9FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/20 transition-all"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 rounded-xl bg-[#00D9FF]/5 border border-[#00D9FF]/20 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Valor:</span>
              <span className="text-white font-semibold">R$ {currentAmount.toFixed(2)}</span>
            </div>
            {bonus > 0 && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#00ff88]">
                  <Percent className="w-4 h-4 inline mr-1" />
                  Bônus ({bonus}%):
                </span>
                <span className="text-[#00ff88] font-semibold">
                  +{Math.floor(currentAmount * 10 * bonus / 100)} Cash
                </span>
              </div>
            )}
            <div className="flex items-center justify-between pt-2 border-t border-[#00D9FF]/20">
              <span className="text-white font-medium">Total de Cash:</span>
              <span className="text-2xl font-mono font-bold text-[#00D9FF]">
                {cashAmount.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        </div>
      </NeonCard>

      {/* Bonus Table */}
      <NeonCard>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
            <Gift className="w-6 h-6 text-[#00ff88]" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-white">Bônus de Recarga</h3>
            <p className="text-white/60 text-sm">Quanto mais recarrega, mais bônus!</p>
          </div>
        </div>

        <div className="space-y-3">
          {bonusTable.map((tier, index) => (
            <motion.div
              key={tier.min}
              className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                currentAmount >= tier.min
                  ? 'bg-[#00ff88]/10 border-[#00ff88]/30'
                  : 'bg-white/5 border-white/10'
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-white/80">R$ {tier.min}+</span>
              <span className={`font-semibold ${currentAmount >= tier.min ? 'text-[#00ff88]' : 'text-white/60'}`}>
                +{tier.bonus}% bônus
              </span>
            </motion.div>
          ))}
        </div>
      </NeonCard>

      {/* Payment Methods */}
      <NeonCard>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#7A00FF]/10 flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-[#7A00FF]" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-white">Método de Pagamento</h3>
            <p className="text-white/60 text-sm">Escolha como deseja pagar</p>
          </div>
        </div>

        <div className="grid gap-3 mb-6">
          {paymentMethods.map((method) => (
            <motion.button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                selectedMethod === method.id
                  ? 'bg-[#7A00FF]/10 border-[#7A00FF]/50'
                  : 'bg-white/5 border-white/10 hover:border-[#7A00FF]/30'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                selectedMethod === method.id ? 'bg-[#7A00FF]/20' : 'bg-white/5'
              }`}>
                <method.icon className={`w-6 h-6 ${
                  selectedMethod === method.id ? 'text-[#7A00FF]' : 'text-white/60'
                }`} />
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${
                  selectedMethod === method.id ? 'text-[#7A00FF]' : 'text-white'
                }`}>
                  {method.name}
                </div>
                <div className="text-sm text-white/50">{method.description}</div>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedMethod === method.id
                  ? 'border-[#7A00FF] bg-[#7A00FF]'
                  : 'border-white/30'
              }`}>
                {selectedMethod === method.id && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Generate Payment Button */}
        <GlowButton
          onClick={() => setShowPixCode(true)}
          variant="secondary"
          size="lg"
          className="w-full justify-center"
          disabled={currentAmount < 10}
        >
          <Sparkles className="w-5 h-5" />
          GERAR PAGAMENTO
        </GlowButton>
      </NeonCard>

      {/* Pix Code Modal */}
      {showPixCode && selectedMethod === 'pix' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <NeonCard glowColor="purple">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#7A00FF]/10 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-[#7A00FF]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Pagamento via Pix</h3>
              <p className="text-white/60 text-sm mb-6">Escaneie o QR Code ou copie o código</p>

              {/* QR Code Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 bg-white rounded-xl p-4 flex items-center justify-center">
                <div className="w-full h-full bg-[#050816] rounded-lg flex items-center justify-center">
                  <QrCode className="w-24 h-24 text-white/30" />
                </div>
              </div>

              {/* Pix Copy */}
              <div className="flex items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
                <input
                  type="text"
                  value={pixCode}
                  readOnly
                  className="flex-1 bg-transparent text-white/80 text-sm outline-none"
                />
                <motion.button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-[#7A00FF]/20 text-[#7A00FF] hover:bg-[#7A00FF]/30 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </motion.button>
              </div>

              {/* Timer */}
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-4">
                <Timer className="w-4 h-4" />
                <span>Expira em 30:00</span>
              </div>

              {/* Value Summary */}
              <div className="p-4 rounded-xl bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Valor a pagar:</span>
                  <span className="text-2xl font-mono font-bold text-[#00D9FF]">
                    R$ {currentAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </NeonCard>
        </motion.div>
      )}
    </div>
  )
}
