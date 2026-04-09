export interface ProjectDetailFeature {
  title: string
  body: string
}

export interface ProjectDetailDecision {
  decision: string
  rationale: string
}

export interface ProjectDetailData {
  slug: string
  title: string
  tagline: string
  demoUrl: string
  demoLabel?: string
  demoIsDownload?: boolean
  githubUrl: string
  videoUrl: string
  imageUrl: string
  techTags: string[]
  overview: string
  features: ProjectDetailFeature[]
  technicalHighlights: string[]
  designDecisions: ProjectDetailDecision[]
}
