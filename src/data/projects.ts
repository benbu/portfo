export interface Project {
  title: string
  description: string
  techTags: string[]
  githubUrl: string
  demoUrl: string
  imageUrl: string
}

export const projects: Project[] = [
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
