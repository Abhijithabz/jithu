import { useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import { skillBars, skillTags } from '../data/portfolioData'
import { SectionHeading } from './Projects'

function SkillBar({ name, level, color, visible, delay }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between font-mono text-sm">
        <span className="text-white/90 font-medium">{name}</span>
        <span className="font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10 p-0.5 border border-white/5">
        <div
          className="h-full rounded-full transition-all ease-out shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, #38bdf8)`,
            transitionDuration: '1200ms',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useOnScreen({ threshold: 0.3 })
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <section id="skills" className="relative py-28 bg-[#07090f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />

        <div ref={ref} className="mt-14 grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* Core Technical Skill Bars */}
          <div className="glass space-y-6 rounded-2xl border border-white/10 bg-[#0e1424]/80 p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#38bdf8] animate-pulse" />
              Core Competencies
            </h3>
            {skillBars.map((s, i) => (
              <SkillBar key={s.name} {...s} visible={visible} delay={i * 100} />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            
            {/* Also Comfortable With Tags */}
            <div className="glass rounded-2xl border border-white/10 bg-[#0e1424]/80 p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Also Comfortable With
                </h3>
                {selectedSkill && (
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="font-mono text-xs text-slate-400 hover:text-cyan-400 underline"
                  >
                    Reset selection
                  </button>
                )}
              </div>
              
              <p className="mt-2 text-xs text-slate-400 font-mono">
                Click any skill tag to highlight experience level
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {skillTags.map((t) => {
                  const isSelected = selectedSkill === t.name
                  return (
                    <button
                      key={t.name}
                      onClick={() => setSelectedSkill(isSelected ? null : t.name)}
                      className={`rounded-full border px-4 py-2 font-mono text-xs font-medium transition-all duration-300 active:scale-95 flex items-center gap-1.5 ${
                        isSelected
                          ? 'scale-110 shadow-lg border-white bg-white/20 text-white shadow-[0_0_20px_rgba(56,189,248,0.5)] ring-2 ring-cyan-400'
                          : 'hover:-translate-y-1 hover:scale-105 hover:shadow-md'
                      }`}
                      style={{ 
                        borderColor: isSelected ? '#38bdf8' : `${t.color}55`, 
                        color: isSelected ? '#ffffff' : t.color, 
                        background: isSelected ? `${t.color}44` : `${t.color}14` 
                      }}
                    >
                      <span>{t.name}</span>
                      {isSelected && <span className="text-cyan-400">✓</span>}
                    </button>
                  )
                })}
              </div>

              {selectedSkill && (
                <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-4 text-xs font-mono text-cyan-200 animate-fadeIn">
                  <span className="font-bold text-white">✨ Comfortable with {selectedSkill}:</span> Experienced in building production features, writing clean algorithms, and integrating {selectedSkill} with database & API backends.
                </div>
              )}
            </div>

            {/* Continuous Learning Card */}
            <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10 glass shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                alt="Lines of code on a dark screen"
                className="h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#07090f] via-[#07090f]/60 to-transparent p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#38bdf8] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-ping" />
                  Always Learning & Building
                </p>
                <p className="mt-1.5 font-heading text-base sm:text-lg font-semibold text-white">
                  Building scalable AI systems, solving complex problems, and constantly shipping new features.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

