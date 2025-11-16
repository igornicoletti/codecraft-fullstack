import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from '@/components/ui/carousel'
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
  const plugin = useRef(Autoplay({ delay: 8000 }))

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id='experience' className='relative overflow-hidden py-16 md:py-32'>
      <div className='container mx-auto max-w-5xl px-6'>

        {/* 1. Title */}
        <h2 className='text-3xl md:text-4xl mb-4 text-left leading-tight'>
          {experienceData.title}
        </h2>

        {/* 2. Description */}
        <p className='text-base md:text-lg mb-12 text-left max-w-5xl'>
          {experienceData.description}
        </p>

        {/* 3. Carousel */}
        <Carousel setApi={setApi} opts={{ loop: true }} plugins={[plugin.current]}>
          <CarouselContent>
            {experienceData.items.map((item, idx) => (
              <CarouselItem key={idx}>
                <Card className='relative overflow-hidden h-full'>
                  <CardHeader>
                    <CardTitle>{item.company}</CardTitle>
                    <CardDescription className='flex items-center gap-2'>
                      <CalendarBlankIcon />
                      <span>{item.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='px-6'>
                    <p className='text-base md:text-lg text-muted-foreground'>{item.description}</p>
                  </CardContent>
                  <CardFooter className='mt-auto flex -space-x-2'>
                    {item.stacks.map(({ icon: Icon, label }) => (
                      <Tooltip key={label}>
                        <TooltipTrigger asChild>
                          <Button variant='secondary' size='icon' className='rounded-full border-2 border-card'>
                            <Icon stroke={0.8} className='size-5' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{label}</TooltipContent>
                      </Tooltip>
                    ))}
                  </CardFooter>
                  <BorderBeam duration={8} size={220} className='from-violet-500 via-purple-500 to-transparent' />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant='secondary' className='top-[calc(100%+0.5rem)] translate-y-0 left-0' />
          <CarouselNext variant='secondary' className='top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full' />
        </Carousel>
        <div className='mt-4 flex items-center justify-end gap-2'>
          {Array.from({ length: count }).map((_, idx) => (
            <Button
              key={idx}
              variant='secondary'
              onClick={() => api?.scrollTo(idx)}
              className={cn('h-1 w-8 p-0', { 'bg-secondary-foreground': current === idx + 1 })} />
          ))}
        </div>
      </div>
    </section>
  )
}

{/* 4. Timeline */ }
{/* <ul className='w-full'>
  {experienceData.items.map((item, idx) => (
    <li key={idx} className='relative not-last:pb-12'>
      <div className='absolute left-0.5 top-2.5 h-full border' />
      <div className='absolute left-0 top-2.5 size-2 bg-background border-2 border-ring rounded-full' />
      <div className='flex flex-col gap-2 pl-6'>
        <h3 className='text-lg md:text-xl font-medium'>{item.company}</h3>
        <div className='flex items-center gap-2'>
          <CalendarBlankIcon />
          <span>{item.period}</span>
        </div>
        <p className='text-base md:text-lg text-muted-foreground'>{item.description}</p>
        <div className='mt-2 flex flex-wrap gap-2'>
          {item.stacks.map(({ icon: Icon, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger>
                <Icon size={24} stroke={0.8} />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </li>
  ))}
</ul> */}
