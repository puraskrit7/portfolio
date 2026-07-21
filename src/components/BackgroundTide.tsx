const bubbles = Array.from({ length: 12 }).map((_, i) => ({
  left: `${(i * 8.1) % 100}%`,
  size: 3 + ((i * 4) % 7),
  delay: `${(i * 0.8) % 9}s`,
  duration: `${7 + (i % 6)}s`,
}))

export default function BackgroundTide() {
  return (
    <>
      {/* soft depth glows standing in for the orb */}
      <div className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-signal/10 blur-[110px]" />
      <div className="absolute -left-40 top-[55%] h-[380px] w-[380px] rounded-full bg-crimson/10 blur-[110px]" />

      {/* layered horizon waves */}
      <svg
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-56 w-full text-signal/[0.07]"
      >
        <path
          d="M0 110 Q 100 70 200 110 T 400 110 T 600 110 T 800 110 V200 H0 Z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-40 w-full animate-wave-drift text-crimson/[0.08]"
      >
        <path
          d="M0 130 Q 100 95 200 130 T 400 130 T 600 130 T 800 130 V200 H0 Z"
          fill="currentColor"
        />
      </svg>

      {/* a drifting straw hat silhouette — generic sun hat, not any character's design */}
      <div className="absolute right-[14%] top-[16%] animate-hat-bob opacity-[0.09]">
        <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
          <ellipse cx="75" cy="76" rx="72" ry="15" stroke="currentColor" strokeWidth="3.5" className="text-ink" />
          <path
            d="M38 76 Q38 32 75 28 Q112 32 112 76"
            stroke="currentColor"
            strokeWidth="3.5"
            fill="none"
            className="text-ink"
          />
          <path d="M46 66 Q75 58 104 66" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-muted" />
        </svg>
      </div>

      {/* rising bubbles */}
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble-particle"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </>
  )
}
