export const allSkills = [
  // Frontend/UI
  { slug: 'react', label: 'React', duration: '50s' },
  { slug: 'nextdotjs', label: 'Next.js', duration: '50s' },
  { slug: 'typescript', label: 'TypeScript', duration: '50s' },
  { slug: 'tailwindcss', label: 'Tailwind CSS', duration: '50s' },
  { slug: 'radixui', label: 'Radix UI', duration: '50s' },
  { slug: 'framer', label: 'Framer Motion', duration: '50s' },
  { slug: 'vite', label: 'Vite', duration: '50s' },

  // Backend/DB
  { slug: 'nodedotjs', label: 'Node.js', duration: '40s' },
  { slug: 'express', label: 'Express', duration: '40s' },
  { slug: 'postgresql', label: 'PostgreSQL', duration: '40s' },
  { slug: 'mongodb', label: 'MongoDB', duration: '40s' },
  { slug: 'prisma', label: 'Prisma', duration: '40s' },

  // Tools/DevOps
  { slug: 'git', label: 'Git', duration: '60s' },
  { slug: 'githubactions', label: 'GitHub Actions', duration: '60s' },
  { slug: 'docker', label: 'Docker', duration: '60s' },
  { slug: 'testinglibrary', label: 'Testing Library', duration: '60s' },
  { slug: 'vitest', label: 'Vitest', duration: '60s' },
]

const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2))
const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2))

export const marqueeRows = { firstRow, secondRow }
