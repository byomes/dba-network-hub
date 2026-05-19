'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const PASTORS = [
  { id: 1, name: 'Pastor Bill Yomes', church: 'Catalyst Community Church', expertise: ['Apologetics', 'Theological Education', 'Digital Ministry'], initials: 'BY' },
  { id: 2, name: 'Pastor James Whitfield', church: 'Cornerstone Baptist', expertise: ['Biblical Counseling', 'Pastoral Care', 'Marriage & Family'], initials: 'JW' },
  { id: 3, name: 'Pastor Marcus Reid', church: 'New Life Community', expertise: ['Church Planting', 'Leadership Development', 'Discipleship'], initials: 'MR' },
  { id: 4, name: 'Pastor David Chen', church: 'Grace Fellowship', expertise: ['Children\'s Ministry', 'Family Discipleship', 'Volunteer Training'], initials: 'DC' },
  { id: 5, name: 'Pastor Anthony Brooks', church: 'Riverside Baptist', expertise: ['Worship & Music', 'Small Groups', 'Outreach'], initials: 'AB' },
  { id: 6, name: 'Pastor Kevin Marshall', church: 'Bethany Baptist', expertise: ['Stewardship', 'Church Finance', 'Elder Training'], initials: 'KM' },
]

const PLAYBOOKS = [
  { id: 1, title: 'Pastoral Sabbatical Plan', author: 'Cornerstone Baptist', category: 'Leadership', desc: 'A complete framework for planning and communicating a pastoral sabbatical to your elders and congregation.' },
  { id: 2, title: 'Church Planting Playbook', author: 'New Life Community', category: 'Church Planting', desc: 'Proven system used to plant three churches, including one that has now planted its own.' },
  { id: 3, title: 'Biblical Counseling Intake', author: 'Cornerstone Baptist', category: 'Counseling', desc: 'Counseling intake forms, session frameworks, and referral protocols for local church use.' },
  { id: 4, title: 'Lay Leader Training Track', author: 'Grace Fellowship', category: 'Leadership', desc: 'Six-week curriculum for equipping lay leaders and volunteer coordinators.' },
  { id: 5, title: 'Apologetics in the Local Church', author: 'Catalyst Community Church', category: 'Apologetics', desc: 'How to build an apologetics culture in your church without a seminary degree.' },
  { id: 6, title: 'Church Security Protocol', author: 'Riverside Baptist', category: 'Operations', desc: 'Safety and security framework adapted for small to mid-size congregations.' },
]

type Tab = 'overview' | 'playbooks' | 'pastors' | 'connect'

const C = {
  black: '#0A0908', darkSlate: '#22333B', linen: '#EAE0D5', tan: '#C6AC8F', brown: '#5E503F'
}

