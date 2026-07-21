import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Spark {
  id: number
  x: number
  y: number
}

let counter = 0

export default function ClickSparks() {
  const [sparks, setSparks] = useState<Spark[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const onClick = (e: MouseEvent) => {
      const id = counter++
      setSparks((s) => [...s, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => {
        setSparks((s) => s.filter((spark) => spark.id !== id))
      }, 550)
    }

    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <span key={spark.id} className="absolute" style={{ left: spark.x, top: spark.y }}>
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * 360) / 6
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos((angle * Math.PI) / 180) * 22,
                    y: Math.sin((angle * Math.PI) / 180) * 22,
                    opacity: 0,
                    scale: 0.3,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal2 shadow-[0_0_4px_1px_rgba(255,179,71,0.9)]"
                />
              )
            })}
          </span>
        ))}
      </AnimatePresence>
    </div>
  )
}
