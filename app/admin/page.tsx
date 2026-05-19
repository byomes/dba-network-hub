'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface UserRecord {
  id: string
  name: string
  church: string
  role: string
  email: string
  expertise: string[]
  status: 'pending' | 'active' | 'rejected'
  isAdmin: boolean
  createdAt: string
}

const C = {
  black: '#0A0908', darkSlate: '#22333B', linen: '#EAE0D5', tan: '#C6AC8F', brown: '#5E503F',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function AdminPage() {
  const router = useRouter()
  const [users, setUsers] = useState<UserRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  useEffect(() => {
    async function init() {
      // Verify admin status
      const authRes = await fetch('/api/auth')
      if (!authRes.ok) { router.replace('/login'); return }
      const { user } = await authRes.json()
      if (!user?.isAdmin) { router.replace('/dashboard'); return }
      await loadUsers()
    }
    init()
  }, [router])

  async function loadUsers() {
    const res = await fetch('/api/admin')
    if (res.ok) {
      const data = await res.json()
      setUsers(data.users)
    }
    setLoading(false)
  }

  async function doAction(action: string, userId: string, extra?: object) {
    setActionLoading(userId + action)
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, userId, ...extra }),
    })
    if (res.ok) await loadUsers()
    setActionLoading(null)
  }

  async function handleDelete(userId: string, userName: string) {
    if (!confirm(`Delete ${userName}? This cannot be undone.`)) return
    await doAction('delete', userId)
  }

  const pending = users.filter(u => u.status === 'pending')
  const active = users.filter(u => u.status === 'active')
  const rejected = users.filter(u => u.status === 'rejected')

  const btnBase: React.CSSProperties = {
    fontFamily: 'sans-serif', fontSize: '12px', fontWeight: '600',
    padding: '6px 14px', borderRadius: '3px', border: 'none', cursor: 'pointer',
  }

  function UserRow({ u, actions }: { u: UserRecord; actions: React.ReactNode }) {
    return (
      <div style={{ backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: C.darkSlate }}>{u.name}</span>
            <span style={{ backgroundColor: C.darkSlate, color: C.tan, fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '2px' }}>{u.role}</span>
            {u.isAdmin && <span style={{ backgroundColor: C.brown, color: C.linen, fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '2px' }}>Admin</span>}
          </div>
          <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.brown, marginBottom: '4px' }}>{u.church}</div>
          <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.brown, marginBottom: '6px' }}>{u.email}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
            {u.expertise.map(e => (
              <span key={e} style={{ backgroundColor: C.linen, color: C.brown, fontFamily: 'sans-serif', fontSize: '10px', padding: '2px 8px', borderRadius: '2px', border: `1px solid ${C.tan}` }}>{e}</span>
            ))}
          </div>
          <div style={{ fontFamily: 'sans-serif', fontSize: '11px', color: '#aaa' }}>Requested {formatDate(u.createdAt)}</div>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {actions}
        </div>
      </div>
    )
  }

  function Section({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
    return (
      <div style={{ marginBottom: '52px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: C.darkSlate, fontWeight: '400', marginBottom: '4px' }}>{title}</h2>
          <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown }}>{desc}</p>
        </div>
        {children}
      </div>
    )
  }

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: C.linen, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown }}>Loading...</span>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: C.linen }}>
      <header style={{ backgroundColor: C.darkSlate, borderBottom: `1px solid ${C.brown}`, padding: '14px 24px', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '34px', height: '34px', backgroundColor: C.tan, borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: C.darkSlate, fontWeight: '700', fontSize: '10px', fontFamily: 'sans-serif' }}>DBA</span>
            </div>
            <div style={{ color: C.linen, fontFamily: 'Georgia, serif', fontSize: '14px' }}>Admin Dashboard</div>
            <div style={{ backgroundColor: C.brown, color: C.tan, fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '2px' }}>Admin Only</div>
          </div>
          <Link href="/dashboard" style={{ color: C.tan, fontFamily: 'sans-serif', fontSize: '13px', textDecoration: 'none' }}>
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>

        <Section
          title={`Pending Requests (${pending.length})`}
          desc="New users awaiting approval. Review and approve or reject each request."
        >
          {pending.length === 0 ? (
            <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, padding: '20px 0' }}>No pending requests.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {pending.map(u => (
                <UserRow key={u.id} u={u} actions={
                  <>
                    <button
                      onClick={() => doAction('approve', u.id)}
                      disabled={actionLoading === u.id + 'approve'}
                      style={{ ...btnBase, backgroundColor: C.tan, color: C.darkSlate }}
                    >
                      {actionLoading === u.id + 'approve' ? '...' : 'Approve'}
                    </button>
                    <button
                      onClick={() => doAction('reject', u.id)}
                      disabled={actionLoading === u.id + 'reject'}
                      style={{ ...btnBase, backgroundColor: 'transparent', color: C.brown, border: `1px solid ${C.brown}` }}
                    >
                      {actionLoading === u.id + 'reject' ? '...' : 'Reject'}
                    </button>
                    <button
                      onClick={() => handleDelete(u.id, u.name)}
                      disabled={actionLoading === u.id + 'delete'}
                      style={{ ...btnBase, backgroundColor: '#c0392b', color: '#fff' }}
                    >
                      {actionLoading === u.id + 'delete' ? '...' : 'Delete'}
                    </button>
                  </>
                } />
              ))}
            </div>
          )}
        </Section>

        <Section
          title={`Active Members (${active.length})`}
          desc="Approved network members. You can grant or revoke admin rights here."
        >
          {active.length === 0 ? (
            <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, padding: '20px 0' }}>No active members.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {active.map(u => (
                <UserRow key={u.id} u={u} actions={
                  <>
                    <button
                      onClick={() => doAction('toggleAdmin', u.id, { isAdmin: !u.isAdmin })}
                      disabled={actionLoading === u.id + 'toggleAdmin'}
                      style={{ ...btnBase, backgroundColor: u.isAdmin ? C.brown : 'transparent', color: u.isAdmin ? C.linen : C.brown, border: `1px solid ${C.brown}` }}
                    >
                      {actionLoading === u.id + 'toggleAdmin' ? '...' : (u.isAdmin ? 'Revoke Admin' : 'Grant Admin')}
                    </button>
                    <button
                      onClick={() => handleDelete(u.id, u.name)}
                      disabled={actionLoading === u.id + 'delete'}
                      style={{ ...btnBase, backgroundColor: '#c0392b', color: '#fff' }}
                    >
                      {actionLoading === u.id + 'delete' ? '...' : 'Delete'}
                    </button>
                  </>
                } />
              ))}
            </div>
          )}
        </Section>

        <Section
          title={`Rejected (${rejected.length})`}
          desc="Rejected signup requests."
        >
          {rejected.length === 0 ? (
            <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, padding: '20px 0' }}>No rejected requests.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {rejected.map(u => (
                <UserRow key={u.id} u={u} actions={
                  <>
                    <button
                      onClick={() => doAction('approve', u.id)}
                      disabled={actionLoading === u.id + 'approve'}
                      style={{ ...btnBase, backgroundColor: 'transparent', color: C.tan, border: `1px solid ${C.tan}` }}
                    >
                      {actionLoading === u.id + 'approve' ? '...' : 'Reinstate'}
                    </button>
                    <button
                      onClick={() => handleDelete(u.id, u.name)}
                      disabled={actionLoading === u.id + 'delete'}
                      style={{ ...btnBase, backgroundColor: '#c0392b', color: '#fff' }}
                    >
                      {actionLoading === u.id + 'delete' ? '...' : 'Delete'}
                    </button>
                  </>
                } />
              ))}
            </div>
          )}
        </Section>

      </div>
    </main>
  )
}
