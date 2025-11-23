import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Copyright */}
      <div className="container mx-auto text-center px-4 py-12 md:pt-36">
        <AnimatedShinyText className="font-medium tracking-tight text-xs md:text-sm">
          &copy; {currentYear} CodeCraft. Todos os direitos reservados.
        </AnimatedShinyText>
      </div>

      {/* Effect */}
      <div className="absolute w-full bottom-4 translate-y-0 sm:translate-y-1/2">
        <TextHoverEffect text="CodeCraft" />
      </div>
    </footer>
  )
}
