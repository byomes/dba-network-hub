import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#EAE0D5', color: '#0A0908' }}>

      {/* Header */}
      <header style={{ borderBottom: '1px solid #5E503F', backgroundColor: '#22333B', padding: '14px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ position: 'relative', width: '120px', height: '42px', flexShrink: 0 }}>
              <Image
                src="/images/logo.png"
                alt="Delaware Baptist Association logo"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                priority
              />
            </div>
            <div style={{ borderLeft: '1px solid #5E503F', paddingLeft: '14px' }}>
              <div style={{ color: '#EAE0D5', fontFamily: 'Georgia, serif', fontSize: '14px', fontWeight: '600', lineHeight: 1.2 }}>Delaware Baptist Association</div>
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
            &ldquo;In essentials unity, in non-essentials liberty, in all things charity.&rdquo;
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

      {/* Mission — Four Emphases */}
      <section style={{ padding: '72px 24px', backgroundColor: '#EAE0D5' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: '400', color: '#22333B', marginBottom: '10px' }}>Our Mission</h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#5E503F', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              We seek to accomplish our mission through four simple and strategic emphases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01', title: 'Fellowship',
                desc: 'Connecting pastors and churches in meaningful relationships that last beyond Sunday.',
                img: '/images/fellowship.jpg', imgAlt: 'Pastors in fellowship'
              },
              {
                num: '02', title: 'Partnership',
                desc: 'Encouraging churches to partner together for Kingdom work across Delaware.',
                img: '/images/partnership.jpg', imgAlt: 'Churches in partnership'
              },
              {
                num: '03', title: 'Scholarship',
                desc: 'Equipping and resourcing churches through grants, support, and shared playbooks.',
                img: '/images/scholarship.jpg', imgAlt: 'Scholarship and resourcing'
              },
              {
                num: '04', title: 'Membership',
                desc: 'Supporting and strengthening each other as a family of local churches.',
                img: null, imgAlt: null
              },
            ].map(item => (
              <div key={item.num} style={{
                backgroundColor: '#fff', border: '1px solid #C6AC8F', borderRadius: '4px', overflow: 'hidden'
              }}>
                {item.img && (
                  <div style={{ position: 'relative', width: '100%', height: '140px' }}>
                    <Image
                      src={item.img}
                      alt={item.imgAlt!}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                {!item.img && (
                  <div style={{ width: '100%', height: '140px', backgroundColor: '#22333B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#C6AC8F', fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: '400', opacity: 0.4 }}>DBA</span>
                  </div>
                )}
                <div style={{ padding: '24px 20px' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#C6AC8F', marginBottom: '10px' }}>{item.num}.</div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#22333B', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#5E503F', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Hub */}
      <section style={{ backgroundColor: '#22333B', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: '400', color: '#EAE0D5', marginBottom: '10px' }}>The DBA Network Hub</h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#C6AC8F', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              A private space for DBA pastors and staff — share playbooks, find expertise, and call for help when the nets get heavy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginBottom: '48px' }}>
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

      {/* History */}
      <section style={{ backgroundColor: '#EAE0D5', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: '400', color: '#22333B', marginBottom: '10px' }}>Our Story</h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#5E503F', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Founded in 1967, the Delaware Baptist Association has been rooting and connecting Baptist churches across our region for over half a century.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ alignItems: 'start' }}>
            <div>
              <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <Image
                  src="/images/covenant.jpg"
                  alt="DBA Covenant document"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#22333B', marginBottom: '8px' }}>The DBA Covenant</h3>
              <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#5E503F', lineHeight: 1.7 }}>
                The covenant that binds our churches together — a commitment to shared mission, mutual accountability, and the advancement of the Gospel across Delaware.
              </p>
            </div>
            <div>
              <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <Image
                  src="/images/leadership-team.jpg"
                  alt="DBA leadership team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#22333B', marginBottom: '8px' }}>Leadership Team</h3>
              <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#5E503F', lineHeight: 1.7 }}>
                Our leadership team serves the churches and pastors of Delaware — coordinating resources, facilitating partnerships, and championing the mission of each congregation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0A0908', padding: '40px 24px', borderTop: '1px solid #22333B' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#EAE0D5', marginBottom: '6px' }}>Delaware Baptist Association</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F' }}>316 Red Mill Road, Newark, DE 19713</div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="tel:302-741-2488" style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', textDecoration: 'none' }}>302-741-2488</a>
            <a href="mailto:info@delawarebaptist.com" style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', textDecoration: 'none' }}>info@delawarebaptist.com</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
