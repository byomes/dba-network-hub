import { NextRequest, NextResponse } from 'next/server'
import { getUserByEmail, createUser } from '@/lib/users'
import { sendAdminNotification, sendSignupConfirmation } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const { name, church, role, expertise, email, password, confirmPassword } = await req.json()

    if (!name || !church || !role || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const existing = await getUserByEmail(email)
    if (existing) {
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 })
    }

    const expertiseArray = typeof expertise === 'string'
      ? expertise.split(',').map((e: string) => e.trim()).filter(Boolean)
      : Array.isArray(expertise) ? expertise : []

    const newUser = await createUser({
      email,
      password,
      name,
      church,
      role,
      expertise: expertiseArray,
    })

    if (!newUser) {
      return NextResponse.json({ error: 'Failed to create account' }, { status: 500 })
    }

    const [adminEmailResult, confirmEmailResult] = await Promise.allSettled([
      sendAdminNotification({
        id: newUser.id,
        name: newUser.name,
        church: newUser.church,
        role: newUser.role,
        email: newUser.email,
      }),
      sendSignupConfirmation({ name: newUser.name, email: newUser.email }),
    ])
    console.log('Resend admin notification result:', JSON.stringify(adminEmailResult))
    console.log('Resend signup confirmation result:', JSON.stringify(confirmEmailResult))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
