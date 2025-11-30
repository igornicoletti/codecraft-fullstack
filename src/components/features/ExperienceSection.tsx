import { ArrowUpRightIcon, CalendarBlankIcon } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { useEffect, useRef, useState } from 'react'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { LinkPreview } from '@/components/ui/link-preview'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { experienceData } from '@/constants/experience'
import { cn } from '@/lib/utils'

export const ExperienceSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const autoplayPlugin = useRef(Autoplay({ delay: 12000 }))
  const fadePlugin = useRef(Fade())

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  const { label, headline, description, positions } = experienceData
  const activeExperience = positions[current - 1] || positions[0]

  return (
    <section id='experience' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-24 md:pt-40'>
          {/* Section Header */}
          <div className='flex flex-col gap-4 md:gap-6'>
            <AnimatedShinyText className='text-primary font-medium'>
              {label}
            </AnimatedShinyText>
            <h2 className='text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {headline.prefix}{' '}
              <br className='sm:hidden' />
              {headline.dynamicWords}
            </h2>
            <p className='max-w-4xl text-muted-foreground md:text-lg'>{description}</p>
          </div>
          {/* Work Position */}
          <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-3'>
            {/* Carousel Column */}
            <div className='lg:col-span-2'>
              <Carousel setApi={setApi} opts={{ loop: true, containScroll: false, duration: 30 }} plugins={[autoplayPlugin.current, fadePlugin.current]}>
                <CarouselContent>
                  {positions.map((item, idx) => (
                    <CarouselItem key={idx}>
                      <Card className='relative flex h-full flex-col overflow-hidden'>
                        <CardHeader>
                          <CardTitle>
                            <LinkPreview url={item.websiteLink} className='inline-flex items-center gap-2 text-lg md:text-xl'>
                              {item.organizationName}
                              <ArrowUpRightIcon className='text-muted-foreground' />
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
                                <Avatar className='p-2 bg-muted ring-2 ring-card transition-transform hover:z-10 hover:scale-110'>
                                  <AvatarImage
                                    src={`https://cdn.simpleicons.org/${slug}?viewbox=auto&size=32`}
                                    alt={label} />
                                  <AvatarFallback>{label?.[0]}</AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              <TooltipContent>{label}</TooltipContent>
                            </Tooltip>
                          ))}
                        </CardFooter>
                        <BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Metrics Column */}
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

            {/* Navigation Dots */}
            <div className='lg:col-span-2'>
              <div className='flex w-full max-w-sm gap-2 mx-auto'>
                {Array.from({ length: count }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className='group py-2 flex-1 cursor-pointer'>
                    <div className={cn('h-1 w-full rounded-full transition-all',
                      current === idx + 1 ? 'bg-primary' : 'bg-secondary/50 group-hover:bg-secondary/80')} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
