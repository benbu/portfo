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
  year?: number
  tagline: string
  demoUrl: string
  demoLabel?: string
  demoIsDownload?: boolean
  githubUrl: string
  videoUrl?: string
  videoIsEmbed?: boolean
  imageUrl: string
  techTags: string[]
  overview: string
  features: ProjectDetailFeature[]
  technicalHighlights: string[]
  designDecisions: ProjectDetailDecision[]
}
