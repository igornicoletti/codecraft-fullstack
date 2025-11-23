import type { Icon, IconProps } from '@tabler/icons-react'
import { IconBrandFramerMotion, IconBrandNextjs, IconBrandRadixUi, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface HeroAction {
  label: string
  href?: string
}

export interface HeroTechItem {
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
  techStack: HeroTechItem[]
}

export const heroData: HeroSectionData = {
  label: 'Igor Nicoletti – Desenvolvedor Front-End',
  headline: {
    prefix: 'Experiências web',
    dynamicWords: ['modernas', 'eficientes', 'escaláveis']
  },
  description: 'Engenheiro de software front-end focado na arquitetura de aplicações web de alta complexidade e missão crítica. Desenvolvimento de aplicações modernas com enfase em performance e segurança. Não escrevo apenas código; projeto soluções de escalabilidade.',
  actions: {
    primary: {
      label: 'Explorar projeto'
    },
    secondary: {
      label: 'Iniciar conversa',
      href: 'mailto:igor93nicoletti@gmail.com'
    }
  },
  techStack: [
    { icon: IconBrandNextjs, label: 'Next.js' },
    { icon: IconBrandReact, label: 'React' },
    { icon: IconBrandTypescript, label: 'TypeScript' },
    { icon: IconBrandTailwind, label: 'Tailwind CSS' },
    { icon: IconBrandRadixUi, label: 'Radix UI' },
    { icon: IconBrandFramerMotion, label: 'Motion' }
  ]
}
