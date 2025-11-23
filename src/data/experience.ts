export interface TechStackItem {
  slug: string
  label: string
}

export interface ImpactMetric {
  value: string
  context: string
  description: string
}

export interface WorkPosition {
  organizationName: string
  employmentPeriod: string
  projectDescription: string
  techStack: TechStackItem[]
  impactMetrics: ImpactMetric[]
}

export interface WorkExperienceData {
  label: string
  headline: string
  description: string
  positions: WorkPosition[]
}

export const experienceData: WorkExperienceData = {
  label: 'Experiência profissional',
  headline: 'Aplicações do mundo real',
  description: 'Trajetória definida pela construção de ecossistemas digitais resilientes em verticais exigentes como Fintech, IA Generativa, Sports Tech e E-commerce Enterprise, com foco na engenharia de performance – da otimização granular de Core Web Vitals e estratégias de Server-Side Rendering (SSR) à orquestração de estados complexos e visualização de dados (BI) em tempo real via WebSockets.',
  positions: [
    {
      organizationName: 'Hublab',
      employmentPeriod: 'Out. 2019 – Fev. 2023',
      projectDescription: 'Engenharia de interfaces escaláveis para soluções de IA Generativa, otimizando a UX do chat conversacional. Desenvolvimento de dashboards de telemetria em tempo real e módulos de visualização de dados para BI, assegurando renderização de alta performance e integração robusta com APIs.',
      techStack: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'tailwindcss', label: 'tailwind CSS' },
        { slug: 'socketdotio', label: 'Socket IO' },
        { slug: 'nodedotjs', label: 'Node.js' },
        { slug: 'vite', label: 'Vite' },
        { slug: 'angular', label: 'Angular' },
        { slug: 'javascript', label: 'JavaScript' },
        { slug: 'typescript', label: 'TypeScript' },
        { slug: 'react', label: 'React' }
      ],
      impactMetrics: [
        {
          value: '32%',
          context: 'de melhoria',
          description: 'Performance de renderização (FPS) dos dashboards de telemetria e visualização de dados em tempo real via WebSockets.'
        },
        {
          value: '18%',
          context: 'de redução',
          description: 'Time-to-Interactive (TTI) da interface do assistente virtual, otimizando a retenção de leads durante o atendimento.'
        }
      ]
    },
    {
      organizationName: 'Olivas Digital',
      employmentPeriod: 'Mar. 2021 – Jan. 2022',
      projectDescription: 'Arquitetura de interfaces pixel-perfect em sinergia com UI/UX, implementando estratégias avançadas de SEO técnico e semântica web. Desenvolvimento de soluções cross-platform e integração de ecossistemas de automação (CRM/Marketing), focando em escalabilidade e conformidade com Core Web Vitals.',
      techStack: [
        { slug: 'git', label: 'Git' },
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'gulp', label: 'Gulp' },
        { slug: 'webpack', label: 'Webpack' },
        { slug: 'jquery', label: 'jQuery' },
        { slug: 'javascript', label: 'JavaScript' },
        { slug: 'typescript', label: 'TypeScript' },
        { slug: 'nextdotjs', label: 'Next.js' },
        { slug: 'react', label: 'React' }
      ],
      impactMetrics: [
        {
          value: '145%',
          context: 'de melhoria',
          description: 'Indexabilidade e posicionamento orgânico (SERP) mediante reestruturação semântica do DOM e implementação de Server-Side Rendering (SSR).'
        },
        {
          value: '28%',
          context: 'de redução',
          description: 'First Contentful Paint (FCP) através de code splitting e otimização de assets, elevando a retenção de usuários e a conversão de leads.'
        }
      ]
    },
    {
      organizationName: 'Trinto | Digital Partners',
      employmentPeriod: 'Nov. 2020 – Mar. 2021',
      projectDescription: 'Engenharia de sustentação para ecossistemas de e-commerce Enterprise (VTEX/Linx), assegurando alta disponibilidade e resiliência sistêmica. Execução de tuning de performance, refatoração para conformidade WCAG AA e mitigação de débitos técnicos de SEO. Blindagem de fluxos transacionais críticos via testes de regressão rigorosos.',
      techStack: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'javascript', label: 'JavaScript' },
        { slug: 'typescript', label: 'TypeScript' },
        { slug: 'react', label: 'React' },
        { slug: 'vtex', label: 'VTEX' }
      ],
      impactMetrics: [
        {
          value: '35%',
          context: 'de melhoria',
          description: 'Accessibility Score (Lighthouse) mediante reestruturação semântica do DOM e aplicação estrita das diretrizes WCAG AA em componentes legados.'
        },
        {
          value: '22%',
          context: 'de redução',
          description: 'Taxa de latência de renderização (blocking time) em páginas de produto (PDP) durante picos de tráfego, otimizando a execução da Main Thread.'
        }
      ]
    },
    {
      organizationName: '2Morrow Sports',
      employmentPeriod: 'Jan. 2020 – Out. 2020',
      projectDescription: 'Engenharia de interfaces modulares para ecossistemas de Fan Engagement e monetização high-stakes. Desenvolvimento de checkouts transparentes com integração de gateways complexos e arquitetura de segurança militar (padrão Red Bull). Implementação de dashboards de BI para visualização analítica de telemetria comportamental.',
      techStack: [
        { slug: 'git', label: 'Git' },
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'sass', label: 'Sass' },
        { slug: 'gulp', label: 'Gulp' },
        { slug: 'bootstrap', label: 'Bootstrap' },
        { slug: 'jquery', label: 'jQuery' },
        { slug: 'javascript', label: 'JavaScript' },
        { slug: 'webpack', label: 'Webpack' }
      ],
      impactMetrics: [
        {
          value: '42%',
          context: 'de melhoria',
          description: 'Taxa de conversão de assinaturas (Conversion Rate) mediante a otimização da UX transacional e redução de fricção cognitiva nos fluxos de checkout.'
        },
        {
          value: '99%',
          context: 'de redução',
          description: 'Vetores de vulnerabilidade no client-side (XSS/CSRF), assegurando conformidade total de segurança globais e integridade de dados sensíveis.'
        }
      ]
    },
    {
      organizationName: 'Velani Contabilidade',
      employmentPeriod: 'Jun. 2019 – Set. 2019',
      projectDescription: 'Engenharia de interfaces para ecossistema SaaS ERP fintech-oriented, orquestrando visualização de dados financeiros (BI) de alta densidade. Desenvolvimento de dashboards analíticos reativos para gestão de Cash Flow, assegurando integridade transacional visual e UX otimizada para fluxos críticos de Contabilidade Digital.',
      techStack: [
        { slug: 'git', label: 'Git' },
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'bootstrap', label: 'Bootstrap' },
        { slug: 'sass', label: 'Sass' },
        { slug: 'chartdotjs', label: 'Chart.js' },
        { slug: 'jquery', label: 'jQuery' },
        { slug: 'javascript', label: 'JavaScript' },
        { slug: 'webpack', label: 'Webpack' }
      ],
      impactMetrics: [
        {
          value: '40%',
          context: 'de melhoria',
          description: 'Eficiência de renderização de Data Grids financeiros volumosos através de técnicas de virtualização e memoization.'
        },
        {
          value: '25%',
          context: 'de redução',
          description: 'Time-to-Insight dos usuários finais ao otimizar a arquitetura de informação e a carga assíncrona de módulos de BI para tomada de decisão estratégica.'
        }
      ]
    }
  ]
}