export default function Dashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPastor, setSelectedPastor] = useState<typeof PASTORS[0] | null>(null)
  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)

  async function handleLogout() {
    await fetch('/api/auth', { method: 'DELETE' })
    router.push('/')
  }

  function handleSendMessage() {
    if (message.trim()) {
      setMessageSent(true)
      setTimeout(() => { setMessageSent(false); setMessage(''); setSelectedPastor(null) }, 2500)
    }
  }

  const filteredPastors = PASTORS.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.church.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const tabs: { key: Tab; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'playbooks', label: 'Playbook Library' },
    { key: 'pastors', label: 'Find a Pastor' },
    { key: 'connect', label: 'Direct Connect' },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: C.linen }}>
      {/* Header */}
      <header style={{ backgroundColor: C.darkSlate, borderBottom: `1px solid ${C.brown}`, padding: '14px 24px', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '34px', height: '34px', backgroundColor: C.tan, borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: C.darkSlate, fontWeight: '700', fontSize: '10px', fontFamily: 'sans-serif' }}>DBA</span>
            </div>
            <div style={{ color: C.linen, fontFamily: 'Georgia, serif', fontSize: '14px' }}>Network Hub</div>
            <div style={{ backgroundColor: C.brown, color: C.tan, fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '2px' }}>Private</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: C.tan, fontFamily: 'sans-serif', fontSize: '13px' }}>Pastor Bill Yomes · Catalyst Community</span>
            <button onClick={handleLogout} style={{ color: C.brown, fontFamily: 'sans-serif', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 24px' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', backgroundColor: C.darkSlate, padding: '4px', borderRadius: '4px', width: 'fit-content', marginBottom: '36px' }}>
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              padding: '8px 20px', borderRadius: '3px', fontFamily: 'sans-serif', fontSize: '13px', border: 'none', cursor: 'pointer',
              backgroundColor: activeTab === tab.key ? C.tan : 'transparent',
              color: activeTab === tab.key ? C.darkSlate : C.tan,
              fontWeight: activeTab === tab.key ? '700' : '400'
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: C.darkSlate, fontWeight: '400', marginBottom: '6px' }}>Good morning, Pastor Bill.</h2>
              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: C.brown, lineHeight: 1.6 }}>Welcome to the DBA Network Hub. You have access to the collective experience of our network.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '36px' }}>
              {[
                { label: 'Pastors in Network', value: '25' },
                { label: 'Playbooks Available', value: '14' },
                { label: 'Areas of Expertise', value: '30+' },
                { label: 'Churches Connected', value: '22' },
              ].map(stat => (
                <div key={stat.label} style={{ backgroundColor: C.darkSlate, borderRadius: '4px', padding: '20px' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: C.tan, marginBottom: '4px' }}>{stat.value}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.brown }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { tab: 'playbooks' as Tab, title: 'Playbook Library', desc: '14 playbooks across 8 categories. Real solutions from real churches in your network.' },
                { tab: 'pastors' as Tab, title: 'Find a Pastor', desc: 'Search by expertise. Find who already has the playbook for what you\'re facing.' },
                { tab: 'connect' as Tab, title: 'Direct Connect', desc: 'Message any pastor directly. No group chats. No inbox clutter. Signal for help.' },
              ].map(card => (
                <button key={card.tab} onClick={() => setActiveTab(card.tab)} style={{
                  backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px',
                  padding: '28px 24px', textAlign: 'left', cursor: 'pointer'
                }}>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: C.darkSlate, marginBottom: '8px' }}>{card.title}</h3>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, lineHeight: 1.7 }}>{card.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PLAYBOOKS */}
        {activeTab === 'playbooks' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: C.darkSlate, fontWeight: '400', marginBottom: '6px' }}>Playbook Library</h2>
              <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown }}>Frameworks and systems your network churches have already built. Use them.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {PLAYBOOKS.map(pb => (
                <div key={pb.id} style={{ backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '24px' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ backgroundColor: C.darkSlate, color: C.tan, fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '2px' }}>{pb.category}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: C.darkSlate, marginBottom: '4px' }}>{pb.title}</h3>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.tan, marginBottom: '10px' }}>Contributed by {pb.author}</p>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, lineHeight: 1.7, marginBottom: '16px' }}>{pb.desc}</p>
                  <button style={{ color: C.darkSlate, fontFamily: 'sans-serif', fontSize: '13px', fontWeight: '700', background: 'none', border: `1px solid ${C.darkSlate}`, padding: '6px 14px', borderRadius: '3px', cursor: 'pointer' }}>
                    View Playbook →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PASTORS */}
        {activeTab === 'pastors' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: C.darkSlate, fontWeight: '400', marginBottom: '6px' }}>Find a Pastor</h2>
              <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown }}>Search by name, church, or area of expertise.</p>
            </div>
            <input
              type="text" placeholder="Search by name, church, or expertise (e.g. counseling, planting)..."
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '100%', backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '12px 16px', fontFamily: 'sans-serif', fontSize: '14px', color: C.black, outline: 'none', marginBottom: '20px', boxSizing: 'border-box' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredPastors.map(pastor => (
                <div key={pastor.id} style={{ backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: C.darkSlate, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.tan, fontFamily: 'Georgia, serif', fontSize: '14px', flexShrink: 0 }}>
                    {pastor.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: C.darkSlate, marginBottom: '2px' }}>{pastor.name}</div>
                    <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.brown, marginBottom: '8px' }}>{pastor.church}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {pastor.expertise.map(e => (
                        <span key={e} style={{ backgroundColor: C.linen, color: C.brown, fontFamily: 'sans-serif', fontSize: '11px', padding: '2px 10px', borderRadius: '2px', border: `1px solid ${C.tan}` }}>{e}</span>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => { setSelectedPastor(pastor); setActiveTab('connect') }} style={{
                    backgroundColor: C.darkSlate, color: C.tan, fontFamily: 'sans-serif', fontSize: '12px', fontWeight: '600',
                    padding: '8px 16px', borderRadius: '3px', border: 'none', cursor: 'pointer', flexShrink: 0
                  }}>
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONNECT */}
        {activeTab === 'connect' && (
          <div style={{ maxWidth: '520px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: C.darkSlate, fontWeight: '400', marginBottom: '6px' }}>Direct Connect</h2>
              <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown }}>Send a direct message to any pastor in your network. Private, clean, no group chat chaos.</p>
            </div>
            <div style={{ backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '32px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: 'sans-serif', fontSize: '11px', color: C.brown, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Send To</label>
                <select value={selectedPastor?.id || ''} onChange={e => setSelectedPastor(PASTORS.find(p => p.id === Number(e.target.value)) || null)}
                  style={{ width: '100%', backgroundColor: C.linen, border: `1px solid ${C.tan}`, borderRadius: '3px', padding: '11px 14px', fontFamily: 'sans-serif', fontSize: '14px', color: C.black, outline: 'none', boxSizing: 'border-box' }}>
                  <option value="">Select a pastor...</option>
                  {PASTORS.filter(p => p.id !== 1).map(p => (
                    <option key={p.id} value={p.id}>{p.name} · {p.church}</option>
                  ))}
                </select>
              </div>

              {selectedPastor && (
                <div style={{ backgroundColor: C.linen, border: `1px solid ${C.tan}`, borderRadius: '3px', padding: '14px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: C.darkSlate, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.tan, fontFamily: 'Georgia, serif', fontSize: '13px' }}>
                    {selectedPastor.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: C.darkSlate }}>{selectedPastor.name}</div>
                    <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.brown }}>{selectedPastor.expertise.join(' · ')}</div>
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: 'sans-serif', fontSize: '11px', color: C.brown, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5}
                  placeholder="Hey Pastor, I'm dealing with a situation in our church and I know this is your area of expertise. Would you be open to a quick call this week?"
                  style={{ width: '100%', backgroundColor: C.linen, border: `1px solid ${C.tan}`, borderRadius: '3px', padding: '12px 14px', fontFamily: 'sans-serif', fontSize: '13px', color: C.black, outline: 'none', resize: 'none', boxSizing: 'border-box', lineHeight: 1.6 }}
                />
              </div>

              {messageSent ? (
                <div style={{ backgroundColor: C.darkSlate, color: C.tan, fontFamily: 'sans-serif', fontSize: '13px', padding: '12px 16px', borderRadius: '3px', textAlign: 'center' }}>
                  Message sent. {selectedPastor?.name} will receive a notification.
                </div>
              ) : (
                <button onClick={handleSendMessage} disabled={!selectedPastor || !message.trim()} style={{
                  width: '100%', backgroundColor: C.tan, color: C.darkSlate, fontFamily: 'sans-serif',
                  fontWeight: '700', fontSize: '14px', padding: '13px', borderRadius: '3px',
                  border: 'none', cursor: (!selectedPastor || !message.trim()) ? 'not-allowed' : 'pointer',
                  opacity: (!selectedPastor || !message.trim()) ? 0.5 : 1
                }}>
                  Send Message
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
