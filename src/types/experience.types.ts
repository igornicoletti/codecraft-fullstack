export interface TechnologyItem {
  iconSlug: string
  displayName: string
}

export interface PerformanceMetric {
  displayValue: string
  metricLabel: string
  details: string
}

export interface ProfessionalExperience {
  organizationName: string
  websiteUrl: string
  employmentPeriod: string
  roleDescription: string
  technologiesUsed: TechnologyItem[]
  keyAchievements: PerformanceMetric[]
}

export interface ExperienceSectionContent {
  sectionTagline: string
  mainHeading: {
    prefix: string
    highlightedText: string
  }
  resumeDownloadAction: {
    fileUrl: string
    circleText: string
  }
  careerSummary: string
  externalProfileCta: {
    url: string
    label: string
  }
  careerHistory: ProfessionalExperience[]
}
