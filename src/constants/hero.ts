import type { HeroSectionContent } from '@/types/hero.types'
import { IconBrandFramerMotion, IconBrandNextjs, IconBrandRadixUi, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from '@tabler/icons-react'

export const heroSectionData: HeroSectionContent = {
  sectionTagline: 'Igor Nicoletti – Desenvolvedor Full-Stack',
  mainHeadline: {
    prefix: 'Experiências web',
    highlightedWords: ['modernas', 'eficientes', 'escaláveis']
  },
  catchphrase: 'Engenheiro de software focado na arquitetura de aplicações web de alta complexidade e missão crítica. Desenvolvimento de aplicações modernas com enfase em performance e segurança.',
  callToAction: {
    primary: {
      label: 'Explorar portfólio',
      href: '#projects'
    },
    secondary: {
      label: 'Enviar mensagem',
      href: 'mailto:igor93nicoletti@gmail.com'
    }
  },
  technologiesUsed: [
    { iconSlug: IconBrandNextjs, displayName: 'Next.js' },
    { iconSlug: IconBrandReact, displayName: 'React' },
    { iconSlug: IconBrandTypescript, displayName: 'TypeScript' },
    { iconSlug: IconBrandTailwind, displayName: 'Tailwind CSS' },
    { iconSlug: IconBrandRadixUi, displayName: 'Radix UI' },
    { iconSlug: IconBrandFramerMotion, displayName: 'Motion' }
  ]
}
