import { CarouselWithFooter } from '@/components/customized/carousel/carousel-07'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { HeroSection } from '@/components/sections/HeroSection'

export const Home = () => (
  <div id='app'>
    <Navbar />
    <HeroSection />
    <ExpertiseSection />
    <ExperienceSection />
    <CarouselWithFooter />
    <Footer />
  </div>
)
