"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NowPlaying } from "@/components/now-playing"
import { TechLogos } from "@/components/tech-logos"
import { Skeleton } from "@/components/ui/skeleton"
import { projects } from "@/lib/projects"


export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsHeaderVisible(currentScrollY > window.innerHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroOpacity = typeof window !== 'undefined' ? Math.max(0, 1 - scrollY / (window.innerHeight * 0.8)) : 1
  const heroScale = typeof window !== 'undefined' ? Math.max(0.5, 1 - scrollY / (window.innerHeight * 2)) : 1

  const handleImageLoad = (slug: string) => {
    setImagesLoaded((prev) => ({ ...prev, [slug]: true }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isHeaderVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">Dillon Ring</div>
            <nav className="flex items-center gap-8">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-transparent text-lg"
                asChild
              >
                <Link href="/projects">Projects</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-transparent text-lg"
                asChild
              >
                <Link href="/about">About</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-transparent text-lg"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-24">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid gap-16 items-center justify-items-center lg:grid-cols-[minmax(0,1fr)_420px] lg:justify-items-stretch">
            {/* Left Side - Main Content */}
            <div
              className="max-w-2xl space-y-10 text-center lg:max-w-none lg:text-left"
              style={{
                opacity: heroOpacity,
                transform: `scale(${heroScale})`,
              }}
            >
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black text-foreground tracking-tighter leading-none">
                Dillon Ring
              </h1>
              <p className="mx-auto max-w-xl text-xl text-muted-foreground md:text-2xl lg:mx-0">
                I craft thoughtful, performant web apps and experiences that grow with you.
              </p>

              {/* Hero Buttons */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:items-start">
                <Button
                  variant="outline"
                  className="bg-background/60 border-border hover:bg-background/80 text-foreground px-6 py-5 text-base"
                  asChild
                >
                  <Link href="/projects">Projects</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-background/60 border-border hover:bg-background/80 text-foreground px-6 py-5 text-base"
                  asChild
                >
                  <Link href="/about">About</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-background/60 border-border hover:bg-background/80 text-foreground px-6 py-5 text-base"
                  asChild
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Tech Stack & Now Playing */}
            <div className="flex w-full flex-col items-center gap-10 lg:w-auto lg:items-end">
              <TechLogos />
              <NowPlaying />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-card px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className=" text-6xl md:text-7xl font-black text-card-foreground mb-16 text-center">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.summary}</p>
                    <span className="mt-auto text-sm font-semibold text-primary">View case →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">About</p>
            <h2 className="text-5xl font-black text-foreground sm:text-6xl">I build opinionated, performant web products.</h2>
            <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
              I work with non-technical founders or groups that need something custom built for the web and don't have a dedicated engineering team. 
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card/70 p-6 text-left backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground">Custom built</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                I build custom products for your business, tailored to your needs.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card/70 p-6 text-left backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground">Systems thinking</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Design systems, component libraries, and data models are shaped to stay flexible as your business grows.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card/70 p-6 text-left backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground">Measured delivery</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                I ship code crazy fast, and I'm always available to answer questions or make changes.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Recent focus areas</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>Server-side search, filtering, and sorting.</li>
                <li>Caching strategies for performance and scalability.</li>
                <li>Secure authentication and authorization.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-card-foreground/70">Contact</p>
            <h2 className="text-5xl font-black text-card-foreground sm:text-6xl">Bring your context, I'll bring a plan.</h2>
            <p className="max-w-3xl text-lg text-card-foreground/80 sm:text-xl">
              Share the product, timelines, and constraints you're working with. I respond quickly with next steps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="rounded-3xl border border-border bg-background/80 p-6 text-left backdrop-blur">
              <h3 className="text-lg font-semibold text-card-foreground">Reach out directly</h3>
              <ul className="mt-4 space-y-3 text-sm text-card-foreground/80">
                <li>
                  <a href="mailto:hello@dillonr.ing" className="hover:text-primary">
                    hello@dillonr.ing
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/dillon-ring" className="hover:text-primary">
                    linkedin.com/in/dillon-ring
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dillonring" className="hover:text-primary">
                    github.com/dillonring
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/contact">Start the conversation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className=" text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dillon Ring. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
