import { getCloudflareContext } from '@opennextjs/cloudflare'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

type RouteParams = {
  params: {
    key?: string[]
  }
}

const CACHE_CONTROL_HEADER = 'public, max-age=86400, stale-while-revalidate=600'

async function getObjectFromR2(key: string) {
  const { env } = getCloudflareContext<{ bound2: R2Bucket }>()

  return env.bound2.get(key)
}

function buildHeaders(object: R2ObjectBody) {
  const headers = new Headers()

  object.writeHttpMetadata(headers)

  if (!headers.has('Cache-Control')) {
    headers.set('Cache-Control', CACHE_CONTROL_HEADER)
  }

  headers.set('Content-Length', object.size.toString())
  headers.set('ETag', object.httpEtag)

  if (!headers.has('Content-Type') && object.httpMetadata?.contentType) {
    headers.set('Content-Type', object.httpMetadata.contentType)
  }

  return headers
}

function parseKey(params: RouteParams['params']) {
  const segments = params.key ?? []
  const key = segments.filter(Boolean).join('/')

  return key
}

async function handleRequest(includeBody: boolean, params: RouteParams['params']) {
  const key = parseKey(params)

  if (!key) {
    return new Response('Not Found', { status: 404 })
  }

  const object = await getObjectFromR2(key)

  if (!object) {
    return new Response('Not Found', { status: 404 })
  }

  const headers = buildHeaders(object)

  if (includeBody && object.body) {
    return new Response(object.body, { status: 200, headers })
  }

  return new Response(null, { status: 200, headers })
}

export async function GET(_request: Request, { params }: RouteParams) {
  return handleRequest(true, params)
}

export async function HEAD(_request: Request, { params }: RouteParams) {
  return handleRequest(false, params)
}

