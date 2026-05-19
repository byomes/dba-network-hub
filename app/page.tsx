import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-500 rounded flex items-center justify-center">
              <span className="text-slate-950 font-bold text-sm">DBA</span>
            </div>
            <div>
              <div className="font-semibold text-white text-sm leading-tight">Delaware Baptist Association</div>
              <div className="text-slate-500 text-xs">Network Hub</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="https://www.delawarebaptist.com/leadership" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Leadership</a>
            <a href="https://www.delawarebaptist.com/churches" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Churches</a>
            <a href="https://www.delawarebaptist.com/events" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Events</a>
            <a href="https://www.delawarebaptist.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <Link href="/login" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
            Pastor Login
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Established 1967 · 20+ Churches · Delaware Region
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Strengthening disciple-making<br />
          <span className="text-amber-400">across our region.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4">
          The Delaware Baptist Association exists to strengthen the disciple-making efforts of churches and pastors in our region.
        </p>
        <p className="text-slate-500 text-sm max-w-xl mx-auto mb-10 italic">
          "In essentials unity, in non-essentials liberty, in all things charity."
        </p>
        <Link href="/login" className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-colors">
          Access the Pastor Network →
        </Link>
      </section>

      {/* Mission Four Emphases */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">We seek to accomplish our mission through four simple and strategic emphases.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { number: '01', title: 'Fellowship', desc: 'Connecting pastors and churches in meaningful relationships' },
            { number: '02', title: 'Partnership', desc: 'Encouraging churches to partner together for Kingdom work' },
            { number: '03', title: 'Scholarship', desc: 'Equipping and resourcing churches through grants and support' },
            { number: '04', title: 'Membership', desc: 'Supporting and strengthening each other as local churches' },
          ].map(item => (
            <div key={item.number} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-amber-500 font-bold text-2xl mb-3">{item.number}.</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Network Hub CTA */}
      <section className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">The DBA Network Hub</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">A private space for DBA pastors and staff — share playbooks, find expertise, and call for help when the nets get heavy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-amber-500/30 transition-colors">
              <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Playbook Library</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Access real solutions from real churches in our network — sabbatical plans, counseling frameworks, leadership systems.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-amber-500/30 transition-colors">
              <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Find a Pastor</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Search our network by expertise. Find who already has the playbook for what you're facing right now.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-amber-500/30 transition-colors">
              <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Direct Connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Message any pastor in the network directly. No group chats. No inbox spam. Signal when you need reinforcements.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/login" className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-colors">
              Pastor Login →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <div>Delaware Baptist Association · 316 Red Mill Road, Newark, DE 19713</div>
          <div className="flex gap-6">
            <a href="tel:302-741-2488" className="hover:text-slate-400 transition-colors">302-741-2488</a>
            <a href="mailto:info@delawarebaptist.com" className="hover:text-slate-400 transition-colors">info@delawarebaptist.com</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
