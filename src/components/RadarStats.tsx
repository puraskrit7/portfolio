import { motion } from 'framer-motion'
import type { SkillStat } from '../data/resume'

const SIZE = 140
const CX = SIZE / 2
const CY = SIZE / 2
const R = 58

function pointAt(index: number, total: number, radiusFrac: number) {
  const angle = -Math.PI / 2 + index * ((2 * Math.PI) / total)
  return {
    x: CX + R * radiusFrac * Math.cos(angle),
    y: CY + R * radiusFrac * Math.sin(angle),
  }
}

function polygonPoints(total: number, radiusFrac: number) {
  return Array.from({ length: total }, (_, i) => {
    const { x, y } = pointAt(i, total, radiusFrac)
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
}

export default function RadarStats({ stats }: { stats: SkillStat[] }) {
  const n = stats.length
  const dataPoints = stats
    .map((s, i) => {
      const { x, y } = pointAt(i, n, (s.value / 100) * 0.92 + 0.08)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <div className="flex flex-col items-center">
      <svg viewBox={`-20 -14 ${SIZE + 40} ${SIZE + 30}`} className="w-full max-w-[220px] overflow-visible">
        {[1, 0.75, 0.5, 0.25].map((f) => (
          <polygon key={f} points={polygonPoints(n, f)} fill="none" stroke="rgb(var(--c-border))" strokeWidth={1} />
        ))}
        {Array.from({ length: n }).map((_, i) => {
          const { x, y } = pointAt(i, n, 1)
          return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="rgb(var(--c-border))" strokeWidth={1} />
        })}

        <motion.polygon
          points={dataPoints}
          fill="rgb(var(--c-signal) / 0.16)"
          stroke="rgb(var(--c-signal))"
          strokeWidth={1.6}
          strokeLinejoin="round"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        {stats.map((s, i) => {
          const { x, y } = pointAt(i, n, (s.value / 100) * 0.92 + 0.08)
          return <circle key={s.short} cx={x} cy={y} r={2.4} fill="rgb(var(--c-signal2))" />
        })}

        {stats.map((s, i) => {
          const { x, y } = pointAt(i, n, 1.24)
          const anchor = Math.abs(x - CX) < 4 ? 'middle' : x > CX ? 'start' : 'end'
          return (
            <text
              key={s.short}
              x={x}
              y={y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="8.5"
              fill="rgb(var(--c-muted))"
            >
              {s.short}
            </text>
          )
        })}
      </svg>

      <ul className="mt-2 w-full space-y-1.5">
        {stats.map((s) => (
          <li key={s.short} className="flex items-center justify-between gap-3 font-mono text-[10px] text-faint">
            <span className="truncate">{s.label}</span>
            <span className="shrink-0 text-signal2">{s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
