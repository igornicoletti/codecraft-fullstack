import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface ExpertiseData {
  header: ReactNode
  title: string
  description: string
  className: string
}

const SkeletonOne = () => {
  const first = { initial: { x: 0 }, animate: { x: 5, rotate: -2, transition: { duration: 0.2 } } }
  const second = { initial: { x: 0 }, animate: { x: -5, rotate: 2, transition: { duration: 0.2 } } }

  return (
    <motion.div initial='initial' whileHover='animate' className='flex flex-col w-full h-full min-h-48 gap-2 p-2'>
      <motion.div variants={first} className='flex flex-row w-3/4 items-center gap-2 rounded-full border px-2 py-1'>
        <div className='h-6 w-6 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='w-full h-4 rounded-full bg-secondary' />
      </motion.div>
      <motion.div variants={second} className='flex flex-row w-3/4 ml-auto items-center gap-2 rounded-full border px-2 py-1'>
        <div className='w-full h-4 rounded-full bg-secondary' />
        <div className='h-6 w-6 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
      </motion.div>
      <motion.div variants={first} className='flex flex-row w-3/4 items-center gap-2 rounded-full border px-2 py-1'>
        <div className='h-6 w-6 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='w-full h-4 rounded-full bg-secondary' />
      </motion.div>
      <motion.div variants={second} className='flex flex-row w-3/4 ml-auto items-center gap-2 rounded-full border px-2 py-1'>
        <div className='w-full h-4 rounded-full bg-secondary' />
        <div className='h-6 w-6 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
      </motion.div>
    </motion.div>
  )
}

const SkeletonTwo = () => {
  const arr = new Array(7).fill(0)
  const variants = {
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.2 } },
    hover: { width: ['0%', '100%'], transition: { duration: 2 } }
  }

  return (
    <motion.div initial='initial' animate='animate' whileHover='hover' className='flex flex-col w-full h-full min-h-48 gap-2'>
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + '%' }}
          className='flex flex-row w-full h-5 items-center gap-2 rounded-full border' />
      ))}
    </motion.div>
  )
}

const SkeletonThree = () => {
  const variants = { initial: { backgroundPosition: '0 50%' }, animate: { backgroundPosition: ['0, 50%', '100% 50%', '0 50%'] } }

  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      className='flex flex-col w-full h-full min-h-48 gap-2 rounded-lg'
      style={{ background: 'linear-gradient(-45deg, #79c0ff, #8c5cff, #79c0ff, #8c5cff)', backgroundSize: '400% 400%' }}>
      <motion.div className='w-full h-full rounded-2xl' />
    </motion.div>
  )
}

const SkeletonFour = () => {
  const first = { initial: { x: 0 }, animate: { x: 5, rotate: -2, transition: { duration: 0.2 } } }
  const second = { initial: { x: 0 }, animate: { x: -5, rotate: 2, transition: { duration: 0.2 } } }

  return (
    <motion.div initial='initial' whileHover='animate' className='flex flex-row w-full h-full min-h-48 gap-4'>
      <motion.div variants={first} className='hidden sm:flex flex-col w-1/3 h-full items-center justify-center gap-4 rounded-2xl border bg-background p-4'>
        <div className='h-10 w-10 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='w-full h-4 rounded-full bg-secondary' />
        <div className='w-full max-w-16 h-5 mx-auto rounded-full bg-secondary' />
      </motion.div>
      <motion.div className='relative z-20 flex flex-col w-full sm:w-1/3 h-full items-center justify-center gap-4 rounded-2xl border bg-background p-4'>
        <div className='h-10 w-10 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='w-full h-4 rounded-full bg-secondary' />
        <div className='w-full max-w-16 h-5 mx-auto rounded-full bg-secondary' />
      </motion.div>
      <motion.div variants={second} className='hidden sm:flex flex-col w-1/3 h-full items-center justify-center gap-4 rounded-2xl border bg-background p-4'>
        <div className='h-10 w-10 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='w-full h-4 rounded-full bg-secondary' />
        <div className='w-full max-w-16 h-5 mx-auto rounded-full bg-secondary' />
      </motion.div>
    </motion.div>
  )
}

const SkeletonFive = () => {
  const first = { initial: { x: 0 }, animate: { x: 5, rotate: -2, transition: { duration: 0.2 } } }
  const second = { initial: { x: 0 }, animate: { x: -5, rotate: 2, transition: { duration: 0.2 } } }

  return (
    <motion.div initial='initial' whileHover='animate' className='flex flex-col w-full h-full min-h-48 gap-2'>
      <motion.div variants={first} className='flex w-full items-center gap-2 rounded-xl border p-2'>
        <div className='size-8 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='flex flex-col w-full gap-1'>
          <div className='w-full h-3 rounded-full bg-secondary' />
          <div className='w-3/4 h-2 rounded-full bg-secondary' />
        </div>
      </motion.div>
      <motion.div variants={second} className='flex w-full items-center gap-2 rounded-xl border p-2'>
        <div className='size-8 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='flex flex-col w-full gap-1'>
          <div className='w-full h-3 rounded-full bg-secondary' />
          <div className='w-3/4 h-2 rounded-full bg-secondary' />
        </div>
      </motion.div>
      <motion.div variants={first} className='flex w-full items-center gap-2 rounded-xl border p-2'>
        <div className='size-8 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-foreground' />
        <div className='flex flex-col w-full gap-1'>
          <div className='w-full h-3 rounded-full bg-secondary' />
          <div className='w-3/4 h-2 rounded-full bg-secondary' />
        </div>
      </motion.div>
    </motion.div>
  )
}

export const expertiseData: ExpertiseData[] = [
  {
    header: <SkeletonOne />,
    title: 'Desenvolvimento Frontend & UI/UX.',
    description: 'Especialista em arquitetura moderna baseada em componentes e na entrega de interfaces altamente responsivas e pixel-perfect.',
    className: 'md:col-span-1',
  },
  {
    header: <SkeletonTwo />,
    title: 'Escalabilidade Backend & APIs.',
    description: 'Projeto e implementação de APIs robustas e escaláveis, além de microsserviços para aplicações de alto tráfego.',
    className: 'md:col-span-1',
  },
  {
    header: <SkeletonThree />,
    title: 'Infraestrutura Cloud & DevOps.',
    description: 'Gerenciamento de recursos em nuvem, pipelines de CI/CD e garantia de alta disponibilidade e tolerância a falhas.',
    className: 'order-2 md:col-span-1 xl:order-1',
  },
  {
    header: <SkeletonFour />,
    title: 'Arquitetura FullStack & Consultoria.',
    description: 'Fornecimento de liderança técnica abrangente, desde o conceito inicial até a implantação e estratégia de manutenção de longo prazo.',
    className: 'order-1 md:col-span-2 xl:order-2',
  },
  {
    header: <SkeletonFive />,
    title: 'Gerenciamento de Dados & Bancos de Dados.',
    description: 'Otimização de consultas a bancos de dados e modelagem de estruturas de dados para aplicações de desempenho crítico.',
    className: 'order-3 md:col-span-1',
  },
]
