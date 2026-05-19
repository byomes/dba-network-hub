import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#EAE0D5', color: '#0A0908' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #C6AC8F', backgroundColor: '#22333B', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', backgroundColor: '#C6AC8F', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#22333B', fontWeight: '700', fontSize: '11px', fontFamily: 'sans-serif', letterSpacing: '0.05em' }}>DBA</span>
            </div>
            <div>
              <div style={{ color: '#EAE0D5', fontFamily: 'Georgia, serif', fontSize: '15px', fontWeight: '600', lineHeight: 1.2 }}>Delaware Baptist Association</div>
              <div style={{ color: '#C6AC8F', fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Est. 1967</div>
            </div>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {[
              { label: 'Leadership', href: 'https://www.delawarebaptist.com/leadership' },
              { label: 'Churches', href: 'https://www.delawarebaptist.com/churches' },
              { label: 'Events', href: 'https://www.delawarebaptist.com/events' },
              { label: 'Contact', href: 'https://www.delawarebaptist.com/contact' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#C6AC8F', fontFamily: 'sans-serif', fontSize: '13px', textDecoration: 'none' }}>
                {link.label}
              </a>
            ))}
            <Link href="/login" style={{
              backgroundColor: '#C6AC8F', color: '#22333B', fontFamily: 'sans-serif',
              fontWeight: '700', fontSize: '13px', padding: '8px 18px', borderRadius: '4px', textDecoration: 'none'
            }}>
              Pastor Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ backgroundColor: '#22333B', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', border: '1px solid #5E503F', color: '#C6AC8F',
            fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: '2px', marginBottom: '28px'
          }}>
            20+ Churches · Delaware Region · Network Hub
          </div>
          <h1 style={{ color: '#EAE0D5', fontFamily: 'Georgia, serif', fontSize: '52px', fontWeight: '400', lineHeight: 1.25, marginBottom: '20px' }}>
            Strengthening disciple-making<br />
            <span style={{ color: '#C6AC8F' }}>across our region.</span>
          </h1>
          <p style={{ color: '#C6AC8F', fontFamily: 'sans-serif', fontSize: '16px', maxWidth: '560px', margin: '0 auto 16px', lineHeight: 1.7 }}>
            The Delaware Baptist Association exists to strengthen the disciple-making efforts of churches and pastors in our region.
          </p>
          <p style={{ color: '#5E503F', fontFamily: 'Georgia, serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '40px' }}>
            "In essentials unity, in non-essentials liberty, in all things charity."
          </p>
          <Link href="/login" style={{
            display: 'inline-block', backgroundColor: '#C6AC8F', color: '#22333B',
            fontFamily: 'sans-serif', fontWeight: '700', fontSize: '14px',
            padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.04em'
          }}>
            Access the Pastor Network →
          </Link>
        </div>
      </section>

      {/* Four Emphases */}
      <section style={{ padding: '72px 24px', backgroundColor: '#EAE0D5' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: '400', color: '#22333B', marginBottom: '10px' }}>Our Mission</h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#5E503F', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              We seek to accomplish our mission through four simple and strategic emphases.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { num: '01', title: 'Fellowship', desc: 'Connecting pastors and churches in meaningful relationships' },
              { num: '02', title: 'Partnership', desc: 'Encouraging churches to partner together for Kingdom work' },
              { num: '03', title: 'Scholarship', desc: 'Equipping and resourcing churches through grants and support' },
              { num: '04', title: 'Membership', desc: 'Supporting and strengthening each other as local churches' },
            ].map(item => (
              <div key={item.num} style={{
                backgroundColor: '#fff', border: '1px solid #C6AC8F', borderRadius: '4px', padding: '28px 24px'
              }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#C6AC8F', marginBottom: '12px' }}>{item.num}.</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#22333B', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#5E503F', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Hub Section */}
      <section style={{ backgroundColor: '#22333B', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: '400', color: '#EAE0D5', marginBottom: '10px' }}>The DBA Network Hub</h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#C6AC8F', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              A private space for DBA pastors and staff — share playbooks, find expertise, and call for help when the nets get heavy.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
            {[
              {
                title: 'Playbook Library',
                desc: 'Access real solutions from real churches in our network — sabbatical plans, counseling frameworks, leadership systems.',
                icon: '📖'
              },
              {
                title: 'Find a Pastor',
                desc: 'Search our network by expertise. Find who already has the playbook for what you\'re facing right now.',
                icon: '🤝'
              },
              {
                title: 'Direct Connect',
                desc: 'Message any pastor in the network directly. No group chats. No inbox spam. Signal when you need reinforcements.',
                icon: '✉️'
              },
            ].map(card => (
              <div key={card.title} style={{
                backgroundColor: '#0A0908', border: '1px solid #5E503F', borderRadius: '4px', padding: '32px 28px'
              }}>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#EAE0D5', marginBottom: '10px' }}>{card.title}</h3>
                <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#C6AC8F', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/login" style={{
              display: 'inline-block', backgroundColor: '#C6AC8F', color: '#22333B',
              fontFamily: 'sans-serif', fontWeight: '700', fontSize: '14px',
              padding: '14px 32px', borderRadius: '4px', textDecoration: 'none'
            }}>
              Pastor Login →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0A0908', padding: '32px 24px', borderTop: '1px solid #22333B' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F' }}>
            Delaware Baptist Association · 316 Red Mill Road, Newark, DE 19713
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="tel:302-741-2488" style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', textDecoration: 'none' }}>302-741-2488</a>
            <a href="mailto:info@delawarebaptist.com" style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', textDecoration: 'none' }}>info@delawarebaptist.com</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
