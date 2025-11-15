import { BorderBeam } from '@/components/ui/border-beam'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from '@/components/ui/carousel'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { experienceData } from '@/data/experience'
import { cn } from '@/lib/utils'
import { CalendarBlankIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export const CarouselWithFooter = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id='carousel' className='relative overflow-hidden py-16 md:py-32'>
      <div className='container mx-auto max-w-5xl px-6'>
        <Carousel setApi={setApi} className='w-full'>
          <CarouselContent>
            {experienceData.items.map((item, idx) => (
              <CarouselItem key={idx}>
                <Card className='relative overflow-hidden'>
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
                  <CardFooter className='flex flex-wrap gap-1'>
                    {item.stacks.map(({ icon: Icon, label }) => (
                      <Tooltip key={label}>
                        <TooltipTrigger>
                          <Icon size={24} stroke={0.8} className='hover:text-ring transition-colors' />
                        </TooltipTrigger>
                        <TooltipContent>{label}</TooltipContent>
                      </Tooltip>
                    ))}
                  </CardFooter>
                  <BorderBeam duration={8} size={180} className='from-violet-500 via-purple-500 to-transparent' />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant='secondary' className='top-[calc(100%+0.5rem)] translate-y-0 left-0' />
          <CarouselNext variant='secondary' className='top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full' />
        </Carousel>
        <div className='mt-4 flex items-center justify-end gap-2'>
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn('h-1 w-8 rounded-full bg-secondary', {
                'bg-secondary-foreground': current === index + 1,
              })} />
          ))}
        </div>
      </div>
    </section>
  )
}
