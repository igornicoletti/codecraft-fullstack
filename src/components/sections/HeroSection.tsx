import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { FlipWords } from '@/components/ui/flip-words'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/data/hero'
import { CaretRightIcon, LightningIcon } from '@phosphor-icons/react'

export const HeroSection = () => (
  <section id='hero' className='relative overflow-hidden py-16 md:py-32'>
    <div className='container mx-auto px-6'>

      <AnimatedShinyText className='mb-8 md:text-lg text-base text-center text-muted-foreground'>
        <span>{heroData.profile.name}</span>
        <LightningIcon className='text-accent-foreground' />
        <span>{heroData.profile.role}</span>
      </AnimatedShinyText>

      <h1 className='mb-8 xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-center text-pretty'>
        {heroData.heading.prefix} <br className='sm:hidden' />
        <FlipWords words={heroData.heading.flipWords} className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-5xl' />
      </h1>
      <h2 className='mb-12 mx-auto max-w-4xl lg:text-xl md:text-lg text-base text-center text-muted-foreground'>
        {heroData.description}
      </h2>

      <div className='mb-12 flex flex-wrap justify-center gap-6'>
        <RainbowButton variant='default' size='lg' className='w-full sm:w-xs uppercase'>
          {heroData.actions.primary.label}
          <CaretRightIcon />
        </RainbowButton>

        <RainbowButton asChild variant='outline' size='lg' className='w-full sm:w-xs uppercase'>
          <a href={heroData.actions.secondary.href} target='_blank' rel='noopener noreferrer'>
            {heroData.actions.secondary.label}
            <CaretRightIcon />
          </a>
        </RainbowButton>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-4'>
        {heroData.stacks.map(({ icon: Icon, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger>
              <Icon stroke={0.8} className='size-8 sm:size-10 hover:text-ring transition-colors' />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  </section>
)
