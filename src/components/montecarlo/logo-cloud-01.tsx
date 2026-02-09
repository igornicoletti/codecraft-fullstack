import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Fragment, memo } from 'react'

export type Logo = {
  image: string
  alt: string
}

export type LogoGroup = {
  logoMain?: Logo
  logoItens: Logo[]
}

const LOGO_GROUPS_MOCK: LogoGroup[] = [
  {
    logoMain: {
      image: 'https://www.redemontecarlo.com.br/images/logo_monte_carlo.avif',
      alt: 'Posto Monte Carlo',
    },
    logoItens: [
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo.png',
        alt: 'Airbnb',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo.png',
        alt: 'Hubspot',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png',
        alt: 'Google',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo.png',
        alt: 'Microsoft',
      },
    ],
  },
  {
    logoMain: {
      image: 'https://www.redemontecarlo.com.br/images/logo_monte_carlo.avif',
      alt: 'Posto Monte Carlo',
    },
    logoItens: [
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo.png',
        alt: 'Airbnb',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo.png',
        alt: 'Hubspot',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png',
        alt: 'Google',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo.png',
        alt: 'Microsoft',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo.png',
        alt: 'Walmart',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/adobe-logo.png',
        alt: 'Adobe',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-logo.png',
        alt: 'Huawei',
      },
    ],
  },
  {
    logoItens: [
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo.png',
        alt: 'Airbnb',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo.png',
        alt: 'Hubspot',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png',
        alt: 'Google',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo.png',
        alt: 'Microsoft',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo.png',
        alt: 'Walmart',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/adobe-logo.png',
        alt: 'Adobe',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-logo.png',
        alt: 'Huawei',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-logo.png',
        alt: 'Shopify',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/gatsby-logo.png',
        alt: 'Gatsby',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/bookmyshow-logo.png',
        alt: 'BookMyShow',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/fedex-logo.png',
        alt: 'FedEx',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo.png',
        alt: 'Amazon',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ola-logo.png',
        alt: 'Ola',
      },
      {
        image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-logo.png',
        alt: 'PayPal',
      },
    ],
  },
]

// --- Subcomponentes ---

type LogoItemProps = {
  logo: Logo
  className?: string
}

const LogoImage = memo(({ logo, className }: LogoItemProps) => (
  <img
    src={logo.image}
    alt={logo.alt}
    loading="lazy"
    className={cn('h-full w-auto object-contain', className)} />
))

LogoImage.displayName = 'LogoImage'

const LogoDivider = ({ logo }: { logo: Logo }) => (
  <div className="flex w-full items-center justify-center gap-6">
    <Separator className="flex-1" />
    <div className="shrink-0">
      <LogoImage logo={logo} className="h-7" />
    </div>
    <Separator className="flex-1" />
  </div>
)

type LogoCloudProps = {
  groups: LogoGroup[]
}

export const LogoCloud = ({ groups }: LogoCloudProps) => {
  return (
    <section className="w-full  py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12">
          {groups.map((group, groupIndex) => (
            <Fragment key={`group-${groupIndex}`}>
              {group.logoMain ? (
                <LogoDivider logo={group.logoMain} />
              ) : (
                <Separator />
              )}
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {group.logoItens.map((logo, logoIndex) => (
                  <LogoImage key={`logo-${groupIndex}-${logoIndex}`} logo={logo} className="h-7" />
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

const LogoCloudPage = () => {
  return <LogoCloud groups={LOGO_GROUPS_MOCK} />
}

export default LogoCloudPage
