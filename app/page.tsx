import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
              <span className="text-slate-950 font-bold text-sm">DBA</span>
            </div>
            <span className="font-semibold text-white tracking-wide">Network Hub</span>
          </div>
          <Link href="/login" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
            Pastor Login
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Delaware Baptist Association
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Signal from the deep.<br />
          <span className="text-amber-400">Call in reinforcements.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          A private network where DBA pastors share playbooks, find each other's strengths, and call for help when the nets get heavy.
        </p>
        <Link href="/login" className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-colors">
          Access the Network →
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Playbook Library</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Access real playbooks from real churches. Sabbatical plans, counseling frameworks, leadership systems — already built, ready to use.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Find a Pastor</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Search your network by expertise. Biblical counseling, church planting, apologetics, children's ministry — find who has what you need.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Direct Connect</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Message a pastor directly through the platform. No group chats. No inbox spam. Signal when you need help, get a response.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-slate-600 text-sm">
        Delaware Baptist Association · Private Pastor Network · {new Date().getFullYear()}
      </footer>
    </main>
  )
}
