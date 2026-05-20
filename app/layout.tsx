import type { Metadata } from 'next'
import { Inter, Orbitron, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron'
})

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel'
})

export const metadata: Metadata = {
  title: 'UnikRO - O Verdadeiro Ragnarok Renasceu',
  description: 'UnikRO - Servidor de Ragnarok Online Premium. Experimente a melhor aventura MMORPG com sistemas exclusivos, eventos únicos e uma comunidade incrível.',
  keywords: 'ragnarok online, mmorpg, unikro, servidor ragnarok, ragnarok privado, ragnarok brasil',
  authors: [{ name: 'UnikRO Team' }],
  openGraph: {
    title: 'UnikRO - O Verdadeiro Ragnarok Renasceu',
    description: 'Experimente a melhor aventura MMORPG com sistemas exclusivos e eventos únicos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${orbitron.variable} ${cinzel.variable} bg-[#050816]`}>
      <body className="font-sans antialiased min-h-screen bg-[#050816] text-white overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
