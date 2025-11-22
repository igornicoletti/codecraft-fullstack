import { TextHoverEffect } from '@/components/ui/text-hover-effect'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden py-16 md:pt-40">
      {/* Background effect */}
      <div className="absolute bottom-2 w-full translate-y-0 sm:translate-y-1/2">
        <TextHoverEffect text="CodeCraft" />
      </div>
      {/* Copyright content */}
      <p className="text-xs text-center text-secondary md:text-base">
        &copy; {currentYear} CodeCraft. Todos os direitos reservados.
      </p>
    </footer>
  )
}
