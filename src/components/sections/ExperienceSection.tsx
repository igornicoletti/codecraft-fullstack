import { Badge } from '@/components/ui/badge'
import { experienceData } from '@/data/experience'
import { CalendarBlankIcon } from '@phosphor-icons/react'

export const ExperienceSection = () => (
  <section id='experience' className='relative overflow-hidden py-16 md:py-32'>
    <div className='container mx-auto max-w-5xl px-6'>

      {/* 1. Title */}
      <h2 className='text-3xl md:text-4xl mb-4 text-center leading-tight'>
        {experienceData.title}
      </h2>

      {/* 2. Description */}
      <p className='text-base md:text-lg mb-12 text-center max-w-4xl mx-auto'>
        {experienceData.description}
      </p>

      {/* 3. Timeline */}
      <ul className=''>
        {experienceData.items.map((item, idx) => (
          <li key={idx} className='relative not-last:pb-12'>
            <div className='absolute left-0.5 top-2.5 h-full border' />
            <div className='absolute left-0 top-2.5 size-2 bg-background border-2 border-ring rounded-full' />
            <div className='flex flex-col gap-2 pl-6'>
              <h3 className='text-lg md:text-xl font-medium'>{item.company}</h3>
              <div className='flex items-center gap-2'>
                <CalendarBlankIcon />
                <span>{item.period}</span>
              </div>
              <p className='text-base md:text-lg text-muted-foreground'>{item.description}</p>
              <div className='mt-2 flex flex-wrap gap-2'>
                {item.technologies.map((tech, idx2) => (
                  <Badge key={idx2} variant='secondary'>{tech}</Badge>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
