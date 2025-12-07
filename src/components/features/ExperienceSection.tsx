import { ArrowUpRightIcon, CalendarBlankIcon, CaretRightIcon, DownloadSimpleIcon } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { useEffect, useRef, useState } from 'react'

import { experienceData } from '@/constants/experience'
import { cn } from '@/lib/utils'
import type { ExperiencePosition } from '@/types/experience.types'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { LinkPreview } from '@/components/ui/link-preview'
import { SpinningText } from '@/components/ui/spinning-text'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type ExperienceCarouselDotsProps = {
  count: number
  current: number
  scrollTo: ((index: number, jump?: boolean) => void) | undefined
}

const ExperienceCarouselDots = ({ count, current, scrollTo }: ExperienceCarouselDotsProps) => (
  <div className='flex w-full max-w-sm gap-2 mx-auto'>
    {Array.from({ length: count }).map((_, idx) => (
      <button key={idx} onClick={() => scrollTo?.(idx)} aria-label={`Go to slide ${idx + 1}`} className='group py-2 flex-1 cursor-pointer'>
        <div className={cn('h-1 w-full rounded-full transition-all', current === idx + 1 ? 'bg-primary' : 'bg-secondary/50 group-hover:bg-secondary/80')} />
      </button>
    ))}
  </div>
)

type ExperienceCarouselCardProps = {
  item: ExperiencePosition
}

const ExperienceCarouselCard = ({ item }: ExperienceCarouselCardProps) => (
  <Card className='relative flex h-full flex-col overflow-hidden'>
    <CardHeader>
      <CardTitle>
        <LinkPreview url={item.websiteLink} className='inline-flex items-center gap-2 text-lg md:text-xl'>
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
      <p className='md:text-lg'>{item.projectDescription}</p>
    </CardContent>
    <CardFooter className='mt-auto flex -space-x-3 rtl:space-x-reverse'>
      {item.techStack.map(({ slug, label }) => (
        <Tooltip key={label}>
          <TooltipTrigger>
            <Avatar className='p-2 bg-muted ring-2 ring-card transition-transform hover:z-10 hover:scale-105'>
              <AvatarImage src={`https://cdn.simpleicons.org/${slug}`} alt={label} />
              <AvatarFallback>{label?.[0]}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </CardFooter>
    <BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />
  </Card>
)

type ExperienceMetricsProps = {
  activeExperience: ExperiencePosition
}

const ExperienceMetrics = ({ activeExperience }: ExperienceMetricsProps) => (
  <div className='flex flex-col gap-6 sm:flex-row lg:flex-col'>
    {activeExperience?.impactMetrics?.map((metric, idx) => (
      <div key={`${activeExperience.organizationName}-${idx}`} className='flex flex-col gap-2 pl-4 border-l border-primary'>
        <div className='flex items-baseline gap-2'>
          <BlurFade key={metric.value} delay={0.1 * idx}>
            <span className='text-xl md:text-2xl'>{metric.value}</span>
          </BlurFade>
          <span className='text-xl md:text-2xl'>{metric.context}</span>
        </div>
        <span className='text-muted-foreground'>{metric.description}</span>
      </div>
    ))}
  </div>
)

type ExperienceHeaderProps = Pick<typeof experienceData, 'label' | 'headline' | 'spinning' | 'description' | 'action'>

const ExperienceHeader = ({ label, headline, spinning, description, action }: ExperienceHeaderProps) => (
  <div className='relative flex flex-col items-start gap-4 md:gap-6'>
    <div className='absolute top-0 right-0 translate-x-0 -translate-y-1/2'>
      <a href={spinning.path} download className='group relative flex items-center justify-center size-24 md:size-40 rounded-full border border-secondary/50 bg-background/50 backdrop-blur-md transition-all duration-300 hover:border-secondary hover:bg-secondary/30 hover:scale-105 cursor-pointer'>
        <SpinningText radius={6} duration={12} className='font-medium text-sm md:text-base uppercase tracking-widest text-secondary transition-colors duration-400 group-hover:text-primary'>
          {spinning.animationText}
        </SpinningText>
        <div className='absolute inset-0 flex items-center justify-center'>
          <DownloadSimpleIcon weight='bold' className='size-8 text-secondary transition-all duration-400 group-hover:text-primary group-hover:scale-105' />
        </div>
      </a>
    </div>
    <AnimatedShinyText className='text-primary font-medium'>{label}</AnimatedShinyText>
    <h2 className='text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl'>
      {headline.prefix}{' '}
      <br className='sm:hidden' />
      {headline.dynamicWords}
    </h2>
    <p className='max-w-4xl text-muted-foreground md:text-lg'>{description}</p>
    <Button asChild variant='link' className='group has-[>svg]:px-0'>
      <a href={action.path} target='_blank' rel='noopener noreferrer'>
        {action.label}
        <CaretRightIcon className='transition-transform duration-300 group-hover:translate-x-1 text-primary' />
      </a>
    </Button>
  </div>
)

export const ExperienceSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const autoplayPlugin = useRef(Autoplay({ delay: 12000 }))
  const fadePlugin = useRef(Fade())

  useEffect(() => {
    if (!api) return
    const newCount = api.scrollSnapList().length
    setCount(newCount)

    const updateCurrent = () => setCurrent(api.selectedScrollSnap() + 1)
    updateCurrent()

    api.on('select', updateCurrent)

    return () => {
      api.off('select', updateCurrent)
    }
  }, [api])

  const { label, headline, spinning, description, action, positions } = experienceData
  const activeExperience: ExperiencePosition = positions[current - 1] || positions[0]

  return (
    <section id='experience' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-24'>
          <ExperienceHeader
            label={label}
            headline={headline}
            spinning={spinning}
            description={description}
            action={action} />
          <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
              <Carousel
                setApi={setApi}
                opts={{ loop: true, containScroll: false }}
                plugins={[autoplayPlugin.current, fadePlugin.current]}>
                <CarouselContent>
                  {positions.map((item, idx) => (
                    <CarouselItem key={idx}>
                      <ExperienceCarouselCard item={item} />
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
                scrollTo={api?.scrollTo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
