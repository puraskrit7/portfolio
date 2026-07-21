export default function Grain() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-[5] h-full w-full opacity-[0.035] mix-blend-overlay"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="grain-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  )
}
