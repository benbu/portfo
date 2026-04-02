import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Technical Skills
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <div key={category.label}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
