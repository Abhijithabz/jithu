import { useState } from 'react'
import useTypedRoles from '../hooks/useTypedRoles'
import { profile, stats } from '../data/portfolioData'
import { OpenCVIcon, PythonIcon, DjangoIcon } from './icons'

export default function Hero() {
  const typed = useTypedRoles(profile.roles)
  const [downloadState, setDownloadState] = useState('idle') // 'idle' | 'downloading' | 'downloaded'

  const handleResumeClick = () => {
    setDownloadState('downloading')
    setTimeout(() => {
      setDownloadState('downloaded')
      setTimeout(() => setDownloadState('idle'), 3000)
    }, 800)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 flex items-center justify-center overflow-hidden bg-[#060810]"
    >
      {/* Studio Room Wide Background Image (Dark Wall + Warm Polished Floor) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-95 filter brightness-100 contrast-105"
        style={{ backgroundImage: "url('/studio-bg.png')" }}
      />

      {/* Dark Vignette Overlay on Left Side to Ensure 100% Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060810]/95 via-[#060810]/75 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14121a] via-transparent to-[#060810]/60 pointer-events-none z-[1]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-6 md:px-12 md:grid-cols-12 relative z-10">
        
        {/* Left Column — Education Badge, Heading, Subtitle, Bio, Buttons, Stats */}
        <div className="md:col-span-7 lg:col-span-6 z-20 flex flex-col justify-center py-2">
          {/* Cyber Education Pill */}
          <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-[#38bdf8]/40 bg-[#121829]/90 px-4 py-1.5 font-mono text-xs text-[#38bdf8] backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.25)]">
            <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
            {profile.education}
          </div>

          {/* Main Heading */}
          <h1 className="font-heading tracking-tight leading-[1.08] text-white">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">
              Hey, I'm
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#9b72cf] via-[#e870a9] to-[#f5a623] bg-clip-text text-transparent drop-shadow-sm">
              {profile.name}
            </span>
          </h1>

          {/* Typing Subtitle */}
          <div className="mt-4 min-h-8 font-mono text-base font-semibold text-slate-200 sm:text-lg flex items-center flex-wrap">
            <span className="mr-2 text-slate-300">I build</span>
            <span className="text-[#38bdf8] font-bold tracking-wide">
              {typed}
              <span className="type-cursor h-4 translate-y-0.5" />
            </span>
          </div>

          {/* Bio paragraph */}
          <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-slate-300/90 font-normal drop-shadow">
            {profile.resumeSummary}
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7] px-6 py-3 font-heading text-xs font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-[#121829]/70 px-6 py-3 font-heading text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#38bdf8]/60 hover:text-[#38bdf8] hover:bg-slate-900/90 active:scale-95"
            >
              Let's Talk
            </a>

            {/* Resume Download Button with Click Animation */}
            <a
              href="/resume.pdf"
              download="Abhijith_P_Resume.pdf"
              onClick={handleResumeClick}
              className={`relative overflow-hidden rounded-full border px-6 py-3 font-heading text-xs font-semibold backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center gap-2 ${
                downloadState === 'downloaded'
                  ? 'border-emerald-500/60 bg-emerald-950/80 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105'
                  : downloadState === 'downloading'
                  ? 'border-purple-500/60 bg-purple-950/80 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] animate-pulse'
                  : 'border-cyan-500/40 bg-[#121829]/90 text-cyan-300 hover:border-cyan-400 hover:text-white hover:bg-[#182238] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]'
              }`}
            >
              <svg 
                className={`h-4 w-4 transition-transform duration-300 ${downloadState === 'downloading' ? 'animate-bounce' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {downloadState === 'downloaded' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                )}
              </svg>
              <span>
                {downloadState === 'downloading' ? 'Downloading...' : downloadState === 'downloaded' ? 'Downloaded!' : 'Download CV'}
              </span>
            </a>
          </div>

          {/* Stat Cards Grid (Horizontal 4-column row) */}
          <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-md">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/15 bg-[#121829]/80 p-2.5 text-center backdrop-blur-md transition-all duration-300 hover:border-[#38bdf8]/50 hover:bg-[#182035] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              >
                <div className="font-heading text-base font-bold text-white sm:text-lg">
                  {s.value}
                  <span className="text-xs text-[#38bdf8]">{s.suffix}</span>
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Circular Profile Portal + Standing Abhijith Figure Overlap */}
        <div className="relative md:col-span-5 lg:col-span-6 flex justify-center items-end min-h-[480px] lg:min-h-[580px] mt-6 md:mt-0">
          
          {/* Circular Profile Portal (Positioned directly behind Abhijith's shoulder) */}
          <div className="absolute top-4 right-2 sm:right-6 lg:right-10 z-10 flex flex-col items-center">
            {/* Glowing Ring Frame */}
            <div className="relative h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full p-[3px] bg-gradient-to-tr from-[#9b72cf] via-[#6366f1] to-[#38bdf8] shadow-[0_0_50px_rgba(155,114,207,0.5)]">
              <div className="h-full w-full overflow-hidden rounded-full border-2 border-white/30 bg-[#0a0d17]">
                <img
                  src={profile.photo}
                  alt={`${profile.name} reference`}
                  className="h-full w-full object-cover object-top filter brightness-105"
                />
              </div>

              {/* Floating Badge 1: OpenCV (Top Left of Ring) */}
              <div className="absolute top-1 -left-6 flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-[#0a0d17]/90 px-3 py-1 text-xs shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                <OpenCVIcon className="h-4 w-4" />
                <span className="font-mono text-xs font-medium text-white">OpenCV</span>
              </div>

              {/* Floating Badge 2: Python (Middle Right of Ring) */}
              <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-[#0a0d17]/90 px-3 py-1 text-xs shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                <PythonIcon className="h-4 w-4" />
                <span className="font-mono text-xs font-medium text-white">Python</span>
              </div>

              {/* Floating Badge 3: Django (Bottom Left of Ring) */}
              <div className="absolute bottom-1 left-0 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#0a0d17]/90 px-3 py-1 text-xs shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                <DjangoIcon />
                <span className="font-mono text-xs font-medium text-white">Django</span>
              </div>
            </div>
          </div>

          {/* Main Full-Body Person Visual (Standing tall on cinematic dark graphite studio floor) */}
          <div className="relative z-20 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] flex justify-center items-end">
            
            {/* Extremely subtle dark graphite shoe reflection (7% opacity, non-glossy, heavy blur) */}
            <div 
              className="absolute -bottom-6 w-3/5 h-16 pointer-events-none opacity-[0.07] blur-lg bg-gradient-to-b from-[#252833] to-transparent scale-y-[-0.6] rounded-full -z-10"
              style={{ backgroundImage: `url(${profile.transparentPhoto})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}
            />

            {/* Realistic Contact Studio Shadow (#111218, 35% opacity, large blur, soft feathered edges) */}
            <div className="absolute -bottom-1.5 w-4/5 h-6 bg-[#111218]/90 blur-lg rounded-full -z-10 shadow-[0_4px_30px_rgba(17,18,24,0.95)]" />
            <div className="absolute -bottom-0.5 w-3/5 h-3 bg-[#111218] blur-sm rounded-full -z-10" />

            <img
              src={profile.transparentPhoto || profile.studioPhoto || profile.photo}
              alt={profile.name}
              className="w-full h-auto max-h-[78vh] object-contain drop-shadow-[0_15px_35px_rgba(17,18,24,0.85)] filter brightness-[1.02] contrast-[1.02]"
            />
          </div>

        </div>

      </div>
    </section>
  )
}


