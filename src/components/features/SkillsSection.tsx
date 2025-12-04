import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import { Marquee } from '@/components/ui/marquee'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { skillsData, type SkillsItem as TSkillsItem } from '@/constants/skills'
import { cn } from '@/lib/utils'
import { useMemo, useState, type CSSProperties } from 'react'

const GLOW_BASE_CONFIG = {
  gap: 4,
  radius: 1.2,
  opacity: 1,
  backgroundOpacity: 0,
  speedMin: 0.8,
  speedMax: 1.5,
  speedScale: 1.2,
} as const

const VARS = {
  glowLight: '--item-glow-color-light',
  glowDark: '--item-glow-color-dark',
  bgHover: '--item-background-color',
} as const

const SkillsItem = ({ item }: { item: TSkillsItem }) => {
  const [isHovered, setIsHovered] = useState(false)

  const GLOW_CONFIG = useMemo(() => ({
    ...GLOW_BASE_CONFIG,
    colorLightVar: VARS.glowLight,
    colorDarkVar: VARS.glowDark,
  }), [])

  const colorHex = item.color ? `#${item.color}` : 'currentColor'
  const lightGlowColor = colorHex
  const darkGlowColor = item.invert ? '#FFFFFF' : colorHex
  const backgroundColor = item.color ? `#${item.color}` : 'var(--color-secondary)'

  const style = {
    [VARS.glowLight]: lightGlowColor,
    [VARS.glowDark]: darkGlowColor,
    [VARS.bgHover]: backgroundColor,
    background: isHovered
      ? `linear-gradient(to bottom, ${backgroundColor}30 0%, ${backgroundColor}00 80%)`
      : undefined,
  } as CSSProperties

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className='relative flex items-center justify-center size-20 md:size-24 rounded-xl border border-secondary/50 bg-linear-to-b from-secondary/30 to-transparent backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-200'
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {isHovered && (
              <div className='absolute inset-0 z-0 animate-in fade-in zoom-in-95'>
                <DottedGlowBackground className='pointer-events-none mask-radial-to-80% mask-radial-at-top' {...GLOW_CONFIG} />
              </div>
            )}
            <Avatar className={cn('relative z-10 bg-transparent rounded-none transition-all duration-200', isHovered && 'scale-105')}>
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
}

export const SkillsSection = () => {
  const mid = Math.ceil(skillsData.length / 2)
  const [firstRow, secondRow] = [skillsData.slice(0, mid), skillsData.slice(mid)]

  return (
    <section id='skills' className='relative overflow-hidden'>
      <div className='grid gap-12 py-24'>
        <div className='relative z-20 mt-10 flex items-center justify-center gap-4'>
          <Marquee pauseOnHover vertical>
            {firstRow.map((skill) => (<SkillsItem key={skill.slug} item={skill} />))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical>
            {secondRow.map((skill) => (<SkillsItem key={skill.slug} item={skill} />))}
          </Marquee>
        </div>
        <div className='from-background pointer-events-none absolute inset-x-0 top-0 w-1/4 bg-linear-to-b z-10' />
        <div className='from-background pointer-events-none absolute inset-x-0 bottom-0 w-1/4 bg-linear-to-b z-10' />
      </div>
    </section>
  )
}
