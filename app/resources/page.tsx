import Header from '@/components/Header'
import Footer from '@/components/Footer'

const C = { darkSlate: '#22333B', linen: '#EAE0D5', tan: '#C6AC8F', brown: '#5E503F', black: '#0A0908' }

function SectionHead({ title }: { title: string }) {
  return (
    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '400', color: C.darkSlate, marginBottom: '20px', paddingBottom: '10px', borderBottom: `1px solid ${C.tan}` }}>
      {title}
    </h2>
  )
}

function ResourceLink({ href, label, desc }: { href: string; label: string; desc?: string }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <a href={href} target="_blank" rel="noopener noreferrer"
        style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: C.darkSlate, textDecoration: 'none', borderBottom: `1px solid ${C.tan}` }}>
        {label}
      </a>
      {desc && (
        <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, marginTop: '4px', lineHeight: 1.6 }}>{desc}</p>
      )}
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: C.linen, color: C.black }}>
      <Header />

      {/* Page Header */}
      <section style={{ backgroundColor: C.darkSlate, padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: '400', color: C.linen, marginBottom: '12px' }}>
            Resources
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: '15px', color: C.tan, maxWidth: '560px', lineHeight: 1.7 }}>
            Tools, study materials, and denominational connections for pastors and churches in our network.
          </p>
        </div>
      </section>

      {/* Featured Quote */}
      <section style={{ backgroundColor: C.black, padding: '48px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontStyle: 'italic', color: C.linen, lineHeight: 1.7, marginBottom: '16px' }}>
            &ldquo;Every time we mention God we become theologians, and the only question is whether we are going to be good ones or bad ones.&rdquo;
          </p>
          <span style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.tan, letterSpacing: '0.06em' }}>— J. I. Packer</span>
        </div>
      </section>

      {/* Resource Sections */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* DBA Resources */}
            <div>
              <SectionHead title="DBA Resources" />
              <div style={{ backgroundColor: '#fff', border: `1px solid ${C.tan}`, borderRadius: '4px', padding: '24px' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: C.darkSlate, marginBottom: '8px' }}>
                  Grant Application
                </h3>
                <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.brown, lineHeight: 1.7, marginBottom: '12px' }}>
                  The Delaware Baptist Association offers grants to support member churches in their ministry and mission efforts.
                </p>
                <a href="/contact" style={{ fontFamily: 'sans-serif', fontSize: '13px', color: C.darkSlate, fontWeight: '600', textDecoration: 'none', border: `1px solid ${C.darkSlate}`, padding: '6px 14px', borderRadius: '3px', display: 'inline-block' }}>
                  Contact us for details →
                </a>
              </div>
            </div>

            {/* Denominational Resources */}
            <div>
              <SectionHead title="Denominational Resources" />
              <ResourceLink href="https://www.sbc.net" label="Southern Baptist Convention" desc="The national body connecting SBC churches for cooperative missions and ministry." />
              <ResourceLink href="https://www.imb.org" label="International Mission Board" desc="Sending and supporting missionaries to share the Gospel around the world." />
              <ResourceLink href="https://www.namb.net" label="North American Mission Board" desc="Church planting, evangelism, and disaster relief across North America." />
              <ResourceLink href="https://bcmd.org" label="Baptist Convention of MD & DE" desc="Our regional convention connecting Baptist churches across Maryland and Delaware." />
            </div>

            {/* Bible Study */}
            <div>
              <SectionHead title="Search the Bible" />
              <ResourceLink
                href="https://www.biblestudytools.com"
                label="Bible Study Tools"
                desc="Online Bible portal with 50+ translations — KJV, NIV, ESV, NASB, and versions in Portuguese, Spanish, French, German, Italian, Chinese, Dutch, and more."
              />
              <ResourceLink href="https://www.biblegateway.com" label="Bible Gateway" desc="Passage lookup, commentaries, dictionary of Bible themes, and reading plans." />
              <ResourceLink href="https://biblewebapp.com" label="BibleWebApp" desc="Free web-based Bible study tool." />
            </div>

            {/* Free Devotionals */}
            <div>
              <SectionHead title="Free Daily Devotionals" />
              <ResourceLink
                href="https://www.thegospelcoalition.org/devotionals/for-the-love-of-god/"
                label="For the Love of God — D. A. Carson"
              />
              <ResourceLink
                href="https://www.thegospelcoalition.org/devotionals/heavenward/"
                label="Heavenward — Scotty Smith"
              />
              <ResourceLink
                href="https://www.esv.org/resources/reading-plans/"
                label="Daily Thought — John Stott writings + ESV Bible Reading Plans"
              />
            </div>

            {/* Bible Overviews */}
            <div>
              <SectionHead title="Free Bible Overviews" />
              <ResourceLink href="https://bibleproject.com" label="The Bible Project" desc="Animated videos and guides walking through every book of the Bible." />
              <ResourceLink
                href="https://podcasts.apple.com/us/podcast/the-story/id378126683"
                label="The Story (iTunes)"
                desc="Podcast overview of the biblical narrative."
              />
              <ResourceLink
                href="https://twowaystolive.com"
                label="Two Ways to Live"
                desc="A clear summary of the Christian Gospel for outreach and evangelism."
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
