'use client'

import { useState } from 'react'
import Link from 'next/link'

const EXPERTISE_OPTIONS = [
  'Apologetics', 'Biblical Counseling', 'Church Finance', 'Church Planting',
  'Children\'s Ministry', 'Discipleship', 'Elder Training', 'Family Discipleship',
  'Leadership Development', 'Marriage & Family', 'Outreach', 'Pastoral Care',
  'Small Groups', 'Stewardship', 'Theological Education', 'Volunteer Training',
  'Worship & Music', 'Youth Ministry', 'Digital Ministry',
]

const inputStyle = {
  width: '100%', backgroundColor: '#EAE0D5', border: '1px solid #C6AC8F',
  borderRadius: '4px', padding: '12px 16px', color: '#0A0908',
  fontFamily: 'sans-serif', fontSize: '14px', outline: 'none',
  boxSizing: 'border-box' as const,
}

const labelStyle = {
  display: 'block', fontFamily: 'sans-serif', fontSize: '12px', color: '#C6AC8F',
  letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '8px',
}

export default function SignupPage() {
  const [form, setForm] = useState({
    name: '', church: '', role: 'pastor', expertise: [] as string[],
    email: '', password: '', confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function set(field: string, value: string | string[]) {
    setForm(f => ({ ...f, [field]: value }))
  }

  function toggleExpertise(item: string) {
    set('expertise', form.expertise.includes(item)
      ? form.expertise.filter(e => e !== item)
      : [...form.expertise, item]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Something went wrong'); setLoading(false); return }
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
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

      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '48px 24px' }}>
        <div style={{ width: '100%', maxWidth: '480px' }}>
          {submitted ? (
            <div style={{ backgroundColor: '#0A0908', border: '1px solid #5E503F', borderRadius: '4px', padding: '48px 36px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#C6AC8F', marginBottom: '16px' }}>Request Received</div>
              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#EAE0D5', lineHeight: 1.7, marginBottom: '24px' }}>
                Your request has been received. We&apos;ll notify you by email once your account is approved.
              </p>
              <Link href="/login" style={{ color: '#C6AC8F', fontFamily: 'sans-serif', fontSize: '13px', textDecoration: 'underline' }}>
                Back to login
              </Link>
            </div>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#EAE0D5', fontWeight: '400', marginBottom: '8px' }}>Request Network Access</h1>
                <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#C6AC8F', lineHeight: 1.6 }}>
                  Access is limited to DBA-affiliated pastors and staff. Requests are reviewed by the DBA administrator.
                </p>
              </div>

              <div style={{ backgroundColor: '#0A0908', border: '1px solid #5E503F', borderRadius: '4px', padding: '36px' }}>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Full Name</label>
                    <input type="text" value={form.name} onChange={e => set('name', e.target.value)}
                      required placeholder="Pastor John Smith" style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Church Name</label>
                    <input type="text" value={form.church} onChange={e => set('church', e.target.value)}
                      required placeholder="First Baptist Church" style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Role</label>
                    <select value={form.role} onChange={e => set('role', e.target.value)}
                      style={{ ...inputStyle, appearance: 'auto' }}>
                      <option value="pastor">Pastor</option>
                      <option value="staff">Staff</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Areas of Expertise</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {EXPERTISE_OPTIONS.map(item => (
                        <button key={item} type="button" onClick={() => toggleExpertise(item)} style={{
                          padding: '5px 12px', borderRadius: '3px', fontFamily: 'sans-serif', fontSize: '12px',
                          cursor: 'pointer', border: '1px solid #C6AC8F',
                          backgroundColor: form.expertise.includes(item) ? '#C6AC8F' : 'transparent',
                          color: form.expertise.includes(item) ? '#22333B' : '#C6AC8F',
                        }}>
                          {item}
                        </button>
                      ))}
                    </div>
                    {form.expertise.length === 0 && (
                      <p style={{ fontFamily: 'sans-serif', fontSize: '11px', color: '#5E503F', marginTop: '6px' }}>Select at least one area</p>
                    )}
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                      required placeholder="pastor@yourchurch.com" style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Password</label>
                    <input type="password" value={form.password} onChange={e => set('password', e.target.value)}
                      required placeholder="Min. 8 characters" style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Confirm Password</label>
                    <input type="password" value={form.confirmPassword} onChange={e => set('confirmPassword', e.target.value)}
                      required placeholder="••••••••" style={inputStyle} />
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
                    letterSpacing: '0.04em',
                  }}>
                    {loading ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              </div>

              <p style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', marginTop: '24px' }}>
                Already have an account?{' '}
                <Link href="/login" style={{ color: '#C6AC8F', textDecoration: 'none' }}>Sign in →</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
