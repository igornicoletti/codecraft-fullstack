import { GlowingEffect } from '@/components/ui/glowing-effect'
import { expertiseData } from '@/data/expertise'
import { cn } from '@/lib/utils'

export const ExpertiseSection = () => (
  <section id='expertise' className='relative overflow-hidden py-16 md:py-32'>
    <div className='container mx-auto px-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {expertiseData.map((item, idx) => (
          <div key={idx} className={cn('relative flex flex-col p-4 rounded-xl border', item.className)}>
            <GlowingEffect variant='default' spread={80} glow={true} disabled={false} proximity={60} inactiveZone={0.01} />
            {item.header}
            <h3 className='mt-6 text-lg md:text-xl font-medium'>{item.title}</h3>
            <p className='mt-2 text-base md:text-lg text-muted-foreground'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
