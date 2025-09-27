"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProjectsPage() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})

  const handleImageLoad = (slug: string) => {
    setImagesLoaded((prev) => ({ ...prev, [slug]: true }))
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-card/80">
        <div className="relative mx-auto flex max-w-6xl justify-start px-6 pt-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Link href="/">
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
          </Button>
        </div>
        <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-12 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24">
          <p className="text-xs uppercase tracking-[0.45em] text-primary/80">Selected Work</p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Projects</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            A snapshot of the platforms, products, and tools I’ve partnered on recently. Every case study pairs strong
            design direction with resilient engineering so your product feels intentional, fast, and unmistakable.
          </p>
          <Button
            variant="outline"
            className="w-fit border-border bg-background/40 text-foreground hover:bg-background/60"
            asChild
          >
            <Link href="/contact">Start a project →</Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          {projects.map((project) => {
            const imageLoaded = imagesLoaded[project.slug]

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background/80 transition-all hover:-translate-y-1 hover:border-primary"
              >
                <div className="relative aspect-video w-full bg-muted">
                  {project.image ? (
                    <>
                      {!imageLoaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none" />}
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onLoad={() => handleImageLoad(project.slug)}
                      />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-muted-foreground/60">
                      {project.slug.split('-')[1] ?? '01'}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <div className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">{project.kicker}</div>
                  <h2 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-4">{project.summary}</p>
                  <span className="mt-auto text-sm font-semibold text-primary">View case →</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
