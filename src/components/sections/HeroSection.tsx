import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { FlipWords } from '@/components/ui/flip-words'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/data/hero'
import { CaretRightIcon, LightningIcon } from '@phosphor-icons/react'

export const HeroSection = () => (
  <section id='hero' className='relative overflow-hidden py-20 md:py-40'>
    <div className='container mx-auto px-6'>

      {/* 1. Badge */}
      <AnimatedShinyText className='mb-4 md:text-lg text-muted-foreground font-medium'>
        <span>{heroData.profile.name}</span>
        <LightningIcon weight='bold' className='text-foreground' />
        <span>{heroData.profile.role}</span>
      </AnimatedShinyText>

      {/* 2. Title */}
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 text-center leading-tight'>
        {heroData.heading.prefix} <br className='sm:hidden' />
        <FlipWords words={heroData.heading.flipWords} className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl' />
      </h1>

      {/* 3. Description */}
      <p className='text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto'>
        {heroData.description}
      </p>

      {/* 4. Action Buttons */}
      <div className='flex flex-col sm:flex-row justify-center gap-4 mb-12'>
        <RainbowButton variant='default' size='lg' className='w-full sm:w-auto uppercase'>
          {heroData.actions.primary.label}
          <CaretRightIcon />
        </RainbowButton>
        <RainbowButton asChild variant='outline' size='lg' className='w-full sm:w-auto uppercase'>
          <a href={heroData.actions.secondary.href} target='_blank' rel='noopener noreferrer'>
            {heroData.actions.secondary.label}
            <CaretRightIcon />
          </a>
        </RainbowButton>
      </div>

      {/* 5. Icons */}
      <div className='flex justify-center space-x-2 sm:space-x-6'>
        {heroData.stacks.map(({ icon: Icon, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger>
              <Icon size={40} stroke={0.75} className='text-muted-foreground hover:text-ring transition-colors' />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  </section>
)
