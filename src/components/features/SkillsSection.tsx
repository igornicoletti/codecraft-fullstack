import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Marquee } from '@/components/ui/marquee'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { skillsData, type SkillsItem } from '@/constants/skills'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'

const SkillsItem = ({ item }: { item: SkillsItem }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className='relative flex items-center justify-center size-20 md:size-24 rounded-xl border border-secondary/50 bg-linear-to-b from-secondary/30 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-300 hover:border-secondary shrink-0'>
          <Avatar className='bg-transparent rounded-none size-8'>
            <AvatarImage
              src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
              alt={item.label}
              className={cn('object-contain', item.invert && 'dark:invert')} />
            <AvatarFallback>{item.label.slice(0, 2).toUpperCase()}</AvatarFallback>
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
  const isDesktop = useBreakpoint('(min-width: 768px)')

  const dataGroups = useMemo(() => {
    const groupCount = isDesktop ? 7 : 3
    const groups: SkillsItem[][] = Array.from({ length: groupCount }, () => [])
    skillsData.forEach((skill, index) => {
      groups[index % groupCount].push(skill)
    })
    return groups
  }, [isDesktop])

  const getDesktopConfig = (index: number) => {
    const isEvenColumn = (index + 1) % 2 !== 0
    let height = '8rem'
    if (index === 1 || index === 3 || index === 5) height = '16rem'
    if (index === 2 || index === 4) height = '24rem'
    return { height, reverse: isEvenColumn }
  }

  return (
    <section id='expertise' className='relative overflow-hidden md:py-24'>
      {isDesktop ? (
        <div className='flex items-center justify-center gap-4 md:gap-6 relative z-20'>
          {dataGroups.map((columnItems, idx) => {
            const config = getDesktopConfig(idx)
            return (
              <div key={idx} className="relative overflow-hidden shrink-0" style={{ height: config.height }}>
                <Marquee reverse={config.reverse} pauseOnHover vertical className="[--duration:20s]">
                  {columnItems.map((skill) => (<SkillsItem key={skill.slug} item={skill} />))}
                </Marquee>
                <div className='pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-background z-10' />
                <div className='pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background z-10' />
              </div>
            )
          })}
        </div>
      ) : (
        <div className='flex flex-col gap-4 relative z-20'>
          {dataGroups.map((rowItems, idx) => (
            <Marquee key={idx} reverse={idx % 2 === 1} pauseOnHover>
              {rowItems.map((skill) => (
                <SkillsItem key={skill.slug} item={skill} />
              ))}
            </Marquee>
          ))}
          <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background z-10' />
          <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background z-10' />
        </div>
      )}

    </section>
  )
}
