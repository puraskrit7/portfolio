export default function EnergyOrb({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <div className="relative flex h-[420px] w-[420px] items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-signal/10 blur-[90px]" />
        <div className="absolute inset-10 rounded-full bg-white/10 blur-[60px]" />
        <svg viewBox="0 0 40 40" className="absolute h-full w-full animate-spin-slower text-signal/25">
          <path
            d="M21.5 20.0 L21.7 20.46 L21.75 21.01 L21.61 21.61 L21.27 22.19 L20.72 22.7 L20.0 23.05 L19.14 23.2 L18.22 23.09 L17.3 22.7 L16.46 22.04 L15.81 21.12 L15.4 20.0 L15.31 18.74 L15.57 17.44 L16.2 16.2 L17.18 15.12 L18.48 14.31 L20.0 13.85 L21.66 13.81 L23.33 14.23 L24.9 15.1 L26.22 16.41 L27.19 18.07 L27.7 20.0 L27.69 22.06 L27.12 24.11 L25.99 25.99 L24.37 27.56 L22.33 28.69 L20.0 29.25 L17.54 29.18 L15.12 28.46 L12.91 27.09 L11.09 25.14 L9.82 22.73 L9.2 20.0 L9.32 17.14 L10.2 14.34 L11.82 11.82 L14.08 9.75 L16.87 8.32 L20.0 7.65 L23.26 7.82 L26.43 8.86 L29.28 10.72 L31.59 13.31 L33.18 16.47 L33.9 20.0 L33.68 23.66 L32.49 27.21 L30.38 30.38 L27.47 32.93 L23.93 34.67 L20.0 35.45 L15.93 35.17 L12.02 33.83 L8.53 31.47 L5.73 28.24 L3.83 24.33 L3.0 20.0"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg viewBox="0 0 40 40" className="absolute h-2/3 w-2/3 animate-spin-rev-slow text-white/20">
          <path
            d="M21.5 20.0 L21.7 20.46 L21.75 21.01 L21.61 21.61 L21.27 22.19 L20.72 22.7 L20.0 23.05 L19.14 23.2 L18.22 23.09 L17.3 22.7 L16.46 22.04 L15.81 21.12 L15.4 20.0 L15.31 18.74 L15.57 17.44 L16.2 16.2 L17.18 15.12 L18.48 14.31 L20.0 13.85 L21.66 13.81 L23.33 14.23 L24.9 15.1 L26.22 16.41 L27.19 18.07 L27.7 20.0 L27.69 22.06 L27.12 24.11 L25.99 25.99 L24.37 27.56 L22.33 28.69 L20.0 29.25 L17.54 29.18 L15.12 28.46 L12.91 27.09 L11.09 25.14 L9.82 22.73 L9.2 20.0 L9.32 17.14 L10.2 14.34 L11.82 11.82 L14.08 9.75 L16.87 8.32 L20.0 7.65 L23.26 7.82 L26.43 8.86 L29.28 10.72 L31.59 13.31 L33.18 16.47 L33.9 20.0 L33.68 23.66 L32.49 27.21 L30.38 30.38 L27.47 32.93 L23.93 34.67 L20.0 35.45 L15.93 35.17 L12.02 33.83 L8.53 31.47 L5.73 28.24 L3.83 24.33 L3.0 20.0"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute h-16 w-16 animate-orb-pulse rounded-full bg-white/40 blur-2xl" />
      </div>
    </div>
  )
}
