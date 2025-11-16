// .ts
interface ExperienceData {
  title: string
  description: string
  items: {
    company: string
    period: string
    description: string
    stacks: {
      slug: string
      label: string
    }[]
    // NOVO: Array para métricas dinâmicas
    metrics: {
      value: string
      label: string
    }[]
  }[]
}

export const experienceData: ExperienceData = {
  title: 'Experiência em aplicações do mundo real',
  description: 'Histórico de desenvolvimento de aplicações web de alta performance, com foco em otimização (Core Web Vitals, SEO), modernização de arquiteturas (React, Next.js) e criação de interfaces responsivas e acessíveis (a11y).',
  items: [
    {
      company: 'Hublab',
      period: 'Out. 2019 – Fev. 2023',
      description: 'Desenvolvimento Front End do ecossistema de chatbot, incluindo interface de chat (Angular) e painel administrativo dinâmico (React/Vite). A solução permitiu à equipe de operações gerenciar fluxos de forma autônoma, reduzindo o time-to-market de novas campanhas em 40%.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'git', label: 'Git' },
        { slug: 'socketdotio', label: 'Socket.io' },
        { slug: 'tailwindcss', label: 'Tailwind CSS' },
        { slug: 'vite', label: 'Vite' },
        { slug: 'angular', label: 'Angular' },
        { slug: 'typescript', label: 'Typescript' },
        { slug: 'react', label: 'React' },
      ],
      metrics: [
        { value: '-40%', label: 'no time-to-market' },
      ],
    },
    {
      company: 'Olivas Digital',
      period: 'Mar. 2021 – Jan. 2022',
      description: 'Desenvolvimento de interfaces responsivas de alta fidelidade e otimização de performance para múltiplos sites comerciais (SEO técnico, lazy loading). As melhorias elevaram a pontuação do Lighthouse para 95+ (Performance) e reduziram o tempo de carregamento em ~30%.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'git', label: 'Git' },
        { slug: 'sass', label: 'Sass' },
        { slug: 'javascript', label: 'Javascript' },
        { slug: 'tailwindcss', label: 'Tailwind CSS' },
        { slug: 'typescript', label: 'Typescript' },
        { slug: 'nextdotjs', label: 'Next.js' },
        { slug: 'react', label: 'React' },
      ],
      metrics: [
        { value: '-30%', label: 'no tempo de carregamento' },
        { value: '95+', label: 'em pontuação do Lighthouse' },
      ],
    },
    {
      company: 'Trinto | Digital Partners',
      period: 'Nov. 2020 – Mar. 2021',
      description: 'Otimização de performance e segurança Front End em plataformas de e-commerce (VTEX, Linx). Implementação de defesas contra vulnerabilidades XSS/CSRF e melhorias no cache, reduzindo o número de falhas em produção em 20% e reforçando a resiliência das aplicações.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'javascript', label: 'Javascript' },
        { slug: 'typescript', label: 'Typescript' },
        { slug: 'react', label: 'React' },
        { slug: 'vtex', label: 'Vtex' },
      ],
      metrics: [
        { value: '-45%', label: 'no tempo de carregamento' },
        { value: '-20%', label: 'de falhas em produção' },
      ],
    },
    {
      company: '2morrow Sports',
      period: 'Jan. 2020 – Out. 2020',
      description: 'Desenvolvimento de funcionalidades Front End essenciais para a plataforma, incluindo fluxos de login/autenticação, gerenciamento de perfil e painel de histórico financeiro. As novas features aumentaram o engajamento de usuários em 15% e melhoraram a transparência das informações.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'git', label: 'Git' },
        { slug: 'sass', label: 'Sass' },
        { slug: 'bootstrap', label: 'Bootstrap' },
        { slug: 'javascript', label: 'Javascript' },
        { slug: 'webpack', label: 'Webpack' },
      ],
      metrics: [
        { value: '+15%', label: 'no engajamento de usuários' },
      ],
    },
    {
      company: 'Velani Contabilidade',
      period: 'Jun. 2019 – Set. 2019',
      description: 'Criação de interfaces Front End para sistema financeiro, com foco na visualização de dados contábeis complexos (dashboards e relatórios). Responsável por integrações com APIs externas, resultando em uma redução de 25% no tempo de conclusão de tarefas pelos usuários.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'git', label: 'Git' },
        { slug: 'sass', label: 'Sass' },
        { slug: 'bootstrap', label: 'Bootstrap' },
        { slug: 'jquery', label: 'jQuery' },
        { slug: 'javascript', label: 'Javascript' },
        { slug: 'webpack', label: 'Webpack' },
      ],
      metrics: [
        { value: '-25%', label: 'no tempo de tarefas' },
        { value: '+65%', label: 'no engajamento de usuários' },
      ],
    },
  ],
}
