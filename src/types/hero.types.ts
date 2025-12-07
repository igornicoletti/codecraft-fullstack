import type { Icon, IconProps } from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface HeroAction {
  label: string
  href: string
}

export interface HeroTechStack {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  label: string
}

export interface HeroSectionData {
  label: string
  headline: {
    prefix: string
    dynamicWords: string[]
  }
  description: string
  actions: {
    primary: HeroAction
    secondary: HeroAction
  }
  techStack: HeroTechStack[]
}
