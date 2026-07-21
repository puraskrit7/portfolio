export interface RoleEntry {
  role: string
  domain: string
  dateRange: string
  stack: string[]
  bullets: string[]
  metric?: { label: string; value: string }
}

export interface CompanyExperience {
  company: string
  location: string
  overallRange: string
  roles: RoleEntry[]
}

export interface SkillItem {
  name: string
  level: 1 | 2 | 3
}

export interface SkillGroup {
  label: string
  items: SkillItem[]
}

export interface Achievement {
  year: string
  title: string
  org: string
}

export const profile = {
  name: 'Puraskrit',
  title: 'Front-End Developer',
  subtitle: 'React & Next.js',
  rank: 'Senior Front-End Engineer',
  location: 'Gurugram, India',
  email: 'puraskritsinha3@gmail.com',
  phone: '+91 7870707877',
  linkedin: 'linkedin.com/in/puraskrit-94b155171',
  linkedinUrl: 'https://linkedin.com/in/puraskrit-94b155171',
  github: 'github.com/puraskrit7',
  githubUrl: 'https://github.com/puraskrit7',
  portfolio: 'puraskrit7.github.io/portfolio',
  yearsExperience: 5.5,
  activeUsersServed: '2M+',
  summary:
    "Front-End Developer with 5.5+ years of experience architecting and delivering scalable web applications across Industrial IoT, telecom, e-commerce, and retail domains. Deep expertise in React 18 and Next.js (App Router, SSR, SSG), TypeScript, and GraphQL, with a strong track record of leading front-end teams, driving performance improvements, and establishing reusable component systems adopted across multiple product lines.",
}

export interface SkillStat {
  label: string
  short: string
  value: number
}

export const skillStats: SkillStat[] = [
  { label: 'React & Next.js Engineering', short: 'FE', value: 96 },
  { label: 'Component Craft', short: 'CMP', value: 90 },
  { label: 'Performance Tuning', short: 'PERF', value: 92 },
  { label: 'Architecture & State', short: 'ARCH', value: 88 },
  { label: 'Leadership — Reviews & Mentoring', short: 'LEAD', value: 85 },
]

export const domains = [
  { id: 'iot', label: 'Industrial IoT', status: 'ACTIVE', signal: 100 },
  { id: 'telecom', label: 'Telecom', status: 'SHIPPED', signal: 100 },
  { id: 'ecommerce', label: 'E-Commerce', status: 'SHIPPED', signal: 100 },
  { id: 'retail', label: 'Retail', status: 'SHIPPED', signal: 100 },
]

