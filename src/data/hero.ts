import { IconBrandFramerMotion, IconBrandNextjs, IconBrandRadixUi, IconBrandReact, IconBrandTailwind, IconBrandTypescript, type Icon, type IconProps } from '@tabler/icons-react'
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
    role: 'Engenheiro FullStack'
  },
  heading: {
    prefix: 'Experiências web ',
    flipWords: ['modernas', 'eficientes', 'escaláveis']
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
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
    { icon: IconBrandFramerMotion, label: 'Framer Motion' },
    { icon: IconBrandRadixUi, label: 'Radix Ui' },
  ]
}
