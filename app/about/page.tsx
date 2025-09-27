import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-card/80">
        <div className="mx-auto flex max-w-4xl justify-start px-6 pt-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Link href="/">
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
          </Button>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">About</p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">I build the web I want to use.</h1>
          <p className="text-lg text-muted-foreground">
            I’ve spent the last few years crafting performant, resilient, and opinionated web products.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-4xl gap-12 px-6 py-16 md:grid-cols-2">
          <div className="space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">My Values</h2>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li><strong className="text-foreground">Ship fast.</strong> Keep feedback loops tight enough that daily releases feel routine.</li>
              <li><strong className="text-foreground">Ship clarity.</strong> Every screen should be easy to understand and use. No guesswork, no filler.</li>
              <li><strong className="text-foreground">Ship with purpose.</strong> Every feature should have a clear purpose and a clear value proposition.</li>
            </ul>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Expertise</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>Web applications and APIs, with a focus on performance and scalability.</li>
              <li>Experience design, with a focus on usability and accessibility.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-left">
          <h2 className="text-3xl font-semibold text-foreground">Let’s collaborate</h2>
          <p className="mt-4 text-muted-foreground">
            I work with non-technical founders and companies without dedicated engineering teams, or small engineering teams who need a custom built product for the web. If that sounds like you, give me
            a project with stakes. I’ll bring the craft and execution.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/contact">Let's talk →</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
