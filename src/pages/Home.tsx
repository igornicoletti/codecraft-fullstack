import { ExperienceSection } from '@/components/features/ExperienceSection'
import { HeroSection } from '@/components/features/HeroSection'
import { ProjectSection } from '@/components/features/ProjectSection'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export const Home = () => (
  <div id='app'>
    <Navbar />
    <HeroSection />
    <ExperienceSection />
    <ProjectSection />
    <Footer />
  </div>
)
