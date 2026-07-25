import { useRef } from "react";
import { motion } from "framer-motion";
import { experience } from "../data/resume";
import TiltCard from "./TiltCard";
import SignalSpine from "./SignalSpine";
import CompanyMark from "./CompanyMark";

export default function Experience() {
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="relative z-10 scroll-mt-28">
      <div className="mb-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="h-px w-8 bg-border2" />
          Experience
          <span className="h-px w-8 bg-border2" />
        </div>
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Where I've worked.
        </h2>
      </div>

      <div ref={cardsRef} className="relative space-y-8 md:pl-16">
        <SignalSpine containerRef={cardsRef} align="left" />
        {experience.map((company, idx) => (
          <motion.div
            key={company.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative w-full"
          >
            <TiltCard className="rounded-2xl border border-border bg-panel/60 p-6 transition-colors hover:border-signal/30 sm:p-7">
              {/* company header — identical structure for every company */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                <CompanyMark company={company.company} size="lg" />
                <span className="rounded-full border border-border2/60 bg-bg/40 px-3 py-1 font-mono text-[11px] text-muted">
                  {company.overallRange}
                </span>
              </div>
              <div className="mt-2 font-mono text-xs text-faint">
                {company.location}
              </div>

              {/* roles within the company — same styling whether there's 1 or several */}
              <div className="mt-5 space-y-6">
                {company.roles.map((r, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "border-t border-border pt-6" : ""}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-base text-ink">
                        {r.role}
                      </h3>
                      <span className="font-mono text-xs text-faint">
                        {r.dateRange}
                      </span>
                    </div>

                    <span className="mt-1.5 inline-block rounded-full border border-border2 px-2.5 py-0.5 font-mono text-xs text-signal">
                      {r.domain}
                    </span>

                    <ul className="mt-4 space-y-2">
                      {r.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-3 font-body text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border2" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div className="flex flex-1 flex-wrap gap-1.5">
                        {r.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md bg-bg/60 px-2 py-1 font-mono text-[11px] text-muted"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {r.metric && (
                        <div className="shrink-0 text-right">
                          <div className="font-display text-lg text-signal">
                            +{r.metric.value}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-faint">
                            {r.metric.label}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
