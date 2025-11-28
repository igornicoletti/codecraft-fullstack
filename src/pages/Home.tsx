import { ExperienceSection } from '@/components/features/ExperienceSection'
import { HeroSection } from '@/components/features/HeroSection'
import { ProjectSection } from '@/components/features/ProjectSection'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { AnimatedWavePath } from '@/components/ui/animated-wave-path'

export const Home = () => (
  <div id='app'>
    <AnimatedWavePath />
    <Navbar />
    <HeroSection />
    <ExperienceSection />
    <ProjectSection />
    <Footer />
  </div>
)
