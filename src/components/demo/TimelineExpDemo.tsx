import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { CalendarBlankIcon } from '@phosphor-icons/react'

interface ExperienceProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

const experiences: ExperienceProps[] = [
  {
    "title": "Desenvolvedor Frontend",
    "company": "Hublab",
    "period": "out. 2019 - fev. 2023",
    "description": "Desenvolvimento de um ecossistema de chatbot, incluindo interface moderna e painel administrativo dinâmico. A solução permitiu à equipe de operações gerenciar fluxos de conversa de forma autônoma, reduzindo significativamente o time-to-market.",
    "technologies": [
      "Angular",
      "MirageJS",
      "React",
      "Socket.IO",
      "TailwindCSS",
      "TypeScript",
      "Vite"
    ]
  },
  {
    "title": "Desenvolvedor Frontend",
    "company": "Olivas Digital",
    "period": "mar. 2021 - jan. 2022",
    "description": "Desenvolvimento de interfaces responsivas de alta fidelidade e otimização de desempenho por meio de lazy loading, refatoração de código e SEO técnico. As melhorias elevaram os indicadores de Core Web Vitals e aprimoraram a performance geral do produto.",
    "technologies": [
      "Framer Motion",
      "jQuery",
      "Next.js",
      "React",
      "TypeScript",
      "Webpack"
    ]
  },
  {
    "title": "Desenvolvedor Frontend",
    "company": "Trinto | Digital Partners",
    "period": "nov. 2020 - mar. 2021",
    "description": "Implementação de defesas contra vulnerabilidades XSS e CSRF, fortalecimento da segurança das aplicações e otimização de estratégias de cache para maior estabilidade e agilidade em produção.",
    "technologies": [
      "Linx Commerce",
      "React",
      "Redux",
      "TypeScript",
      "VTEX",
      "JavaScript"
    ]
  },
  {
    "title": "Desenvolvedor Frontend",
    "company": "2morrow Sports",
    "period": "jan. 2020 - out. 2020",
    "description": "Desenvolvimento de funcionalidades essenciais voltadas ao usuário, incluindo login, gerenciamento de perfil e histórico financeiro. As melhorias ampliaram a personalização e a transparência das informações para os membros da plataforma.",
    "technologies": [
      "Axios",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Webpack"
    ]
  },
  {
    "title": "Desenvolvedor Frontend",
    "company": "Velani Contabilidade",
    "period": "jun. 2019 - set. 2019",
    "description": "Desenvolvimento de interfaces intuitivas para o sistema financeiro, transformando dados complexos em visualizações claras e acionáveis. Responsável por integrações com APIs externas e aprimoramento da experiência do usuário.",
    "technologies": [
      "Bootstrap",
      "Chart.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "PHP"
    ]
  }
]

export const TimelineExpDemo = () => (
  <section id='experience' className='relative mx-auto w-full max-w-5xl overflow-hidden px-6 py-16 md:py-32'>
    <div className='flex flex-col items-center text-center gap-6'>
      <BlurFade delay={0.25 + 0 * 0.05} inView>
        <h1 className="sm:font-light leading-tighter tracking-tight text-3xl lg:text-4xl xl:text-5xl">
          Trajetória profissional
        </h1>
      </BlurFade>
      <BlurFade delay={0.25 + 1 * 0.05} inView>
        <p className="font-light leading-tighter tracking-tight text-base lg:text-lg xl:text-xl">
          Uma linha do tempo do meu crescimento profissional e das principais tecnologias.
        </p>
      </BlurFade>
      <ul className='mt-8'>
        {experiences.map((experience, idx) => (
          <li key={idx} className='relative not-last:pb-12 group'>
            <div className='absolute left-0.5 top-2.5 h-full w-0.5 bg-border' />
            <div className='absolute -left-0.5 top-2.5 size-2.5 rounded-full border-2 border-ring' />
            <div className='flex flex-col text-left gap-2 pl-6'>
              <BlurFade delay={0.25 + idx * 0.05} inView>
                <p className='text-base sm:text-lg font-medium'>{experience.company}</p>
              </BlurFade>
              <BlurFade delay={0.25 + idx * 0.05} inView>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <CalendarBlankIcon />
                  <span className='text-sm'>{experience.period}</span>
                </div>
              </BlurFade>
              <BlurFade delay={0.25 + idx * 0.05} inView>
                <p className='text-sm sm:text-base text-muted-foreground'>{experience.description}</p>
              </BlurFade>
              <div className='mt-2 flex flex-wrap gap-2'>
                {experience.technologies.map((tech, idx2) => (
                  <BlurFade key={idx2} delay={0.25 + idx2 * 0.05} inView>
                    <Badge variant='secondary'>{tech}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
