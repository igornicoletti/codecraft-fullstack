export interface SkillsItem {
  slug: string
  label: string
  color?: string
}

export const skillsData: SkillsItem[] = [
  // Linguagens e Core
  { slug: 'javascript', label: 'JavaScript' },
  { slug: 'typescript', label: 'TypeScript' },
  { slug: 'html5', label: 'HTML5' },
  { slug: 'css', label: 'CSS3' },
  { slug: 'sass', label: 'Sass' },

  // Frameworks e Bibliotecas Frontend
  { slug: 'angular', label: 'Angular', color: 'EE0000' },
  { slug: 'react', label: 'React' },
  { slug: 'nextdotjs', label: 'Next.js', color: '282d3d' },
  { slug: 'jquery', label: 'jQuery' },

  // Estilização e UI/UX
  { slug: 'bootstrap', label: 'Bootstrap' },
  { slug: 'framer', label: 'Framer Motion' },
  { slug: 'radixui', label: 'Radix UI', color: '282d3d' },
  { slug: 'shadcnui', label: 'Shadcn UI', color: '282d3d' },
  { slug: 'tailwindcss', label: 'Tailwind CSS' },

  // Backend e Ferramentas de Servidor
  { slug: 'nodedotjs', label: 'Node.js' },
  { slug: 'express', label: 'Express', color: '282d3d' },
  { slug: 'vtex', label: 'VTEX' },

  // Build Tools, Bundlers e Task Runners
  { slug: 'grunt', label: 'Grunt' },
  { slug: 'gulp', label: 'Gulp' },
  { slug: 'vite', label: 'Vite' },
  { slug: 'webpack', label: 'Webpack' },

  // Testes e Qualidade
  { slug: 'testinglibrary', label: 'Testing Library' },
  { slug: 'vitest', label: 'Vitest' },

  // Controle de Versão
  { slug: 'git', label: 'Git' },
  { slug: 'github', label: 'GitHub', color: '282d3d' },
  { slug: 'gitlab', label: 'GitLab' },
]
