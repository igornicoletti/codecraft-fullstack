export interface ProjectItem {
  projectTitle: string
  shortDescription: string
  repositoryActionText: string
  liveDemoUrl: string
  repositoryUrl: string
}

export interface ProjectSectionContent {
  sectionTagline: string
  mainHeadline: string
  sectionSummary: string
  externalAction: {
    url: string
    buttonText: string
  }
  projectList: ProjectItem[]
}
