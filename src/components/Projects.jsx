import { useEffect, useState } from 'react'
import { projects } from '../data/portfolioData'

const ACCENTS = {
  purple: { text: 'text-purple', border: 'hover:border-purple/50', glow: 'hover:shadow-[0_0_50px_rgba(167,139,250,0.25)]', tag: 'bg-purple/15 text-purple border-purple/30', ring: 'ring-purple/40' },
  pink: { text: 'text-pink', border: 'hover:border-pink/50', glow: 'hover:shadow-[0_0_50px_rgba(244,114,182,0.25)]', tag: 'bg-pink/15 text-pink border-pink/30', ring: 'ring-pink/40' },
  cyan: { text: 'text-cyan', border: 'hover:border-cyan/50', glow: 'hover:shadow-[0_0_50px_rgba(56,189,248,0.25)]', tag: 'bg-cyan/15 text-cyan border-cyan/30', ring: 'ring-cyan/40' },
  green: { text: 'text-green', border: 'hover:border-green/50', glow: 'hover:shadow-[0_0_50px_rgba(52,211,153,0.25)]', tag: 'bg-green/15 text-green border-green/30', ring: 'ring-green/40' },
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)
  const active = activeIndex === null ? null : projects[activeIndex]

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setActiveIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Selected Work" title="Projects" />
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-white/50">
          Tap a project to see its introduction, objectives, and tech stack.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => {
            const accent = ACCENTS[p.accent]
            const isLastOdd = projects.length % 2 !== 0 && i === projects.length - 1
            return (
              <article
                key={p.title}
                onClick={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' ? setActiveIndex(i) : null)}
                aria-label={`View details for ${p.shortTitle || p.title}`}
                className={`group glass cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 ${accent.border} ${accent.glow} ${
                  isLastOdd ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''
                }`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-[11px] tracking-wide ${accent.text}`}
                  >
                    {p.category}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-base/60 px-3 py-1 font-mono text-[11px] text-white/60">
                    {p.year}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full glass px-3 py-1 font-mono text-[11px] text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                    View details →
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {p.shortTitle || p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{p.description}</p>

                  <ul className="mt-4 space-y-1.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-white/50">
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.text.replace('text', 'bg')}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border px-3 py-1 font-mono text-[11px] ${accent.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {active && <ProjectModal project={active} accent={ACCENTS[active.accent]} onClose={() => setActiveIndex(null)} />}
    </section>
  )
}

function ProjectModal({ project, accent, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-base/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-strong max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-0 shadow-glass"
      >
        <div className="relative h-56 sm:h-64">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="glass absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:text-white"
          >
            ✕
          </button>
          <span className={`absolute left-6 top-4 rounded-full glass px-3 py-1 font-mono text-[11px] tracking-wide ${accent.text}`}>
            {project.category} · {project.year}
          </span>
          <h3 className="absolute bottom-4 left-6 right-6 font-heading text-2xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Introduction</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{project.intro}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Objectives</h4>
            <ul className="mt-3 space-y-2">
              {project.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2 text-sm text-white/75">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.text.replace('text', 'bg')}`} />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Technologies</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className={`rounded-full border px-3 py-1 font-mono text-[11px] ${accent.tag}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.gallery?.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Gallery</h4>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {project.gallery.map((src, i) => (
                  <div key={src + i} className={`overflow-hidden rounded-xl ring-1 ${accent.ring}`}>
                    <img src={src} alt={`${project.shortTitle || project.title} screenshot ${i + 1}`} className="h-32 w-full object-cover sm:h-40" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan/80">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-bold shimmer-text sm:text-4xl">{title}</h2>
    </div>
  )
}
