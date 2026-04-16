import { useState } from 'react'
import { profile } from '../data/profile'
import { asset } from '../utils/asset'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        >
          {profile.name}
        </button>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={asset(profile.resumeUrl)}
            download
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Resume
          </a>
          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 text-gray-500 dark:text-gray-400"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3 text-sm text-gray-600 dark:text-gray-400">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => { scrollTo(link.id); setMenuOpen(false) }}
                  className="block hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={asset(profile.resumeUrl)}
                download
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
