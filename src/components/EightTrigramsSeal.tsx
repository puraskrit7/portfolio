import { motion } from 'framer-motion'

const CX = 60
const CY = 60
const RADII = [40, 48, 56]
const HALF = 9
const GAP = 3.2

interface Bar {
  x1: number
  y1: number
  x2: number
  y2: number
}

function trigramBars(index: number): Bar[] {
  const theta = (index * 45 * Math.PI) / 180
  const ux = Math.sin(theta)
  const uy = -Math.cos(theta)
  const px = Math.cos(theta)
  const py = Math.sin(theta)
  const bits = [0, 1, 2].map((b) => (index >> b) & 1)

  const bars: Bar[] = []
  bits.forEach((bit, i) => {
    const r = RADII[i]
    const bx = CX + ux * r
    const by = CY + uy * r
    if (bit) {
      bars.push({ x1: bx - px * HALF, y1: by - py * HALF, x2: bx + px * HALF, y2: by + py * HALF })
    } else {
      bars.push({ x1: bx - px * HALF, y1: by - py * HALF, x2: bx - px * GAP, y2: by - py * GAP })
      bars.push({ x1: bx + px * GAP, y1: by + py * GAP, x2: bx + px * HALF, y2: by + py * HALF })
    }
  })
  return bars
}

const positions = Array.from({ length: 8 }, (_, i) => trigramBars(i))
const CIRC = 2 * Math.PI * 34

export default function EightTrigramsSeal({ progress }: { progress: number }) {
  const litCount = Math.floor((progress / 100) * 8)

  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 overflow-visible">
      {/* faint outer rings */}
      <circle cx={60} cy={60} r={56} fill="none" stroke="rgb(var(--c-border2))" strokeWidth={0.6} />
      <circle cx={60} cy={60} r={34} fill="none" stroke="rgb(var(--c-border2))" strokeWidth={0.6} />

      {/* percentage progress ring */}
      <circle
        cx={60}
        cy={60}
        r={34}
        fill="none"
        stroke="#ffffff"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeDasharray={CIRC}
        strokeDashoffset={CIRC - (progress / 100) * CIRC}
        transform="rotate(-90 60 60)"
        style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.7))' }}
      />

      {/* rotating trigram ring */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '60px 60px' }}
      >
        {positions.map((bars, i) => (
          <g key={i} opacity={i < litCount ? 1 : 0.22} className="transition-opacity duration-300">
            {bars.map((b, j) => (
              <line
                key={j}
                x1={b.x1}
                y1={b.y1}
                x2={b.x2}
                y2={b.y2}
                stroke={i < litCount ? '#ffffff' : 'rgb(var(--c-faint))'}
                strokeWidth={2.4}
                strokeLinecap="round"
              />
            ))}
          </g>
        ))}
      </motion.g>

      <text
        x={60}
        y={64}
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="20"
        fill="rgb(var(--c-ink))"
      >
        {Math.floor(progress)}
      </text>
    </svg>
  )
}
