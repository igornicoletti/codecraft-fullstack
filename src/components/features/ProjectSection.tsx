import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from '@/components/ui/carousel'
import { projectData } from '@/constants/project'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon, CaretRightIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

interface Project {
  title: string
  description: string
  liveUrl: string
  repoUrl: string
}

interface ProjectCardProps {
  project: Project
  isActive: boolean
}

export const ProjectCard = ({ project, isActive }: ProjectCardProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const width = 800
    const height = 600

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

  return (
    <Card className={cn('pt-0! relative flex w-full max-w-md h-full flex-col overflow-hidden transition-all duration-300', !isActive && 'scale-95 opacity-80')}>
      <div className='relative w-full h-full overflow-hidden group'>
        {imageUrl && (
          <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
            <img
              src={imageUrl}
              alt={project.title}
              className={cn('object-cover w-full h-full scale-95 transition-transform duration-500 group-hover:scale-100', !isActive && 'blur-xs')}
              loading='lazy'
              style={{ borderRadius: '0.6125rem' }}
            />
          </a>
        )}
      </div>
      <CardHeader>
        <CardTitle>
          <a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
            {project.title}
            <ArrowUpRightIcon className='text-primary' />
          </a>
        </CardTitle>
        <CardDescription className='line-clamp-5'>
          {project.description}
        </CardDescription>
      </CardHeader>
      {/* <CardContent />
        <CardFooter>
        <Button asChild size='lg' variant='secondary' className='w-full'>
          <a href={project.repoUrl} target='_blank' rel='noopener noreferrer'>
            <GithubLogoIcon />
            Explorar repositório
          </a>
        </Button>
      </CardFooter> */}
      {isActive && (
        <BorderBeam duration={20} size={200} className='from-secondary via-primary to-secondary' />
      )}
    </Card>
  )
}

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

  const { label, headline, description, action, projects } = projectData

  return (
    <section id='projects' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl'>
        <div className='grid gap-12 py-24'>
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
          <Carousel setApi={setApi} opts={{ loop: true }} className='w-full overflow-hidden px-6 sm:px-0'>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className='basis-full sm:basis-1/2 lg:basis-1/3'>
                  <ProjectCard project={project} isActive={index === current - 1} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='flex items-center justify-center gap-6 mt-8'>
              <CarouselPrevious variant='link' className='text-primary static translate-y-0' />
              <span className='text-sm select-none'>{current} / {projects.length}</span>
              <CarouselNext variant='link' className='text-primary static translate-y-0' />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
