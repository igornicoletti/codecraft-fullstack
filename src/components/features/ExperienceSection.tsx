import { ArrowUpRightIcon, CalendarBlankIcon, CaretRightIcon, DownloadSimpleIcon } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { useEffect, useRef, useState } from 'react'

import { experienceSectionData } from '@/constants/experience'
import type { ExperienceSectionContent, ProfessionalExperience } from '@/types/experience.types'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { LinkPreview } from '@/components/ui/link-preview'
import { Progress } from '@/components/ui/progress'
import { SpinningText } from '@/components/ui/spinning-text'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const AUTOPLAY_DURATION = 10000

type ExperienceCarouselDotsProps = {
  count: number
  current: number
  progress: number
  scrollTo: ((index: number, jump?: boolean) => void) | undefined
}

const ExperienceCarouselDots = ({ count, current, progress, scrollTo }: ExperienceCarouselDotsProps) => (
  <div className='flex w-full max-w-sm gap-2 mx-auto'>
    {Array.from({ length: count }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => scrollTo?.(idx)}
        aria-label={`Go to slide ${idx + 1}`}
        className='flex-1 cursor-pointer outline-none'>
        <Progress value={current === idx + 1 ? progress : 0} />
      </button>
    ))}
  </div>
)

type ExperienceCarouselCardProps = {
  item: ProfessionalExperience
}

const ExperienceCarouselCard = ({ item }: ExperienceCarouselCardProps) => (
  <Card className='relative flex h-full flex-col overflow-hidden'>
    <CardHeader>
      <CardTitle>
        <LinkPreview url={item.websiteUrl} className='inline-flex items-center gap-2 text-lg md:text-xl'>
          {item.organizationName}
          <ArrowUpRightIcon className='text-primary' />
        </LinkPreview>
      </CardTitle>
      <CardDescription className='flex items-center gap-2'>
        <CalendarBlankIcon />
        <span>{item.employmentPeriod}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className='flex-1'>
      <p className='md:text-lg'>{item.roleDescription}</p>
    </CardContent>
    <CardFooter className='mt-auto flex -space-x-3 rtl:space-x-reverse'>
      {item.technologiesUsed.map(({ iconSlug, displayName }) => (
        <Tooltip key={displayName}>
          <TooltipTrigger>
            <Avatar className='p-2 bg-muted ring-2 ring-card transition-transform hover:z-10 hover:scale-105'>
              <AvatarImage src={`https://cdn.simpleicons.org/${iconSlug}`} alt={displayName} />
              <AvatarFallback>{displayName?.[0]}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>{displayName}</TooltipContent>
        </Tooltip>
      ))}
    </CardFooter>
    <BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />
  </Card>
)

type ExperienceMetricsProps = {
  activeExperience: ProfessionalExperience
}

const ExperienceMetrics = ({ activeExperience }: ExperienceMetricsProps) => (
  <div className='flex flex-col gap-6 sm:flex-row lg:flex-col'>
    {activeExperience?.keyAchievements?.map((metric, idx) => (
      <div key={`${activeExperience.organizationName}-${idx}`} className='flex flex-col gap-2 pl-4 border-l border-primary'>
        <div className='flex items-baseline gap-2'>
          <BlurFade key={`${activeExperience.organizationName}-${metric.displayValue}`} delay={0.1 * idx}>
            <span className='text-xl'>{metric.displayValue}</span>
          </BlurFade>
          <span className='text-xl'>{metric.metricLabel}</span>
        </div>
        <span className='text-muted-foreground'>{metric.details}</span>
      </div>
    ))}
  </div>
)

type ExperienceHeaderProps = Pick<ExperienceSectionContent, 'sectionTagline' | 'mainHeading' | 'resumeDownloadAction' | 'careerSummary' | 'externalProfileCta'>

const ExperienceHeader = ({ sectionTagline, mainHeading, resumeDownloadAction, careerSummary, externalProfileCta }: ExperienceHeaderProps) => (
  <div className='relative flex flex-col items-start gap-4 md:gap-6'>
    <div className='absolute top-0 right-0 translate-x-0 -translate-y-1/2'>
      <a href={resumeDownloadAction.fileUrl} download className='group relative flex items-center justify-center size-24 md:size-40 rounded-full border border-secondary/50 bg-background/50 backdrop-blur-md transition-all duration-300 hover:border-secondary hover:bg-secondary/30 hover:scale-105 cursor-pointer'>
        <SpinningText radius={6} duration={12} className='font-medium text-sm md:text-base uppercase tracking-widest text-secondary transition-colors duration-400 group-hover:text-primary'>
          {resumeDownloadAction.circleText}
        </SpinningText>
        <div className='absolute inset-0 flex items-center justify-center'>
          <DownloadSimpleIcon weight='bold' className='size-8 text-secondary transition-all duration-400 group-hover:text-primary group-hover:scale-105' />
        </div>
      </a>
    </div>
    <AnimatedShinyText className='text-primary font-medium'>{sectionTagline}</AnimatedShinyText>
    <h2 className='text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl'>
      {mainHeading.prefix}{' '}
      <br className='sm:hidden' />
      {mainHeading.highlightedText}
    </h2>
    <p className='max-w-4xl text-muted-foreground md:text-lg'>{careerSummary}</p>
    <Button asChild variant='link' className='group has-[>svg]:px-0'>
      <a href={externalProfileCta.url} target='_blank' rel='noopener noreferrer'>
        {externalProfileCta.label}
        <CaretRightIcon className='text-primary transition-transform duration-300 group-hover:translate-x-1' />
      </a>
    </Button>
  </div>
)

export const ExperienceSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0)

  const fadePlugin = useRef(Fade())
  const autoplayPlugin = useRef(Autoplay({
    delay: AUTOPLAY_DURATION,
    stopOnInteraction: false
  }))

  useEffect(() => {
    if (!api) return

    const newCount = api.scrollSnapList().length
    setCount(newCount)
    setCurrent(api.selectedScrollSnap() + 1)

    let animationFrameId: number
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      const progressValue = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100)
      setProgress(progressValue)

      if (elapsed < AUTOPLAY_DURATION) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setProgress(100)
      }
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setProgress(0)
      startTime = null
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(animate)
    }

    api.on('select', onSelect)
    api.on('reInit', onSelect)

    onSelect()

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
      cancelAnimationFrame(animationFrameId)
    }
  }, [api])

  const {
    sectionTagline,
    mainHeading,
    resumeDownloadAction,
    careerSummary,
    externalProfileCta,
    careerHistory
  } = experienceSectionData

  const activeExperience: ProfessionalExperience = careerHistory[current - 1] || careerHistory[0]

  return (
    <section id='experience' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-24'>
          <ExperienceHeader
            sectionTagline={sectionTagline}
            mainHeading={mainHeading}
            resumeDownloadAction={resumeDownloadAction}
            careerSummary={careerSummary}
            externalProfileCta={externalProfileCta}
          />
          <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-3'>
            <div className='lg:col-span-2 min-w-0'>
              <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                plugins={[autoplayPlugin.current, fadePlugin.current]}
                className="w-full overflow-hidden">
                <CarouselContent>
                  {careerHistory.map((experienceItem, idx) => (
                    <CarouselItem key={idx}>
                      <ExperienceCarouselCard item={experienceItem} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <ExperienceMetrics activeExperience={activeExperience} />
            <div className='lg:col-span-2'>
              <ExperienceCarouselDots
                count={count}
                current={current}
                progress={progress}
                scrollTo={api?.scrollTo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
