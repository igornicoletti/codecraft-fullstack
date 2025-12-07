import type { HeroSectionData } from '@/types/hero.types'
import { IconBrandFramerMotion, IconBrandNextjs, IconBrandRadixUi, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from '@tabler/icons-react'

export const heroData: HeroSectionData = {
  label: 'Igor Nicoletti – Desenvolvedor Front-End',
  headline: {
    prefix: 'Experiências web',
    dynamicWords: ['modernas', 'eficientes', 'escaláveis']
  },
  description: 'Engenheiro de software focado na arquitetura de aplicações web de alta complexidade e missão crítica. Desenvolvimento de aplicações modernas com enfase em performance e segurança. Não escrevo apenas código; projeto soluções de escalabilidade.',
  actions: {
    primary: {
      label: 'Explorar Projetos',
      href: '#projects'
    },
    secondary: {
      label: 'Iniciar Contato',
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
