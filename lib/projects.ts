export interface Project {
  slug: string
  kicker: string
  name: string
  summary: string
  description: string[]
  highlights: string[]
  tech: string[]
  meta: { label: string; value: string }[]
  link?: string
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'srtnr-link-shortener',
    kicker: 'SRTNR Link Shorterner',
    name: 'SRTNR',
    summary: 'A fast, feature packed link shortener.',
    description: [
      'SRTNR is a fast, feature packed link shortener. I built the entire product, from the initial concept to the final launch.',
      'I designed the interaction model, and obsessed over legibility. Launched in under 24 hours.',
    ],
    highlights: [
      'Designed filtering and searching at scale.',
      'Created a custom dashboard for managing links and their associated metadata.',
      'Free forever, scaleable to 1000s of links.',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    meta: [
      { label: 'Role', value: 'Founder & Engineer' },
      { label: 'Company', value: 'SRTNR' },
    ],
    link: 'https://srtnr.co',
    image: '/images/global-assets/SCR-20250926-tody.png',
  },
  {
    slug: 'srtnr-mini',
    kicker: 'SRTNR Mini Headless Link Shortener',
    name: 'SRTNR Mini',
    summary: 'An insanely fast, headless link shortener.',
    description: [
      'SRTNR Mini is a fast headless link shortener. It\'s powered by Workers and Workers KV for ultra fast performance. It\'s completely open source, and you can host it yourself.',
    ],
    highlights: [
      'Sub-100ms average redirect time.',
      'Tracks clicks and provides multiple API routes.',
      'Open source, self-hostable.',
    ],
    tech: ['Cloudflare Workers', 'Workers KV', 'TypeScript'],
    meta: [
      { label: 'Role', value: 'Developer' },
      { label: 'Timeline', value: '2025' },
    ],
    link: 'https://github.com/DillxnR/srtnr-mini',
    image: '/images/global-assets/SCR-20250926-trsn-2.png',
  },
  {
    slug: 'favicon-worker',
    kicker: 'Favicon Worker',
    name: 'Favicon Worker',
    summary: 'A fast, self-hostable favicon grabber.',
    description: [
      'Favicon Worker is a fast, self-hostable favicon grabber. It\'s hosted on Cloudflare Workers and is totally ephemeral, so you can host it yourself without any hassle.',
    ],
    highlights: [
      'Fetches multiple types of favicons.',
      'Super simple and free to use',
      'Open source.',
    ],
    tech: ['Cloudflare Workers', 'TypeScript'],
    meta: [
      { label: 'Role', value: 'Developer' },
      { label: 'Timeline', value: '2025' },
    ],
    link: 'https://github.com/DillxnR/favicon.11011',
    image: '/images/global-assets/SCR-20250926-tsdd.png',
  },
  {
    slug: 'this-website',
    kicker: 'This Website',
    name: 'This Website',
    summary: 'My personal website.',
    description: [
      'This website is my personal website. It\'s built with Next.js and Tailwind CSS, and hosted on Vercel.',
    ],
    highlights: [
      'Built in 72 hours.',
      'Fully responsive and accessible.',
      'Hosted on Cloudflare Workers.',
    ],
    tech: ['Next.js', 'Tailwind', 'Cloudflare Workers', 'TypeScript'],
    meta: [
      { label: 'Role', value: 'Lead Engineer' },
      { label: 'Timeline', value: 'Q1 – Q3 2023' },
      { label: 'Partner', value: 'Pulse Health Labs' },
    ],
    link: 'https://dillonr.ing',
    image: '/images/global-assets/SCR-20250926-tvfz-2.png',
  }
]
