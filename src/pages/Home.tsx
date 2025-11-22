import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'

export const Home = () => (
  <div id='app'>

    <Navbar />

    <main className="flex flex-1 flex-col">
      <div className="container mx-auto xl:max-w-7xl px-6">

        <HeroSection />
        <ExperienceSection />
      </div>
      <Footer />
    </main>

  </div>
)
