import { IconBrandFramerMotion, IconBrandNextjs, IconBrandRadixUi, IconBrandReact, IconBrandTailwind, IconBrandTypescript, type Icon, type IconProps } from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface HeroData {
  head: string
  title: {
    prefix: string
    flipWords: string[]
  }
  description: string
  actions: {
    primary: {
      label: string
    }
    secondary: {
      label: string
      href: string
    }
  }
  stacks: {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
    label: string
  }[]
}

export const heroData: HeroData = {
  head: 'Igor Nicoletti – Desenvolvedor Front-End',
  title: {
    prefix: 'Experiências web',
    flipWords: ['modernas', 'eficientes', 'escaláveis']
  },
  description: 'Engenheiro de software front-end focado na arquitetura de aplicações web de alta complexidade e missão crítica. Desenvolvimento de aplicações modernas com enfase em performance e segurança. Não escrevo apenas código; projeto soluções de escalabilidade.',
  actions: {
    primary: {
      label: 'Explorar projetos'
    },
    secondary: {
      label: 'Iniciar contato',
      href: 'mailto:igor93nicoletti@gmail.com'
    }
  },
  stacks: [
    { icon: IconBrandNextjs, label: 'Next.js' },
    { icon: IconBrandReact, label: 'React' },
    { icon: IconBrandTypescript, label: 'TypeScript' },
    { icon: IconBrandTailwind, label: 'Tailwind CSS' },
    { icon: IconBrandRadixUi, label: 'Radix UI' },
    { icon: IconBrandFramerMotion, label: 'Motion' },
  ]
}
