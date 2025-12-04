export interface SkillsItem {
  slug: string
  label: string
  color?: string
  invert?: boolean
}

export const skillsData: SkillsItem[] = [
  // --- Grupo 1: Essenciais & Base ---
  { slug: 'html5', label: 'HTML5', color: 'E34F26' },
  { slug: 'react', label: 'React', color: '61DAFB' },
  { slug: 'nodedotjs', label: 'Node.js', color: '339933' },
  { slug: 'tailwindcss', label: 'Tailwind CSS', color: '06B6D4' },
  { slug: 'vite', label: 'Vite', color: '646CFF' },
  { slug: 'git', label: 'Git', color: 'F05032' },
  { slug: 'zod', label: 'Zod', color: '3E67B1' },

  // --- Grupo 2: Linguagens & Frameworks Principais ---
  { slug: 'css', label: 'CSS3', color: '1572B6' },
  { slug: 'nextdotjs', label: 'Next.js', color: '000000', invert: true },
  { slug: 'express', label: 'Express', color: '000000', invert: true },
  { slug: 'sass', label: 'Sass', color: 'CC6699' },
  { slug: 'webpack', label: 'Webpack', color: '8DD6F9' },
  { slug: 'github', label: 'GitHub', color: '181717', invert: true },
  { slug: 'testinglibrary', label: 'Testing Lib', color: 'E33332' },

  // --- Grupo 3: Alternativos & UI/UX ---
  { slug: 'javascript', label: 'JavaScript', color: 'F7DF1E' },
  { slug: 'angular', label: 'Angular', color: 'DD0031' },
  { slug: 'socketdotio', label: 'Socket.io', color: '010101', invert: true },
  { slug: 'less', label: 'Less', color: '1D365D' },
  { slug: 'vercel', label: 'Vercel', color: '000000', invert: true },
  { slug: 'gitlab', label: 'GitLab', color: 'FCA121' },
  { slug: 'vitest', label: 'Vitest', color: '6E9F18' },

  // --- Grupo 4: Complementos & Legacy (Exemplo) ---
  { slug: 'typescript', label: 'TypeScript', color: '3178C6' },
  { slug: 'ionic', label: 'Ionic', color: '3880FF' },
  { slug: 'firebase', label: 'Firebase', color: 'FFCA28' },
  { slug: 'bootstrap', label: 'Bootstrap', color: '7952B3' },
  { slug: 'gulp', label: 'Gulp', color: 'CF4647' },
  { slug: 'jquery', label: 'jQuery', color: '0769AD' },
  { slug: 'vtex', label: 'VTEX', color: 'FF1F78' },

  // --- Grupo 5: UI & Ferramentas Finais ---
  { slug: 'clerk', label: 'Clerk', color: '6B47FF' },
  { slug: 'radixui', label: 'Radix UI', color: '000000', invert: true },
  { slug: 'shadcnui', label: 'Shadcn UI', color: '000000', invert: true },
  { slug: 'framer', label: 'Motion', color: '0055FF' },
  { slug: 'chartdotjs', label: 'Chart.js', color: 'FF6384' },
  { slug: 'grunt', label: 'Grunt', color: 'FBA919' },
]
