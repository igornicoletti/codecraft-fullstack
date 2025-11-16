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
    role: 'Desenvolvedor FrontEnd'
  },
  heading: {
    prefix: 'Experiências web ',
    flipWords: ['modernas', 'eficientes', 'escaláveis']
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.',
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
    { icon: IconBrandReact, label: 'React' },
    { icon: IconBrandNextjs, label: 'Next.js' },
    { icon: IconBrandTypescript, label: 'TypeScript' },
    { icon: IconBrandVite, label: 'Vite' },
    { icon: IconBrandTailwind, label: 'Tailwind CSS' },
    { icon: IconBrandRadixUi, label: 'Radix UI' },
    { icon: IconBrandFramerMotion, label: 'Motion' },
  ]
}
