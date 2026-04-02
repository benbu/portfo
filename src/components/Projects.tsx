import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Featured Projects
        </h2>
        <p className="mt-3 text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          A selection of work spanning blockchain infrastructure, AI/ML systems, and enterprise software.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
