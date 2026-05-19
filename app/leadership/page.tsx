import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const LEADERS = [
  {
    name: 'Nathan Walters',
    title: 'Director of Christian Challenge',
    location: 'Newark, DE',
    img: '/images/nathan-walters.jpg',
  },
  {
    name: 'Wendell Hall',
    title: 'Pastor, Solid Rock Baptist Church',
    location: 'New Castle, DE',
    img: '/images/wendell-hall.jpg',
  },
  {
    name: 'Derrick Parks',
    title: 'Pastor, Epiphany Church',
    location: 'Wilmington, DE',
    img: '/images/derrick-parks.jpg',
  },
  {
    name: 'Chandra Rudrapathi',
    title: 'Pastor, Transformation Church',
    location: 'Newark, DE',
    img: '/images/chandra-rudrapathi.jpg',
  },
]

export default function LeadershipPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#EAE0D5', color: '#0A0908' }}>
      <Header />

      {/* Page Header */}
      <section style={{ backgroundColor: '#22333B', padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: '400', color: '#EAE0D5', marginBottom: '12px' }}>
            Leadership Team
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: '15px', color: '#C6AC8F', maxWidth: '560px', lineHeight: 1.7 }}>
            The Delaware Baptist Association is led by a team of pastors and ministry leaders committed to serving the churches of our region.
          </p>
        </div>
      </section>

      {/* Leaders Grid */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERS.map(leader => (
              <div key={leader.name} style={{ backgroundColor: '#fff', border: '1px solid #C6AC8F', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', height: '260px' }}>
                  <Image
                    src={leader.img}
                    alt={`${leader.name} headshot`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: '#22333B', fontWeight: '400', marginBottom: '6px' }}>
                    {leader.name}
                  </h2>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#5E503F', lineHeight: 1.6, marginBottom: '4px' }}>
                    {leader.title}
                  </p>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#C6AC8F' }}>
                    {leader.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
