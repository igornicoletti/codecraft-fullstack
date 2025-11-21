import { CalendarBlankIcon } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { experienceData } from '@/data/experience'
import { cn } from '@/lib/utils'

export const ExperienceSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const plugin = useRef(Autoplay({ delay: 12000, stopOnInteraction: true }))

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  const { title, description, business } = experienceData

  const activeExperience = business[current - 1] || business[0]

  return (
    <section id="experience" className="relative overflow-hidden py-12 md:pt-36">
      <div className="container mx-auto grid gap-12 px-6 xl:max-w-7xl">
        <div className="flex flex-col text-left gap-6">   {/* Section Header */}
          <h2 className="text-4xl tracking-normal lg:text-5xl">{title}</h2>
          <p className="max-w-4xl font-light md:text-lg">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">   {/* Carousel Column */}
            <Carousel setApi={setApi} opts={{ loop: true }} plugins={[plugin.current]}>
              <CarouselContent>
                {business.map((item, idx) => (
                  <CarouselItem key={idx}>
                    <Card className="relative flex h-full flex-col overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-xl">{item.company}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <CalendarBlankIcon />
                          <span>{item.period}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='flex-1'>
                        <p className="leading-relaxed text-muted-foreground md:text-balance md:text-lg">
                          {item.description}
                        </p>
                      </CardContent>
                      <CardFooter className="mt-auto flex -space-x-3 rtl:space-x-reverse">
                        {item.stacks.map(({ slug, label }) => (
                          <Tooltip key={label}>
                            <TooltipTrigger>
                              <Avatar className="p-1.5 bg-secondary ring-2 ring-card transition-transform hover:z-10 hover:scale-110">
                                <AvatarImage src={`https://cdn.simpleicons.org/${slug}?viewbox=auto&size=32`} alt={label} />
                                <AvatarFallback>{label?.[0]}</AvatarFallback>
                              </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>{label}</TooltipContent>
                          </Tooltip>
                        ))}
                      </CardFooter>
                      <BorderBeam duration={10} size={250} className="from-transparent via-primary to-transparent" />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row lg:flex-col lg:gap-8">    {/* Metrics Column */}
            {activeExperience?.metrics?.map((metric, idx) => (
              <div key={`${activeExperience.company}-${idx}`} className="flex flex-1 flex-col gap-2 border-l-2 border-muted pl-4 transition-all hover:border-primary">
                <div className="flex items-baseline gap-2">
                  <BlurFade key={metric.value} delay={0.1 * idx} duration={0.5}>
                    <span className="text-lg font-medium">{metric.value}</span>
                  </BlurFade>
                  <span className="text-lg font-medium">{metric.result}</span>
                </div>
                <span className="text-muted-foreground">{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">   {/* Navigation Dots */}
            <div className="flex w-full max-w-sm gap-2 mx-auto">
              {Array.from({ length: count }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className="group flex h-4 flex-1 cursor-pointer items-center justify-center"
                  aria-label={`Go to slide ${idx + 1}`}>
                  <div className={cn(
                    "h-1 w-full rounded-full transition-colors duration-300",
                    current === idx + 1 ? "bg-primary" : "bg-muted group-hover:bg-primary/50"
                  )} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
