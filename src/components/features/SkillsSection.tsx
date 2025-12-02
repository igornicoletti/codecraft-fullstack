import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Marquee } from '@/components/ui/marquee'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { skillsData, type SkillsItem } from '@/constants/skills'
import { cn } from '@/lib/utils'

const SkillsItem = ({ item }: { item: SkillsItem }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className='relative flex items-center justify-center size-20 md:size-24 rounded-xl border border-secondary/50 bg-background/30 backdrop-blur-md transition-all duration-400 hover:border-secondary hover:bg-secondary/30 hover:scale-105 cursor-pointer'>
          <Avatar className='bg-transparent rounded-none'>
            <AvatarImage
              src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
              alt={item.label}
              className={cn(item.invert && 'dark:invert')} />
            <AvatarFallback>{item.label.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{item.label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const SkillsSection = () => {
  const mid = Math.ceil(skillsData.length / 2)
  const firstRow = skillsData.slice(0, mid)
  const secondRow = skillsData.slice(mid)

  return (
    <section id='skills' className='relative overflow-hidden'>
      <div className='grid gap-12 py-24'>
        <Marquee pauseOnHover>
          {firstRow.map((skill, idx) => <SkillsItem key={idx} item={skill} />)}
        </Marquee>
        <Marquee reverse pauseOnHover>
          {secondRow.map((skill, idx) => <SkillsItem key={idx} item={skill} />)}
        </Marquee>
      </div>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent z-10' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent z-10' />
    </section>
  )
}
