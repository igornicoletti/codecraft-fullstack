import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
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

const Navbar = ({ children }: NavbarProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 40) {
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

const NavbarContent = ({ children, visible }: NavbarContentProps) => {
  return (
    <motion.div
      animate={{ backdropFilter: visible ? 'blur(10px)' : 'none', y: visible ? 0 : 20 }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className={cn('relative w-full bg-transparent', visible && 'bg-background/40')}>
      <motion.div
        animate={{ width: visible ? '100%' : '20%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
        className='relative mx-auto w-full min-w-xs sm:min-w-xl md:min-w-2xl lg:min-w-4xl xl:min-w-5xl max-w-7xl flex items-center justify-between py-4 px-6'>
        {children}
      </motion.div>
    </motion.div>
  )
}

const NavbarBrand = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} variant="link" className="p-0 hover:no-underline">
    <Avatar>
      <AvatarImage src="https://github.com/igornicoletti.png" alt="@igornicoletti" />
      <AvatarFallback>IN</AvatarFallback>
    </Avatar>
    <span>CodeCraft</span>
  </Button>
)

const NavbarSocialMobile = () => (
  <div className="flex items-center justify-center gap-4">
    <DrawerClose asChild>
      <Button asChild size="icon" variant="ghost">
        <a href="https://linkedin.com/in/igornicoletti" target="_blank" rel="noopener noreferrer">
          <LinkedinLogoIcon />
        </a>
      </Button>
    </DrawerClose>
    <DrawerClose asChild>
      <Button asChild size="icon" variant="ghost">
        <a href="https://github.com/igornicoletti" target="_blank" rel="noopener noreferrer">
          <GithubLogoIcon />
        </a>
      </Button>
    </DrawerClose>
  </div>
)

const NavbarMenuDesktop = ({ navigations, onLinkClick }: { navigations: NavbarMenuItemsProps[], onLinkClick: (id: string) => void }) => {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div onMouseLeave={() => setHovered(null)} className="relative inset-0 hidden md:flex items-center gap-4">
      {navigations.map((item) => (
        <Button
          key={item.title}
          variant='ghost'
          onClick={() => onLinkClick(item.id)}
          onMouseEnter={() => setHovered(item.title)}
          className='relative rounded-full'>
          {hovered === item.title && (
            <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-accent dark:bg-accent/50" />
          )}
          <span className="relative z-20">{item.title}</span>
        </Button>
      ))}
      <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
      <Button
        asChild
        size="icon"
        variant="ghost"
        className='rounded-full relative'
        onMouseEnter={() => setHovered("linkedin")}>
        <a href="https://linkedin.com/in/igornicoletti" target="_blank" rel="noopener noreferrer">
          {hovered === "linkedin" && (
            <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-accent dark:bg-accent/50" />
          )}
          <LinkedinLogoIcon className="relative z-20" />
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        variant="ghost"
        className='rounded-full relative'
        onMouseEnter={() => setHovered("github")}>
        <a href="https://github.com/igornicoletti" target="_blank" rel="noopener noreferrer">
          {hovered === "github" && (
            <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-accent dark:bg-accent/50" />
          )}
          <GithubLogoIcon className="relative z-20" />
        </a>
      </Button>
      <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
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
    <div className="md:hidden">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button size='icon' variant="ghost" className='rounded-full'>
            <ListIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <NavbarBrand onClick={handleBrandClick} />
            </DrawerTitle>
            <DrawerDescription />
          </DrawerHeader>
          {navigations.map((item, idx) => (
            <Button key={`mobile-${idx}`} variant="ghost" onClick={() => handleDrawerLinkClick(item.id)}>
              {item.title}
            </Button>
          ))}
          <DrawerFooter>
            <NavbarSocialMobile />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export const NavbarDemo = () => {
  const handleLinkClick = useSmoothScroll()

  const navigations: NavbarMenuItemsProps[] = [
    { title: 'Expertise', id: '#expertise' },
    { title: 'Projetos', id: '#projects' },
  ]

  const brandClickHandler = () => handleLinkClick('#app')

  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand onClick={brandClickHandler} />
        <div className="flex items-center gap-4">
          <NavbarMenuDesktop
            navigations={navigations}
            onLinkClick={handleLinkClick} />
          <AnimatedThemeToggler />
          <NavbarMenuMobile
            navigations={navigations}
            onBrandClick={brandClickHandler}
            onLinkClick={handleLinkClick} />
        </div>
      </NavbarContent>
    </Navbar>
  )
}
