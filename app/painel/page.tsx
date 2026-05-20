import { BackgroundEffects } from '@/components/BackgroundEffects'
import { DashboardSidebar } from '@/components/DashboardSidebar'
import { DashboardStats } from '@/components/DashboardStats'

export default function PainelPage() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <BackgroundEffects />
      
      <DashboardSidebar>
        <DashboardStats />
      </DashboardSidebar>
    </main>
  )
}
