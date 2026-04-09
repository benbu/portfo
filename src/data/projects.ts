export interface Project {
  title: string
  description: string
  techTags: string[]
  githubUrl: string
  demoUrl: string
  demoLabel?: string    // defaults to "Live Demo"
  demoIsDownload?: boolean
  imageUrl: string
  slug?: string // if set, a detail page exists at /projects/:slug
}

export const projects: Project[] = [
  {
    title: 'Collab Canvas',
    description:
      'A real-time collaborative whiteboard where multiple users draw, move, and edit shapes simultaneously — with live cursors, presence avatars, and an AI assistant that executes natural language commands on the canvas.',
    techTags: ['React', 'TypeScript', 'Firebase', 'Konva.js', 'OpenAI', 'Vite'],
    githubUrl: 'https://github.com/benbu/collab-canvas',
    demoUrl: '/demos/collab-canvas/',
    imageUrl: '/images/collab.gif',
    slug: 'collab-canvas',
  },
  {
    title: 'Conch',
    description:
      'A cross-platform messaging app for Android, iOS, and Web built with React Native + Expo and Firebase, featuring real-time group and 1:1 messaging plus an AI productivity suite for thread summaries, action item extraction, and decision tracking.',
    techTags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'GPT-4 Turbo', 'Zustand'],
    githubUrl: 'https://github.com/benbu/conch',
    demoUrl: '/conch.apk',
    demoLabel: 'Download APK',
    demoIsDownload: true,
    imageUrl: '/images/conch.gif',
    slug: 'conch',
  },
  {
    title: 'Automated Crypto Trading Software',
    description:
      'Developed and deployed automated arbitrage trading software generating over $1M in revenue. Leveraged Python, web scraping, dynamic Tor instances, and deep learning models for real-time market analytics.',
    techTags: ['Python', 'PyTorch', 'TensorFlow', 'MongoDB', 'NGINX', 'Node.js'],
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: '/images/project-trading.svg',
  },
  {
    title: 'NFT Marketplace & Custom EVM Blockchain',
    description:
      'Built a full NFT marketplace on EVM-compatible blockchains and developed a custom Ethereum Virtual Machine by modifying go-ethereum source code, complete with cross-platform binaries and a GUI wallet.',
    techTags: ['Solidity', 'React', 'TypeScript', 'Web3.js', 'Ganache', 'Go'],
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: '/images/project-blockchain.svg',
  },
  {
    title: 'Enterprise ERP & Secure Approval SPA',
    description:
      'Led the development of large-scale enterprise ERP software and a secure Angular SPA with RESTful Web API for credit card invoice approvals, streamlining deployments with automated CI/CD pipelines.',
    techTags: ['Angular', 'ASP.NET', 'C#', 'SQL Server', 'Jenkins', 'PowerShell'],
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: '/images/project-erp.svg',
  },
]
