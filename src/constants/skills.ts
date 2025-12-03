export interface SkillsItem {
  slug: string
  label: string
  color?: string
  invert?: boolean
}

export const skillsData: SkillsItem[] = [
  // --- Core Web ---
  { slug: 'html5', label: 'HTML5', color: 'E34F26' },
  { slug: 'css', label: 'CSS3', color: '1572B6' },
  { slug: 'javascript', label: 'JavaScript', color: 'F7DF1E' },
  { slug: 'typescript', label: 'TypeScript', color: '3178C6' },

  // --- Frontend Frameworks & Mobile ---
  { slug: 'react', label: 'React', color: '61DAFB' },
  { slug: 'nextdotjs', label: 'Next.js', color: '000000', invert: true },
  { slug: 'angular', label: 'Angular', color: 'DD0031' },
  { slug: 'ionic', label: 'Ionic', color: '3880FF' },

  // --- Backend, Auth & Realtime ---
  { slug: 'nodedotjs', label: 'Node.js', color: '339933' },
  { slug: 'express', label: 'Express', color: '000000', invert: true },
  { slug: 'socketdotio', label: 'Socket.io', color: '010101', invert: true },
  { slug: 'firebase', label: 'Firebase', color: 'FFCA28' },
  { slug: 'clerk', label: 'Clerk', color: '6B47FF' },

  // --- Styling & UI Components ---
  { slug: 'tailwindcss', label: 'Tailwind CSS', color: '06B6D4' },
  { slug: 'sass', label: 'Sass', color: 'CC6699' },
  { slug: 'less', label: 'Less', color: '1D365D' },
  { slug: 'bootstrap', label: 'Bootstrap', color: '7952B3' },
  { slug: 'radixui', label: 'Radix UI', color: '000000', invert: true },
  { slug: 'shadcnui', label: 'Shadcn UI', color: '000000', invert: true },
  { slug: 'framer', label: 'Motion', color: '0055FF' },
  { slug: 'chartdotjs', label: 'Chart.js', color: 'FF6384' },

  // --- Tools, DevOps & Deploy ---
  { slug: 'vite', label: 'Vite', color: '646CFF' },
  { slug: 'webpack', label: 'Webpack', color: '8DD6F9' },
  { slug: 'vercel', label: 'Vercel', color: '000000', invert: true },
  { slug: 'git', label: 'Git', color: 'F05032' },
  { slug: 'github', label: 'GitHub', color: '181717', invert: true },
  { slug: 'gitlab', label: 'GitLab', color: 'FCA121' },

  // --- Build Tools Legacy ---
  { slug: 'gulp', label: 'Gulp', color: 'CF4647' },
  { slug: 'grunt', label: 'Grunt', color: 'FBA919' },

  // --- Testing, Validation & Platforms ---
  { slug: 'zod', label: 'Zod', color: '3E67B1' },
  { slug: 'testinglibrary', label: 'Testing Lib', color: 'E33332' },
  { slug: 'vitest', label: 'Vitest', color: '6E9F18' },
  { slug: 'jquery', label: 'jQuery', color: '0769AD' },
  { slug: 'vtex', label: 'VTEX', color: 'FF1F78' },
]
