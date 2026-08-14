import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

const SOCIAL_ICONS = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, color: '#38bdf8' },
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon, color: '#a78bfa' },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon, color: '#f472b6' },
]

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Left: Brand/Logo */}
        <a href="#home" className="font-heading text-xl font-bold tracking-wide text-white flex items-center gap-2">
          <span>Abhijith</span>
          <span className="text-cyan-400">.dev</span>
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const isHome = link.label === 'Home'
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative font-medium text-sm tracking-wide text-slate-300 transition-colors hover:text-white group py-1"
              >
                {link.label}
                {isHome && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                )}
              </a>
            )
          })}
        </div>

        {/* Right: Hire Me Button & Socials */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 mr-2">
            {SOCIAL_ICONS.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                title={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[#9333ea] to-[#6366f1] px-6 py-2 font-heading text-sm font-semibold text-white shadow-[0_0_22px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(147,51,234,0.8)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white md:hidden"
        >
          <span className="text-lg">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="glass-strong mx-4 mt-3 flex flex-col gap-4 rounded-2xl p-5 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-white/80 hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-rainbow-linear px-5 py-2 text-center font-heading text-sm font-semibold text-base"
          >
            Hire Me
          </a>
          <div className="flex items-center gap-3 pt-1">
            {SOCIAL_ICONS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-white/70"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
