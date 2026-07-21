import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Palette } from 'lucide-react'
import { THEMES, useTheme } from '../hooks/useTheme'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const current = THEMES.find((t) => t.id === theme)!

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="w-56 rounded-2xl border border-border bg-panel/95 p-2 shadow-2xl shadow-black/40 backdrop-blur"
          >
            <div className="px-2 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
              Choose a theme
            </div>
            <div className="space-y-1">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-colors ${
                    theme === t.id ? 'bg-panel2' : 'hover:bg-panel2/60'
                  }`}
                >
                  <span className="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full border border-border2/60">
                    <span className="absolute inset-0" style={{ background: t.swatch[1] }} />
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ background: `radial-gradient(circle at 35% 35%, ${t.swatch[0]}, transparent 70%)` }}
                    />
                  </span>
                  <span className="flex-1">
                    <div className="font-display text-sm text-ink">{t.label}</div>
                    <div className="font-mono text-[10px] text-faint">{t.blurb}</div>
                  </span>
                  {theme === t.id && <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch theme"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border2 bg-panel/90 text-ink shadow-lg shadow-black/40 backdrop-blur transition-colors hover:border-signal hover:text-signal"
      >
        <span className="relative">
          <Palette size={18} />
          <span
            className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-panel"
            style={{ background: current.swatch[0] }}
          />
        </span>
      </button>
    </div>
  )
}
