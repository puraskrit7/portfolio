interface Props {
  company: string
  size?: 'sm' | 'lg'
}

export default function CompanyMark({ company, size = 'sm' }: Props) {
  const badgeSize = size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'
  const nameSize = size === 'lg' ? 'text-lg' : 'text-sm'
  const iconBox = size === 'lg' ? 20 : 16

  if (company === 'Deloitte') {
    return (
      <span className="inline-flex items-center gap-2.5">
        <span className={`flex ${badgeSize} shrink-0 items-center justify-center rounded-lg border border-border2/60 bg-bg/60`}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#86BC25' }} />
        </span>
        <span className={`font-display font-semibold leading-none text-ink ${nameSize}`}>
          Deloitte<span style={{ color: '#86BC25' }}>.</span>
        </span>
      </span>
    )
  }

  if (company === 'Accenture') {
    return (
      <span className="inline-flex items-center gap-2.5">
        <span className={`flex ${badgeSize} shrink-0 items-center justify-center rounded-lg border border-border2/60 bg-bg/60`}>
          <svg
            width={iconBox}
            height={iconBox}
            viewBox="0 0 24 24"
            fill="none"
            className="block"
            style={{ display: 'block' }}
          >
            <path
              d="M6 5 L17 12 L6 19"
              stroke="#A100FF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className={`font-display font-semibold leading-none text-ink ${nameSize}`}>accenture</span>
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className={`flex ${badgeSize} shrink-0 items-center justify-center rounded-lg border border-border2/60 bg-bg/60`}>
        <span className="h-2 w-2 rounded-full bg-signal" />
      </span>
      <span className={`font-display font-semibold leading-none text-ink ${nameSize}`}>{company}</span>
    </span>
  )
}
