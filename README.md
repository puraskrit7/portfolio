# Puraskrit — Portfolio

Animated developer portfolio built with React 18, Vite, TypeScript, and Tailwind CSS.

## Default experience is deliberately restrained
For a senior-candidate resume site, first impressions and scan speed matter
more than novelty. The default build ships **without**: the preloader, the
custom cursor, click-spark particles, and the theme switcher — those add
delay or distraction without adding signal for a recruiter skimming in 30
seconds. It keeps the parts that read as craft rather than gimmick: the 3D
tilt cards, the signal-spine timeline, and the radar chart.

The removed pieces are not deleted — they're still fully built in
`src/components/` (`Preloader.tsx`, `CursorGlow.tsx`, `ClickSparks.tsx`,
`ThemeSwitcher.tsx`) and `src/hooks/useTheme.ts`, just not imported in
`App.tsx`. To re-enable any of them, import the component and mount it in
`App.tsx` — no other wiring needed.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS (theme tokens driven by CSS variables for runtime theme switching)
- Framer Motion (scroll reveals, tilt, spring physics)
- Lenis (smooth scroll)
- lucide-react (icons)

## Structure — the signal spine
This isn't a sidebar-plus-column layout. The deployment-log section hangs off
a single clean vertical line (`SignalSpine.tsx`) that runs down its center —
a calm, softly pulsing charge line rather than a decorative flourish, spanning
only the log itself (it ends before the Stack section starts). A traveling
dot marks your scroll position on it. Experience entries alternate left/right
of the spine as you scroll, each with a small connector node and a faint
opposing rotation, rather than a uniform vertical stack.

Skills and Education sit below, outside the spine's reach: skills scatter
around in a staggered, slightly rotated cluster instead of a rigid grid.

The identity block at the top (photo, radar chart, headline, summary) is a
single non-sticky node — not a pinned dashboard sidebar.

## Themes
A floating switcher (bottom-right) swaps between three full themes — palette
*and* background scene — applied instantly via CSS variables + a React
context (`src/hooks/useTheme.ts`), and persisted to localStorage:

- **Ember** (default) — warm fire palette; glowing orb + lightning arcs + rising embers
- **Tide** — deep-sea voyage palette; layered waves, a drifting sun-hat silhouette, rising bubbles
- **Arcane** — wizarding-academy palette; a rotating magic circle, floating will-o-wisp glows, drifting sparkle motes

`Backdrop.tsx` reads the active theme and crossfades between
`BackgroundEmber.tsx` / `BackgroundTide.tsx` / `BackgroundArcane.tsx`. Add a
new theme by: adding a `[data-theme='id']` variable block in `src/index.css`,
registering it in `THEMES` in `src/hooks/useTheme.ts`, and adding a matching
`Background<Name>.tsx` + a branch in `Backdrop.tsx`.

Note: these are original scenes built to evoke a mood (fire/energy, ocean
voyage, wizardry) rather than reproductions of any franchise's characters,
logos, or artwork.

## Notable components
- `src/data/resume.ts` — all resume content + `skillStats` radar values, typed. Edit this to update copy.
- `src/components/SignalSpine.tsx` — the clean vertical line the deployment log hangs off; stretches to fill its container height automatically via SVG `preserveAspectRatio="none"`, no JS height measurement needed
- `src/components/IdentityNode.tsx` — the opening block (photo, radar chart, headline, summary) — not sticky, not a sidebar
- `src/components/Experience.tsx` — entries alternate left/right of the spine with a connector node
- `src/components/Skills.tsx` — staggered, slightly rotated scatter instead of a uniform grid
- `src/components/TiltCard.tsx` — 3D tilt wrapper; `brick` adds layered "solid block" depth, `interactive` toggles mouse-follow tilt
- `src/components/RadarStats.tsx` — original SVG radar chart, computed from data, theme-reactive
- `src/components/EightTrigramsSeal.tsx` — original circular seal (inspired by the real bagua/eight-trigrams symbol) used as the preloader's 0–100 display
- `src/components/ThemeSwitcher.tsx` / `src/hooks/useTheme.ts` — the theme picker (context-based so any component can read the active theme)
- `src/components/CursorGlow.tsx` / `ClickSparks.tsx` — custom cursor dot + click-spark particles (desktop, motion-safe)
- Replace `public/puraskrit.png` to swap the profile photo.
