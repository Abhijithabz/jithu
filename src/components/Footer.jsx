import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
        </p>
        <div className="flex gap-5 font-mono text-xs text-white/40">
          <a href="#home" className="hover:text-cyan">Home</a>
          <a href="#projects" className="hover:text-pink">Projects</a>
          <a href="#contact" className="hover:text-purple">Contact</a>
        </div>
      </div>
    </footer>
  )
}
