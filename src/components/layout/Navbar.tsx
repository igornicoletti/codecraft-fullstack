import { GithubLogoIcon, LinkedinLogoIcon, ListIcon } from '@phosphor-icons/react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Children, cloneElement, isValidElement, useState, type ReactElement, type ReactNode } from 'react'

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { cn } from '@/lib/utils'

interface NavbarProps {
  children: ReactNode
  className?: string
}

interface NavbarContentProps {
  children: ReactNode
  visible?: boolean
}

interface NavbarMenuItemsProps {
  title: string
  id: string
}

const NavbarRoot = ({ children }: NavbarProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const threshold = 20
    setVisible(latest > threshold)
  })

  return (
    <motion.header className='sticky inset-x-0 top-0 z-50 w-full'>
      {Children.map(children, (child) => isValidElement(child)
        ? cloneElement(child as ReactElement<{ visible?: boolean }>, { visible })
        : child
      )}
    </motion.header>
  )
}

const NavbarContent = ({ children, visible }: NavbarContentProps) => {
  const isMobile = useBreakpoint('(max-width: 1024px)')
  const yPosition = isMobile || visible ? 0 : 20

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        backdropFilter: 'blur(12px)',
        y: yPosition
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className={cn(
        'relative w-full bg-transparent transition-colors duration-300',
        visible && 'bg-background/50 border-b border-secondary/50'
      )}>
      <motion.div
        animate={{
          width: '100%',
          paddingLeft: (visible || isMobile) ? '16px' : '32px',
          paddingRight: (visible || isMobile) ? '16px' : '32px'
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
        className='container mx-auto flex items-center justify-between py-4'>
        {children}
      </motion.div>
    </motion.div>
  )
}

const NavbarBrand = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} variant='link' className='p-0'>
    <Avatar>
      <AvatarImage src='images/igornicoletti.png' alt='@igornicoletti' />
      <AvatarFallback>IN</AvatarFallback>
    </Avatar>
    <span className='font-semibold tracking-tight uppercase'>CodeCraft</span>
  </Button>
)

const NavbarIcons = () => (
  <div className='flex items-center gap-2 sm:gap-4'>
    <Button asChild size='icon' variant='ghost' className='rounded-full' aria-label='LinkedIn'>
      <a href='https://linkedin.com/in/igornicoletti' target='_blank' rel='noopener noreferrer'>
        <LinkedinLogoIcon />
      </a>
    </Button>
    <Button asChild size='icon' variant='ghost' className='rounded-full' aria-label='GitHub'>
      <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
        <GithubLogoIcon />
      </a>
    </Button>
    <AnimatedThemeToggler />
  </div>
)

const NavbarMenuDesktop = ({ navigations, onLinkClick }: {
  navigations: NavbarMenuItemsProps[],
  onLinkClick: (id: string) => void
}) => {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div onMouseLeave={() => setHovered(null)} className='relative inset-0 hidden lg:flex items-center gap-4'>
      {navigations.map((item) => (
        <Button
          key={item.title}
          variant='ghost'
          onClick={() => onLinkClick(item.id)}
          onMouseEnter={() => setHovered(item.title)}
          className='relative rounded-full hover:bg-transparent!'>
          {hovered === item.title && (
            <motion.div
              layoutId='hovered'
              className='absolute inset-0 h-full w-full rounded-full bg-accent/50!'
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className='relative z-20'>{item.title}</span>
        </Button>
      ))}
      <Separator orientation='vertical' className='data-[orientation=vertical]:h-5' />
    </motion.div>
  )
}

const NavbarMenuMobile = ({ navigations, onBrandClick, onLinkClick }: {
  navigations: NavbarMenuItemsProps[],
  onBrandClick: () => void,
  onLinkClick: (id: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDrawerLinkClick = (id: string) => {
    setIsOpen(false)
    onLinkClick(id)
  }

  const handleBrandClick = () => {
    setIsOpen(false)
    onBrandClick()
  }

  return (
    <div className='lg:hidden'>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button size='icon' variant='ghost' className='rounded-full' aria-label='Toggle menu'>
            <ListIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <NavbarBrand onClick={handleBrandClick} />
            </DrawerTitle>
            <DrawerDescription className='sr-only'>Mobile navigation menu</DrawerDescription>
          </DrawerHeader>
          <div className='flex flex-col gap-2 p-4 pt-0'>
            {navigations.map((item, idx) => (
              <Button key={`mobile-${idx}`} variant='ghost' onClick={() => handleDrawerLinkClick(item.id)}>
                {item.title}
              </Button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export const Navbar = () => {
  const handleLinkClick = useSmoothScroll()

  const NAV_ITEMS: NavbarMenuItemsProps[] = [
    { title: 'Expertise', id: '#expertise' },
    { title: 'Experiência', id: '#experience' },
    { title: 'Projetos', id: '#projects' },
  ]

  return (
    <NavbarRoot>
      <NavbarContent>
        <NavbarBrand onClick={() => handleLinkClick('#app')} />
        <div className='flex items-center gap-2 sm:gap-4'>
          <NavbarMenuDesktop
            navigations={NAV_ITEMS}
            onLinkClick={handleLinkClick} />
          <NavbarIcons />
          <NavbarMenuMobile
            navigations={NAV_ITEMS}
            onBrandClick={() => handleLinkClick('#app')}
            onLinkClick={handleLinkClick} />
        </div>
      </NavbarContent>
    </NavbarRoot>
  )
}
