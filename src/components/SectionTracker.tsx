import { useActiveSection } from '../hooks/useActiveSection'

const chapters = [
  { id: 'about', num: '01', label: 'Profile' },
  { id: 'experience', num: '02', label: 'Experience' },
  { id: 'skills', num: '03', label: 'Skills' },
  { id: 'education', num: '04', label: 'Education' },
  { id: 'contact', num: '05', label: 'Contact' },
]

export default function SectionTracker() {
  const active = useActiveSection(chapters.map((c) => c.id))

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 xl:flex">
      <div className="absolute -right-[3px] top-0 bottom-0 w-px bg-border" />
      {chapters.map((c) => {
        const isActive = active === c.id
        return (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group relative flex items-center gap-2.5 pr-3"
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-all ${
                isActive ? 'translate-x-0 text-signal opacity-100' : 'translate-x-1 text-faint opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              }`}
            >
              {c.num} · {c.label}
            </span>
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full border transition-colors ${
                isActive ? 'border-signal bg-signal' : 'border-border2 bg-panel group-hover:border-signal'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
