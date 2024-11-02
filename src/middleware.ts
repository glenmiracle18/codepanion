import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ratelimit } from '@/lib/rate-limiter'

export async function middleware(request: NextRequest) {
  const ip = request.nextUrl.searchParams.get('ip') ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)
  
  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}