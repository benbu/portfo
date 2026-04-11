export interface Project {
  title: string
  description: string
  year?: number
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
    year: 2025,
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
    year: 2025,
    description:
      'A cross-platform messaging app for Android, iOS, and Web built with React Native + Expo and Firebase, featuring real-time group and 1:1 messaging plus an AI productivity suite for thread summaries, action item extraction, and decision tracking.',
    techTags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'GPT-4 Turbo', 'Zustand'],
    githubUrl: 'https://github.com/benbu/conch',
    demoUrl: 'https://drive.google.com/file/d/17c8nWgiFelOHiy9QIVduWsGoJFOz0jOZ/view?usp=sharing',
    demoLabel: 'Download APK',
    imageUrl: '/images/conch.gif',
    slug: 'conch',
  },
  {
    title: 'ClipForge',
    year: 2025,
    description:
      'A cross-platform desktop video editor built with Electron and React. Covers the full Record to Export workflow with a multi-clip timeline, trim handles, screen and webcam capture, and FFmpeg-powered encoding with real-time progress.',
    techTags: ['Electron', 'React', 'TypeScript', 'FFmpeg', 'Zustand', 'Vite'],
    githubUrl: 'https://github.com/benbu/clip-forge',
    demoUrl: 'https://drive.google.com/file/d/1YfsvlVjbIPT-xWHrPwYWYyGiUlL2O19D/view?usp=drive_link',
    demoLabel: 'Download for Mac',
    imageUrl: '/images/clipforge.gif',
    slug: 'clip-forge',
  },
  {
    title: 'Penguin Peril',
    year: 2015,
    description:
      'An endless survival game for Android and Windows built in Unity. Dodge an accelerating rain of icicles, collect gems that shatter free on impact, and compete on Google Play leaderboards — as the camera slowly zooms out to widen the chaos.',
    techTags: ['Unity', 'C#', 'Android', 'Windows', 'Google Play Games SDK'],
    githubUrl: 'https://github.com/benbu/PenguinPeril',
    demoUrl: '/demos/PenguinPeril/',
    imageUrl: '/images/penguin.gif',
    slug: 'penguin-peril',
  },
  {
    title: 'cryptoX',
    year: 2013,
    description:
      'A real-time cross-exchange cryptocurrency arbitrage detection engine. Monitors order books across 15 exchanges simultaneously, computes profitable price discrepancies with full order-book depth analysis, and surfaces ranked opportunities in a live terminal dashboard.',
    techTags: ['Python 2', 'Multi-threading', 'Tor SOCKS5', 'REST APIs', 'Order Book Algorithms'],
    githubUrl: 'https://github.com/benbu/cryptoX',
    demoUrl: '#',
    imageUrl: '/images/project-cryptox.svg',
    slug: 'cryptox',
  },
  {
    title: 'Remotocon',
    year: 2012,
    description:
      'A Windows server app (C#/.NET) paired with an Android client (Java) communicating over a custom XML-RPC-over-TCP protocol, with a plugin architecture that lets both sides be extended independently.',
    techTags: ['C#', '.NET', 'WinForms', 'Java', 'Android SDK', 'XML-RPC', 'TCP Sockets'],
    githubUrl: 'https://github.com/benbu/remotocon',
    demoUrl: '#',
    imageUrl: '/images/project-remotocon.svg',
    slug: 'remotocon',
  },
]
