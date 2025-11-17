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
    metrics: {
      value: string
      label: string
    }[]
  }[]
}

export const experienceData: ExperienceData = {
  title: 'Aplicações do mundo real',
  description: 'Atuação focada no desenvolvimento de aplicações web escaláveis e de alta performance, otimização contínua (Core Web Vitals, SEO), modernização arquitetural (React, Next.js) e criação de interfaces consistentes, responsivas e acessíveis.',
  items: [
    {
      company: 'Hublab',
      period: 'Out. 2019 – Fev. 2023',
      description: 'Liderança e arquitetura Front-end na concepção e implementação de um sistema de gerenciamento de mensagens em larga escala integradas com IA Generativa. Modernização integral do stack para React/TypeScript centrada em segurança arquitetural, consolidando altos padrões de qualidade, desempenho e confiabilidade.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'vite', label: 'Vite' },
        { slug: 'tailwindcss', label: 'tailwind CSS' },
        { slug: 'socketdotio', label: 'Socket IO' },
        { slug: 'angular', label: 'Angular' },
        { slug: 'typescript', label: 'TypeScript' },
        { slug: 'react', label: 'React' }
      ],
      metrics: [
        { value: '25% de aumento', label: 'Cobertura de testes automatizados' },
        { value: '17% de aumento', label: 'Produtividade da equipe' }
      ]
    },
    {
      company: 'Olivas Digital',
      period: 'Mar. 2021 – Jan. 2022',
      description: 'Desenvolvimento de interfaces responsivas e de alta fidelidade para e-commerces e sistemas corporativos, com foco em performance, estabilidade e escalabilidade. Otimizações contínuas de LCP/FID e criação de componentes orientados à conversão (leads/CRMs). Contribuição direta para crescimento de tráfego orgânico e agilidade de entrega.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'cssmodules', label: 'CSS Modules' },
        { slug: 'nodedotjs', label: 'Node.js' },
        { slug: 'typescript', label: 'TypeScript' },
        { slug: 'react', label: 'React' },
        { slug: 'nextdotjs', label: 'Next.js' }
      ],
      metrics: [
        { value: '25% de melhoria', label: 'LCP médio (Core Web Vitals)' },
        { value: '3x de crescimento', label: 'Geração de leads (via CRM)' }
      ]
    },
    {
      company: 'Trinto | Digital Partners',
      period: 'Nov. 2020 – Mar. 2021',
      description: 'Responsável por suporte técnico crítico e otimização de e-commerces VTEX e Linx, assegurando estabilidade em ambientes de alto tráfego. Correções estruturais em acessibilidade dentro do padrão WCAG AA, ajustes de performance, melhorias de SEO e implementação de testes funcionais e A/B voltados à proteção de fluxos essenciais.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'javascript', label: 'JavaScript' },
        { slug: 'typescript', label: 'TypeScript' },
        { slug: 'react', label: 'React' },
        { slug: 'vtex', label: 'VTEX' }
      ],
      metrics: [
        { value: '15% de aumento', label: 'Pontuação de acessibilidade' },
        { value: '33% de redução', label: 'Erros e alertas de SEO' }
      ]
    },
    {
      company: '2Morrow Sports',
      period: 'Jan. 2020 – Out. 2020',
      description: 'Desenvolvimento front-end para plataforma de sócio-torcedor, com atuação em módulos financeiros sensíveis, tratamento de picos de tráfego e modernização gradual de código legado. Melhorias de UX, correções de responsividade e execução de testes funcionais integrados ao backend, garantindo confiabilidade operacional.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'gulp', label: 'Gulp' },
        { slug: 'webpack', label: 'Webpack' },
        { slug: 'git', label: 'Git' },
        { slug: 'jquery', label: 'jQuery' },
        { slug: 'javascript', label: 'JavaScript' }
      ],
      metrics: [
        { value: '30% de redução', label: 'Falhas em produção (bugs)' },
        { value: '12% de redução', label: 'Tickets de suporte' }
      ]
    },
    {
      company: 'Velani Digital',
      period: 'Jun. 2019 – Set. 2019',
      description: 'Atuação em plataforma financeira/contábil, com foco em estabilidade operacional e experiência do usuário. Redução significativa de travamentos em módulos com grande volume de dados, aprimoramento de dashboards analíticos e execução de testes funcionais para garantir integridade de operações críticas como emissão de notas e boletos.',
      stacks: [
        { slug: 'html5', label: 'HTML5' },
        { slug: 'css', label: 'CSS3' },
        { slug: 'bootstrap', label: 'Bootstrap' },
        { slug: 'sass', label: 'Sass' },
        { slug: 'chartdotjs', label: 'Chart.js' },
        { slug: 'webpack', label: 'Webpack' },
        { slug: 'git', label: 'Git' },
        { slug: 'jquery', label: 'jQuery' },
        { slug: 'javascript', label: 'JavaScript' }
      ],
      metrics: [
        { value: '40% de aumento', label: 'Eficiência de consulta de dados' },
        { value: '19% de redução', label: 'Erros recorrentes' }
      ]
    }
  ]
}
