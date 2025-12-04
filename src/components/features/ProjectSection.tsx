import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { projectData } from '@/constants/project'
import { CaretRightIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { ArrowUpRightIcon } from 'lucide-react'


interface Project {
  id: number
  title: string
  description: string
  image: string
  liveUrl: string
  repoUrl: string
}

const generateProjects = (count: number): Project[] =>
  Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    title: `codecraft-fullstack`,
    description:
      "Lorem ipsum dolor sit amet. Non totam exercitationem et repudiandae Quis non distinctio expedita! Sed quam quos non tenetur veniam sed perferendis labore ut architecto vero rem aperiam nihil ad recusandae quia non voluptatem tenetur. Aut odit excepturi 33 quia perspiciatis ut adipisci tenetur aut cumque velit ut repellendus exercitationem et cupiditate expedita in omnis nemo.",
    image: `/images/screenshot.png`,
    liveUrl: "https://codecraft-fullstack.vercel.app/",
    repoUrl: "https://github.com/igornicoletti/codecraft-fullstack",
  }))

const projects: Project[] = generateProjects(5)

interface ProjectCardProps {
  project: Project
  isActive: boolean
}

const ProjectCard = ({ project, isActive }: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col overflow-hidden transition-all duration-300",
        !isActive && "scale-95 opacity-80"
      )}
    >
      <div className="relative w-full h-48 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "object-cover w-full h-full transition-transform duration-500 group-hover:scale-105",
            !isActive && "blur-xs"
          )}
        />
      </div>

      <CardHeader>
        <CardTitle>
          <a href={project.liveUrl} className='inline-flex items-center gap-2 text-lg md:text-xl'>
            {project.title}
            <ArrowUpRightIcon className='text-primary' />
          </a>
        </CardTitle>
        <CardDescription className="line-clamp-4">{project.description}</CardDescription>
      </CardHeader>

      <CardContent />

      <CardFooter>
        <Button asChild size='lg' variant="secondary" className='w-full'>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <GithubLogoIcon />
            Explorar repositório
          </a>
        </Button>
      </CardFooter>

      {isActive && (
        <BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />
      )}
    </Card>
  )
}


export const ProjectSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const { label, headline, description, action } = projectData

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)

    const onSelect = () => setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto xl:max-w-7xl px-6">
        <div className="grid gap-12 py-24">

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

          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full overflow-hidden">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    project={project}
                    isActive={index === current - 1}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-6 mt-8">
              <CarouselPrevious variant="link" className="static translate-y-0" />
              <span className="text-sm font-medium text-muted-foreground select-none">
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
