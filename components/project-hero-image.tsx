'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

interface ProjectHeroImageProps {
  src: string
  alt: string
}

export function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-3xl border border-border/80 bg-background/40">
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none" />}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 1024px) 100vw, 60vw"
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
