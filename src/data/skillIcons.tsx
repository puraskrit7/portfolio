import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiReactquery,
  SiTanstack,
  SiJest,
  SiNextdotjs,
  SiWebpack,
  SiHtml5,
  SiTailwindcss,
  SiSass,
  SiMui,
  SiGraphql,
  SiFirebase,
  SiVite,
  SiGit,
  SiJenkins,
  SiFigma,
  SiGithubcopilot,
} from 'react-icons/si'
import { DiCss3, DiAws } from 'react-icons/di'

interface SkillIcon {
  Icon: IconType
  color: string
}

const rules: { test: (s: string) => boolean; icon: SkillIcon }[] = [
  { test: (s) => s === 'JavaScript', icon: { Icon: SiJavascript, color: '#F7DF1E' } },
  { test: (s) => s.startsWith('TypeScript'), icon: { Icon: SiTypescript, color: '#3178C6' } },
  { test: (s) => s.startsWith('React ') || s === 'React', icon: { Icon: SiReact, color: '#61DAFB' } },
  { test: (s) => s === 'Redux', icon: { Icon: SiRedux, color: '#764ABC' } },
  { test: (s) => s === 'React Query', icon: { Icon: SiReactquery, color: '#FF4154' } },
  { test: (s) => s === 'TanStack Query', icon: { Icon: SiTanstack, color: '#FF4154' } },
  { test: (s) => s === 'Jest', icon: { Icon: SiJest, color: '#C21325' } },
  { test: (s) => s.startsWith('Next.js'), icon: { Icon: SiNextdotjs, color: '#F4F4F4' } },
  { test: (s) => s === 'Webpack', icon: { Icon: SiWebpack, color: '#8DD6F9' } },
  { test: (s) => s === 'HTML5', icon: { Icon: SiHtml5, color: '#E34F26' } },
  { test: (s) => s === 'Tailwind CSS', icon: { Icon: SiTailwindcss, color: '#38BDF8' } },
  { test: (s) => s === 'SCSS', icon: { Icon: SiSass, color: '#CC6699' } },
  { test: (s) => s === 'CSS3', icon: { Icon: DiCss3, color: '#1572B6' } },
  { test: (s) => s === 'Material UI', icon: { Icon: SiMui, color: '#007FFF' } },
  { test: (s) => s === 'GraphQL', icon: { Icon: SiGraphql, color: '#E10098' } },
  { test: (s) => s === 'Firebase', icon: { Icon: SiFirebase, color: '#FFCA28' } },
  { test: (s) => s.startsWith('AWS'), icon: { Icon: DiAws, color: '#FF9900' } },
  { test: (s) => s === 'Vite', icon: { Icon: SiVite, color: '#BD34FE' } },
  { test: (s) => s === 'Git', icon: { Icon: SiGit, color: '#F05032' } },
  { test: (s) => s === 'Jenkins', icon: { Icon: SiJenkins, color: '#D33833' } },
  { test: (s) => s === 'Figma', icon: { Icon: SiFigma, color: '#F24E1E' } },
  { test: (s) => s === 'GitHub Copilot', icon: { Icon: SiGithubcopilot, color: '#F4F4F4' } },
]

export function getSkillIcon(skill: string): SkillIcon | null {
  const match = rules.find((r) => r.test(skill))
  return match ? match.icon : null
}
