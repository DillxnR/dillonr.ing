import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <div className="flex flex-col gap-4">
          <span className="text-sm uppercase tracking-[0.55em] text-muted-foreground/80">404</span>
          <h1 className="text-5xl font-black leading-tight sm:text-6xl">This page took a break, but I won't.</h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            The URL you’re looking for either moved, never existed, or is busy shipping a feature somewhere else. Try one of the
            routes below, or head back home and start fresh.
          </p>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card/70 p-6 text-left">
            <p className="text-sm font-semibold text-foreground">Peek the work</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore recent projects, experiments, and product launches.
            </p>
            <Button asChild variant="outline" className="mt-4 w-full border-border hover:bg-card/70">
              <Link href="/projects">See projects</Link>
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-card/70 p-6 text-left">
            <p className="text-sm font-semibold text-foreground">Start a conversation</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your context and we’ll put together the next steps.
            </p>
            <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Contact Dillon</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground/80">
          <Button asChild variant="ghost" className="gap-2 hover:text-foreground">
            <Link href="/">
              <span aria-hidden="true">←</span>
              Take me home
            </Link>
          </Button>
          <span className="hidden h-4 w-px bg-border md:block" aria-hidden="true" />
          <span className="text-muted-foreground/70">or</span>
          <Button asChild variant="ghost" className="gap-2 hover:text-foreground">
            <Link href="mailto:hello@dillonr.ing">Email Dillon directly</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
