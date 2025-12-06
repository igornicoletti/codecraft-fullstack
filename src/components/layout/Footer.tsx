import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { LinkPreview } from '@/components/ui/link-preview'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

const FooterBackgroundEffect = () => (
  <div className='absolute w-full bottom-1/5 translate-y-1/2'>
    <TextHoverEffect text='CODECRAFT' />
  </div>
)

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='grid gap-12 py-8 md:pt-40'>
      <AnimatedShinyText className='z-50 mx-auto font-medium text-xs md:text-sm text-center'>
        &copy; {currentYear}. O código fonte está disponível em{' '}
        <LinkPreview url='https://github.com/igornicoletti/codecraft-fullstack'>GitHub</LinkPreview>.
      </AnimatedShinyText>
    </div>
  )
}

export const Footer = () => (
  <footer className='relative overflow-hidden'>
    <div className='container mx-auto xl:max-w-7xl px-6'>
      <FooterCopyright />
    </div>
    <FooterBackgroundEffect />
  </footer>
)
