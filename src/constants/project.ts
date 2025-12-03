export interface ProjectData {
  label: string
  headline: string
  description: string
  action: {
    path: string
    label: string
  }
}

export const projectData: ProjectData = {
  label: 'Projetos open source',
  headline: 'Códigos que falam por si só',
  description: 'Explore uma coleção selecionada de projetos que exemplificam minha habilidade em transformar ideias complexas em aplicações web funcionais e eficientes, utilizando tecnologias modernas e melhores práticas de desenvolvimento.',
  action: {
    path: 'https://github.com/igornicoletti?tab=repositories',
    label: 'Explorar projetos no GitHub',
  },
}
