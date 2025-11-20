import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/data/hero'
import { CaretRightIcon, LightningIcon } from '@phosphor-icons/react'

export const HeroSection = () => {
  const { profile, heading, description, actions, stacks } = heroData

  return (
    <section id="hero" className="relative overflow-hidden py-12 md:pt-36">
      <div className="container mx-auto flex flex-col gap-12 px-6 text-center">

        {/* Header & Profile */}
        <div className="flex flex-col gap-8">
          <AnimatedShinyText className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground md:text-lg lg:text-xl">
            <span>{profile.name}</span>
            <LightningIcon weight="fill" className="text-primary" />
            <span>{profile.role}</span>
          </AnimatedShinyText>

          <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            {heading.prefix} <br className="sm:hidden" />
            <FlipWords words={heading.flipWords} className="text-5xl font-light sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
          </h1>

          <p className="mx-auto max-w-5xl text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button size='lg' variant='default' className='group w-full uppercase sm:max-w-2xs md:h-11'>
            {actions.primary.label}
            <CaretRightIcon className='transition-transform group-hover:translate-x-1' />
          </Button>
          <Button asChild size='lg' variant='secondary' className='group w-full uppercase sm:max-w-2xs md:h-11'>
            <a href={actions.secondary.href} target='_blank' rel='noopener noreferrer'>
              {actions.secondary.label}
              <CaretRightIcon className='transition-transform group-hover:translate-x-1' />
            </a>
          </Button>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {stacks.map(({ icon: Icon, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Icon stroke={0.9} className="size-8 transition-colors hover:text-primary sm:size-10" />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

      </div>
    </section>
  )
}
