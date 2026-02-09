import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'

interface StepItem {
  id: number
  title: string
  description: string
}

const steps: StepItem[] = [
  {
    id: 1,
    title: "Baixe o App",
    description: "Disponível gratuitamente na App Store e Google Play."
  },
  {
    id: 2,
    title: "Crie sua Conta",
    description: "Cadastro rápido em menos de 2 minutos."
  },
  {
    id: 3,
    title: "Abasteça e Ganhe",
    description: "Use o app nos postos e comece a acumular cashback imediatamente"
  }
]

export function LoyaltyAppSection() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <img
            src="https://www.redemontecarlo.com.br/images/app3.png"
            alt="Aplicativo Monte Carlo Fidelidade"
            className='size-full rounded-2xl object-cover max-lg:max-h-96 mx-auto' />

          <div className="space-y-16">
            {/* Cabeçalho */}
            <div className="space-y-4">
              <Badge variant='outline' className='px-3 py-1 text-sm bg-primary/10 border-primary/20 text-primary font-medium'>
                <MapPin className='size-4!' />
                Baixe e já tenha benefícios
              </Badge>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                Garanta agora seus benefícios exclusivos
              </h2>
              <p className='text-muted-foreground text-xl'>
                Siga os 3 passos e já comece a ter os benefícios que só o App Monte Carlo Fidelidade proporciona
              </p>
            </div>

            {/* Lista de passos */}
            <ul className="space-y-4">
              {steps.map((step) => (
                <Fragment key={step.id}>
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 flex items-center justify-center size-9 rounded-full bg-primary/10 text-primary font-semibold">
                      {step.id}
                    </div>
                    <div className='pt-1 space-y-1'>
                      <h4 className='text-lg font-semibold'>{step.title}</h4>
                      <p className="text-muted-foreground text-base font-medium">{step.description}</p>
                    </div>
                  </li>
                  {step.id !== steps.length && <Separator />}
                </Fragment>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="flex flex-wrap items-center gap-4 max-lg:justify-center max-md:w-full max-md:flex-col">
              <div className="bg-primary flex w-[200px] items-center gap-4 rounded-sm px-5 py-2">
                <img src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png" alt="App Store" className="size-8 invert dark:invert-0" />
                <div className="flex flex-col items-start">
                  <p className="text-card text-xs leading-4 font-medium">Disponível no</p>
                  <p className="text-card text-base leading-6 font-semibold opacity-90">App Store</p>
                </div>
              </div>
              <div className="bg-primary flex w-[200px] items-center gap-4 rounded-sm px-5 py-2">
                <img src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-play-icon.png" alt="App Store" className="size-8" />
                <div className="flex flex-col items-start">
                  <p className="text-card text-xs leading-4 font-medium">Disponível no</p>
                  <p className="text-card text-base leading-6 font-semibold opacity-90">Google Play</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
