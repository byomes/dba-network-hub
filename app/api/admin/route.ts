import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { getUsers, getUserById, updateUserStatus, updateUserAdmin, deleteUser } from '@/lib/users'
import { sendApprovalEmail } from '@/lib/email'

function getAdminPayload(req: NextRequest) {
  const token = req.cookies.get('dba_token')?.value
  if (!token) return null
  const payload = verifyToken(token)
  if (!payload || !payload.isAdmin) return null
  return payload
}

export async function GET(req: NextRequest) {
  if (!getAdminPayload(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }
  const users = await getUsers()
  return NextResponse.json({
    users: users.map(({ password_hash: _ph, ...u }) => u),
  })
}

export async function POST(req: NextRequest) {
  if (!getAdminPayload(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  try {
    const { action, userId, isAdmin } = await req.json()

    if (!action || !userId) {
      return NextResponse.json({ error: 'Missing action or userId' }, { status: 400 })
    }

    if (action === 'approve') {
      const user = await getUserById(userId)
      if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
      await updateUserStatus(userId, 'active')
      await sendApprovalEmail({ name: user.name, email: user.email }).catch(() => {})
      return NextResponse.json({ success: true })
    }

    if (action === 'reject') {
      const user = await getUserById(userId)
      if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
      await updateUserStatus(userId, 'rejected')
      return NextResponse.json({ success: true })
    }

    if (action === 'toggleAdmin') {
      await updateUserAdmin(userId, Boolean(isAdmin))
      return NextResponse.json({ success: true })
    }

    if (action === 'delete') {
      await deleteUser(userId)
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (error) {
    console.error('Admin action error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
