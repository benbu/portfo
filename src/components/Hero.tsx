import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20"
    >
      <p className="text-sm font-medium tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-4">
        Available for work
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 max-w-3xl">
        {profile.name}
      </h1>
      <h2 className="mt-3 text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-400">
        {profile.title}
      </h2>
      <p className="mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
        {profile.valueProposition}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors"
        >
          View My Work
        </a>
        <a
          href={profile.resumeUrl}
          download
          className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
