export interface Track {
  artist: {
    mbid: string
    "#text": string
  }
  streamable: string
  image: Array<{
    size: string
    "#text": string
  }>
  mbid: string
  album: {
    mbid: string
    "#text": string
  }
  name: string
  "@attr"?: {
    nowplaying?: string
  }
  url: string
}

export interface LastFmResponse {
  recenttracks: {
    track: Track[]
    "@attr": {
      user: string
      totalPages: string
      page: string
      perPage: string
      total: string
    }
  }
}
