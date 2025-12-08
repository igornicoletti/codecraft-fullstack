import { ArrowUpRightIcon, CaretRightIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { useEffect, useState, type HTMLAttributes } from 'react'

import { projectSectionData } from '@/constants/project'
import { cn } from '@/lib/utils'
import type { ProjectItem, ProjectSectionContent } from '@/types/project.types'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import { LinkPreview } from '@/components/ui/link-preview'

type ProjectCarouselDotsProps = HTMLAttributes<HTMLDivElement> & {
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

type ProjectCarouselCardProps = {
  project: ProjectItem
  isActive: boolean
  position: 'center' | 'left' | 'right'
}

const ProjectCarouselCard = ({ project, isActive, position }: ProjectCarouselCardProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const width = 1368
    const height = 912

    const params = new URLSearchParams({
      url: project.liveDemoUrl,
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
  }, [project.liveDemoUrl])

  const transformStyle = {
    left: 'translate3d(0px, 0px, -100px) rotateY(25deg)',
    center: 'translate3d(0px, 0px, 0px) rotateY(0deg)',
    right: 'translate3d(0px, 0px, -100px) rotateY(-25deg)',
  }[position]

  return (
    <Card className={cn(
      'relative w-full flex flex-col transition-transform duration-500 will-change-transform',
      !isActive && 'blur-xs scale-95')}
      style={{ transform: transformStyle, zIndex: isActive ? 10 : 0 }}>
      <div className='relative w-full h-full overflow-hidden'>
        {imageUrl && (
          <img
            loading='lazy'
            src={imageUrl}
            alt={project.projectTitle}
            className={cn('object-cover w-full h-full rounded-xl scale-95 transition-transform duration-500', isActive && ' hover:scale-100')} />)}
      </div>
      <CardHeader>
        <CardTitle>
          <LinkPreview url={project.liveDemoUrl} className='flex items-center gap-2'>
            {project.projectTitle}
            <ArrowUpRightIcon className='text-primary' />
          </LinkPreview>
        </CardTitle>
        <CardDescription className='line-clamp-4'>{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant={isActive ? 'default' : 'outline'} className='w-full'>
          <a href={project.repositoryUrl} target='_blank' rel='noopener noreferrer'>
            <GithubLogoIcon />
            {project.repositoryActionText}
          </a>
        </Button>
      </CardFooter>
      {isActive && (<BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />)}
    </Card>
  )
}

type ProjectHeaderProps = Pick<ProjectSectionContent, 'sectionTagline' | 'mainHeadline' | 'sectionSummary' | 'externalAction'>

const ProjectHeader = ({ sectionTagline, mainHeadline, sectionSummary, externalAction }: ProjectHeaderProps) => (
  <div className='flex flex-col items-center text-center gap-4 px-6 md:gap-6'>
    <AnimatedShinyText className='text-primary font-medium'>{sectionTagline}</AnimatedShinyText>
    <h2 className='text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl'>{mainHeadline}</h2>
    <p className='max-w-4xl text-muted-foreground md:text-lg'>{sectionSummary}</p>
    <Button asChild variant='link' className='group has-[>svg]:px-0'>
      <a href={externalAction.url} target='_blank' rel='noopener noreferrer'>
        {externalAction.buttonText}
        <CaretRightIcon className='text-primary transition-transform duration-300 group-hover:translate-x-1' />
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

  const { sectionTagline, mainHeadline, sectionSummary, externalAction, projectList } = projectSectionData

  const getCardPosition = (index: number, current: number, total: number) => {
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
          <ProjectHeader sectionTagline={sectionTagline} mainHeadline={mainHeadline} sectionSummary={sectionSummary} externalAction={externalAction} />
          <Carousel setApi={setApi} opts={{ loop: true }} className='w-full overflow-hidden px-6 sm:px-0 lg:px-6'>
            <CarouselContent>
              {projectList.map((project, index) => {
                const position = getCardPosition(index, current, projectList.length)
                return (
                  <CarouselItem key={index} className='basis-full sm:basis-1/2 lg:basis-1/3' style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
                    <ProjectCarouselCard project={project} isActive={position === 'center'} position={position} />
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <ProjectCarouselDots current={current} totalSlides={projectList.length} />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
