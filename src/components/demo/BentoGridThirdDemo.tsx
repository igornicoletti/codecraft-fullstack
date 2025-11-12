import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { LightningIcon } from "@phosphor-icons/react"
import { motion } from "motion/react"

const SkeletonOne = () => {
  const first = { initial: { x: 0 }, animate: { x: 5, rotate: -2, transition: { duration: 0.2 } } }
  const second = { initial: { x: 0 }, animate: { x: -5, rotate: 2, transition: { duration: 0.2 } } }

  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-44 flex-col gap-2">
      <motion.div variants={first} className="flex flex-row rounded-full border px-2 py-1 items-center gap-2 w-3/4">
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full bg-secondary h-4 rounded-full" />
      </motion.div>
      <motion.div variants={second} className="flex flex-row rounded-full border px-2 py-1 items-center gap-2 w-3/4 ml-auto">
        <div className="w-full bg-secondary h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div variants={first} className="flex flex-row rounded-full border px-2 py-1 items-center gap-2 w-3/4">
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full bg-secondary h-4 rounded-full" />
      </motion.div>
      <motion.div variants={second} className="flex flex-row rounded-full border px-2 py-1 items-center gap-2 w-3/4 ml-auto">
        <div className="w-full bg-secondary h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  )
}

const SkeletonTwo = () => {
  const arr = new Array(6).fill(0)
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } }
  }

  return (
    <motion.div initial="initial" animate="animate" whileHover="hover" className="flex flex-1 w-full h-full min-h-44 flex-col gap-2">
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
          className="flex flex-row rounded-full border items-center gap-2 w-full h-5" />
      ))}
    </motion.div>
  )
}

const SkeletonFive = () => {
  const variants = { initial: { backgroundPosition: "0 50%" }, animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] } }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-44 rounded-lg flex-col gap-2"
      style={{ background: "linear-gradient(-45deg, #8e51ff, #ad46ff, #ad46ff, #8e51ff)", backgroundSize: "400% 400%" }}>
      <motion.div className="h-full w-full rounded-2xl" />
    </motion.div>
  )
}

const SkeletonFour = () => {
  const first = { initial: { x: 0 }, animate: { x: 5, rotate: -2, transition: { duration: 0.2 } } }
  const second = { initial: { x: 0 }, animate: { x: -5, rotate: 2, transition: { duration: 0.2 } } }

  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-44 flex-row gap-2">
      <motion.div variants={first} className="hidden h-full w-1/3 rounded-2xl bg-background p-2 border sm:flex flex-col items-center justify-center gap-4">
        <div className="h-10 w-10 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full bg-secondary h-4 rounded-full" />
        <div className="mx-auto w-full max-w-16 bg-secondary h-5 rounded-full" />
      </motion.div>
      <motion.div className="h-full relative z-20 w-full sm:w-1/3 rounded-2xl p-2 border bg-background flex flex-col items-center justify-center gap-4">
        <div className="h-10 w-10 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full bg-secondary h-4 rounded-full" />
        <div className="mx-auto w-full max-w-16 bg-secondary h-5 rounded-full" />
      </motion.div>
      <motion.div variants={second} className="hidden h-full w-1/3 rounded-2xl border bg-background p-2 sm:flex flex-col items-center justify-center gap-4">
        <div className="h-10 w-10 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full bg-secondary h-4 rounded-full" />
        <div className="mx-auto w-full max-w-16 bg-secondary h-5 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

const SkeletonThree = () => {
  const first = { initial: { x: 0 }, animate: { x: 5, rotate: -2, transition: { duration: 0.2 } } }
  const second = { initial: { x: 0 }, animate: { x: -5, rotate: 2, transition: { duration: 0.2 } } }

  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-44 flex-col gap-2">
      <motion.div variants={first} className="flex rounded-xl border p-2 items-center gap-2 w-full">
        <div className="size-8 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full flex flex-col gap-1">
          <div className="w-full bg-secondary h-3 rounded-full" />
          <div className="w-3/4 bg-secondary h-2 rounded-full" />
        </div>
      </motion.div>
      <motion.div variants={second} className="flex rounded-xl border p-2 items-center gap-2 w-full">
        <div className="size-8 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full flex flex-col gap-1">
          <div className="w-full bg-secondary h-3 rounded-full" />
          <div className="w-3/4 bg-secondary h-2 rounded-full" />
        </div>
      </motion.div>
      <motion.div variants={first} className="flex rounded-xl border p-2 items-center gap-2 w-full">
        <div className="size-8 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shrink-0" />
        <div className="w-full flex flex-col gap-1">
          <div className="w-full bg-secondary h-3 rounded-full" />
          <div className="w-3/4 bg-secondary h-2 rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  )
}

const items = [
  {
    title: "Lorem ipsum dolor sit amet.",
    description: 'Sed sint voluptatibus est dicta reprehenderit rem eveniet magni.',
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <LightningIcon />,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    description: 'Sed sint voluptatibus est dicta reprehenderit rem eveniet magni.',
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <LightningIcon />,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    description: 'Sed sint voluptatibus est dicta reprehenderit rem eveniet magni.',
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <LightningIcon />,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    description: 'Sed sint voluptatibus est dicta reprehenderit rem eveniet magni.',
    header: <SkeletonFour />,
    className: "order-2 md:col-span-2 lg:order-1",
    icon: <LightningIcon />,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    description: 'Sed sint voluptatibus est dicta reprehenderit rem eveniet magni.',
    header: <SkeletonFive />,
    className: "order-1 md:col-span-1 lg:order-2",
    icon: <LightningIcon />,
  },
]

export const BentoGridThirdDemo = () => (
  <section id='expertise' className='relative mx-auto w-full max-w-5xl overflow-hidden px-6 py-16 md:py-32'>
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon} />
      ))}
    </BentoGrid>
  </section>
)
