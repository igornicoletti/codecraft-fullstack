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
    prefix: 'Experiências web ',
    flipWords: ['modernas', 'eficientes', 'escaláveis']
  },
  description: 'Engenheiro de software front-end com sólida atuação em arquitetura de interfaces e ecossistemas web, capaz de projetar e entregar soluções altamente complexas, com ênfase em performance, segurança e escalabilidade.',
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
