import { NextRequest, NextResponse } from 'next/server'
import { verifyCredentials, signToken, verifyToken } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('dba_token')?.value
  if (!token) return NextResponse.json({ user: null }, { status: 401 })
  const payload = verifyToken(token)
  if (!payload) return NextResponse.json({ user: null }, { status: 401 })
  return NextResponse.json({ user: payload })
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const user = await verifyCredentials(email, password)

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials or account not active' }, { status: 401 })
    }

    const token = signToken({
      id: user.id,
      email: user.email,
      name: user.name,
      church: user.church,
      isAdmin: user.isAdmin,
    })

    const response = NextResponse.json({ success: true, user: { name: user.name, church: user.church } })
    response.cookies.set('dba_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('dba_token')
  return response
}
