import { coreStrengths } from '../data/portfolioData'
import { SectionHeading } from './Projects'

export default function CoreStrengths() {
  return (
    <section id="strengths" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Beyond the code" title="Core Strengths" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreStrengths.map((s) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${s.color}33` }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                style={{ background: `${s.color}1f` }}
              >
                {s.icon}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
