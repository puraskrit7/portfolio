const bolts = [
  {
    d: 'M-1.7 11.1 L12.9 21.1 L-1.3 56.2 L-1.8 95.9 L-25.2 100.5 L-7.0 142.3 L-14.9 157.4 L-30.6 209.3 L-43.1 245.4 L-27.2 245.0',
    style: { top: '4%', left: '8%', width: 90, height: 260 },
    delay: '0s',
    duration: '5.2s',
  },
  {
    d: 'M12.8 12.5 L-4.9 15.9 L24.4 61.6 L27.3 77.1 L33.0 113.0 L39.8 127.9 L43.1 162.0 L58.7 206.4 L72.6 221.2',
    style: { top: '18%', right: '10%', width: 90, height: 230 },
    delay: '1.8s',
    duration: '6.4s',
  },
  {
    d: 'M-6.3 1.1 L-7.4 28.2 L-5.6 41.0 L-24.5 85.2 L-22.9 96.5 L-9.5 127.9 L-17.6 153.7 L-26.7 171.6',
    style: { bottom: '8%', left: '18%', width: 70, height: 180 },
    delay: '3.1s',
    duration: '4.6s',
  },
]

export default function LightningArcs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bolts.map((b, i) => (
        <svg
          key={i}
          viewBox="-45 0 100 260"
          className="absolute animate-arc-flicker text-white/70"
          style={{ ...b.style, animationDelay: b.delay, animationDuration: b.duration }}
        >
          <path d={b.d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d={b.d} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
        </svg>
      ))}
    </div>
  )
}
