import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Marquee } from '@/components/ui/marquee'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip" // Assumindo que você tem Tooltip
import { marqueeRows } from '@/constants/skills'
import { cn } from "@/lib/utils"

interface LogoCardProps {
  slug: string
  label: string
}

const ReviewCard = ({ slug, label }: LogoCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn(
            "flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300",
            "border-secondary/30 bg-secondary/10 hover:bg-secondary/30",
            "size-16")}>
            <Avatar className='size-full bg-transparent'>
              <AvatarImage
                src={`https://cdn.simpleicons.org/${slug}?viewbox=auto&size=32`}
                alt={label}
              />
              <AvatarFallback>{label.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export const SkillsSection = () => {
  const { firstRow, secondRow } = marqueeRows

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover>
        {firstRow.map((review) => (
          <ReviewCard key={review.slug} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover>
        {secondRow.map((review) => (
          <ReviewCard key={review.label} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l"></div>
    </div>
  )
}
