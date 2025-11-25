import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { projectData } from '@/constants/project'

export const ProjectSection = () => {
  const { label, headline, description } = projectData

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="grid gap-12 py-24 md:pt-40">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 md:gap-4">
          <AnimatedShinyText className="font-medium tracking-tight text-primary text-sm sm:text-base">
            {label}
          </AnimatedShinyText>
          <h2 className="font-medium tracking-tight text-balance text-2xl sm:text-3xl md:text-4xl">
            {headline}
          </h2>
          <p className="max-w-4xl text-muted-foreground md:text-lg">{description}</p>
        </div>


      </div>
    </section>
  )
}
