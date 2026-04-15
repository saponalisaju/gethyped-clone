/* ─── Work Section ────────────────────────────────────── */
const BCDN = 'https://gethyped.b-cdn.net'

const cases = [
  {
    slug: 'bullit',
    title: 'Bullit',
    cat: 'Content creation · Social strategy',
    video: `${BCDN}/Bullit/Bullit%20%7C%20Loop.mp4`,
    thumb: '/images/work/bullit.avif',
    thumbAlt: 'Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.',
  },
  {
    slug: 'roasta',
    title: 'Roasta',
    cat: 'Content creation · Activation',
    video: `${BCDN}/Roasta/roasta-loop.mp4`,
    thumb: '/images/work/roasta.avif',
    thumbAlt: 'Met to-the-point visuals brengen we de pure smaak van Jamaica over.',
  },
  {
    slug: 'loco-loco',
    title: 'Loco Loco',
    cat: 'Social strategy · Data',
    video: `${BCDN}/Loco/loco-bites-loop.mp4`,
    thumb: '/images/work/loco-loco.avif',
    thumbAlt: 'Voor Loco vertaalden we sfeer naar shorts die werken.',
  },
]

function WorkSection() {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="work__header">
          <div className="section-tag">Cases</div>
          <h2 className="section-title">Content dat scoort.</h2>
          <p className="work__intro">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
            Met creatieve content die werkt en het verschil maakt.
          </p>
          <a href="https://www.gethyped.nl/work" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            Bekijk al ons werk
          </a>
        </div>

        <div className="work__grid">
          {cases.map(c => (
            <a
              key={c.slug}
              href={`https://www.gethyped.nl/work/${c.slug}`}
              className="case-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="case-card__thumb">
                {/* Desktop: show poster image */}
                <img
                  src={c.thumb}
                  alt={c.thumbAlt}
                  className="case-card__poster"
                  loading="lazy"
                />
                {/* Always: video plays on hover (desktop) or auto on touch (mobile) */}
                <video
                  src={c.video}
                  muted loop playsInline
                  className="case-card__video"
                  onMouseEnter={e => e.currentTarget.play()}
                  onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0 }}
                  onTouchStart={e => e.currentTarget.play()}
                />
                <div className="case-card__overlay">
                  <span className="case-card__view">Bekijk case →</span>
                </div>
              </div>
              <div className="case-card__info">
                <h3 className="case-card__title">{c.title}</h3>
                <p className="case-card__cat">{c.cat}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection;