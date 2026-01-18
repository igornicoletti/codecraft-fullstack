import igornicoletti from '@/assets/images/igornicoletti.pdf'
import type { ExperienceSectionContent } from '@/types/experience.types'

export const experienceSectionData: ExperienceSectionContent = {
  sectionTagline: 'Experiência profissional',
  mainHeading: {
    prefix: 'Aplicações',
    highlightedText: 'do mundo real'
  },
  resumeDownloadAction: {
    fileUrl: igornicoletti,
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
      roleDescription: 'Desenvolvimento de interfaces escaláveis para soluções de IA Generativa, focando na otimização da experiência do usuário (UX) em chatbots. Criação de dashboards de telemetria em tempo real e módulos de visualização de dados para Business Intelligence (BI), garantindo alta performance e integração robusta com APIs.',
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
          metricLabel: 'Renderização em tempo real',
          details: 'Implementação de dashboards de telemetria e BI via WebSockets, otimizando FPS e TTI.'
        },
        {
          metricLabel: 'UX conversacional',
          details: 'Otimização da interface do assistente virtual para maximizar a retenção de leads durante o atendimento.'
        }
      ]
    },
    {
      organizationName: 'Olivas Digital',
      websiteUrl: 'https://www.olivas.digital/',
      employmentPeriod: 'Mar. 2021 – Jan. 2022',
      roleDescription: 'Arquitetura de interfaces pixel-perfect em sinergia com UI/UX, implementando estratégias avançadas de SEO técnico e semântica web. Desenvolvimento de soluções cross-platform e integração de ecossistemas de automação (CRM/Marketing), priorizando escalabilidade e conformidade com Core Web Vitals.',
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
          metricLabel: 'SEO e indexabilidade',
          details: 'Reestruturação semântica e SSR para otimização do posicionamento orgânico (SERP).'
        },
        {
          metricLabel: 'Velocidade de carregamento',
          details: 'Implementação de code splitting e otimização de assets, reduzindo FCP e aumentando a conversão de leads.'
        }
      ]
    },
    {
      organizationName: 'Trinto | Digital Partners',
      websiteUrl: 'https://www.trinto.com.br/',
      employmentPeriod: 'Nov. 2020 – Mar. 2021',
      roleDescription: 'Engenharia de sustentação para ecossistemas de e-commerce Enterprise (VTEX/Linx), assegurando alta disponibilidade e resiliência sistêmica. Execução de tuning de performance, refatoração para conformidade WCAG AA e mitigação de débitos técnicos de SEO, garantindo a integridade dos fluxos transacionais críticos.',
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
          metricLabel: 'Conformidade WCAG',
          details: 'Reestruturação semântica do DOM, elevando o Accessibility Score em componentes legados.'
        },
        {
          metricLabel: 'Rendering performance',
          details: 'Redução do blocking time em PDP durante picos de tráfego, otimizando a Main Thread.'
        }
      ]
    },
    {
      organizationName: '2Morrow Sports',
      websiteUrl: 'https://2morrowsports.com.br/',
      employmentPeriod: 'Jan. 2020 – Out. 2020',
      roleDescription: 'Desenvolvimento de interfaces modulares para ecossistemas de Fan Engagement e monetização high-stakes. Criação de checkouts transparentes com integração de gateways complexos e arquitetura de segurança militar (padrão Red Bull). Implementação de dashboards de BI para visualização analítica de telemetria comportamental.',
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
          metricLabel: 'Conversão de assinaturas',
          details: 'Otimização da UX transacional, reduzindo a fricção cognitiva nos fluxos de checkout.'
        },
        {
          metricLabel: 'Segurança client-side',
          details: 'Mitigação de vulnerabilidades (XSS/CSRF) com conformidade total de integridade de dados sensíveis.'
        }
      ]
    },
    {
      organizationName: 'Velani Digital',
      websiteUrl: 'https://velani.com.br/',
      employmentPeriod: 'Jun. 2019 – Set. 2019',
      roleDescription: 'Desenvolvimento de interfaces para ecossistemas SaaS ERP voltados para fintechs, orquestrando a visualização de dados financeiros (BI) de alta densidade. Criação de dashboards analíticos reativos para gestão de Cash Flow, assegurando integridade transacional visual e UX otimizada para fluxos críticos de Contabilidade Digital.',
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
          metricLabel: 'Visualização de dados financeiros',
          details: 'Otimização de Data Grids volumosos com virtualização e memoization.'
        },
        {
          metricLabel: 'Inteligência de decisão',
          details: 'Carga assíncrona de módulos BI, acelerando o time-to-insight para decisões estratégicas.'
        }
      ]
    }
  ]
}
