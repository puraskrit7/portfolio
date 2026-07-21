import { motion } from 'framer-motion'
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile, domains, skillStats } from '../data/resume'
import RadarStats from './RadarStats'
import TiltCard from './TiltCard'
import Magnetic from './Magnetic'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function IdentityNode() {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        {/* the card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="group mx-auto w-full max-w-[340px] shrink-0 lg:mx-0"
        >
          <TiltCard
            brick
            className="overflow-hidden rounded-2xl border border-border bg-panel/80 shadow-2xl shadow-black/40 backdrop-blur"
          >
            <img
              src="/puraskrit.png"
              alt={profile.name}
              className="aspect-[4/3.4] w-full object-cover"
            />

            <div className="space-y-5 p-5">
              <div className="border-b border-border pb-5">
                <div className="font-display text-xl leading-tight text-ink">{profile.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-signal">{profile.rank}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-b border-border pb-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-faint">Years experience</div>
                  <div className="font-display text-lg text-ink">{profile.yearsExperience}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-faint">Users served</div>
                  <div className="font-display text-lg text-ink">{profile.activeUsersServed}</div>
                </div>
              </div>

              <div className="border-b border-border pb-5">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">Core Proficiencies</div>
                <RadarStats stats={skillStats} />
              </div>

              <div className="space-y-2 border-b border-border pb-5">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">Domain Experience</div>
                {domains.map((d) => (
                  <div key={d.id} className="flex items-center gap-2.5">
                    <span className="w-20 shrink-0 font-mono text-[10px] text-muted">{d.label}</span>
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-bg">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${d.signal}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-signal"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-faint">{profile.location}</span>
                <div className="flex items-center gap-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border2/60 text-muted transition-colors hover:border-signal hover:text-signal"
                  >
                    <Mail size={13} />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border2/60 text-muted transition-colors hover:border-signal hover:text-signal"
                  >
                    <Linkedin size={13} />
                  </a>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border2/60 text-muted transition-colors hover:border-signal hover:text-signal"
                  >
                    <Github size={13} />
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* headline + summary */}
        <motion.div initial="hidden" animate="show" variants={container} className="flex-1 pt-1">
          <motion.h1 variants={item} className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {profile.name} builds
            <br />
            <span className="text-muted">interfaces that</span>
            <br />
            <span className="text-signal">stay up.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 grid max-w-md grid-cols-3 gap-4 border-y border-border py-6">
            <div>
              <div className="font-display text-2xl text-ink">4</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-faint">Domains shipped</div>
            </div>
            <div>
              <div className="font-display text-2xl text-ink">40+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-faint">Components authored</div>
            </div>
            <div>
              <div className="font-display text-2xl text-ink">2M+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-faint">Users in prod</div>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#experience"
                className="group flex w-fit items-center gap-2 rounded-full bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-bg shadow-[0_0_24px_-4px_rgba(255,122,26,0.6)] transition-transform hover:-translate-y-0.5"
              >
                View experience
                <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <a
              href="/Puraskrit_Resume.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-full border border-border2 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
