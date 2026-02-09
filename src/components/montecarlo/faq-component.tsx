import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { GasCanIcon } from '@phosphor-icons/react'

type FAQs = {
  question: string
  answer: string
}[]

const faqItems = [
  {
    question: 'Do you charge for each upgrade?',
    answer:
      'Some upgrades are free, while others may have an additional cost, depending on the type of upgrade and your current plan. For specific pricing details, please check our pricing page or contact our support team.'
  },
  {
    question: 'Do I need to purchase a license for each website?',
    answer:
      'Yes, you need to purchase a separate license for each website where you plan to use our components. Each license is tied to a single domain and its subdomains. This ensures proper licensing compliance and helps us maintain and improve our products for all users.'
  },
  {
    question: 'What is regular license?',
    answer:
      'A regular license grants you the right to use our components on a single website or project. It includes access to all basic features, documentation, and standard support. This license is perfect for individual developers or small businesses working on a single project.'
  },
  {
    question: 'What is extended license?',
    answer:
      'An extended license provides additional rights and features beyond the regular license. It includes usage rights for multiple websites, priority support, access to premium components, and the ability to use components in commercial projects that you sell to end customers. Perfect for agencies and large enterprises.'
  }
]


const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto max-w-4xl mb-12 space-y-6 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='inline-flex items-center gap-2 px-3 py-1 text-sm text-primary font-medium'>
            <GasCanIcon className='size-5!' />
            Sua frota com atendimento completo
          </Badge>
          <h2 className='text-balance text-2xl font-semibold md:text-3xl lg:text-4xl'>Soluções personalizadas para sua frota</h2>
          <p className='text-balance text-muted-foreground text-xl'>
            Na Rede Monte Carlo sua frota tem condições especiais. Com uma equipe de especialistas completa, nós entregamos benefícios e valores diferenciados para sua frota rodar mais com menos
          </p>
        </div>

        <Accordion type='single' collapsible className='w-full space-y-2' defaultValue='item-1'>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className='rounded-md border!'>
              <AccordionTrigger className='text-lg px-6'>{item.question}</AccordionTrigger>
              <AccordionContent className='text-muted-foreground text-lg px-6'>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
