import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { education, achievements, certifications } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="relative z-10 scroll-mt-28">
      <div>
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="h-px w-8 bg-border2" />
            Education
            <span className="h-px w-8 bg-border2" />
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">Education & certifications.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border bg-panel/60 p-6"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Education</span>
            <h3 className="mt-3 font-display text-xl text-ink">{education.degree}</h3>
            <p className="mt-1 font-body text-sm text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-faint">{education.dateRange}</p>

            <div className="mt-6 border-t border-border pt-5">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Certifications</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span key={c} className="rounded-md border border-border2/60 bg-bg/40 px-2.5 py-1 font-mono text-[11px] text-muted">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-panel/60 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                  <Award size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base text-ink">{a.title}</h4>
                    <span className="font-mono text-xs text-faint">{a.year}</span>
                  </div>
                  <p className="font-body text-sm text-muted">{a.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
