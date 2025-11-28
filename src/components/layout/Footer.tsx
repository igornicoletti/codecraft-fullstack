import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { LinkPreview } from '@/components/ui/link-preview'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='relative overflow-hidden'>
      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-8 md:pt-40'>
          {/* Copyright */}
          <AnimatedShinyText className='z-50 mx-auto font-medium text-xs sm:text-sm'>
            &copy; {currentYear} CodeCraft. Código fonte disponível em{' '}
            <LinkPreview url='https://github.com/igornicoletti/codecraft-fullstack' className='underline underline-offset-2'>
              GitHub
            </LinkPreview>
          </AnimatedShinyText>
        </div>
      </div>
      {/* Text Effect */}
      <div className='absolute w-full bottom-0 translate-y-2/5'>
        <TextHoverEffect text='CODECRAFT' />
      </div>
    </footer>
  )
}
