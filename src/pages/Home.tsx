import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { HeroSection } from '@/components/sections/HeroSection'

export const Home = () => (
  <div id='app'>
    <Navbar />
    <HeroSection />
    <ExpertiseSection />
    <Footer />
  </div>
)
