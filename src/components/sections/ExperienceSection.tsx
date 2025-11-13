import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { experienceData } from '@/data/experience'
import { CalendarBlankIcon } from '@phosphor-icons/react'

export const ExperienceSection = () => (
  <section id='experience' className='px-4 lg:px-8 pt-20 sm:pt-32 pb-16 sm:pb-24'>
    <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
      <div className="flex flex-col gap-4 sm:text-center">
        <BlurFade delay={0.25 + 0 * 0.05} inView>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tighter tracking-tight">
            {experienceData.title}</h2>
        </BlurFade>
        <BlurFade delay={0.25 + 1 * 0.05} inView>
          <h3 className="text-base sm:text-lg text-balance font-light">
            {experienceData.subtitle}</h3>
        </BlurFade>
      </div>
      <ul className='relative overflow-hidden px-2 mt-16 sm:mt-20'>
        {experienceData.business.map((experience, idx) => (
          <li key={idx} className='relative group not-last:pb-12'>
            <div className='absolute left-0.5 top-2.5 h-full w-0.5 bg-border' />
            <div className='absolute -left-0.5 top-2.5 size-2.5 rounded-full border-2 border-ring' />
            <div className='flex flex-col gap-2 pl-6'>
              <BlurFade delay={0.25 + idx * 0.05} inView>
                <h4 className='text-lg sm:text-xl md:text-2xl font-light'>
                  {experience.company}</h4>
              </BlurFade>
              <BlurFade delay={0.25 + idx * 0.05} inView>
                <div className='flex items-center gap-2'>
                  <CalendarBlankIcon />
                  <span className='text-sm font-light'>
                    {experience.period}</span>
                </div>
              </BlurFade>
              <BlurFade delay={0.25 + idx * 0.05} inView>
                <p className='text-base text-muted-foreground'>
                  {experience.description}</p>
              </BlurFade>
              <div className='mt-2 flex flex-wrap gap-2'>
                {experience.technologies.map((tech, idx2) => (
                  <BlurFade key={idx2} delay={0.25 + idx2 * 0.05} inView>
                    <Badge variant='secondary'>
                      {tech}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
