import { CaretRightIcon } from '@phosphor-icons/react'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/data/hero'

export const HeroSection = () => {
  const { head, title, description, actions, stacks } = heroData

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="grid gap-12 py-16 md:pt-40">
        {/* Section Header */}
        <div className="flex flex-col text-left sm:text-center gap-6">
          <AnimatedShinyText className='text-primary text-sm md:text-lg'>{head}</AnimatedShinyText>
          <h1 className="text-5xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">{title.prefix} <FlipWords words={title.flipWords} /></h1>
          <h2 className="mx-auto max-w-4xl text-muted-foreground md:text-lg lg:text-xl">{description}</h2>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button size='lg' variant='default' className='group w-full uppercase sm:max-w-3xs'>
            {actions.primary.label}
            <CaretRightIcon className='transition-transform group-hover:translate-x-1' />
          </Button>
          <Button asChild size='lg' variant='outline' className='group w-full uppercase sm:max-w-3xs'>
            <a href={actions.secondary.href} target='_blank' rel='noopener noreferrer'>
              {actions.secondary.label}
              <CaretRightIcon className='transition-transform group-hover:translate-x-1' />
            </a>
          </Button>
        </div>
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-4">
          {stacks.map(({ icon: Icon, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Icon stroke={1} className="size-8 sm:size-10 transition-colors hover:text-primary" />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section >
  )
}
