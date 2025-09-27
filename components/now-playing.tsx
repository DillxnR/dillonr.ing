import { useLastFm } from '@/hooks/use-lastfm'
import { Button } from '@/components/ui/button'

function SkeletonLoader() {
  return (
    <div className="w-80">
      <div className="bg-card border-2 border-border p-4 rounded-lg animate-pulse">
        <div className="mb-3">
          <div className="h-4 bg-muted-foreground/20 rounded w-20"></div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-muted-foreground/20 rounded-md"></div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="h-4 bg-muted-foreground/20 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted-foreground/20 rounded w-1/2 mb-1"></div>
            <div className="h-3 bg-muted-foreground/20 rounded w-2/3"></div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-muted-foreground/20 rounded-full"></div>
            <div className="h-3 bg-muted-foreground/20 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function NowPlaying() {
  const { trackData, isPlaying, loading, error, refetch } = useLastFm()

  const getImageUrl = (size: string = 'large') => {
    if (!trackData) return '/placeholder.jpg'
    const image = trackData.image.find(img => img.size === size)
    return image ? image['#text'] : '/placeholder.jpg'
  }

  if (loading) {
    return <SkeletonLoader />
  }

  if (error || !trackData) {
    return (
      <div className="w-80 rounded-lg border border-border bg-card/60 p-4 text-sm text-muted-foreground">
        <div className="flex flex-col gap-3">
          <p>Unable to load now playing.</p>
          <Button size="sm" variant="outline" className="self-start border-border" onClick={refetch}>
            Try again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-80">
      <div className="bg-card border-2 border-border p-4 rounded-lg">
        <div className="mb-3">
          {isPlaying ? (
            <div className="text-primary text-sm font-bold tracking-wider uppercase">I'm listening to:</div>
          ) : (
            <div className="text-muted-foreground text-xs uppercase tracking-[0.35em]">Last played</div>
          )}
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <img
              src={getImageUrl('large')}
              alt={`${trackData.album['#text']} cover`}
              className="w-12 h-12 rounded-md object-cover border border-border"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-foreground text-base font-bold truncate" title={trackData.name}>
              {trackData.name}
            </div>
            <div className="text-muted-foreground text-sm truncate" title={trackData.artist['#text']}>
              {trackData.artist['#text']}
            </div>
            <div className="text-muted-foreground text-xs truncate" title={trackData.album['#text']}>
              {trackData.album['#text']}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
