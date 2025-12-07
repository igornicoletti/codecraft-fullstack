import type { ProjectSectionData } from '@/types/project.types'

export const projectData: ProjectSectionData = {
  label: 'Projetos open source',
  headline: 'Códigos que falam por si só',
  description: 'Explore uma coleção selecionada de projetos que mostram conceitos de aplicações web eficientes, utilizando tecnologias modernas e melhores práticas de desenvolvimento.',
  action: {
    path: 'https://github.com/igornicoletti?tab=repositories',
    label: 'Explorar projetos no GitHub',
  },
  projects: [
    {
      title: "CodeCraft FullStack",
      description: "Projeto abrangente que demonstra o desenvolvimento de um sistema CRUD (Create, Read, Update, Delete) completo com tecnologias full-stack. Ideal para visualizar a integração de backend e frontend em um ambiente de produção.",
      liveUrl: "https://codecraft-fullstack.vercel.app/",
      repoUrl: "https://github.com/igornicoletti/codecraft-fullstack",
    },
    {
      title: "Tarot Free Online",
      description: "Plataforma de tarot online construída com Next.js, oferecendo uma experiência multilíngue (i18n) e altamente performática. Focada em SEO e renderização no lado do servidor para um carregamento rápido e confiável.",
      liveUrl: "https://nextjs-tarotdoor-free.vercel.app/en",
      repoUrl: "https://github.com/igornicoletti/nextjs-tarotdoor-free",
    },
    {
      title: "CodeCraft FullStack",
      description: "Projeto abrangente que demonstra o desenvolvimento de um sistema CRUD (Create, Read, Update, Delete) completo com tecnologias full-stack. Ideal para visualizar a integração de backend e frontend em um ambiente de produção.",
      liveUrl: "https://codecraft-fullstack.vercel.app/",
      repoUrl: "https://github.com/igornicoletti/codecraft-fullstack",
    },
    {
      title: "Coffee Delivery",
      description: "Aplicação completa de e-commerce de café, desenvolvida em React e TypeScript. Apresenta carrinho de compras, controle de estado via Context API e persistência de dados no localStorage para simular um fluxo de pedido robusto.",
      liveUrl: "https://reactjs-coffee-delivery-igornicoletti.vercel.app/",
      repoUrl: "https://github.com/igornicoletti/reactjs-coffee-delivery",
    },
    {
      title: "My App",
      description: "Um boilerplate de aplicação full-stack moderna com autenticação completa (login/cadastro), usando Next.js, tRPC e Prisma. Serve como ponto de partida rápido para projetos escaláveis e seguros.",
      liveUrl: "https://my-app-2ti.vercel.app/login",
      repoUrl: "https://github.com/igornicoletti/my-app",
    },
  ]
}
