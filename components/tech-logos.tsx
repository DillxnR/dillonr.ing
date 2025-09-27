"use client"

import { useEffect, useMemo, useRef, useState } from 'react'

const TECHNOLOGIES = [
  { name: 'Astro', file: 'astro_dark.svg' },
  { name: 'Biome', file: 'biomejs.svg' },
  { name: 'Cloudflare Workers', file: 'cloudflare-workers.svg' },
  { name: 'Cloudflare', file: 'cloudflare.svg' },
  { name: 'Next.js', file: 'nextjs_icon_dark.svg' },
  { name: 'Node.js', file: 'nodejs.svg' },
  { name: 'PostgreSQL', file: 'postgresql.svg' },
  { name: 'PostHog', file: 'posthog.svg' },
  { name: 'React', file: 'react_dark.svg' },
  { name: 'Redis', file: 'redis.svg' },
  { name: 'Supabase', file: 'supabase.svg' },
  { name: 'Tailwind CSS', file: 'tailwindcss.svg' },
  { name: 'TypeScript', file: 'typescript.svg' },
  { name: 'Vercel', file: 'vercel_dark.svg' },
  { name: 'VS Code', file: 'vscode.svg' },
  { name: 'Zod', file: 'zod.svg' },
]

const ITEMS_PER_VIEW = 4
const VISIBLE_DURATION = 2600
const FADE_DURATION = 520
const STAGGER = 160
const RESET_BUFFER = 280

type SlotPhase = 'pre-enter' | 'visible' | 'leaving'

export function TechLogos() {
  const total = TECHNOLOGIES.length
  const [slotIndices, setSlotIndices] = useState(() =>
    Array.from({ length: ITEMS_PER_VIEW }, (_, idx) => idx % total)
  )
  const [slotPhases, setSlotPhases] = useState<SlotPhase[]>(() =>
    Array(ITEMS_PER_VIEW).fill('visible')
  )

  const cycleStartRef = useRef(0)
  const timeoutsRef = useRef<number[]>([])

  const clearPending = () => {
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
    timeoutsRef.current = []
  }

  useEffect(() => {
    if (total === 0) return

    const runCycle = () => {
      const nextStart = (cycleStartRef.current + ITEMS_PER_VIEW) % total

      for (let slot = 0; slot < ITEMS_PER_VIEW; slot++) {
        const hideDelay = VISIBLE_DURATION + slot * STAGGER
        const showDelay = hideDelay + FADE_DURATION

        const hideTimeout = window.setTimeout(() => {
          setSlotPhases((prev) => {
            const next = [...prev]
            next[slot] = 'leaving'
            return next
          })
        }, hideDelay)

        const showTimeout = window.setTimeout(() => {
          setSlotIndices((prev) => {
            const next = [...prev]
            next[slot] = (nextStart + slot) % total
            return next
          })

          setSlotPhases((prev) => {
            const next = [...prev]
            next[slot] = 'pre-enter'
            return next
          })

          requestAnimationFrame(() => {
            setSlotPhases((prev) => {
              const next = [...prev]
              next[slot] = 'visible'
              return next
            })
          })

          if (slot === ITEMS_PER_VIEW - 1) {
            cycleStartRef.current = nextStart
          }
        }, showDelay)

        timeoutsRef.current.push(hideTimeout, showTimeout)
      }

      const nextCycleTimeout = window.setTimeout(
        runCycle,
        VISIBLE_DURATION + (ITEMS_PER_VIEW - 1) * STAGGER + FADE_DURATION + RESET_BUFFER
      )

      timeoutsRef.current.push(nextCycleTimeout)
    }

    runCycle()

    return () => {
      clearPending()
    }
  }, [total])

  return (
    <div className="w-[19rem]">
      <div className="grid grid-cols-2 gap-6">
        {slotIndices.map((techIndex, idx) => {
          const tech = TECHNOLOGIES[techIndex]
          const phase = slotPhases[idx]

          const motionClass =
            phase === 'visible'
              ? 'opacity-100 translate-y-0'
              : phase === 'pre-enter'
              ? 'opacity-0 -translate-y-4'
              : 'opacity-0 translate-y-4'

          return (
            <div
              key={`${tech.file}-${idx}`}
              className={`group relative aspect-square rounded-xl border border-border/60 bg-background/20 transition-all ease-out ${motionClass}`}
              style={{ transitionDuration: `${FADE_DURATION}ms`, transitionDelay: `${idx * 40}ms` }}
            >
              <img
                src={`/logos/${tech.file}`}
                alt={tech.name}
                className="relative z-10 mx-auto mt-8 h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 right-3 z-10 text-center text-xs font-medium tracking-wide text-foreground/70">
                {tech.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
