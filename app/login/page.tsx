'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Login failed'); setLoading(false); return }
      router.push('/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', backgroundColor: '#EAE0D5', border: '1px solid #C6AC8F',
    borderRadius: '4px', padding: '12px 16px', color: '#0A0908',
    fontFamily: 'sans-serif', fontSize: '14px', outline: 'none',
    boxSizing: 'border-box' as const
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#22333B', display: 'flex', flexDirection: 'column' }}>
      <header style={{ borderBottom: '1px solid #5E503F', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#C6AC8F', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#22333B', fontWeight: '700', fontSize: '11px', fontFamily: 'sans-serif' }}>DBA</span>
            </div>
            <div style={{ color: '#EAE0D5', fontFamily: 'Georgia, serif', fontSize: '15px' }}>Delaware Baptist Association</div>
          </Link>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#EAE0D5', fontWeight: '400', marginBottom: '8px' }}>Pastor Login</h1>
            <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#C6AC8F', lineHeight: 1.6 }}>
              Access is limited to DBA network pastors and staff.
            </p>
          </div>

          <div style={{ backgroundColor: '#0A0908', border: '1px solid #5E503F', borderRadius: '4px', padding: '36px' }}>
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: 'sans-serif', fontSize: '12px', color: '#C6AC8F', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Email Address
                </label>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  required placeholder="pastor@yourchurch.com" style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontFamily: 'sans-serif', fontSize: '12px', color: '#C6AC8F', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Password
                </label>
                <input
                  type="password" value={password} onChange={e => setPassword(e.target.value)}
                  required placeholder="••••••••" style={inputStyle}
                />
              </div>

              {error && (
                <div style={{ backgroundColor: '#5E503F', border: '1px solid #C6AC8F', color: '#EAE0D5', fontFamily: 'sans-serif', fontSize: '13px', padding: '12px 16px', borderRadius: '4px', marginBottom: '20px' }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading} style={{
                width: '100%', backgroundColor: '#C6AC8F', color: '#22333B',
                fontFamily: 'sans-serif', fontWeight: '700', fontSize: '14px',
                padding: '13px', borderRadius: '4px', border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1,
                letterSpacing: '0.04em'
              }}>
                {loading ? 'Signing in...' : 'Sign In to Network'}
              </button>
            </form>
          </div>

          <p style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', marginTop: '24px' }}>
            Not a DBA member? Contact your association administrator.
          </p>
        </div>
      </div>
    </main>
  )
}
