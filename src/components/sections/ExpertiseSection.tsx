import { GlowingEffect } from '@/components/ui/glowing-effect'
import { expertiseData } from '@/data/expertise'
import { cn } from '@/lib/utils'

export const ExpertiseSection = () => (
  <section id='expertise' className='relative overflow-hidden py-20 md:py-40'>
    <div className='container mx-auto px-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {expertiseData.map((item, idx) => (
          <div key={idx} className={cn('relative flex flex-col gap-6 p-4 rounded-xl border', item.className)}>
            <GlowingEffect blur={0} borderWidth={1} spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            {item.header}
            <div className='flex flex-col gap-1'>
              <h3 className='text-lg md:text-xl font-medium'>{item.title}</h3>
              <p className='text-sm md:text-base text-muted-foreground'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
