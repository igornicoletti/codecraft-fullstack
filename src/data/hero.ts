import { IconBrandFramerMotion, IconBrandNextjs, IconBrandRadixUi, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from '@tabler/icons-react'
import type { ComponentType } from 'react'

export interface HeroAction {
  label: string
  href?: string
}

export interface HeroTitle {
  prefix: string
  flipWords: string[]
}

export interface HeroTechnology {
  icon: ComponentType<{ size?: number; className?: string }>
  label: string
}

export interface HeroSectionData {
  sectionHeading: string
  title: HeroTitle
  sectionOverview: string
  actions: {
    primary: HeroAction
    secondary: HeroAction
  }
  technologies: HeroTechnology[]
}

export const heroData = {
  sectionHeading: 'Igor Nicoletti – Desenvolvedor Front-End',
  title: {
    prefix: 'Experiências web',
    flipWords: ['modernas', 'eficientes', 'escaláveis']
  },
  sectionOverview: 'Engenheiro de software front-end focado na arquitetura de aplicações web de alta complexidade e missão crítica. Desenvolvimento de aplicações modernas com enfase em performance e segurança. Não escrevo apenas código; projeto soluções de escalabilidade.',
  actions: {
    primary: {
      label: 'Explorar projetos'
    },
    secondary: {
      label: 'Iniciar contato',
      href: 'mailto:igor93nicoletti@gmail.com'
    }
  },
  technologies: [
    { icon: IconBrandNextjs, label: 'Next.js' },
    { icon: IconBrandReact, label: 'React' },
    { icon: IconBrandTypescript, label: 'TypeScript' },
    { icon: IconBrandTailwind, label: 'Tailwind CSS' },
    { icon: IconBrandRadixUi, label: 'Radix UI' },
    { icon: IconBrandFramerMotion, label: 'Motion' }
  ]
} as const satisfies HeroSectionData
