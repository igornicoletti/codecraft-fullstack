import { ArrowUpRightIcon, RocketLaunchIcon } from '@phosphor-icons/react'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/constants/hero'

export const HeroSection = () => {
  const { label, headline, description, actions, techStack } = heroData

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='grid gap-12 py-8 md:py-24 md:pt-40'>
        {/* Section Header */}
        <div className='flex flex-col gap-4 sm:items-center sm:text-center md:gap-6'>
          <AnimatedShinyText className='font-medium tracking-tight text-primary text-sm sm:text-base'>
            {label}
          </AnimatedShinyText>
          <h1 className='font-medium tracking-tight text-balance text-5xl sm:text-4xl md:text-5xl lg:text-6xl'>
            {headline.prefix}{' '}
            <FlipWords words={headline.dynamicWords} />
          </h1>
          <h2 className='max-w-4xl text-muted-foreground md:text-lg lg:text-xl'>{description}</h2>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-wrap justify-center gap-4'>
          <Button size='lg' variant='default' className='group w-full uppercase sm:max-w-3xs'>
            {actions.primary.label}
            <RocketLaunchIcon className='size-5 transition-transform group-hover:scale-110' />
          </Button>

          <Button asChild size='lg' variant='outline' className='group w-full uppercase sm:max-w-3xs'>
            <a href={actions.secondary.href} target='_blank' rel='noopener noreferrer'>
              {actions.secondary.label}
              <ArrowUpRightIcon className='size-5 transition-transform group-hover:scale-110' />
            </a>
          </Button>
        </div>

        {/* Technologies Icons */}
        <div className='flex flex-wrap justify-center gap-4'>
          {techStack.map(({ icon: Icon, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Icon stroke={1} className='size-9 text-muted-foreground transition-colors hover:text-primary' />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  )
}
