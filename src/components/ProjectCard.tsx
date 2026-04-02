import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const hasGithub = project.githubUrl !== '#'
  const hasDemo = project.demoUrl !== '#'

  return (
    <article className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-shadow">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.techTags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            aria-disabled={!hasGithub}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              hasGithub
                ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                : 'text-gray-300 dark:text-gray-700 cursor-not-allowed pointer-events-none'
            }`}
          >
            {/* GitHub icon */}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Source
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            aria-disabled={!hasDemo}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              hasDemo
                ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                : 'text-gray-300 dark:text-gray-700 cursor-not-allowed pointer-events-none'
            }`}
          >
            {/* External link icon */}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}
