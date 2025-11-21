import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { cn } from '@/lib/utils'
import { GithubLogoIcon, LinkedinLogoIcon, ListIcon } from '@phosphor-icons/react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Children, cloneElement, isValidElement, useState, type ReactElement, type ReactNode } from 'react'

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
    if (latest > 20) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div className='sticky inset-x-0 top-0 z-50 w-full'>
      {Children.map(children, (child) => isValidElement(child)
        ? cloneElement(child as ReactElement<{ visible?: boolean }>, { visible })
        : child
      )}
    </motion.div>
  )
}

const NavbarContent = ({ children, visible }: NavbarContentProps) => (
  <motion.div
    animate={{ backdropFilter: visible ? 'blur(10px)' : 'blur(10px)', y: visible ? 0 : 20 }}
    transition={{ type: 'spring', stiffness: 200, damping: 50 }}
    className={cn('relative w-full bg-transparent', visible && 'bg-background/40')}>
    <motion.div
      animate={{
        width: '100%',
        paddingLeft: visible ? '16px' : '32px',
        paddingRight: visible ? '16px' : '32px',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className='container mx-auto flex items-center justify-between py-4'>
      {children}
    </motion.div>
  </motion.div>
)

const NavbarBrand = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} variant='ghost' className='p-0 hover:bg-transparent dark:hover:bg-transparent'>
    <Avatar>
      <AvatarImage src='https://github.com/igornicoletti.png' alt='@igornicoletti' />
      <AvatarFallback>IN</AvatarFallback>
    </Avatar>
    <span>CodeCraft</span>
  </Button>
)

const NavbarMenuSocial = () => (
  <div className='flex items-center gap-2 sm:gap-4'>
    <Button
      asChild
      size='icon'
      variant='ghost'
      className='rounded-full'>
      <a href='https://linkedin.com/in/igornicoletti' target='_blank' rel='noopener noreferrer'>
        <LinkedinLogoIcon />
      </a>
    </Button>
    <Button
      asChild
      size='icon'
      variant='ghost'
      className='rounded-full'>
      <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
        <GithubLogoIcon />
      </a>
    </Button>
  </div>
)

const NavbarMenuDesktop = ({ navigations, onLinkClick }: { navigations: NavbarMenuItemsProps[], onLinkClick: (id: string) => void }) => {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div onMouseLeave={() => setHovered(null)} className='relative inset-0 hidden lg:flex items-center gap-4'>
      {navigations.map((item) => (
        <Button
          key={item.title}
          variant='ghost'
          onClick={() => onLinkClick(item.id)}
          onMouseEnter={() => setHovered(item.title)}
          className='relative rounded-full'>
          {hovered === item.title && (
            <motion.div layoutId='hovered' className='absolute inset-0 h-full w-full rounded-full bg-accent dark:bg-accent/50' />
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
          <Button size='icon' variant='ghost' className='rounded-full'>
            <ListIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className='py-6'>
          <DrawerHeader>
            <DrawerTitle>
              <NavbarBrand onClick={handleBrandClick} />
            </DrawerTitle>
            <DrawerDescription />
          </DrawerHeader>
          {navigations.map((item, idx) => (
            <Button key={`mobile-${idx}`} variant='ghost' onClick={() => handleDrawerLinkClick(item.id)}>
              {item.title}
            </Button>
          ))}
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export const Navbar = () => {
  const handleLinkClick = useSmoothScroll()

  const NAV_ITEMS: NavbarMenuItemsProps[] = [
    { title: 'Expertise', id: '#expertise' },
    { title: 'Experiências', id: '#experience' },
    { title: 'Projetos', id: '#projects' },
  ]

  const brandClickHandler = () => handleLinkClick('#app')

  return (
    <NavbarRoot>
      <NavbarContent>
        <NavbarBrand onClick={brandClickHandler} />
        <div className='flex items-center gap-2 sm:gap-4'>
          <NavbarMenuDesktop
            navigations={NAV_ITEMS}
            onLinkClick={handleLinkClick} />
          <NavbarMenuSocial />
          <AnimatedThemeToggler />
          <NavbarMenuMobile
            navigations={NAV_ITEMS}
            onBrandClick={brandClickHandler}
            onLinkClick={handleLinkClick} />
        </div>
      </NavbarContent>
    </NavbarRoot>
  )
}
