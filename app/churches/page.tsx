import Header from '@/components/Header'
import Footer from '@/components/Footer'

const C = { darkSlate: '#22333B', linen: '#EAE0D5', tan: '#C6AC8F', brown: '#5E503F', black: '#0A0908' }

interface Church {
  name: string
  pastor?: string
  address?: string
}

const NEW_CASTLE: Church[] = [
  { name: 'Catalyst Community Church', pastor: 'Rev. Bill Yomes', address: '410 Denver Rd, Wilmington, DE 19804' },
  { name: 'Community of Grace Fellowship', pastor: 'Rev. Howard Brown', address: '5 Pennsylvania Ave, Claymont, DE 19703' },
  { name: 'Delaware Korean Baptist Church', pastor: 'Rev. Hong Lee', address: '219 N Dupont Hwy, New Castle, DE 19720' },
  { name: 'Epiphany Church', pastor: 'Rev. Derrick Parks', address: '301 N. Union St, Wilmington, DE 19805' },
  { name: 'EverSpring Church', pastor: 'Rev. John Coleman', address: '1701 S. Dupont Hwy, St. Georges, DE 19733' },
  { name: 'First Baptist Church', pastor: 'Rev. Ron Larson', address: '901 East Basin St, New Castle, DE 19720' },
  { name: 'First Heritage Church', pastor: 'Rev. Robert Kossak', address: 'Hockessin, DE' },
  { name: 'Freedom Biker Church', pastor: 'Rev. John Willis', address: '22 Parkway Circle, New Castle, DE 19720' },
  { name: 'Friendship Baptist Church', pastor: 'Rev. Jim Chevalier', address: '2200 Glasgow Ave, Newark, DE 19702' },
  { name: 'Fruit of Light Korean Baptist Church', pastor: 'Rev. Paul Oh', address: '504 S. Broad St, Middletown, DE 19709' },
  { name: 'Good Shepherd Baptist Church', address: '2274 Porter Rd, Bear, DE 19701' },
  { name: 'Gospel Life Church', pastor: 'Rev. Chris Morris', address: '1275 Cedar Lane Rd, Middletown, DE 19709' },
  { name: 'Latter Day Baptist Church', pastor: 'Dr. Wayne Miles', address: '520 W 32nd St, Wilmington, DE 19802' },
  { name: 'LifeHouse Church M.O.T.', pastor: 'Rev. Mark Lashey', address: '101 Karins Blvd, Townsend, DE 19734' },
  { name: 'North Baptist Church', pastor: 'Rev. Jimmy Ezell', address: '3318 Silverside Rd, Wilmington, DE 19810' },
  { name: 'Ogletown Baptist Church', pastor: 'Dr. Curtis Hill', address: '316 Red Mill Rd, Newark, DE 19713' },
  { name: 'Slavic Baptist Church', pastor: 'Rev. Roman Kapran', address: '316 Red Mill Rd, Newark, DE 19713' },
  { name: 'Solid Rock Baptist Church', pastor: 'Rev. Wendell Hall', address: '4082 New Castle Ave, New Castle, DE 19720' },
  { name: 'Sycamore Hill Church Hockessin', pastor: 'Rev. Jon Boulet', address: '505 Schoolhouse Rd, Hockessin, DE 19707' },
  { name: 'Sycamore Hill Church Wilmington', pastor: 'Rev. DuAne Davis', address: '200 South Madison St, Wilmington, DE 19801' },
  { name: 'Transformation Church', pastor: 'Rev. Chandra Rudrapathi', address: '2401 Ogletown Rd, Newark, DE 19711' },
]

const KENT: Church[] = [
  { name: 'Dover Korean Baptist Church', pastor: 'Rev. Young Choi', address: '2659 McKee Rd, Dover, DE 19904' },
  { name: 'Filipino-American Christian Fellowship', pastor: 'Rev. John Welcome', address: '2736 Forrest Ave, Dover, DE 19904' },
  { name: 'Haitian Evangelical Church', pastor: 'Rev. Guy Danjoint', address: '177 Old Camden Rd, Camden, DE 19934' },
  { name: 'LifeHouse Church Smyrna', pastor: 'Rev. Drue Matthews', address: '29 S. Main St, Smyrna, DE 19977' },
  { name: 'New City Church', pastor: 'Rev. Dave Aubrey', address: '761 South Little Creek Rd, Dover, DE 19901' },
]

const MARYLAND: Church[] = [
  { name: 'Greensboro Baptist Church', address: '401 W. Sunset Ave, Greensboro, MD 21639' },
]

function ChurchCard({ church }: { church: Church }) {
  return (
    <div style={{ backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '18px 20px' }}>
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: C.darkSlate, marginBottom: '4px' }}>
        {church.name}
      </h3>
      {church.pastor && (
        <p style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.tan, marginBottom: '4px' }}>
          {church.pastor}
        </p>
      )}
      {church.address && (
        <p style={{ fontFamily: 'sans-serif', fontSize: '12px', color: C.brown }}>
          {church.address}
        </p>
      )}
    </div>
  )
}

function CountySection({ title, churches }: { title: string; churches: Church[] }) {
  return (
    <div style={{ marginBottom: '56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: '400', color: C.darkSlate }}>
          {title}
        </h2>
        <span style={{ backgroundColor: C.darkSlate, color: C.tan, fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '2px' }}>
          {churches.length} churches
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {churches.map(c => <ChurchCard key={c.name} church={c} />)}
      </div>
    </div>
  )
}

export default function ChurchesPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: C.linen, color: C.black }}>
      <Header />

      {/* Page Header */}
      <section style={{ backgroundColor: C.darkSlate, padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: '400', color: C.linen, marginBottom: '12px' }}>
            Member Churches
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: '15px', color: C.tan, maxWidth: '640px', lineHeight: 1.7 }}>
            The DBA is comprised of twenty-seven churches situated throughout the length of our state — from the north of Wilmington to the south of Georgetown, and even into Maryland on the eastern shore of the Chesapeake Bay.
          </p>
        </div>
      </section>

      {/* Directory */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <CountySection title="New Castle County" churches={NEW_CASTLE} />
          <CountySection title="Kent County" churches={KENT} />
          <CountySection title="Maryland" churches={MARYLAND} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
