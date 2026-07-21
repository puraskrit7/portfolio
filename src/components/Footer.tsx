export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] text-faint sm:flex-row">
        <span>© {new Date().getFullYear()} Puraskrit. Built with React, Vite &amp; Tailwind.</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          status: available for hire
        </span>
      </div>
    </footer>
  )
}
