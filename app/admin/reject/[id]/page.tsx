import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from '@/lib/auth'
import { getUserById, updateUserStatus } from '@/lib/users'

export default async function RejectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get('dba_token')?.value

  if (!token) redirect('/login')

  const payload = verifyToken(token!)
  if (!payload || !payload.isAdmin) redirect('/dashboard')

  const { id } = await params
  const user = await getUserById(id)

  if (user && user.status !== 'rejected') {
    await updateUserStatus(id, 'rejected')
  }

  redirect('/admin')
}
