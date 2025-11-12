import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { FlipWords } from '@/components/ui/flip-words'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { AtIcon, LightningIcon, SparkleIcon } from '@phosphor-icons/react'

export const HeroSectionOne = () => (
  <section id='hero' className='relative mx-auto w-full max-w-5xl overflow-hidden px-6 py-16 md:py-32'>
    <div className='flex flex-col items-center text-center gap-6'>
      <AnimatedShinyText className='font-medium text-sm sm:text-base text-muted-foreground/80'>
        <span>Igor Nicoletti</span>
        <LightningIcon weight='thin' className='text-ring' />
        <span>Desenvolvedor FullStack</span>
      </AnimatedShinyText>
      <h1 className="sm:font-light leading-tighter tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
        Experiências web <br className='sm:hidden' />
        <FlipWords words={["modernas", "eficientes", "escaláveis"]} className='text-5xl lg:text-6xl xl:text-7xl' />
      </h1>
      <p className="text-base lg:text-lg xl:text-xl font-light leading-tighter tracking-tight">
        Lorem ipsum dolor sit amet. Sed sint voluptatibus est dicta reprehenderit rem eveniet magni.
      </p>
      <div className="mt-8 w-full flex flex-wrap items-center justify-center gap-4">
        <RainbowButton variant='default' size='lg' className="w-full max-w-xs uppercase">
          <SparkleIcon />
          Explorar projetos
        </RainbowButton>
        <RainbowButton asChild variant='outline' size='lg' className="w-full max-w-xs uppercase">
          <a href="mailto:igor93nicoletti@gmail.com" target="_blank" rel="noopener noreferrer">
            <AtIcon />
            Iniciar Contato
          </a>
        </RainbowButton>
      </div>
    </div>
  </section>
)
