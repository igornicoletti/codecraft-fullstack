import { ArrowUpRightIcon, RocketLaunchIcon } from '@phosphor-icons/react'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { heroData } from '@/constants/hero'

export const HeroSection = () => {
  const { label, headline, description, actions, techStack } = heroData

  return (
    <section id='hero' className='relative overflow-hidden'>

      <div className='container mx-auto xl:max-w-7xl px-6'>
        <div className='grid gap-12 py-8 md:py-24 md:pt-40'>
          {/* Section Header */}
          <div className='flex flex-col gap-4 sm:items-center sm:text-center md:gap-6'>
            <AnimatedShinyText className='text-primary font-medium'>
              {label}
            </AnimatedShinyText>
            <h1 className='text-balance text-5xl sm:text-4xl md:text-5xl lg:text-6xl'>
              {headline.prefix}{' '}
              <FlipWords words={headline.dynamicWords} />
            </h1>
            <h2 className='max-w-4xl text-muted-foreground md:text-lg lg:text-xl'>{description}</h2>
          </div>
          {/* Action Buttons */}
          <div className='flex flex-wrap justify-center gap-4'>
            <Button size='lg' variant='default' className='group w-full uppercase sm:max-w-3xs'>
              {actions.primary.label}
              <RocketLaunchIcon className='scale-110 group-hover:scale-125' />
            </Button>

            <Button asChild size='lg' variant='outline' className='group w-full uppercase sm:max-w-3xs'>
              <a href={actions.secondary.href} target='_blank' rel='noopener noreferrer'>
                {actions.secondary.label}
                <ArrowUpRightIcon className='scale-110 group-hover:scale-125' />
              </a>
            </Button>
          </div>
          {/* Technologies Icons */}
          <div className='flex justify-center gap-4'>
            {techStack.map(({ icon: Icon, label }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Icon stroke={1} className='size-10 text-muted-foreground hover:text-primary' />
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      <BackgroundSvg />
    </section>
  )
}


const wavePaths = [
  { d: "M32.0025 173.158C-9.59176 22.7338 144.954 5.27737 256.667 51.2463C322.441 75.2797 366.227 2.71664 446.782 31.8337C529.134 61.602 432.819 152.62 555.688 200.295C678.838 248.241 620.24 459.943 510.358 462.336C401.12 464.729 431.209 501.117 322.719 581.691C214.23 662.265 32.6886 550.129 77.2017 429.988C121.715 311.643 77.3056 336.822 32.0025 173.158Z", strokeOpacity: 1 },
  { d: "M54.8695 183.959C16.9128 47.0158 158.448 28.7865 260.956 71.2333C321.952 93.8477 363.193 27.8771 436.903 54.5212C514.207 82.4679 426.352 164.996 538.359 209.275C650.928 254.095 599.017 448.999 496.137 451.153C394.543 453.307 422.604 487.649 322.509 560.871C222.413 634.093 56.2413 531.969 96.3032 420.68C136.365 312.982 96.5115 333.857 54.8695 183.959Z", strokeOpacity: 1 },
  { d: "M77.7366 194.761C43.4174 71.2988 171.943 52.2967 265.245 91.2215C321.464 112.417 360.158 53.0386 427.024 77.2098C499.281 103.335 419.884 177.372 521.03 218.256C623.018 259.951 577.794 438.056 481.916 439.971C387.967 441.885 414 474.181 322.298 540.051C230.596 605.921 79.7942 513.811 115.405 411.373C151.015 314.322 115.718 330.892 77.7366 194.761Z", strokeOpacity: 0.9 },
  { d: "M100.6 205.562C69.9184 95.5812 185.434 75.8063 269.53 111.209C320.971 130.985 357.12 78.1995 417.141 99.8978C484.352 124.201 413.413 189.748 503.697 227.236C595.105 265.806 556.568 427.113 467.691 428.788C381.387 430.463 405.393 460.712 322.084 519.231C238.776 577.75 103.343 495.651 134.503 402.066C165.662 315.661 134.92 327.927 100.6 205.562Z", strokeOpacity: 0.8 },
  { d: "M123.464 216.91C96.4196 120.411 198.925 99.8636 273.815 131.744C320.479 150.101 354.083 103.908 407.259 123.133C469.422 145.615 406.943 202.672 486.365 236.764C567.191 272.209 535.342 416.717 453.466 418.153C374.808 419.589 396.785 447.792 321.87 498.959C246.956 550.125 126.893 478.039 153.601 393.306C180.309 317.548 154.122 325.509 123.464 216.91Z", strokeOpacity: 0.7 },
  { d: "M146.332 228.908C122.925 145.89 212.42 124.569 278.105 152.928C319.991 169.866 351.049 130.265 397.381 147.018C454.497 167.677 400.476 216.244 469.036 246.941C539.282 279.261 514.12 406.97 439.246 408.166C368.232 409.363 388.182 435.52 321.661 479.335C255.14 523.15 150.447 461.076 172.703 385.194C194.96 320.084 173.329 323.74 146.332 228.908Z", strokeOpacity: 0.6 },
  { d: "M169.2 240.939C149.431 171.403 225.916 149.31 282.395 174.146C319.504 189.665 348.016 156.657 387.504 170.936C439.572 189.774 394.01 229.85 451.709 257.152C511.374 286.347 492.899 397.257 425.026 398.214C361.657 399.171 379.579 423.282 321.452 459.745C263.324 496.208 174.001 444.147 191.806 377.117C209.611 322.654 192.537 322.005 169.2 240.939Z", strokeOpacity: 0.5 },
  { d: "M192.073 253.024C175.942 196.969 239.417 174.102 286.69 195.417C319.022 209.516 344.988 183.101 377.631 194.907C424.652 211.924 387.549 243.51 434.386 267.415C483.47 293.485 471.683 387.597 410.811 388.315C355.087 389.032 370.981 411.097 321.248 440.208C271.514 469.32 197.56 427.271 210.914 369.093C224.268 325.276 211.749 320.323 192.073 253.024Z", strokeOpacity: 0.4 },
  { d: "M214.945 265.184C202.451 222.611 252.915 198.972 290.983 216.764C318.537 229.444 341.958 209.621 367.756 218.955C409.73 234.15 381.086 257.245 417.061 277.755C455.564 300.7 450.464 378.013 396.594 378.491C348.515 378.97 362.381 398.988 321.041 420.748C279.701 442.508 221.117 410.472 230.02 361.145C238.922 327.975 230.959 318.718 214.945 265.184Z", strokeOpacity: 0.3 },
  { d: "M237.815 277.461C228.959 248.369 266.413 223.957 295.275 238.227C318.052 249.488 338.927 236.258 357.881 243.119C394.808 256.492 374.622 271.097 399.735 288.211C427.658 308.031 429.245 368.545 382.376 368.784C341.942 369.024 353.781 386.995 320.834 401.403C287.888 415.812 244.673 393.788 249.125 353.313C253.576 330.79 250.168 317.228 237.815 277.461Z", strokeOpacity: 0.2 },
  { d: "M260.698 289.918C255.48 274.307 279.924 249.122 299.58 259.87C317.58 269.712 335.909 263.074 348.018 267.462C379.898 279.014 368.171 285.128 382.422 298.847C399.764 315.542 408.039 359.257 368.171 359.257C335.382 359.257 345.193 375.183 320.64 382.239C296.087 389.295 268.242 377.284 268.242 345.661C268.242 333.785 269.391 315.919 260.698 289.918Z", strokeOpacity: 0.2 }
]

const BackgroundSvg = () => (
  <div className="absolute -z-10 inset-0 flex h-full w-full items-center justify-center">
    <svg
      width="649"
      height="634"
      viewBox="0 0 649 634"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='absolute h-full w-full pointer-events-none'>
      {wavePaths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          stroke="var(--secondary)"
          strokeWidth="1"
          strokeOpacity={path.strokeOpacity}
          className="animate-pulse-wave"
          style={{
            '--i': index
          }}
        />
      ))}
    </svg>
  </div>
)
