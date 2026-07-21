import EnergyOrb from './EnergyOrb'
import LightningArcs from './LightningArcs'

const embers = Array.from({ length: 10 }).map((_, i) => ({
  left: `${(i * 9.3) % 100}%`,
  size: 2 + ((i * 5) % 4),
  delay: `${(i * 0.7) % 8}s`,
  duration: `${6 + (i % 5)}s`,
}))

export default function BackgroundEmber() {
  return (
    <>
      <EnergyOrb className="-right-32 -top-24" />
      <EnergyOrb className="-left-40 top-[60%] scale-75 opacity-70" />
      <LightningArcs />

      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] animate-flicker rounded-full bg-signal/10 blur-[120px]" />
      <div className="absolute top-1/2 right-0 h-[400px] w-[400px] animate-flicker rounded-full bg-crimson/10 blur-[120px]" />

      {embers.map((e, i) => (
        <span
          key={i}
          className="ember-particle"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDelay: e.delay,
            animationDuration: e.duration,
          }}
        />
      ))}
    </>
  )
}
