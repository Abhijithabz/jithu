import { aboutStats, certifications, coreStrengths, languages, profile, timeline } from '../data/portfolioData'
import { SectionHeading } from './Projects'

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#07090f]">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="mt-14 grid gap-16 md:grid-cols-2 md:items-center">
          {/* Left Column: Portrait Card with Glass Stats */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="glass overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-[440px] w-full object-cover object-top filter brightness-[1.02]"
              />
            </div>

            {aboutStats.map((s, i) => (
              <div
                key={s.label}
                className={`glass-strong absolute rounded-xl border border-white/15 px-4 py-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                  i === 0
                    ? '-left-6 top-8'
                    : i === 1
                    ? '-right-6 top-1/2 -translate-y-1/2'
                    : '-left-4 bottom-8'
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">{s.label}</p>
                <p className="font-heading text-sm font-semibold text-[#38bdf8]">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Bio & Experience Timeline */}
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Building systems that <span className="bg-gradient-to-r from-[#9b72cf] via-[#e870a9] to-[#f5a623] bg-clip-text text-transparent">see, defend, and innovate</span>.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-slate-300/90">{profile.resumeSummary}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
              Based in <span className="text-white font-medium">{profile.location}</span>, currently pursuing my <span className="text-[#38bdf8] font-medium">{profile.education}</span>. I specialize in turning real-world security, computer vision, and data management challenges into robust software applications.
            </p>

            {/* Timeline */}
            <div className="mt-10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" />
                Education & Experience Timeline
              </h4>
              <ol className="mt-5 space-y-6 border-l border-white/15 pl-6">
                {timeline.map((t) => (
                  <li key={t.title} className="relative group">
                    <span
                      className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-[#07090f] transition-transform duration-300 group-hover:scale-125"
                      style={{ background: t.color }}
                    />
                    <p className="font-mono text-xs text-slate-400">{t.year}</p>
                    <p className="font-heading text-base font-semibold text-white group-hover:text-[#38bdf8] transition-colors">{t.title}</p>
                    <p className="text-sm text-slate-300/80">{t.place}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Bottom Cards Row: Languages & Certifications */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          
          {/* Animated Languages Card */}
          <div className="glass rounded-2xl border border-white/10 bg-[#0e1424]/80 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#38bdf8]/40">
            <h4 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>🗣️</span> Spoken Languages
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/10 px-4 py-1.5 font-mono text-xs font-medium text-[#38bdf8] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#38bdf8] hover:bg-[#38bdf8]/20 hover:shadow-[0_0_18px_rgba(56,189,248,0.4)] cursor-pointer active:scale-95"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass rounded-2xl border border-white/10 bg-[#0e1424]/80 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-purple-500/40">
            <h4 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>📜</span> Verified Certifications
            </h4>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 transition-all hover:translate-x-1">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#9b72cf] shadow-[0_0_8px_#9b72cf]" />
                  <span className="leading-snug">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animated Core Strengths Section */}
        <div className="mt-16">
          <h4 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🚀</span> Core Professional Strengths
          </h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreStrengths.map((st) => (
              <div
                key={st.title}
                className="glass rounded-2xl border border-white/10 bg-[#0e1424]/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-purple-500/50 hover:bg-[#121a30] hover:shadow-[0_0_22px_rgba(155,114,207,0.3)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{st.icon}</span>
                  <h5 className="font-heading text-base font-bold text-white">{st.title}</h5>
                </div>
                <p className="text-xs leading-relaxed text-slate-300/85">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

