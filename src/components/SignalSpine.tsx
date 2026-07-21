import type { RefObject } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const MAIN = 'M20 0 L20 2000'

export default function SignalSpine({
  containerRef,
  align = 'center',
}: {
  containerRef: RefObject<HTMLElement>
  align?: 'center' | 'left'
}) {
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.2', 'end 0.85'] })
  const fill = useSpring(scrollYProgress, { stiffness: 60, damping: 22 })
  const dotTop = useTransform(fill, [0, 1], ['0%', '100%'])
  const dotOpacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0])

  const positionClass =
    align === 'left'
      ? 'left-0 w-10'
      : 'left-1/2 w-10 -translate-x-1/2'

  return (
    <div className={`pointer-events-none absolute inset-y-0 hidden md:block ${positionClass}`}>
      {/* dim base track */}
      <svg viewBox="0 0 40 2000" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <path d={MAIN} fill="none" stroke="currentColor" className="text-border2" strokeWidth={1.6} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* charged fill, reveals with scroll */}
      <motion.div style={{ scaleY: fill, transformOrigin: 'top' }} className="absolute inset-0">
        <svg viewBox="0 0 40 2000" preserveAspectRatio="none" className="h-full w-full overflow-visible">
          <path
            d={MAIN}
            fill="none"
            stroke="#ffffff"
            strokeWidth={1.8}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            className="animate-electric-pulse"
            style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.85))' }}
          />
        </svg>
      </motion.div>

      {/* traveling charge marking current scroll position */}
      <motion.div
        style={{ top: dotTop, opacity: dotOpacity }}
        className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.85)]"
      />

      {/* fixed start and end terminals — always visible, frame the line */}
      <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]" />
      <div className="absolute left-1/2 bottom-0 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]" />
    </div>
  )
}
