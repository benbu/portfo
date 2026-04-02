import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-600">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Email</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
