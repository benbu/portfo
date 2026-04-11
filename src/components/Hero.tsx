import { profile } from '../data/profile'
import HeroBg from './HeroBg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      {/* Animated cube grid background */}
      <HeroBg />

      {/* Radial gradient to fade background toward edges and keep center readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, transparent 20%, var(--hero-fade) 100%)',
        }}
      />
      {/* CSS variables for fade colour per theme */}
      <style>{`
        #hero { --hero-fade: rgba(255,255,255,0.92); }
        .dark #hero { --hero-fade: rgba(3,7,18,0.92); }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/images/portrait.jpg"
          alt={profile.name}
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover object-top ring-2 ring-gray-200 dark:ring-gray-700 mb-6"
        />
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
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors"
          >
            View My Work
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
