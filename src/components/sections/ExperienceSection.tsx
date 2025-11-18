import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { experienceData } from '@/data/experience'
import { cn } from '@/lib/utils'
import { CalendarBlankIcon } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'

export const ExperienceSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const plugin = useRef(Autoplay({
    delay: 12000,
    stopOnInteraction: true,
  }))

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  const currentExperience = experienceData.items[current - 1] || experienceData.items[0]

  return (
    <section id='experience' className='relative overflow-hidden py-16 md:py-32'>
      <div className='container mx-auto px-6 xl:max-w-7xl'>
        {/* 1. Title */}
        <h3 className='mb-4 font-medium text-pretty text-2xl md:text-4xl'>{experienceData.title}</h3>
        {/* 2. Description */}
        <p className='mb-12 text-balance text-base md:text-lg'>{experienceData.description}</p>
        {/* 3. Carousel Navigation */}
        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-3'>
          {/* Carousel */}
          <div className='col-span-1 lg:col-span-2'>
            <Carousel setApi={setApi} opts={{ loop: true }} plugins={[plugin.current]}>
              <CarouselContent>
                {experienceData.items.map((item, idx) => (
                  <CarouselItem key={idx}>
                    <Card className='relative flex h-full flex-col overflow-hidden'>
                      <CardHeader>
                        <CardTitle>{item.company}</CardTitle>
                        <CardDescription className='flex items-center gap-2'>
                          <CalendarBlankIcon />
                          <span>{item.period}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='px-6'>
                        <p className='text-muted-foreground text-balance text-base md:text-lg'>{item.description}</p>
                      </CardContent>
                      <CardFooter className='mt-auto flex -space-x-4 rtl:space-x-reverse'>
                        {item.stacks.map(({ slug, label }) => (
                          <Tooltip key={label}>
                            <TooltipTrigger asChild>
                              <Button variant='secondary' size='icon' className='rounded-full border-2 border-card'>
                                <img src={`https://cdn.simpleicons.org/${slug}?viewbox=auto&size=16`} alt={`${label} icon`} />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>{label}</TooltipContent>
                          </Tooltip>
                        ))}
                      </CardFooter>
                      <BorderBeam duration={8} size={300} className='from-transparent via-accent to-transparent' />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          {/* Metrics */}
          <div className='col-span-1'>
            <div className='flex w-full flex-col gap-6 md:flex-row lg:flex-col'>
              {currentExperience?.metrics?.map((metric, idx) => (
                <div key={idx} className='flex flex-1 flex-col gap-1 border-l pl-4'>
                  <div className='flex items-baseline gap-1'>
                    <BlurFade key={metric.value} delay={0.25 * idx} blur='0px'>
                      <span className='font-medium text-base md:text-lg'>{metric.value}</span>
                    </BlurFade>
                    <span className='font-medium'>{metric.result}</span>
                  </div>
                  <span className='text-muted-foreground text-balance text-sm md:text-base'>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className='col-span-1 lg:col-span-2'>
            <div className='flex gap-2 sm:gap-4'>
              {Array.from({ length: count }).map((_, idx) => (
                <Button key={idx} variant='ghost' onClick={() => api?.scrollTo(idx)} className='flex-1 h-0 px-0 hover:bg-transparent dark:hover:bg-transparent'>
                  <div className={cn('h-1 w-full rounded bg-secondary transition-colors duration-300', { 'bg-indigo-500': current === idx + 1 })} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
