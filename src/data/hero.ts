import { IconBrandFramerMotion, IconBrandNextjs, IconBrandRadixUi, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconBrandVite, type Icon, type IconProps } from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface HeroData {
  profile: {
    name: string
    role: string
  }
  heading: {
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
  profile: {
    name: 'Igor Nicoletti',
    role: 'Desenvolvedor Front-End'
  },
  heading: {
    prefix: 'Experiências web',
    flipWords: ['modernas', 'eficientes', 'escaláveis']
  },
  description: 'Engenheiro de software focado na arquitetura de aplicações web de alta complexidade e missão crítica. Desenvolvimento de aplicações modulares com enfase em performance e segurança. Não escrevo apenas código; projeto soluções de escalabilidade.',
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
    { icon: IconBrandVite, label: 'Vite' },
    { icon: IconBrandNextjs, label: 'Next.js' },
    { icon: IconBrandReact, label: 'React' },
    { icon: IconBrandTypescript, label: 'TypeScript' },
    { icon: IconBrandTailwind, label: 'Tailwind CSS' },
    { icon: IconBrandRadixUi, label: 'Radix UI' },
    { icon: IconBrandFramerMotion, label: 'Motion' },
  ]
}
