export interface ExperienceTechStack {
  slug: string
  label: string
}

export interface ExperienceImpactMetric {
  value: string
  context: string
  description: string
}

export interface ExperiencePosition {
  organizationName: string
  websiteLink: string
  employmentPeriod: string
  projectDescription: string
  techStack: ExperienceTechStack[]
  impactMetrics: ExperienceImpactMetric[]
}

export interface ExperienceSectionData {
  label: string
  headline: {
    prefix: string
    dynamicWords: string
  }
  spinning: {
    path: string
    animationText: string
  }
  description: string
  action: {
    path: string
    label: string
  }
  positions: ExperiencePosition[]
}
