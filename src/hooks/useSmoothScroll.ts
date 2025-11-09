import { useCallback } from 'react'

export const useSmoothScroll = (onBeforeScroll?: () => void) => {
  const handleLinkClick = useCallback((id: string) => {
    if (onBeforeScroll) {
      onBeforeScroll()
    }

    const targetId = id.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 300)
    }
  }, [onBeforeScroll])

  return handleLinkClick
}
