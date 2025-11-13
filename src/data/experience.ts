export interface Experience {
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface ExperienceData {
  title: string
  subtitle: string
  business: Experience[]
}

export const experienceData: ExperienceData = {
  title: 'Experiência Profissional',
  subtitle: 'Uma linha do tempo das principais conquistas técnicas relacionadas ao desenvolvimento de funcionalidades, realização de testes, redução de erros/avisos de SEO, melhorias de desempenho, acessibilidade (a11y) e modernização tecnológica, com foco em usabilidade e segurança das aplicações.',
  business: [
    {
      company: 'Hublab',
      period: 'Out. 2019 – Fev. 2023',
      description: 'Desenvolvimento de um ecossistema de chatbot composto por interface moderna e painel administrativo dinâmico. A solução possibilitou à equipe de operações gerenciar fluxos conversacionais de forma autônoma, reduzindo significativamente o time-to-market e aumentando a escalabilidade da plataforma. Resultados: ganho de eficiência operacional e autonomia das equipes de negócio.',
      technologies: ['Angular', 'React', 'MirageJS', 'Socket.IO', 'TailwindCSS', 'TypeScript', 'Vite']
    },
    {
      company: 'Olivas Digital',
      period: 'Mar. 2021 – Jan. 2022',
      description: 'Criação de interfaces responsivas de alta fidelidade e otimização de desempenho por meio de lazy loading, refatoração de componentes e SEO técnico. As melhorias elevaram as métricas de Core Web Vitals, reduziram o tempo de carregamento em aproximadamente 30% e aprimoraram a performance geral do produto. Resultados: aumento da pontuação Lighthouse e melhora significativa na experiência do usuário.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Webpack', 'jQuery']
    },
    {
      company: 'Trinto | Digital Partners',
      period: 'Nov. 2020 – Mar. 2021',
      description: 'Implementação de defesas contra vulnerabilidades XSS e CSRF, reforçando a segurança das aplicações. Otimização de estratégias de cache, reduzindo falhas em produção e melhorando a estabilidade do ambiente. Resultados: maior resiliência da aplicação e redução de riscos de segurança.',
      technologies: ['React', 'Redux', 'TypeScript', 'VTEX', 'Linx Commerce', 'JavaScript']
    },
    {
      company: '2morrow Sports',
      period: 'Jan. 2020 – Out. 2020',
      description: 'Desenvolvimento de funcionalidades essenciais voltadas ao usuário, como login, gerenciamento de perfil e histórico financeiro. As melhorias ampliaram a personalização da experiência e aumentaram a transparência das informações aos membros da plataforma. Resultados: aumento de engajamento e satisfação dos usuários.',
      technologies: ['JavaScript', 'Axios', 'Bootstrap', 'HTML5', 'CSS3', 'jQuery', 'Webpack']
    },
    {
      company: 'Velani Contabilidade',
      period: 'Jun. 2019 – Set. 2019',
      description: 'Criação de interfaces intuitivas para o sistema financeiro, transformando dados complexos em visualizações claras e acionáveis. Responsável por integrações com APIs externas e aprimoramentos contínuos de UX e desempenho. Resultados: melhoria na experiência do usuário e maior eficiência no uso da aplicação.',
      technologies: ['JavaScript', 'PHP', 'Chart.js', 'Bootstrap', 'HTML5', 'CSS3', 'jQuery']
    }
  ]
}
