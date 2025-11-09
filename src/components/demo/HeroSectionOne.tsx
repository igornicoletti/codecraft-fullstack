import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { FlipWords } from '@/components/ui/flip-words'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { LightningIcon } from '@phosphor-icons/react'

export const HeroSectionOne = () => {
  return (
    <div id='hero' className='relative mx-auto w-full max-w-7xl overflow-hidden py-20 pb-96 lg:py-40'>
      <div className='flex flex-col items-center text-center gap-4 px-6'>
        <AnimatedShinyText>
          <span>Igor Nicoletti</span>
          <LightningIcon weight='thin' className='text-primary' />
          <span>Desenvolvedor FullStack</span>
        </AnimatedShinyText>
        <h1 className="font-extralight leading-tighter tracking-tight text-muted-foreground text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Experiências web <br className='sm:hidden' />
          <FlipWords words={["modernas", "eficientes", "escaláveis"]} className='font-light text-5xl lg:text-6xl xl:text-7xl' />
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
          Lorem ipsum dolor sit amet. Sed sint voluptatibus est dicta reprehenderit rem eveniet magni. Et quia earum rem autem animi et inventore corporis ut illum voluptates sed.
        </p>
        <div className="mt-8 w-full flex flex-wrap items-center justify-center gap-4">
          <RainbowButton variant='default' size='lg' className="w-full max-w-2xs">
            Explorar Projetos
          </RainbowButton>
          <RainbowButton variant='outline' size='lg' className="w-full max-w-2xs">
            Iniciar Integração
          </RainbowButton>
        </div>
      </div>
    </div>
  )
}
