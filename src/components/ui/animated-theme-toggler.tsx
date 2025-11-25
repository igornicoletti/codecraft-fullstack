import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react'
import { useCallback, useRef } from 'react'
import { flushSync } from 'react-dom'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeProvider'
import { cn } from '@/lib/utils'

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        const next = isDark ? 'light' : 'dark'
        setTheme(next)
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()

    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  }, [isDark, duration, setTheme])

  return (
    <Button
      size='icon'
      variant='ghost'
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn('cursor-pointer rounded-full', className)}
      {...props}
    >
      {isDark ? <SunIcon /> : <MoonStarsIcon />}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
