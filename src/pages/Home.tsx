import { ExperienceSection } from '@/components/features/ExperienceSection'
import { HeroSection } from '@/components/features/HeroSection'
import { ProjectSection } from '@/components/features/ProjectSection'
import { SkillsSection } from '@/components/features/SkillsSection'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { WaveBackground } from '@/components/ui/wave-background'

export const Home = () => (
  <div id='app'>
    <WaveBackground />
    <Navbar />
    <HeroSection />
    <ExperienceSection />
    <ProjectSection />
    <SkillsSection />
    <Footer />
  </div>
)
