import { IconBrandAngular, IconBrandBootstrap, IconBrandCss3, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandPhp, IconBrandReact, IconBrandRedux, IconBrandSass, IconBrandSocketIo, IconBrandTailwind, IconBrandTypescript, IconBrandVite, type Icon, type IconProps } from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

interface ExperienceData {
  title: string
  description: string
  items: {
    company: string
    period: string
    description: string
    stacks: {
      icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
      label: string
    }[]
  }[]
}

export const experienceData: ExperienceData = {
  title: 'Experiência Profissional',
  description: 'Uma linha do tempo das principais conquistas técnicas relacionadas ao desenvolvimento de funcionalidades, realização de testes, redução de erros/avisos de SEO, melhorias de desempenho, acessibilidade (a11y) e modernização tecnológica, com foco em usabilidade e segurança das aplicações.',
  items: [
    {
      company: 'Hublab',
      period: 'Out. 2019 – Fev. 2023',
      description: 'Desenvolvimento de um ecossistema de chatbot composto por interface moderna e painel administrativo dinâmico. A solução possibilitou à equipe de operações gerenciar fluxos conversacionais de forma autônoma, reduzindo significativamente o time-to-market e aumentando a escalabilidade da plataforma. Resultados: ganho de eficiência operacional e autonomia das equipes de negócio.',
      stacks: [
        { icon: IconBrandAngular, label: 'Angular' },
        { icon: IconBrandReact, label: 'React' },
        { icon: IconBrandTypescript, label: 'Typescript' },
        { icon: IconBrandVite, label: 'Vite' },
        { icon: IconBrandTailwind, label: 'Tailwind CSS' },
        { icon: IconBrandSocketIo, label: 'SocketIo' },
        { icon: IconBrandHtml5, label: 'HTML5' },
        { icon: IconBrandCss3, label: 'CSS3' },
        { icon: IconBrandGit, label: 'Git' },
      ],
    },
    {
      company: 'Olivas Digital',
      period: 'Mar. 2021 – Jan. 2022',
      description: 'Criação de interfaces responsivas de alta fidelidade e otimização de desempenho por meio de lazy loading, refatoração de componentes e SEO técnico. As melhorias elevaram as métricas de Core Web Vitals, reduziram o tempo de carregamento em aproximadamente 30% e aprimoraram a performance geral do produto. Resultados: aumento da pontuação Lighthouse e melhora significativa na experiência do usuário.',
      stacks: [
        { icon: IconBrandReact, label: 'React' },
        { icon: IconBrandNextjs, label: 'Next.js' },
        { icon: IconBrandTypescript, label: 'Typescript' },
        { icon: IconBrandJavascript, label: 'Javascript' },
        { icon: IconBrandTailwind, label: 'Tailwind CSS' },
        { icon: IconBrandSass, label: 'Sass' },
        { icon: IconBrandHtml5, label: 'HTML5' },
        { icon: IconBrandCss3, label: 'CSS3' },
        { icon: IconBrandGit, label: 'Git' },
      ],
    },
    {
      company: 'Trinto | Digital Partners',
      period: 'Nov. 2020 – Mar. 2021',
      description: 'Implementação de defesas contra vulnerabilidades XSS e CSRF, reforçando a segurança das aplicações. Otimização de estratégias de cache, reduzindo falhas em produção e melhorando a estabilidade do ambiente. Resultados: maior resiliência da aplicação e redução de riscos de segurança.',
      stacks: [
        { icon: IconBrandReact, label: 'React' },
        { icon: IconBrandRedux, label: 'Redux' },
        { icon: IconBrandTypescript, label: 'Typescript' },
        { icon: IconBrandJavascript, label: 'Javascript' },
        { icon: IconBrandHtml5, label: 'HTML5' },
        { icon: IconBrandCss3, label: 'CSS3' },
        { icon: IconBrandGit, label: 'Git' },
      ],
    },
    {
      company: '2morrow Sports',
      period: 'Jan. 2020 – Out. 2020',
      description: 'Desenvolvimento de funcionalidades essenciais voltadas ao usuário, como login, gerenciamento de perfil e histórico financeiro. As melhorias ampliaram a personalização da experiência e aumentaram a transparência das informações aos membros da plataforma. Resultados: aumento de engajamento e satisfação dos usuários.',
      stacks: [
        { icon: IconBrandJavascript, label: 'Javascript' },
        { icon: IconBrandBootstrap, label: 'Bootstrap' },
        { icon: IconBrandSass, label: 'Sass' },
        { icon: IconBrandHtml5, label: 'HTML5' },
        { icon: IconBrandCss3, label: 'CSS3' },
        { icon: IconBrandGit, label: 'Git' },
      ],
    },
    {
      company: 'Velani Contabilidade',
      period: 'Jun. 2019 – Set. 2019',
      description: 'Criação de interfaces intuitivas para o sistema financeiro, transformando dados complexos em visualizações claras e acionáveis. Responsável por integrações com APIs externas e aprimoramentos contínuos de UX e desempenho. Resultados: melhoria na experiência do usuário e maior eficiência no uso da aplicação.',
      stacks: [
        { icon: IconBrandJavascript, label: 'Javascript' },
        { icon: IconBrandPhp, label: 'PHP' },
        { icon: IconBrandBootstrap, label: 'Bootstrap' },
        { icon: IconBrandSass, label: 'Sass' },
        { icon: IconBrandHtml5, label: 'HTML5' },
        { icon: IconBrandCss3, label: 'CSS3' },
        { icon: IconBrandGit, label: 'Git' },
      ],
    },
  ],
}
