import { BentoGridThirdDemo } from '@/components/demo/BentoGridThirdDemo'
import { Footer } from '@/components/demo/Footer'
import { HeroSectionOne } from '@/components/demo/HeroSectionOne'
import { NavbarDemo } from '@/components/demo/NavbarDemo'

export const App = () => (
  <div id='app' className='relative w-full'>
    <NavbarDemo />
    <HeroSectionOne />
    <BentoGridThirdDemo />
    <Footer />
  </div>
)
