import { GlowingEffect } from '@/components/ui/glowing-effect'
import { cn } from "@/lib/utils"
import type { ReactNode } from 'react'

export const BentoGrid = ({ className, children }: { className?: string, children?: ReactNode }) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 lg:auto-rows-[20rem] lg:grid-cols-3", className)}>
    {children}
  </div>
)

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode
  header?: ReactNode
  icon?: ReactNode
}) => (
  <div className={cn("group/bento relative shadow-input row-span-1 flex flex-col justify-between rounded-xl border bg-background gap-4 p-4 transition duration-200", className)}>
    <GlowingEffect
      blur={0}
      borderWidth={2}
      spread={80}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01} />
    {header}
    <div className="transition duration-200 group-hover/bento:translate-x-2">
      {icon}
      <div className="mt-2 mb-2 font-sans font-semibold">{title}</div>
      <div className="font-sans text-sm font-normal text-muted-foreground">{description} </div>
    </div>
  </div>
)
