import { useState } from 'react'
import { profile } from '../data/portfolioData'
import { SectionHeading } from './Projects'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

const SOCIALS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon, color: '#38bdf8' },
  { label: 'LinkedIn', value: 'abhijithp-876431303', href: profile.linkedin, Icon: LinkedInIcon, color: '#a78bfa' },
  { label: 'GitHub', value: 'Abhijithabz', href: profile.github, Icon: GitHubIcon, color: '#34d399' },
  { label: 'Phone', value: profile.phone, href: `tel:+91${profile.phone}`, Icon: null, color: '#facc15' },
]

// Your active Google Apps Script Webhook URL (connected to your Google Sheet & Gmail)
const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyTJgd1_Ya8HvKcuA4qMcWjOC2wDQQnJ8yoZ8ptcfenw1nSLazyNhzkKd8IcpQOmofeGg/exec'
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY' // Optional fallback

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setErrorMsg('')

    try {
      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        // Send payload to Google Apps Script Webhook (logs to Google Sheet & emails Gmail)
        const payload = JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          timestamp: new Date().toISOString()
        })

        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: payload,
        })
      } else {
        const formData = new FormData()
        formData.append('access_key', WEB3FORMS_ACCESS_KEY)
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('message', form.message)
        formData.append('subject', `New Portfolio Message from ${form.name}`)

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })
      }

      setSubmitted(true)
    } catch (err) {
      console.warn('Form submission notice:', err.message)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Let's build something" title="Contact" />

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="glass rounded-2xl p-8 md:col-span-3">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
              <span className="font-mono text-xs text-green">Available for internships & freelance work</span>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <div className="text-4xl">✅</div>
                <h3 className="font-heading text-xl font-semibold text-white">Message sent!</h3>
                <p className="max-w-xs text-sm text-white/60">
                  Thanks for reaching out, {form.name.split(' ')[0] || 'there'} — I'll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', message: '' })
                  }}
                  className="mt-2 font-mono text-xs text-cyan hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-white/50">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyan/60 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.15)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-white/50">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-pink/60 focus:shadow-[0_0_0_4px_rgba(244,114,182,0.15)]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-white/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-purple/60 focus:shadow-[0_0_0_4px_rgba(167,139,250,0.15)]"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-mono text-rose-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-rainbow-linear bg-[length:200%_auto] py-3 font-heading text-sm font-semibold text-base transition-all duration-500 hover:bg-right hover:shadow-glow disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === 'LinkedIn' || s.label === 'GitHub' ? '_blank' : undefined}
                rel={s.label === 'LinkedIn' || s.label === 'GitHub' ? 'noreferrer' : undefined}
                className="glass group flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:translate-x-2"
                style={{ borderColor: `${s.color}33` }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{ background: `${s.color}22`, color: s.color }}
                >
                  {s.Icon ? <s.Icon className="h-5 w-5" /> : '📞'}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-white/40">
                    {s.label}
                  </span>
                  <span className="block truncate text-sm text-white/85">{s.value}</span>
                </span>
                <span
                  className="ml-auto text-white/30 transition group-hover:translate-x-1 group-hover:text-white/70"
                  aria-hidden
                >
                  →
                </span>
              </a>
            ))}

            <div className="glass rounded-xl p-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Location</p>
              <p className="mt-1 text-sm text-white/85">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
