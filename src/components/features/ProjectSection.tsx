import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { projectData } from '@/constants/project'

export const ProjectSection = () => {
  const { label, headline, description } = projectData

  return (
    <section id='projects' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-24 md:pt-40'>
          {/* Section Header */}
          <div className='flex flex-col items-center text-center gap-4 md:gap-6'>
            <AnimatedShinyText className='text-primary font-medium'>
              {label}
            </AnimatedShinyText>
            <h2 className='text-balance text-4xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {headline}
            </h2>
            <p className='max-w-4xl text-muted-foreground md:text-lg'>{description}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
