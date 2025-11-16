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
  const plugin = useRef(Autoplay({ delay: 11000 }))

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const currentExperience = experienceData.items[current - 1] || experienceData.items[0]

  return (
    <section id='experience' className='relative overflow-hidden py-16 md:py-32'>
      <div className='container mx-auto xl:max-w-7xl px-6'>

        {/* 1. Title */}
        <h2 className='text-4xl md:text-5xl mb-4 text-left text-balance leading-tight'>
          {experienceData.title}
        </h2>

        {/* 2. Description */}
        <p className='text-lg md:text-xl mb-12 text-left text-balance max-w-4xl'>
          {experienceData.description}
        </p>

        <div className='grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 lg:grid-cols-3 items-center'>
          {/* 3. Carousel */}
          <div className='md:col-span-2'>
            <Carousel setApi={setApi} opts={{ loop: true }} plugins={[plugin.current]}>
              <CarouselContent>
                {experienceData.items.map((item, idx) => (
                  <CarouselItem key={idx}>
                    {/* Card: Sizing, Layout, Positioning, Border */}
                    <Card className='relative flex flex-col h-full overflow-hidden'>
                      <CardHeader>
                        <CardTitle>{item.company}</CardTitle>
                        {/* Period/Date: Layout, Alignment, Spacing */}
                        <CardDescription className='flex items-center gap-2'>
                          <CalendarBlankIcon />
                          <span>{item.period}</span>
                        </CardDescription>
                      </CardHeader>
                      {/* Description: Sizing, Padding, Typography */}
                      <CardContent className='px-6'>
                        <p className='text-base md:text-lg text-muted-foreground'>{item.description}</p>
                      </CardContent>
                      {/* Stacks/Tags: Layout, Spacing, Positioning */}
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
                      <BorderBeam duration={11} size={220} className='from-violet-500 via-purple-500 to-transparent' />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* 4. Metrics */}
          <div className='md:col-span-2 lg:col-span-1'>
            <div className="flex flex-col w-full gap-6 sm:flex-row lg:flex-col lg:sticky lg:top-8">
              {currentExperience?.metrics?.map((metric, index) => (
                <div key={index} className="flex flex-1 items-center gap-4">
                  <div className="h-10 w-0.5 rounded-3xl bg-secondary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold">{metric.value}</span>
                    <span className='text-base md:text-lg'>{metric.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Dots (Carousel Navigation) */}
          <div className='md:col-span-2'>
            <div className='flex w-full max-w-sm mx-auto gap-3'>
              {Array.from({ length: count }).map((_, idx) => (
                <Button key={idx} variant='ghost' onClick={() => api?.scrollTo(idx)} className="h-auto p-0 flex-1 transition-opacity duration-300 hover:opacity-80">
                  <div className={cn('h-1 w-full rounded bg-secondary transition-colors duration-300', { 'bg-primary': current === idx + 1 })} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
