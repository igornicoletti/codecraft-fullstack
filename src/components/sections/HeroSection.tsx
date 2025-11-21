import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/data/hero'
import { CaretRightIcon } from '@phosphor-icons/react'

export const HeroSection = () => {
  const { profile, heading, description, actions, stacks } = heroData

  return (
    <section id="hero" className="relative overflow-hidden py-12 md:pt-36">
      <div className="container mx-auto grid gap-12 px-6 xl:max-w-7xl">
        <div className="flex flex-col text-left sm:text-center gap-6">   {/* Header & Profile */}
          <AnimatedShinyText className='text-primary md:text-xl'>
            {profile.role}
          </AnimatedShinyText>
          <h1 className="text-5xl tracking-normal lg:text-6xl">{heading.prefix} <FlipWords words={heading.flipWords} /></h1>
          <h2 className="mx-auto max-w-4xl font-light md:text-xl">{description}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">   {/* Action Buttons */}
          <Button size='lg' variant='default' className='group w-full uppercase sm:max-w-3xs'>
            {actions.primary.label}
            <CaretRightIcon className='transition-transform group-hover:translate-x-1' />
          </Button>
          <Button asChild size='lg' variant='secondary' className='group w-full uppercase sm:max-w-3xs'>
            <a href={actions.secondary.href} target='_blank' rel='noopener noreferrer'>
              {actions.secondary.label}
              <CaretRightIcon className='transition-transform group-hover:translate-x-1' />
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">    {/* Tech Stack Icons */}
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
