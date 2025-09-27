import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-32">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">404</p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Something's not right.</h1>
        <p className="text-muted-foreground">
          The project you’re looking for either moved or isn’t ready yet. Head back to the projects overview to see
          the latest work.
        </p>
        <Link href="/projects" className="text-sm text-primary hover:text-primary/80">
          ↩︎ View all projects
        </Link>
      </div>
    </main>
  )
}
