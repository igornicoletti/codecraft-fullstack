import { ArrowUpRightIcon, CaretRightIcon } from '@phosphor-icons/react'
import { useEffect, useState, type HTMLAttributes } from 'react'

import { projectData } from '@/constants/project'
import { cn } from '@/lib/utils'
import type { ProjectCardStack, ProjectSectionData } from '@/types/project.types'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import { LinkPreview } from '@/components/ui/link-preview'

type CardPosition = 'center' | 'left' | 'right'

interface ProjectCardProps {
  project: ProjectCardStack
  isActive: boolean
  position: CardPosition
}

const ProjectCard = ({ project, isActive, position }: ProjectCardProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const width = 1920
    const height = 1080

    const params = new URLSearchParams({
      url: project.liveUrl,
      screenshot: 'true',
      meta: 'false',
      embed: 'screenshot.url',
      colorScheme: 'dark',
      'viewport.isMobile': 'true',
      'viewport.deviceScaleFactor': '1',
      'viewport.width': width.toString(),
      'viewport.height': height.toString(),
    }).toString()

    const microlinkUrl = `https://api.microlink.io/?${params}`

    setImageUrl(microlinkUrl)
  }, [project.liveUrl])

  const transformStyle = {
    left: 'translate3d(0px, 0px, -100px) rotateY(25deg)',
    center: 'translate3d(0px, 0px, 0px) rotateY(0deg)',
    right: 'translate3d(0px, 0px, -100px) rotateY(-25deg)',
  }[position]

  return (
    <Card className={cn('relative flex w-full max-w-md h-full flex-col overflow-hidden transition-all duration-300', !isActive && 'blur-xs scale-95')}
      style={{ transform: transformStyle, zIndex: isActive ? 10 : 0 }}>
      <div className='relative w-full h-full overflow-hidden group'>
        {imageUrl && (
          <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
            <img
              src={imageUrl}
              alt={project.title}
              loading='lazy'
              className={cn('object-cover w-full h-full scale-95 transition-transform duration-400', isActive && ' group-hover:scale-100')}
              style={{ borderRadius: '0.6125rem' }} />
          </a>
        )}
      </div>
      <CardHeader>
        <CardTitle>
          <LinkPreview url={project.repoUrl} className='flex items-center gap-2'>
            {project.title}
            <ArrowUpRightIcon className='text-primary' />
          </LinkPreview>
        </CardTitle>
        <CardDescription className='line-clamp-5'>{project.description}</CardDescription>
      </CardHeader>
      {isActive && (<BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />)}
    </Card>
  )
}

interface ProjectCarouselDotsProps extends HTMLAttributes<HTMLDivElement> {
  current: number
  totalSlides: number
}

const ProjectCarouselDots = ({ current, totalSlides, ...props }: ProjectCarouselDotsProps) => (
  <div className='flex items-center justify-center gap-6 mt-8' {...props}>
    <CarouselPrevious variant='link' className='text-primary static translate-y-0' />
    <span className='text-sm select-none'>{current} / {totalSlides}</span>
    <CarouselNext variant='link' className='text-primary static translate-y-0' />
  </div>
)

type ProjectHeaderProps = Pick<ProjectSectionData, 'label' | 'headline' | 'description' | 'action'>

const ProjectHeader = ({ label, headline, description, action }: ProjectHeaderProps) => (
  <div className='flex flex-col items-center text-center gap-4 px-6 md:gap-6'>
    <AnimatedShinyText className='text-primary font-medium'>{label}</AnimatedShinyText>
    <h2 className='text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl'>{headline}</h2>
    <p className='max-w-4xl text-muted-foreground md:text-lg'>{description}</p>
    <Button asChild variant='link' className='group has-[>svg]:px-0'>
      <a href={action.path} target='_blank' rel='noopener noreferrer'>
        {action.label}
        <CaretRightIcon className='transition-transform duration-300 group-hover:translate-x-1 text-primary' />
      </a>
    </Button>
  </div>
)

export const ProjectSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
    const onSelect = () => setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const { label, headline, description, action, projects } = projectData as ProjectSectionData

  const getCardPosition = (index: number, current: number, total: number): CardPosition => {
    const activeIndex = current - 1
    const prevIndex = (activeIndex - 1 + total) % total
    const nextIndex = (activeIndex + 1) % total

    if (index === activeIndex) {
      return 'center'
    } else if (index === prevIndex) {
      return 'left'
    } else if (index === nextIndex) {
      return 'right'
    }
    return 'left'
  }

  return (
    <section id='projects' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl'>
        <div className='grid gap-12 py-24'>
          <ProjectHeader label={label} headline={headline} description={description} action={action} />
          <Carousel setApi={setApi} opts={{ loop: true }} className='w-full overflow-hidden px-6 sm:px-0'>
            <CarouselContent>
              {projects.map((project, index) => {
                const position = getCardPosition(index, current, projects.length)
                return (
                  <CarouselItem key={index} className='basis-full sm:basis-1/2 lg:basis-1/3' style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
                    <ProjectCard project={project} isActive={position === 'center'} position={position} />
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <ProjectCarouselDots current={current} totalSlides={projects.length} />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
