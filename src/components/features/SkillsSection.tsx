import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import { Marquee } from '@/components/ui/marquee'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { skillsData, type SkillsItem } from '@/constants/skills'
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

const GLOW_COLOR_LIGHT_VAR = "--item-glow-color-light"
const GLOW_COLOR_DARK_VAR = "--item-glow-color-dark"
const BG_HOVER_COLOR_VAR = "--item-background-color"

const SkillsItem = ({ item }: { item: SkillsItem }) => {
  // ... (useState e useMemo para GLOW_CONFIG mantidos os mesmos) ...

  const [isHovered, setIsHovered] = useState(false)

  const GLOW_CONFIG = useMemo(() => ({
    ...GLOW_BASE_CONFIG,
    colorLightVar: GLOW_COLOR_LIGHT_VAR,
    glowColorLightVar: GLOW_COLOR_LIGHT_VAR,
    colorDarkVar: GLOW_COLOR_DARK_VAR,
    glowColorDarkVar: GLOW_COLOR_DARK_VAR,
  }), [])

  const officialColorHex = item.color ? `#${item.color}` : 'currentColor'
  const lightGlowColor = officialColorHex
  const darkGlowColor = item.invert ? '#FFFFFF' : officialColorHex
  const backgroundColor = item.color ? `#${item.color}` : 'var(--color-secondary)'

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "relative flex items-center justify-center size-20 md:size-24 rounded-xl cursor-pointer overflow-hidden",
              "border border-secondary/50 bg-background/50 backdrop-blur-md",
              "transition-all duration-300 ease-out",
              "hover:border-secondary hover:scale-105"
            )}
            style={{
              [GLOW_COLOR_LIGHT_VAR]: lightGlowColor,
              [GLOW_COLOR_DARK_VAR]: darkGlowColor,
              [BG_HOVER_COLOR_VAR]: backgroundColor,
              background: isHovered
                ? `linear-gradient(to bottom, ${backgroundColor}30 0%, ${backgroundColor}00 80%)`
                : undefined
            } as CSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <div className="absolute inset-0 z-0 animate-in fade-in zoom-in-95 duration-300">
                <DottedGlowBackground
                  className="pointer-events-none mask-radial-to-80% mask-radial-at-top"
                  {...GLOW_CONFIG}
                />
              </div>
            )}
            <Avatar className='relative z-10 bg-transparent rounded-none'>
              <AvatarImage
                src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                alt={item.label}
                className={cn("object-contain", item.invert && 'dark:invert')} />
              <AvatarFallback>
                {item.label.slice(0, 2).toUpperCase()}
              </AvatarFallback>
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
