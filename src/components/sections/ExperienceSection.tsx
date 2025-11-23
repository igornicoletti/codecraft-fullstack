import { CalendarBlankIcon } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
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

  const plugin = useRef(
    Autoplay({
      delay: 12000,
      stopOnInteraction: true
    })
  )

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  const { label, headline, description, positions } = experienceData
  const activeExperience = positions[current - 1] || positions[0]

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="grid gap-12 py-24 md:pt-36">
        {/* Section Header */}
        <div className="flex flex-col text-left gap-2 md:gap-4">
          <AnimatedShinyText className="font-medium tracking-tight text-primary md:text-lg">
            {label}
          </AnimatedShinyText>

          <h2 className="tracking-tight text-balance text-2xl sm:text-3xl md:text-4xl">
            {headline}
          </h2>

          <p className="max-w-4xl text-muted-foreground md:text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
          {/* Carousel Column */}
          <div className="lg:col-span-2">
            <Carousel setApi={setApi} opts={{ loop: true }} plugins={[plugin.current]}>
              <CarouselContent>
                {positions.map((item, idx) => (
                  <CarouselItem key={idx}>
                    <Card className="relative flex h-full flex-col overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-lg md:text-xl">{item.organizationName}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <CalendarBlankIcon />
                          <span>{item.employmentPeriod}</span>
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <p className="md:text-lg">{item.projectDescription}</p>
                      </CardContent>

                      <CardFooter className="mt-auto flex -space-x-3 rtl:space-x-reverse">
                        {item.techStack.map(({ slug, label }) => (
                          <Tooltip key={label}>
                            <TooltipTrigger>
                              <Avatar className="p-2 bg-secondary ring-2 ring-card transition-transform hover:z-10 hover:scale-110">
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

                      <BorderBeam duration={10} size={250} className="from-transparent via-primary to-transparent" />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Metrics Column */}
          <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
            {activeExperience?.impactMetrics?.map((metric, idx) => (
              <div key={`${activeExperience.organizationName}-${idx}`}
                className="flex flex-col gap-2 ml-2 pl-4 border-l-2 border-secondary/50 transition-all hover:border-primary">
                <div className="flex items-baseline gap-2">
                  <BlurFade key={metric.value} delay={0.1 * idx} duration={0.5}>
                    <span className="font-medium md:text-lg">{metric.value}</span>
                  </BlurFade>
                  <span className="font-medium md:text-lg">{metric.context}</span>
                </div>
                <span className="text-muted-foreground">{metric.description}</span>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="lg:col-span-2">
            <div className="flex w-full max-w-sm gap-2 mx-auto">
              {Array.from({ length: count }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className="group py-2 flex-1 cursor-pointer"
                  aria-label={`Go to slide ${idx + 1}`}>
                  <div className={cn('h-1 w-full rounded-full transition-all', current === idx + 1
                    ? 'bg-primary'
                    : 'bg-secondary/50 group-hover:bg-secondary/30')} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
