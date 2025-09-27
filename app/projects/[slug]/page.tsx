import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ProjectHeroImage } from '@/components/project-hero-image'
import { projects } from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const { kicker, name, summary, description, highlights, tech, meta, link } = project

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-card/90">
        <div className="relative mx-auto flex max-w-6xl justify-between px-6 pt-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Link href="/">
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Link href="/projects">
              <span aria-hidden="true">←</span>
              All projects
            </Link>
          </Button>
        </div>
        <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-12 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.45em] text-primary/80">{kicker}</p>
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">{name}</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">{summary}</p>
            </div>
            {project.image && (
              <ProjectHeroImage src={project.image} alt={`${name} preview`} />
            )}
          </div>

          <div className="flex w-full max-w-lg flex-col gap-4 rounded-3xl border border-border/80 bg-background/40 p-6 backdrop-blur">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Project at a glance</div>
            <dl className="space-y-3 text-sm text-muted-foreground">
              {meta.map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-6 text-foreground/80">
                  <dt className="text-muted-foreground/70">{label}</dt>
                  <dd className="text-right font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
            {link && (
              <Button asChild variant="outline" className="mt-2 border-border bg-background/60 hover:bg-background/80">
                <Link href={link} target="_blank" rel="noreferrer">
                  Visit live →
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="space-y-12 text-lg text-muted-foreground">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-10">
            <div className="rounded-2xl border border-border/80 bg-card/40 p-8 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">Highlights</h2>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card/40 p-8 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">Stack</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20">
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground/80">Next</div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((item) => item.slug !== project.slug)
              .slice(0, 2)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-background/60 p-8 transition-all hover:-translate-y-1 hover:border-primary"
                >
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/70">{item.kicker}</p>
                    <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {item.name}
                    </h3>
                    <p className="line-clamp-3 text-sm text-muted-foreground">{item.summary}</p>
                  </div>
                  <span className="mt-6 text-sm text-primary">View case →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