export const experience: CompanyExperience[] = [
  {
    company: 'Deloitte',
    location: 'Noida',
    overallRange: 'Mar 2026 — Present',
    roles: [
      {
        role: 'Consultant — Front-End Developer',
        domain: 'Industrial IoT',
        dateRange: 'Mar 2026 — Present',
        stack: ['React 18', 'Vite', 'Tailwind CSS', 'TypeScript', 'TanStack Query', 'AWS', 'GitHub Copilot', 'AI Tools'],
        metric: { label: 'boilerplate time cut', value: '20%' },
        bullets: [
          'Owning front-end architecture for an Industrial IoT platform — defining component structure, state management patterns, and coding standards adopted by the full team.',
          'Designed and built a library of 10+ production-grade UI components in React 18 and Tailwind CSS, built for reuse across multiple IoT dashboard modules.',
          "Introduced GitHub Copilot and AI-assisted workflows into the team's development process, reducing scaffolding and boilerplate time by ~20%.",
          'Leading all front-end releases across dev, staging, and production — coordinating deployment windows, managing rollbacks, and keeping CI/CD pipelines healthy.',
          'Running regular code reviews focused on maintainability, bundle size, and long-term scalability; established PR standards now used across the project.',
        ],
      },
    ],
  },
  {
    company: 'Accenture',
    location: 'Gurugram',
    overallRange: 'Feb 2021 — Feb 2026',
    roles: [
      {
        role: 'Product Engineering Senior Analyst',
        domain: 'Telecom',
        dateRange: 'Feb 2024 — Feb 2026',
        stack: ['Next.js', 'React', 'TypeScript', 'Redux', 'REST', 'GraphQL', 'AWS', 'Jenkins'],
        metric: { label: 'onboarding drop-off reduced', value: '18%' },
        bullets: [
          'Took ownership of the customer-facing front-end for a UK telecom platform with 2M+ active users — product journeys, plan selection, account management.',
          'Architected location-aware product journeys in Next.js SSR with pincode-based pricing logic and real-time offer personalisation.',
          'Rebuilt KYC, billing, and onboarding UIs with improved form validation, reducing customer drop-off during onboarding by ~18%.',
          'Integrated complex CRM and subscription workflows, handling plan upgrades, downgrades, and mid-cycle changes with clean Redux state management.',
          'Drove day-to-day front-end delivery for a team of 6; introduced patterns around API error boundaries and loading state consistency.',
        ],
      },
      {
        role: 'Product Engineering Senior Analyst',
        domain: 'E-Commerce',
        dateRange: 'Feb 2022 — Feb 2024',
        stack: ['Next.js', 'React', 'GraphQL', 'React Query', 'Redux', 'TypeScript', 'AWS', 'Jenkins'],
        metric: { label: 'frontend performance gain', value: '35%' },
        bullets: [
          'Led front-end development for cart, checkout, wallet, voucher, and subscription flows — owning architecture and delivery across 5+ product modules.',
          'Achieved ~35% improvement in frontend performance via code splitting, lazy loading, and React Query caching strategies.',
          'Migrated data-fetching layer from REST to GraphQL with React Query, reducing over-fetching and improving perceived load speed.',
          'Optimised Core Web Vitals (LCP, CLS, FID) using Next.js image optimisation and prefetching, validated across all major browsers.',
          'Established CI/CD standards for front-end deployments on AWS CloudFront via Jenkins, making rollbacks predictable and fast.',
        ],
      },
      {
        role: 'Product Engineering Senior Analyst',
        domain: 'Retail',
        dateRange: 'Feb 2021 — Feb 2022',
        stack: ['React', 'JavaScript', 'SCSS', 'REST', 'Material UI'],
        metric: { label: 'page load improvement', value: '30%' },
        bullets: [
          'Built and maintained product listing, catalogue, and search UIs for a retail platform with 50K+ SKUs — complex filtering and server-side pagination.',
          'Developed a shared React component library of 30+ components that cut feature delivery time by ~25% and became the squad standard.',
          'Improved page load time by ~30% through render optimisation, debounced API calls, and reducing unnecessary re-renders.',
          'Helped build out Jest unit test coverage from near zero to meaningful coverage across core modules.',
        ],
      },
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', level: 3 },
      { name: 'TypeScript (ES6+)', level: 3 },
    ],
  },
  {
    label: 'React',
    items: [
      { name: 'React 18', level: 3 },
      { name: 'Redux', level: 3 },
      { name: 'Hooks', level: 3 },
      { name: 'Context API', level: 2 },
      { name: 'React Query', level: 3 },
      { name: 'TanStack Query', level: 3 },
      { name: 'Component Architecture', level: 3 },
      { name: 'SPA', level: 2 },
      { name: 'Jest', level: 2 },
    ],
  },
  {
    label: 'Next.js',
    items: [
      { name: 'Next.js 13/14', level: 3 },
      { name: 'App Router', level: 3 },
      { name: 'SSR', level: 3 },
      { name: 'SSG', level: 2 },
      { name: 'ISR', level: 2 },
      { name: 'Image Optimisation', level: 2 },
      { name: 'Webpack', level: 2 },
    ],
  },
  {
    label: 'Styling',
    items: [
      { name: 'HTML5', level: 3 },
      { name: 'Tailwind CSS', level: 3 },
      { name: 'SCSS', level: 2 },
      { name: 'CSS3', level: 3 },
      { name: 'Material UI', level: 2 },
      { name: 'Responsive Design', level: 3 },
      { name: 'Cross-Browser Compatibility', level: 2 },
    ],
  },
  {
    label: 'APIs & Data',
    items: [
      { name: 'REST', level: 3 },
      { name: 'GraphQL', level: 3 },
      { name: 'Firebase', level: 1 },
      { name: 'Pagination', level: 2 },
      { name: 'Caching', level: 2 },
      { name: 'Debouncing', level: 2 },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'AWS (S3, CloudFront)', level: 2 },
      { name: 'Vite', level: 3 },
      { name: 'Git', level: 3 },
      { name: 'Jenkins', level: 2 },
      { name: 'CI/CD', level: 2 },
      { name: 'Figma', level: 1 },
      { name: 'GitHub Copilot', level: 2 },
      { name: 'Agile', level: 2 },
      { name: 'Scrum', level: 2 },
    ],
  },
]

export const education = {
  degree: 'B.Tech — Computer Science and Engineering',
  school: 'Shaheed Bhagat Singh State Technical Campus, Punjab',
  dateRange: '2016 — 2020',
}

export const achievements: Achievement[] = [
  { year: '2022–23', title: 'Ace Award', org: 'Innovation and Leadership, Accenture' },
  { year: '2023', title: 'iChamp Award', org: 'Frontend Performance Optimisation, Accenture' },
  { year: '2024', title: 'Client Recognition', org: 'Onshore Excellence, Accenture' },
]

export const certifications = ['Advanced JavaScript', 'React Professional']
