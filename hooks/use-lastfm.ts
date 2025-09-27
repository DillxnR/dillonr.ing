import { useCallback, useEffect, useState } from 'react'
import { Track, LastFmResponse } from '@/lib/types'

interface NowPlayingState {
  track: Track | null
  isPlaying: boolean
}

export function useLastFm() {
  const [state, setState] = useState<NowPlayingState>({ track: null, isPlaying: false })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTrack = useCallback(async (showLoader = false) => {
    if (showLoader) {
      setLoading(true)
    }

    try {
      const response = await fetch('https://lp.dillonr.ing/?user=dillon1000&limit=1')
      if (!response.ok) {
        throw new Error('Failed to fetch track data')
      }

      const data: LastFmResponse = await response.json()
      if (data.recenttracks.track.length > 0) {
        const track = data.recenttracks.track[0]
        const isPlaying = track['@attr']?.nowplaying === 'true'
        setState({ track, isPlaying })
        setError(null)
      } else {
        setState({ track: null, isPlaying: false })
        setError(null)
      }
    } catch (err) {
      setError('Failed to fetch track data')
      setState({ track: null, isPlaying: false })
      console.error('Error fetching track:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTrack(true)
    const interval = setInterval(() => {
      fetchTrack()
    }, 30000)

    return () => clearInterval(interval)
  }, [fetchTrack])

  const refetch = useCallback(() => fetchTrack(true), [fetchTrack])

  return { trackData: state.track, isPlaying: state.isPlaying, loading, error, refetch }
}
