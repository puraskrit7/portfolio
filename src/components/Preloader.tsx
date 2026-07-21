import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import EightTrigramsSeal from './EightTrigramsSeal'

const LINES = ['INITIALIZING SYSTEMS', 'LOADING COMPONENTS', 'COMPILING MODULES', 'READY']

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [lineIdx, setLineIdx] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      return
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + (4 + Math.random() * 10))
        setLineIdx(Math.min(LINES.length - 1, Math.floor((next / 100) * LINES.length)))
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 400)
        }
        return next
      })
    }, 140)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
          exit={{ clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: 'circle(150% at 50% 50%)' }}
        >
          <div className="absolute h-72 w-72 rounded-full bg-white/5 blur-[100px]" />
          <div className="relative flex flex-col items-center gap-6">
            <EightTrigramsSeal progress={progress} />
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">{LINES[lineIdx]}</div>
            <div className="h-1 w-48 overflow-hidden rounded-full bg-panel2">
              <motion.div
                className="h-full animate-electric-pulse bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
