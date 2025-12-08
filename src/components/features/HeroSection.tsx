import { heroSectionData } from '@/constants/hero'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import type { HeroSectionContent } from '@/types/hero.types'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type HeroTechStackProps = Pick<HeroSectionContent, 'technologiesUsed'>

const HeroTechStack = ({ technologiesUsed }: HeroTechStackProps) => (
  <div className='flex flex-wrap justify-center gap-4'>
    {technologiesUsed.map(({ iconSlug: Icon, displayName }) => (
      <Tooltip key={displayName}>
        <TooltipTrigger asChild>
          <Icon stroke={1} className='size-10 hover:text-primary' />
        </TooltipTrigger>
        <TooltipContent>{displayName}</TooltipContent>
      </Tooltip>
    ))}
  </div>
)

type HeroActionsProps = Pick<HeroSectionContent, 'callToAction'>

const HeroActions = ({ callToAction }: HeroActionsProps) => {
  const handleScroll = useSmoothScroll()

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      <Button
        size='lg'
        variant='default'
        className='group w-full uppercase sm:max-w-3xs'
        onClick={() => handleScroll(callToAction.primary.href)}>
        {callToAction.primary.label}
      </Button>

      <Button asChild size='lg' variant='outline' className='group w-full uppercase sm:max-w-3xs'>
        <a href={callToAction.secondary.href} target='_blank' rel='noopener noreferrer'>
          {callToAction.secondary.label}
        </a>
      </Button>
    </div>
  )
}

type HeroHeaderProps = Pick<HeroSectionContent, 'sectionTagline' | 'mainHeadline' | 'catchphrase'>

const HeroHeader = ({ sectionTagline, mainHeadline, catchphrase }: HeroHeaderProps) => (
  <div className='flex flex-col gap-6 sm:items-center sm:text-center md:gap-8'>
    <AnimatedShinyText className='text-primary font-medium'>{sectionTagline}</AnimatedShinyText>
    <h1 className='text-balance text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
      {mainHeadline.prefix}{' '}
      <FlipWords words={mainHeadline.highlightedWords} />
    </h1>
    <h2 className='max-w-4xl text-muted-foreground md:text-lg lg:text-xl'>{catchphrase}</h2>
  </div>
)

export const HeroSection = () => {
  const { sectionTagline, mainHeadline, catchphrase, callToAction, technologiesUsed } = heroSectionData

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-24 md:pt-40'>
          <HeroHeader
            sectionTagline={sectionTagline}
            mainHeadline={mainHeadline}
            catchphrase={catchphrase}
          />
          <HeroActions callToAction={callToAction} />
          <HeroTechStack technologiesUsed={technologiesUsed} />
        </div>
      </div>
    </section>
  )
}
