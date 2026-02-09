import { cn } from "@/lib/utils"

const POSTOS_DATA = [
  {
    id: 1,
    src: "https://www.redemontecarlo.com.br/images/posto_ipiranga.avif",
    alt: "Posto Ipiranga",
    className: "col-span-2 lg:col-span-5 lg:row-span-2",
  },
  {
    id: 2,
    src: "https://www.redemontecarlo.com.br/images/posto_shell.avif",
    alt: "Posto Shell",
    className: "col-span-1 lg:col-span-2 lg:row-span-4",
  },
  {
    id: 3,
    src: "https://www.redemontecarlo.com.br/images/posto_petronas.avif",
    alt: "Posto Petronas",
    className: "col-span-1 lg:col-span-2 lg:row-span-4",
  },
  {
    id: 4,
    src: "https://www.redemontecarlo.com.br/images/posto_petrobras.avif",
    alt: "Posto Petrobras",
    className: "col-span-2 lg:col-span-3 lg:row-span-2",
  },
  {
    id: 5,
    src: "https://www.redemontecarlo.com.br/images/posto_monte_carlo.avif",
    alt: "Posto Monte Carlo",
    className: "col-span-2 lg:col-span-5 lg:row-span-2",
  },
]

export const BentoGridPostos = () => {
  return (
    <section className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="grid grid-cols-2 lg:grid-cols-7 lg:grid-rows-6 gap-2 aspect-square lg:aspect-video">
          {POSTOS_DATA.map((posto) => (
            <div
              key={posto.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-muted shadow-sm transition-all hover:shadow-md",
                posto.className
              )}>
              <img
                src={posto.src}
                alt={posto.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
