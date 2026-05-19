'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const PASTORS = [
  { id: 1, name: 'Pastor Bill Yomes', church: 'Catalyst Community Church', expertise: ['Apologetics', 'Theological Education', 'Digital Ministry'], initials: 'BY' },
  { id: 2, name: 'Pastor James Whitfield', church: 'Cornerstone Baptist', expertise: ['Biblical Counseling', 'Pastoral Care', 'Marriage & Family'], initials: 'JW' },
  { id: 3, name: 'Pastor Marcus Reid', church: 'New Life Community', expertise: ['Church Planting', 'Leadership Development', 'Discipleship'], initials: 'MR' },
  { id: 4, name: 'Pastor David Chen', church: 'Grace Fellowship', expertise: ['Children\'s Ministry', 'Family Discipleship', 'Volunteer Training'], initials: 'DC' },
  { id: 5, name: 'Pastor Anthony Brooks', church: 'Riverside Baptist', expertise: ['Worship & Music', 'Small Groups', 'Outreach'], initials: 'AB' },
]

const PLAYBOOKS = [
  { id: 1, title: 'Pastoral Sabbatical Plan', author: 'Cornerstone Baptist', category: 'Leadership', description: 'A complete framework for planning and communicating a pastoral sabbatical to your elders and congregation.' },
  { id: 2, title: 'Church Planting Playbook', author: 'New Life Community', category: 'Church Planting', description: 'Proven system used to plant three churches, including one that has now planted its own.' },
  { id: 3, title: 'Biblical Counseling Intake', author: 'Cornerstone Baptist', category: 'Counseling', description: 'Counseling intake forms, session frameworks, and referral protocols for local church use.' },
  { id: 4, title: 'Lay Leader Training Track', author: 'Grace Fellowship', category: 'Leadership', description: 'Six-week curriculum for equipping lay leaders and volunteer coordinators.' },
  { id: 5, title: 'Apologetics in the Local Church', author: 'Catalyst Community Church', category: 'Apologetics', description: 'How to build an apologetics culture in your church without a seminary degree.' },
]

type Tab = 'overview' | 'playbooks' | 'pastors' | 'connect'

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
      setTimeout(() => {
        setMessageSent(false)
        setMessage('')
        setSelectedPastor(null)
      }, 2500)
    }
  }

  const filteredPastors = PASTORS.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.church.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4 sticky top-0 bg-slate-950 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
              <span className="text-slate-950 font-bold text-sm">DBA</span>
            </div>
            <span className="font-semibold text-white tracking-wide">Network Hub</span>
            <span className="hidden md:inline-block ml-2 bg-amber-500/10 text-amber-400 text-xs px-2 py-0.5 rounded-full border border-amber-500/20">Private</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm hidden md:block">Pastor Bill Yomes · Catalyst Community</span>
            <button onClick={handleLogout} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-slate-900 p-1 rounded-xl mb-8 w-fit">
          {(['overview', 'playbooks', 'pastors', 'connect'] as Tab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'connect' ? 'Direct Connect' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-1">Good morning, Pastor Bill.</h2>
              <p className="text-slate-400">Welcome to the DBA Network Hub. You have access to 25 pastors and their collective experience.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Pastors in Network', value: '25' },
                { label: 'Playbooks Available', value: '14' },
                { label: 'Areas of Expertise', value: '30+' },
                { label: 'Churches Connected', value: '22' },
              ].map(stat => (
                <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <div className="text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <button onClick={() => setActiveTab('playbooks')} className="bg-slate-900 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-7 text-left transition-colors group">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Playbook Library</h3>
                <p className="text-slate-400 text-sm">14 playbooks across 8 categories. Real solutions from real churches.</p>
              </button>

              <button onClick={() => setActiveTab('pastors')} className="bg-slate-900 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-7 text-left transition-colors group">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Find a Pastor</h3>
                <p className="text-slate-400 text-sm">Search by expertise. Find who in your network has already solved your problem.</p>
              </button>

              <button onClick={() => setActiveTab('connect')} className="bg-slate-900 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-7 text-left transition-colors group">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Direct Connect</h3>
                <p className="text-slate-400 text-sm">Message any pastor in the network directly. No group chats. No inbox clutter.</p>
              </button>
            </div>
          </div>
        )}

        {/* PLAYBOOKS TAB */}
        {activeTab === 'playbooks' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Playbook Library</h2>
              <p className="text-slate-400 text-sm">Frameworks and systems your network churches have already built. Use them.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {PLAYBOOKS.map(pb => (
                <div key={pb.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/20 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded-full border border-amber-500/20">{pb.category}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{pb.title}</h3>
                  <p className="text-slate-500 text-xs mb-3">Contributed by {pb.author}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{pb.description}</p>
                  <button className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                    View Playbook →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PASTORS TAB */}
        {activeTab === 'pastors' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Find a Pastor</h2>
              <p className="text-slate-400 text-sm">Search by name, church, or area of expertise.</p>
            </div>
            <input
              type="text"
              placeholder="Search by name, church, or expertise (e.g. counseling, planting)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors mb-6"
            />
            <div className="space-y-3">
              {filteredPastors.map(pastor => (
                <div key={pastor.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-5 hover:border-amber-500/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-sm flex-shrink-0">
                    {pastor.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-sm">{pastor.name}</div>
                    <div className="text-slate-500 text-xs mb-2">{pastor.church}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {pastor.expertise.map(e => (
                        <span key={e} className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded-full">{e}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedPastor(pastor); setActiveTab('connect') }}
                    className="flex-shrink-0 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-medium px-4 py-2 rounded-lg border border-amber-500/20 transition-colors"
                  >
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONNECT TAB */}
        {activeTab === 'connect' && (
          <div className="max-w-xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Direct Connect</h2>
              <p className="text-slate-400 text-sm">Send a direct message to any pastor in your network. Private, clean, no group chat chaos.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-300 mb-2">Send To</label>
                <select
                  value={selectedPastor?.id || ''}
                  onChange={e => setSelectedPastor(PASTORS.find(p => p.id === Number(e.target.value)) || null)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="">Select a pastor...</option>
                  {PASTORS.filter(p => p.id !== 1).map(p => (
                    <option key={p.id} value={p.id}>{p.name} · {p.church}</option>
                  ))}
                </select>
              </div>

              {selectedPastor && (
                <div className="bg-slate-800/50 rounded-xl p-4 mb-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-sm">
                    {selectedPastor.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{selectedPastor.name}</div>
                    <div className="text-slate-500 text-xs">{selectedPastor.expertise.join(' · ')}</div>
                  </div>
                </div>
              )}

              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Hey Pastor, I'm dealing with a situation in our church and I know this is your area of expertise. Would you be open to a quick call this week?"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {messageSent ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm px-4 py-3 rounded-lg text-center">
                  Message sent. {selectedPastor?.name} will receive a notification.
                </div>
              ) : (
                <button
                  onClick={handleSendMessage}
                  disabled={!selectedPastor || !message.trim()}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold py-3 rounded-lg transition-colors text-sm"
                >
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
