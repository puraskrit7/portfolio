import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from 'react'

export type ThemeId = 'ember' | 'tide' | 'arcane'

export const THEMES: { id: ThemeId; label: string; blurb: string; swatch: [string, string] }[] = [
  { id: 'ember', label: 'Ember', blurb: 'Fire & energy', swatch: ['#FF7A1A', '#0C0A08'] },
  { id: 'tide', label: 'Tide', blurb: 'Deep-sea voyage', swatch: ['#2DD4BF', '#07141A'] },
  { id: 'arcane', label: 'Arcane', blurb: 'Wizarding academy', swatch: ['#8B5CF6', '#0D0A14'] },
]

const STORAGE_KEY = 'portfolio-theme'

interface ThemeContextValue {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(() => {
    if (typeof window === 'undefined') return 'ember'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return (stored as ThemeId) || 'ember'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return createElement(ThemeContext.Provider, { value: { theme, setTheme } }, children)
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
