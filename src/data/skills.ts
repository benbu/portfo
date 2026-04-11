export interface SkillCategory {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'C++', 'Solidity'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Angular', 'ASP.NET', 'Node.js', 'PyTorch', 'TensorFlow', 'Unity'],
  },
  {
    label: 'Tools & DevOps',
    skills: ['MongoDB', 'PostgreSQL', 'Docker', 'NGINX', 'Git', 'Jenkins', 'PowerShell'],
  },
  {
    label: 'AI & Dev Tools',
    skills: ['Claude Code', 'OpenAI Codex', 'Cursor', 'RAG', 'OpenAI API', 'LangChain'],
  },
]
