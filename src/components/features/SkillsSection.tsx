import { useMemo } from 'react'

import { skillsData } from '@/constants/skills'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { cn } from '@/lib/utils'
import type { SkillsSectionData } from '@/types/skills.types'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Marquee } from '@/components/ui/marquee'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface SkillItemProps {
  item: SkillsSectionData
}

const SkillItem = ({ item }: SkillItemProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className='relative flex items-center justify-center size-20 lg:size-24 rounded-xl border border-secondary/50 bg-linear-to-b from-secondary/30 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-300 hover:border-secondary shrink-0'>
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

interface SkillsDesktopProps {
  dataGroups: SkillsSectionData[][]
}

const getDesktopConfig = (index: number) => {
  const isEvenColumn = (index + 1) % 2 !== 0
  let height = '10rem'
  if (index === 1 || index === 3 || index === 5) height = '16rem'
  if (index === 2 || index === 4) height = '22rem'
  return { height, reverse: isEvenColumn }
}

const SkillsDesktop = ({ dataGroups }: SkillsDesktopProps) => (
  <div className='relative flex items-center justify-center gap-4 z-20'>
    {dataGroups.map((columnItems, idx) => {
      const config = getDesktopConfig(idx)
      return (
        <div key={idx} className="relative overflow-hidden shrink-0" style={{ height: config.height }}>
          <Marquee reverse={config.reverse} pauseOnHover vertical>
            {columnItems.map((skill) => (<SkillItem key={skill.slug} item={skill} />))}
          </Marquee>
          <div className='pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-background z-10' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background z-10' />
        </div>
      )
    })}
  </div>
)

interface SkillsMobileProps {
  dataGroups: SkillsSectionData[][]
}

const SkillsMobile = ({ dataGroups }: SkillsMobileProps) => (
  <div className='relative overflow-hidden flex flex-col gap-4 z-20'>
    {dataGroups.map((rowItems, idx) => (
      <Marquee key={idx} reverse={idx % 2 === 1} pauseOnHover>
        {rowItems.map((skill) => (<SkillItem key={skill.slug} item={skill} />))}
      </Marquee>
    ))}
    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
  </div>
)

export const SkillsSection = () => {
  const isDesktop = useBreakpoint('(min-width: 768px)')

  const dataGroups = useMemo(() => {
    const groupCount = isDesktop ? 7 : 3
    const groups: SkillsSectionData[][] = Array.from({ length: groupCount }, () => [])
    skillsData.forEach((skill, index) => {
      groups[index % groupCount].push(skill)
    })
    return groups
  }, [isDesktop])

  return (
    <section id='expertise' className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl'>
        <div className='grid gap-12 py-24'>
          {isDesktop
            ? <SkillsDesktop dataGroups={dataGroups} />
            : <SkillsMobile dataGroups={dataGroups} />
          }
        </div>
      </div>
    </section>
  )
}
