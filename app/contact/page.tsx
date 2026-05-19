import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const C = { darkSlate: '#22333B', linen: '#EAE0D5', tan: '#C6AC8F', brown: '#5E503F', black: '#0A0908' }

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: C.linen, color: C.black }}>
      <Header />

      {/* Banner */}
      <section style={{ position: 'relative', height: '280px' }}>
        <Image
          src="/images/contact-banner.jpg"
          alt="Delaware Baptist Association contact"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(34, 51, 59, 0.70)' }} />
        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: '400', color: C.linen, marginBottom: '10px' }}>
              We&rsquo;d love to hear from you.
            </h1>
            <p style={{ fontFamily: 'sans-serif', fontSize: '15px', color: C.tan }}>
              Reach out with questions, partnership inquiries, or to learn more about the DBA.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Mailing Address */}
            <div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '400', color: C.darkSlate, marginBottom: '20px', paddingBottom: '10px', borderBottom: `1px solid ${C.tan}` }}>
                Mailing Address
              </h2>
              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: C.brown, lineHeight: 2 }}>
                Delaware Baptist Association<br />
                316 Red Mill Road<br />
                Newark, DE 19713<br />
                United States
              </p>
            </div>

            {/* Contact Details */}
            <div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '400', color: C.darkSlate, marginBottom: '20px', paddingBottom: '10px', borderBottom: `1px solid ${C.tan}` }}>
                Contact Us
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '11px', color: C.tan, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</div>
                  <a href="tel:302-741-2488" style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: C.darkSlate, textDecoration: 'none' }}>
                    302-741-2488
                  </a>
                </div>
                <div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '11px', color: C.tan, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Email</div>
                  <a href="mailto:info@delawarebaptist.com" style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: C.darkSlate, textDecoration: 'none' }}>
                    info@delawarebaptist.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
