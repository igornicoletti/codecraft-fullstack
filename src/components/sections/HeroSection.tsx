import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { FlipWords } from '@/components/ui/flip-words'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/data/hero'
import { CaretRightIcon, LightningIcon } from '@phosphor-icons/react'

export const HeroSection = () => (
  <section id='hero' className='relative overflow-hidden py-16 md:py-32'>
    <div className='container mx-auto px-6'>
      {/* 1. Badge */}
      <AnimatedShinyText className='mb-6 text-center text-muted-foregroundmd text-sm sm:text-base md:text-lg'>
        <span>{heroData.profile.name}</span>
        <LightningIcon className='text-primary' />
        <span>{heroData.profile.role}</span>
      </AnimatedShinyText>
      {/* 2. Title */}
      <h1 className='mb-6 font-medium text-center text-pretty text-4xl md:text-5xl lg:text-6xl'>
        {heroData.heading.prefix} <br className='sm:hidden' />
        <FlipWords words={heroData.heading.flipWords} className='font-medium text-5xl sm:text-4xl md:text-5xl lg:text-6xl' />
      </h1>
      {/* 3. Description */}
      <h2 className='mb-12 mx-auto max-w-3xl text-center text-base md:text-lg lg:text-xl'>{heroData.description}</h2>
      {/* 4. Actions */}
      <div className='mb-12 flex flex-wrap justify-center gap-4'>
        <RainbowButton variant='default' size='lg' className='w-full uppercase sm:w-2xs'>
          {heroData.actions.primary.label}
          <CaretRightIcon />
        </RainbowButton>
        <RainbowButton asChild variant='outline' size='lg' className='w-full uppercase sm:w-2xs'>
          <a href={heroData.actions.secondary.href} target='_blank' rel='noopener noreferrer'>
            {heroData.actions.secondary.label}
            <CaretRightIcon />
          </a>
        </RainbowButton>
      </div>
      {/* 5. Stacks */}
      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-4'>
        {heroData.stacks.map(({ icon: Icon, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger>
              <Icon stroke={0.8} className='size-8 transition-colors hover:text-primary sm:size-10' />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  </section>
)
