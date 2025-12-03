import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { projectData } from '@/constants/project'
import { CaretRightIcon } from '@phosphor-icons/react'

export const ProjectSection = () => {
  const { label, headline, description, action } = projectData

  return (
    <section id='projects' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-24'>
          {/* Section Header */}
          <div className='flex flex-col items-center text-center gap-4 md:gap-6'>
            <AnimatedShinyText className='text-primary font-medium'>
              {label}
            </AnimatedShinyText>
            <h2 className='text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {headline}
            </h2>
            <p className='max-w-4xl text-muted-foreground md:text-lg'>{description}</p>
            <Button asChild variant='link' className='group has-[>svg]:px-0'>
              <a href={action.path} target='_blank' rel='noopener noreferrer'>
                {action.label}
                <CaretRightIcon className='transition-transform duration-300 group-hover:translate-x-1 text-primary' />
              </a>
            </Button>
          </div>
          <SlideScale />
        </div>
      </div>
    </section>
  )
}


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function SlideScale() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <div className="w-full flex flex-col items-center overflow-hidden"> {/* 👈 impede overflow horizontal */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full overflow-hidden" /* 👈 reforço */
      >
        <CarouselContent className="-ml-2 md:-ml-4"> {/* 👈 controla spacing interno */}
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "pl-2 md:pl-4", // spacing responsivo
                "basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
              )}
            >
              <Card
                className={cn(
                  "transition-transform duration-500",
                  index !== current - 1 && "scale-95 opacity-80"
                )}
              >
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-4">
          <CarouselPrevious variant="ghost" className="static translate-y-0" />
          <CarouselNext variant="ghost" className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  )
}
