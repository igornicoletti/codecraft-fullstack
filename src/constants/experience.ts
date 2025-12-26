import type { ExperienceSectionContent } from '@/types/experience.types'

export const experienceSectionData: ExperienceSectionContent = {
  sectionTagline: 'Experiência profissional',
  mainHeading: {
    prefix: 'Aplicações',
    highlightedText: 'do mundo real'
  },
  resumeDownloadAction: {
    fileUrl: '@/assets/images/igornicoletti.pdf',
    circleText: 'baixar currículo • baixar currículo •'
  },
  careerSummary: 'Trajetória definida pela construção de ecossistemas digitais resilientes em verticais exigentes como Fintech, IA Generativa, Sports Tech e E-commerce Enterprise, com foco na engenharia de performance – da otimização granular de Core Web Vitals e estratégias de Server-Side Rendering (SSR) à orquestração de estados complexos e visualização de dados (BI) em tempo real via WebSockets.',
  externalProfileCta: {
    url: 'https://www.linkedin.com/in/igornicoletti',
    label: 'Explorar trajetórias no LinkedIn',
  },
  careerHistory: [
    {
      organizationName: 'Hublab',
      websiteUrl: 'https://www.hubchat.com.br/',
      employmentPeriod: 'Out. 2019 – Fev. 2023',
      roleDescription: 'Engenharia de interfaces escaláveis para soluções de IA Generativa, otimizando a UX do chat conversacional. Desenvolvimento de dashboards de telemetria em tempo real e módulos de visualização de dados para BI, assegurando renderização de alta performance e integração robusta com APIs.',
      technologiesUsed: [
        { iconSlug: 'html5', displayName: 'HTML5' },
        { iconSlug: 'css', displayName: 'CSS3' },
        { iconSlug: 'tailwindcss', displayName: 'Tailwind CSS' },
        { iconSlug: 'socketdotio', displayName: 'Socket IO' },
        { iconSlug: 'nodedotjs', displayName: 'Node.js' },
        { iconSlug: 'vite', displayName: 'Vite' },
        { iconSlug: 'angular', displayName: 'Angular' },
        { iconSlug: 'javascript', displayName: 'JavaScript' },
        { iconSlug: 'typescript', displayName: 'TypeScript' },
        { iconSlug: 'react', displayName: 'React' }
      ],
      keyAchievements: [
        {
          displayValue: '32%',
          metricLabel: 'de melhoria',
          details: 'Performance de renderização (FPS) dos dashboards de telemetria e visualização de dados em tempo real via WebSockets.'
        },
        {
          displayValue: '18%',
          metricLabel: 'de redução',
          details: 'Time-to-Interactive (TTI) da interface do assistente virtual, otimizando a retenção de leads durante o atendimento.'
        }
      ]
    },
    {
      organizationName: 'Olivas Digital',
      websiteUrl: 'https://www.olivas.digital/',
      employmentPeriod: 'Mar. 2021 – Jan. 2022',
      roleDescription: 'Arquitetura de interfaces pixel-perfect em sinergia com UI/UX, implementando estratégias avançadas de SEO técnico e semântica web. Desenvolvimento de soluções cross-platform e integração de ecossistemas de automação (CRM/Marketing), focando em escalabilidade e conformidade com Core Web Vitals.',
      technologiesUsed: [
        { iconSlug: 'git', displayName: 'Git' },
        { iconSlug: 'html5', displayName: 'HTML5' },
        { iconSlug: 'css', displayName: 'CSS3' },
        { iconSlug: 'gulp', displayName: 'Gulp' },
        { iconSlug: 'webpack', displayName: 'Webpack' },
        { iconSlug: 'jquery', displayName: 'jQuery' },
        { iconSlug: 'javascript', displayName: 'JavaScript' },
        { iconSlug: 'typescript', displayName: 'TypeScript' },
        { iconSlug: 'nextdotjs', displayName: 'Next.js' },
        { iconSlug: 'react', displayName: 'React' }
      ],
      keyAchievements: [
        {
          displayValue: '145%',
          metricLabel: 'de melhoria',
          details: 'Indexabilidade e posicionamento orgânico (SERP) mediante reestruturação semântica do DOM e implementação de Server-Side Rendering (SSR).'
        },
        {
          displayValue: '28%',
          metricLabel: 'de redução',
          details: 'First Contentful Paint (FCP) através de code splitting e otimização de assets, elevando a retenção de usuários e a conversão de leads.'
        }
      ]
    },
    {
      organizationName: 'Trinto | Digital Partners',
      websiteUrl: 'https://www.trinto.com.br/',
      employmentPeriod: 'Nov. 2020 – Mar. 2021',
      roleDescription: 'Engenharia de sustentação para ecossistemas de e-commerce Enterprise (VTEX/Linx), assegurando alta disponibilidade e resiliência sistêmica. Execução de tuning de performance, refatoração para conformidade WCAG AA e mitigação de débitos técnicos de SEO. Blindagem de fluxos transacionais críticos via testes de regressão rigorosos.',
      technologiesUsed: [
        { iconSlug: 'html5', displayName: 'HTML5' },
        { iconSlug: 'css', displayName: 'CSS3' },
        { iconSlug: 'javascript', displayName: 'JavaScript' },
        { iconSlug: 'typescript', displayName: 'TypeScript' },
        { iconSlug: 'react', displayName: 'React' },
        { iconSlug: 'vtex', displayName: 'VTEX' }
      ],
      keyAchievements: [
        {
          displayValue: '35%',
          metricLabel: 'de melhoria',
          details: 'Accessibility Score (Lighthouse) mediante reestruturação semântica do DOM e aplicação estrita das diretrizes WCAG AA em componentes legados.'
        },
        {
          displayValue: '22%',
          metricLabel: 'de redução',
          details: 'Taxa de latência de renderização (blocking time) em páginas de produto (PDP) durante picos de tráfego, otimizando a execução da Main Thread.'
        }
      ]
    },
    {
      organizationName: '2Morrow Sports',
      websiteUrl: 'https://2morrowsports.com.br/',
      employmentPeriod: 'Jan. 2020 – Out. 2020',
      roleDescription: 'Engenharia de interfaces modulares para ecossistemas de Fan Engagement e monetização high-stakes. Desenvolvimento de checkouts transparentes com integração de gateways complexos e arquitetura de segurança militar (padrão Red Bull). Implementação de dashboards de BI para visualização analítica de telemetria comportamental.',
      technologiesUsed: [
        { iconSlug: 'git', displayName: 'Git' },
        { iconSlug: 'html5', displayName: 'HTML5' },
        { iconSlug: 'css', displayName: 'CSS3' },
        { iconSlug: 'sass', displayName: 'Sass' },
        { iconSlug: 'gulp', displayName: 'Gulp' },
        { iconSlug: 'bootstrap', displayName: 'Bootstrap' },
        { iconSlug: 'jquery', displayName: 'jQuery' },
        { iconSlug: 'javascript', displayName: 'JavaScript' },
        { iconSlug: 'webpack', displayName: 'Webpack' }
      ],
      keyAchievements: [
        {
          displayValue: '42%',
          metricLabel: 'de melhoria',
          details: 'Taxa de conversão de assinaturas (Conversion Rate) mediante a otimização da UX transacional e redução de fricção cognitiva nos fluxos de checkout.'
        },
        {
          displayValue: '99%',
          metricLabel: 'de redução',
          details: 'Vetores de vulnerabilidade no client-side (XSS/CSRF), assegurando conformidade total de segurança globais e integridade de dados sensíveis.'
        }
      ]
    },
    {
      organizationName: 'Velani Digital',
      websiteUrl: 'https://velani.com.br/',
      employmentPeriod: 'Jun. 2019 – Set. 2019',
      roleDescription: 'Engenharia de interfaces para ecossistema SaaS ERP fintech-oriented, orquestrando visualização de dados financeiros (BI) de alta densidade. Desenvolvimento de dashboards analíticos reativos para gestão de Cash Flow, assegurando integridade transacional visual e UX otimizada para fluxos críticos de Contabilidade Digital.',
      technologiesUsed: [
        { iconSlug: 'git', displayName: 'Git' },
        { iconSlug: 'html5', displayName: 'HTML5' },
        { iconSlug: 'css', displayName: 'CSS3' },
        { iconSlug: 'bootstrap', displayName: 'Bootstrap' },
        { iconSlug: 'sass', displayName: 'Sass' },
        { iconSlug: 'chartdotjs', displayName: 'Chart.js' },
        { iconSlug: 'jquery', displayName: 'jQuery' },
        { iconSlug: 'javascript', displayName: 'JavaScript' },
        { iconSlug: 'webpack', displayName: 'Webpack' }
      ],
      keyAchievements: [
        {
          displayValue: '40%',
          metricLabel: 'de melhoria',
          details: 'Eficiência de renderização de Data Grids financeiros volumosos através de técnicas de virtualização e memoization.'
        },
        {
          displayValue: '25%',
          metricLabel: 'de redução',
          details: 'Time-to-Insight dos usuários finais ao otimizar a arquitetura de informação e a carga assíncrona de módulos de BI para tomada de decisão estratégica.'
        }
      ]
    }
  ]
}
