import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projectData } from '@/constants/project'
import { CaretRightIcon, EyeIcon, GithubLogoIcon } from '@phosphor-icons/react'

export const ProjectSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const { label, headline, description, action } = projectData

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  const projects = Array.from({ length: 5 }).map((_, index) => ({
    id: index + 1,
    title: `Projeto Incrível ${index + 1}`,
    description: "Este é um projeto incrível desenvolvido para demonstrar Este é um projeto incrível desenvolvido para demonstrar Este é um projeto incrível desenvolvido para demonstrar o uso de componentes modernos, animações fluidas, integração de APIs e design responsivo.",
    image: `https://picsum.photos/seed/${index + 10}/600/400`,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/repo",
  }))

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto xl:max-w-7xl px-6">
        <div className="grid gap-12 py-24">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <AnimatedShinyText className="text-primary font-medium">
              {label}
            </AnimatedShinyText>
            <h2 className="text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="max-w-4xl text-muted-foreground md:text-lg">{description}</p>
            <Button asChild variant="link" className="group has-[>svg]:px-0">
              <a href={action.path} target="_blank" rel="noopener noreferrer">
                {action.label}
                <CaretRightIcon className="transition-transform duration-300 group-hover:translate-x-1 text-primary" />
              </a>
            </Button>
          </div>

          {/* Carousel */}
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full overflow-hidden">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                  <Card className={cn("relative flex h-full flex-col overflow-hidden", index !== current - 1 && "scale-95 opacity-80")}>
                    <div className="relative w-full h-48 overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="line-clamp-5">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 w-full">
                        <Button asChild variant="secondary">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <GithubLogoIcon />
                            Explorar repositório
                          </a>
                        </Button>
                        <Button asChild variant="outline">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <EyeIcon />
                            Visualizar projeto
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                    {index === current - 1 && (
                      <BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-6 mt-8">
              <CarouselPrevious variant="link" className="static translate-y-0" />
              <span className="text-xs text-muted-foreground select-none">
                {current} / {projects.length}
              </span>
              <CarouselNext variant="link" className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
