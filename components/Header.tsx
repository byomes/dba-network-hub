import Image from 'next/image'
import Link from 'next/link'

const NAV = [
  { label: 'Leadership', href: '/leadership' },
  { label: 'Resources', href: '/resources' },
  { label: 'Churches', href: '/churches' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #5E503F', backgroundColor: '#22333B', padding: '14px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
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
            <div style={{ color: '#EAE0D5', fontFamily: 'Georgia, serif', fontSize: '14px', fontWeight: '600', lineHeight: 1.2 }}>
              Delaware Baptist Association
            </div>
            <div style={{ color: '#C6AC8F', fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Est. 1967
            </div>
          </div>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {NAV.map(link => (
            <Link key={link.label} href={link.href}
              style={{ color: '#C6AC8F', fontFamily: 'sans-serif', fontSize: '13px', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/login" style={{
            backgroundColor: '#C6AC8F', color: '#22333B', fontFamily: 'sans-serif',
            fontWeight: '700', fontSize: '13px', padding: '8px 18px', borderRadius: '4px', textDecoration: 'none',
          }}>
            Pastor Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
