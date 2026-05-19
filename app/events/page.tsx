import Header from '@/components/Header'
import Footer from '@/components/Footer'

const C = { darkSlate: '#22333B', linen: '#EAE0D5', tan: '#C6AC8F', brown: '#5E503F', black: '#0A0908' }

const EVENTS = [
  {
    title: 'Roundtable Discussion: Seeking Unity in the SBC',
    date: 'Thursday, August 24, 2023',
    time: '5:00–9:00 PM',
    location: 'LifeHouse Church',
    address: '101 Karins Boulevard, Townsend, DE 19734',
    desc: 'A partnership event with The Matthew 5:9 Fellowship featuring SBC President Bart Barber discussing polarization in the church and updates on the Sexual Abuse Taskforce.',
  },
  {
    title: 'DBA Coffee & Fellowship',
    date: 'Wednesday, July 19, 2023',
    time: '9:00–10:30 AM',
    location: 'Cafe 10:31',
    address: 'Townsend, DE',
    desc: 'An informal morning gathering for pastors and church leaders across the DBA network.',
  },
  {
    title: 'DBA Fellowship & Lunch',
    date: 'Wednesday, May 17, 2023',
    time: '11:30 AM–1:00 PM',
    location: "Chili's Restaurant",
    address: 'Newark, DE',
    desc: 'Monthly fellowship and lunch for DBA pastors and staff. Registration available via Google Form.',
  },
]

export default function EventsPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: C.linen, color: C.black }}>
      <Header />

      {/* Page Header */}
      <section style={{ backgroundColor: C.darkSlate, padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: '400', color: C.linen, marginBottom: '12px' }}>
            Events
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: '15px', color: C.tan, maxWidth: '560px', lineHeight: 1.7 }}>
            The DBA hosts regular fellowship events for pastors and church members across Delaware. Check back for upcoming gatherings.
          </p>
        </div>
      </section>

      {/* Event Listings */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
            {EVENTS.map(event => (
              <div key={event.title} style={{ backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '32px', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <div style={{ minWidth: '180px', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: C.tan, marginBottom: '4px' }}>{event.date}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, marginBottom: '12px' }}>{event.time}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.darkSlate, fontWeight: '600', marginBottom: '2px' }}>{event.location}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.brown }}>{event.address}</div>
                </div>
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '400', color: C.darkSlate, marginBottom: '12px' }}>
                    {event.title}
                  </h2>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: C.brown, lineHeight: 1.7 }}>
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recurring Programs */}
          <div style={{ backgroundColor: C.darkSlate, borderRadius: '4px', padding: '32px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '400', color: C.linen, marginBottom: '12px' }}>
              Recurring Programs
            </h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: C.tan, lineHeight: 1.7, maxWidth: '600px' }}>
              The DBA organizes regular Pastors Fellowship meetings in both northern and southern Delaware, typically featuring guest speakers on theological topics and providing lunch for attendees. Contact us to be added to the invitation list.
            </p>
            <a href="/contact" style={{ display: 'inline-block', marginTop: '20px', backgroundColor: C.tan, color: C.darkSlate, fontFamily: 'sans-serif', fontWeight: '700', fontSize: '13px', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none' }}>
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
