import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Copyright */}
      <div className="container mx-auto text-center px-6 py-8 md:pt-40">
        <AnimatedShinyText className="font-medium tracking-tight text-xs sm:text-sm">
          &copy; {currentYear} CodeCraft. Todos os direitos reservados.
        </AnimatedShinyText>
      </div>

      {/* Effect */}
      <div className="absolute w-full bottom-0 translate-y-2/5">
        <TextHoverEffect text="CODECRAFT" />
      </div>
    </footer>
  )
}
