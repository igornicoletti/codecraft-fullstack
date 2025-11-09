'use client'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import React, { useState } from 'react'

import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ListIcon, XIcon } from '@phosphor-icons/react'

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div className={cn('sticky inset-x-0 top-0 z-50 w-full', className)}>
      {React.Children.map(children, (child) => React.isValidElement(child)
        ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
        : child
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{ backdropFilter: visible ? 'blur(10px)' : 'none', y: visible ? 0 : 20 }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className={cn('relative w-full bg-transparent', visible && 'bg-background/40', className)}>
      <motion.div
        animate={{ width: visible ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
        className={cn('relative mx-auto w-full min-w-xs sm:min-w-xl md:min-w-2xl lg:min-w-4xl xl:min-w-5xl max-w-7xl flex items-center justify-between py-4 px-6', className)}>
        {children}
      </motion.div>
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div onMouseLeave={() => setHovered(null)} className={cn('relative inset-0 hidden flex-1 flex-row items-center justify-end space-x-2 mx-4 text-sm transition duration-200 md:flex md:space-x-2', className)}>
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onClick={onItemClick}
          onMouseEnter={() => setHovered(idx)}
          className='relative px-4 py-2'>
          {hovered === idx && (
            <motion.div layoutId='hovered' className='absolute inset-0 h-full w-full rounded-full bg-accent dark:bg-accent/50' />
          )}
          <span className='relative z-20'>{item.name}</span>
        </a>
      ))}
      <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{ backdropFilter: visible ? 'blur(10px)' : 'none', y: visible ? 0 : 20 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className={cn('relative w-full bg-transparent block lg:hidden', visible && 'bg-background/40', className)}>
      <motion.div
        animate={{ width: visible ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className={cn('relative mx-auto w-full min-w-xs sm:min-w-xl md:min-w-2xl max-w-7xl flex items-center justify-between py-2 px-6', className)}>
        {children}
      </motion.div>
    </motion.div>
  )
}

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between', className)}>
      {children}
    </div>
  )
}

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn('absolute inset-x-0 top-0 -z-10 flex w-full flex-col items-start justify-start gap-4 rounded-sm bg-white px-8 py-10 pt-20 dark:bg-background', className)}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
  return isOpen ? (
    <XIcon className='text-black dark:text-white' onClick={onClick} />
  ) : (
    <ListIcon className='text-black dark:text-white' onClick={onClick} />
  )
}

export const NavbarLogo = () => {
  return (
    <a href='#home' className='relative z-20 mr-4 flex items-center space-x-2 py-2 text-sm font-normal'>
      <img src='https://avatars.githubusercontent.com/u/40406316?v=4' alt='logo' width={32} height={32} className='rounded-full' />
      <span className='font-medium text-black dark:text-white'>dev.IGOR</span>
    </a>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
} & (
    | React.ComponentPropsWithoutRef<'a'>
    | React.ComponentPropsWithoutRef<'button'>
  )) => {
  const baseStyles = 'px-2 py-2 rounded-full bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center'
  const variantStyles = {
    primary: 'shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    secondary: 'bg-transparent shadow-none dark:text-white',
    dark: 'bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    gradient: 'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
  }

  return (
    <Tag href={href || undefined} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Tag>
  )
}
