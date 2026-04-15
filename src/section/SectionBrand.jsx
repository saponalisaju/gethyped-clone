/* ─── Brands Marquee ──────────────────────────────────── */
const brands = [
  { name: 'Bullit Digital',     src: '/images/brands/bullit-digital.svg' },
  { name: 'Morssinkhof',        src: '/images/brands/morssinkhof.svg' },
  { name: 'Salontopper',        src: '/images/brands/salontopper.svg' },
  { name: 'Seesing Flex',       src: '/images/brands/seesing-flex.svg' },
  { name: 'Graafschap College', src: '/images/brands/graafschap-college.svg' },
  { name: 'Fides',              src: '/images/brands/fides.svg' },
  { name: 'SRHK',               src: '/images/brands/srhk.svg' },
  { name: 'KNLTB',              src: '/images/brands/knltb.svg' },
  { name: 'De Talententuin',    src: '/images/brands/de-talententuin.svg' },
  { name: 'THO',                src: '/images/brands/tho.svg' },
  { name: 'ZCLV',               src: '/images/brands/zclv.svg' },
]

function SectionBrand() {
  const doubled = [...brands, ...brands]

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-tag">Partners</div>
        <h2 className="section-title">These brands got hyped.</h2>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee">
          {doubled.map((b, i) => (
            <div key={i} className="marquee__item">
              <img src={b.src} alt={b.name} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="marquee marquee--reverse">
          {doubled.map((b, i) => (
            <div key={i} className="marquee__item">
              <img src={b.src} alt={b.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionBrand;