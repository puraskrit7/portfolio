const sparkles = Array.from({ length: 16 }).map((_, i) => ({
  left: `${(i * 6.4) % 100}%`,
  top: `${(i * 13.7) % 100}%`,
  size: 4 + ((i * 3) % 6),
  delay: `${(i * 0.5) % 8}s`,
  duration: `${4 + (i % 5)}s`,
}))

export default function BackgroundArcane() {
  return (
    <>
      {/* soft depth glows */}
      <div className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-signal/10 blur-[110px]" />
      <div className="absolute -left-40 top-[55%] h-[380px] w-[380px] rounded-full bg-crimson/10 blur-[110px]" />

      {/* a slowly rotating magic circle — original geometry, generic pentagram/rune motif */}
      <div className="absolute -right-20 top-[10%] h-[380px] w-[380px] opacity-[0.07]">
        <svg viewBox="0 0 140 140" className="h-full w-full animate-spin-slower text-ink">
          <circle cx={70} cy={70} r={62} fill="none" stroke="currentColor" strokeWidth={0.8} />
          <circle cx={70} cy={70} r={50} fill="none" stroke="currentColor" strokeWidth={0.6} />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const x1 = 70 + 62 * Math.cos(angle)
            const y1 = 70 + 62 * Math.sin(angle)
            const x2 = 70 + 56 * Math.cos(angle)
            const y2 = 70 + 56 * Math.sin(angle)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={0.8} />
          })}
        </svg>
        <svg viewBox="0 0 140 140" className="absolute inset-0 h-full w-full animate-spin-rev-slow text-signal">
          <path
            d="M70.0 20.0 L99.4 110.5 L22.4 54.5 L117.6 54.5 L40.6 110.5 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.9}
          />
        </svg>
      </div>

      {/* soft floating will-o-wisp glows */}
      <div className="absolute left-[20%] top-[30%] h-16 w-16 animate-orb-pulse rounded-full bg-signal/20 blur-2xl" />
      <div className="absolute right-[25%] top-[65%] h-12 w-12 animate-orb-pulse rounded-full bg-crimson/20 blur-2xl [animation-delay:1.5s]" />

      {/* drifting sparkle motes */}
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="sparkle-particle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </>
  )
}
