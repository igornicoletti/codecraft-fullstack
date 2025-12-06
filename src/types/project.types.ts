export interface ProjectCardStack {
  title: string
  description: string
  liveUrl: string
  repoUrl: string
}

export interface ProjectSectionData {
  label: string
  headline: string
  description: string
  action: {
    path: string
    label: string
  }
  projects: ProjectCardStack[]
}
