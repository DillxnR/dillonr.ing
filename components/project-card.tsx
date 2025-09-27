import Link from 'next/link'
import { projects } from '@/lib/projects'

interface ProjectCardProps {
  projectSlug: string
}

export function ProjectCard({ projectSlug }: ProjectCardProps) {
  const project = projects.find((item) => item.slug === projectSlug)

  if (!project) return null

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-2 border-border bg-background p-8 transition-colors duration-300 hover:border-primary"
    >
      <div className="aspect-video bg-muted mb-6 flex items-center justify-center">
        <span className="text-muted-foreground text-4xl font-bold">{project.title.slice(10, 12)}</span>
      </div>
      <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{project.summary}</p>
    </Link>
  )
}
