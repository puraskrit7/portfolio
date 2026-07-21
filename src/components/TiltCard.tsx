import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
  brick = false,
  interactive = true,
}: {
  children: ReactNode
  className?: string
  /** Adds stacked rear layers so the card reads as a solid extruded block. */
  brick?: boolean
  /** Set false to disable mouse-follow tilt — use for cards with their own scroll area, where hovering to scroll would otherwise fight the tilt. */
  interactive?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const range = brick ? 8 : 11
  const rotateX = useSpring(useTransform(y, [0, 1], [range, -range]), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-range, range]), { stiffness: 200, damping: 18 })
  const scale = useSpring(hovered ? 1.015 : 1, { stiffness: 220, damping: 20 })

  const glowX = useTransform(x, [0, 1], ['0%', '100%'])
  const glowY = useTransform(y, [0, 1], ['0%', '100%'])
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]: string[]) => `radial-gradient(220px circle at ${gx} ${gy}, rgba(255,255,255,0.12), transparent 70%)`
  )

  // shadow drifts opposite the tilt, like a fixed light source overhead
  const shadowSpread = brick ? 14 : 18
  const shadowX = useTransform(rotateY, [-range, range], [-shadowSpread, shadowSpread])
  const shadowY = useTransform(rotateX, [-range, range], [shadowSpread, -shadowSpread])
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 40px -12px rgba(0,0,0,0.55)`

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    if (!interactive) return
    x.set(0.5)
    y.set(0.5)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        scale,
        boxShadow,
        transformPerspective: 1100,
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${brick ? '' : className}`}
    >
      {brick && (
        <>
          {/* receding brick courses — visible as staggered edges when tilted */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl border border-border2/50 bg-panel2"
            style={{
              transform: 'translateZ(-16px) translate(5px, 7px)',
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 1px, transparent 1px, transparent 9px)',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl border border-border/60 bg-bg"
            style={{
              transform: 'translateZ(-32px) translate(10px, 14px)',
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 9px)',
            }}
          />
        </>
      )}

      <motion.div
        style={{ transform: `translateZ(${brick ? 20 : 28}px)`, transformStyle: 'preserve-3d' }}
        className={brick ? `relative ${className}` : 'relative'}
      >
        {children}
        {brick && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.45)]"
          />
        )}
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground, transform: 'translateZ(1px)' }}
      />
    </motion.div>
  )
}
