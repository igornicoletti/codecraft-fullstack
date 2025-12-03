export interface SkillsItem {
  slug: string
  label: string
  color?: string
  invert?: boolean
}

export const skillsData: SkillsItem[] = [
  // --- Core Web ---
  { slug: 'html5', label: 'HTML5' },
  { slug: 'css', label: 'CSS3' },
  { slug: 'javascript', label: 'JavaScript' },
  { slug: 'typescript', label: 'TypeScript' },

  // --- Frontend Frameworks & Mobile ---
  { slug: 'react', label: 'React' },
  { slug: 'nextdotjs', label: 'Next.js', invert: true },
  { slug: 'angular', label: 'Angular', color: 'DD0031' },
  { slug: 'ionic', label: 'Ionic' },

  // --- Backend, Auth & Realtime ---
  { slug: 'nodedotjs', label: 'Node.js' },
  { slug: 'express', label: 'Express', invert: true },
  { slug: 'socketdotio', label: 'Socket.io', invert: true },
  { slug: 'firebase', label: 'Firebase' },
  { slug: 'clerk', label: 'Clerk' },

  // --- Styling & UI Components ---
  { slug: 'tailwindcss', label: 'Tailwind CSS' },
  { slug: 'sass', label: 'Sass' },
  { slug: 'less', label: 'Less' },
  { slug: 'bootstrap', label: 'Bootstrap' },
  { slug: 'radixui', label: 'Radix UI', invert: true },
  { slug: 'shadcnui', label: 'Shadcn UI', invert: true },
  { slug: 'framer', label: 'Motion' },
  { slug: 'chartdotjs', label: 'Chart.js' },

  // --- Tools, DevOps & Deploy ---
  { slug: 'vite', label: 'Vite' },
  { slug: 'webpack', label: 'Webpack' },
  { slug: 'vercel', label: 'Vercel', invert: true },
  { slug: 'git', label: 'Git' },
  { slug: 'github', label: 'GitHub', invert: true },
  { slug: 'gitlab', label: 'GitLab' },

  // --- Build Tools Legacy ---
  { slug: 'gulp', label: 'Gulp' },
  { slug: 'grunt', label: 'Grunt' },

  // --- Testing, Validation & Platforms ---
  { slug: 'zod', label: 'Zod' },
  { slug: 'testinglibrary', label: 'Testing Lib' },
  { slug: 'vitest', label: 'Vitest' },
  { slug: 'jquery', label: 'jQuery' },
  { slug: 'vtex', label: 'VTEX' },
]
