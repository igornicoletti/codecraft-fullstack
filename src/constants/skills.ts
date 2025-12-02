export interface SkillsItem {
  slug: string
  label: string
  color?: string
  invert?: boolean
}

export const skillsData: SkillsItem[] = [
  // --- Core ---
  { slug: 'html5', label: 'HTML5' },
  { slug: 'css', label: 'CSS3' },
  { slug: 'javascript', label: 'JavaScript' },
  { slug: 'typescript', label: 'TypeScript' },

  // --- Frameworks & Libs ---
  { slug: 'react', label: 'React' },
  { slug: 'angular', label: 'Angular', color: 'DD0031' },
  { slug: 'nextdotjs', label: 'Next.js', invert: true },
  { slug: 'nodedotjs', label: 'Node.js' },
  { slug: 'express', label: 'Express', invert: true },

  // --- Styling & UI ---
  { slug: 'tailwindcss', label: 'Tailwind CSS' },
  { slug: 'sass', label: 'Sass' },
  { slug: 'bootstrap', label: 'Bootstrap' },
  { slug: 'framer', label: 'Framer Motion' },
  { slug: 'radixui', label: 'Radix UI', invert: true },
  { slug: 'shadcnui', label: 'Shadcn UI', invert: true },

  // --- Tools ---
  { slug: 'vite', label: 'Vite' },
  { slug: 'webpack', label: 'Webpack' },
  { slug: 'grunt', label: 'Grunt' },
  { slug: 'gulp', label: 'Gulp' },
  { slug: 'git', label: 'Git' },

  // GitHub e GitLab
  { slug: 'github', label: 'GitHub', invert: true },
  { slug: 'gitlab', label: 'GitLab' },

  // --- Testing & Others ---
  { slug: 'testinglibrary', label: 'Testing Library' },
  { slug: 'vitest', label: 'Vitest' },
  { slug: 'jquery', label: 'jQuery' },
  { slug: 'vtex', label: 'VTEX' },
]
