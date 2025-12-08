import type { Icon, IconProps } from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface PrimaryCta {
  href: string
  label: string
}

export interface TechnologyItem {
  iconSlug: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  displayName: string
}

export interface HeroSectionContent {
  sectionTagline: string
  mainHeadline: {
    prefix: string
    highlightedWords: string[]
  }
  catchphrase: string
  callToAction: {
    primary: PrimaryCta
    secondary: PrimaryCta
  }
  technologiesUsed: TechnologyItem[]
}
