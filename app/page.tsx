import { Topbar } from '@/components/Topbar'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ServerStats } from '@/components/ServerStats'
import { FounderPacks } from '@/components/FounderPacks'
import { NewsSection } from '@/components/NewsSection'
import { RankingTable } from '@/components/RankingTable'
import { Footer } from '@/components/Footer'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { FloatingLights } from '@/components/FloatingLights'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      <FloatingLights />
      
      <Topbar />
      <Navbar />
      
      <HeroSection />
      <ServerStats />
      <FounderPacks />
      <NewsSection />
      <RankingTable />
      
      <Footer />
    </main>
  )
}
