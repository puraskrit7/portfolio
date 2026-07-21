import { motion } from 'framer-motion'
import { skillGroups } from '../data/resume'
import TiltCard from './TiltCard'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 scroll-mt-28">
      <div className="mb-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="h-px w-8 bg-border2" />
          Skills
          <span className="h-px w-8 bg-border2" />
        </div>
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Technical skills.
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <TiltCard className="rounded-2xl border border-border bg-panel/60 p-5 transition-colors hover:border-signal/40">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">{group.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-border2 transition-colors group-hover:bg-signal" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border2/60 bg-bg/40 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-signal hover:text-signal"
                    title={skill.level === 3 ? 'Expert' : skill.level === 2 ? 'Proficient' : 'Familiar'}
                  >
                    {skill.name}
                    <span className="flex items-center gap-0.5" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={`h-1 w-1 rounded-full ${n <= skill.level ? 'bg-signal' : 'bg-border2'}`}
                        />
                      ))}
                    </span>
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
