import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { collabCanvasDetail } from '../data/projectDetails/collab-canvas'
import { conchDetail } from '../data/projectDetails/conch'
import type { ProjectDetailData } from '../data/projectDetails/types'

const detailMap: Record<string, ProjectDetailData> = {
  'collab-canvas': collabCanvasDetail,
  'conch': conchDetail,
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const goBack = () => navigate('/', { state: { scrollTo: 'projects' } })
  const detail = slug ? detailMap[slug] : undefined

  if (!detail) return <Navigate to="/" replace />

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen">
      {/* Back nav */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button
            onClick={goBack}
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to projects
          </button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">{detail.title}</h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{detail.tagline}</p>

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {detail.techTags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            {detail.demoUrl !== '#' && (
              <a
                href={detail.demoUrl}
                {...(detail.demoIsDownload
                  ? { download: true }
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors"
              >
                {detail.demoIsDownload
                  ? <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  : <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                }
                {detail.demoLabel ?? 'Live Demo'}
              </a>
            )}
            {detail.githubUrl !== '#' && (
              <a
                href={detail.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Source
              </a>
            )}
          </div>
        </header>

        {/* Video */}
        <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-950">
          <video
            src={detail.videoUrl}
            controls
            playsInline
            preload="metadata"
            className="w-full"
            aria-label={`${detail.title} demo video`}
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{detail.overview}</p>
        </section>

        <hr className="border-gray-200 dark:border-gray-800 mb-12" />

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {detail.features.map(f => (
              <div
                key={f.title}
                className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 dark:border-gray-800 mb-12" />

        {/* Technical highlights */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-5">Technical Highlights</h2>
          <ul className="space-y-3">
            {detail.technicalHighlights.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 translate-y-1" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-gray-800 mb-12" />

        {/* Design decisions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-5">Design Decisions</h2>
          <div className="space-y-4">
            {detail.designDecisions.map(d => (
              <div key={d.decision} className="flex gap-4">
                <span className="flex-shrink-0 text-sm font-semibold text-indigo-600 dark:text-indigo-400 w-36 pt-0.5">
                  {d.decision}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{d.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-wrap gap-4 items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-8">
          <button
            onClick={goBack}
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to projects
          </button>
          {detail.demoUrl !== '#' && (
            <a
              href={detail.demoUrl}
              {...(detail.demoIsDownload
                ? { download: true }
                : { target: '_blank', rel: 'noopener noreferrer' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors"
            >
              {detail.demoLabel ?? 'Try the Live Demo'}
              {detail.demoIsDownload
                ? <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                : <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
              }
            </a>
          )}
        </div>

      </article>
    </div>
  )
}
