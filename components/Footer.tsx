export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0908', padding: '40px 24px', borderTop: '1px solid #22333B' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#EAE0D5', marginBottom: '6px' }}>
            Delaware Baptist Association
          </div>
          <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F' }}>
            316 Red Mill Road, Newark, DE 19713
          </div>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="tel:302-741-2488"
            style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', textDecoration: 'none' }}>
            302-741-2488
          </a>
          <a href="mailto:info@delawarebaptist.com"
            style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#5E503F', textDecoration: 'none' }}>
            info@delawarebaptist.com
          </a>
        </div>
      </div>
    </footer>
  )
}
