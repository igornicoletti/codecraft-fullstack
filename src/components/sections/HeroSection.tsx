import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/data/hero'
import { CaretRightIcon, LightningIcon } from '@phosphor-icons/react'

export const HeroSection = () => (
  <section id='hero' className='relative overflow-hidden py-16 md:py-32'>
    <div className='mx-auto container grid gap-12 px-6'>

      <div className="flex flex-col gap-6 text-center">
        <AnimatedShinyText className='text-muted-foreground text-sm md:text-lg lg:text-xl'>
          <span>{heroData.profile.name}</span>
          <LightningIcon weight='fill' className='text-primary' />
          <span>{heroData.profile.role}</span>
        </AnimatedShinyText>
        <h1 className='font-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          {heroData.heading.prefix} <br className='sm:hidden' />
          <FlipWords words={heroData.heading.flipWords} className='font-light text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl' />
        </h1>
        <p className='mx-auto max-w-4xl text-muted-foreground text-base md:text-lg lg:text-xl'>
          {heroData.description}
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-4'>
        <Button size='lg' variant='default' className='group w-full sm:max-w-2xs uppercase'>
          {heroData.actions.primary.label}
          <CaretRightIcon className='group-hover:translate-x-1 transition-all' />
        </Button>
        <Button asChild size='lg' variant='outline' className='group w-full sm:max-w-2xs uppercase'>
          <a href={heroData.actions.secondary.href} target='_blank' rel='noopener noreferrer'>
            {heroData.actions.secondary.label}
            <CaretRightIcon className='group-hover:translate-x-1 transition-all' />
          </a>
        </Button>
      </div>

      <div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
        {heroData.stacks.map(({ icon: Icon, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger>
              <Icon stroke={1.25} className='size-9 sm:size-12 transition-colors text-secondary hover:text-secondary-foreground' />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>

    </div>
  </section>
)
