import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react'
import { profile } from '../data/resume'

const channels = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: Linkedin, label: profile.linkedin, href: profile.linkedinUrl },
  { icon: Github, label: profile.github, href: profile.githubUrl },
  { icon: Globe, label: profile.portfolio, href: `https://${profile.portfolio}` },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-signal" />
            Ready to connect
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Let's ship something<span className="text-signal">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-base text-muted">
            Open to front-end and full-stack roles across React, Next.js, and design-system work.
            Reach out on any channel below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2"
        >
          {channels.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-border bg-panel/60 px-4 py-3 text-left transition-colors hover:border-signal/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg/60 text-muted transition-colors group-hover:text-signal">
                <Icon size={15} />
              </span>
              <span className="truncate font-mono text-xs text-muted transition-colors group-hover:text-ink">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
