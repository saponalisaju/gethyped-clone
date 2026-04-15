/* ─── CTA Section ─────────────────────────────────────── */
const ctaImages = [
  { src: '/images/work/bullit.avif',    alt: 'Bullit' },
  { src: '/images/work/loco-loco.avif', alt: 'Loco Loco' },
  { src: '/images/work/roasta.avif',    alt: 'Roasta' },
]

function CtaSection() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta__inner">
          <p className="cta__eyebrow">Klaar voor de volgende stap?</p>
          <h2 className="cta__title">Let's Get Hyped!</h2>
          <div className="cta__actions">
            <a href="mailto:info@gethyped.nl" className="btn btn--accent btn--lg">
              Mail ons direct
            </a>
            <a href="https://www.gethyped.nl/contact" className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">
              Get Results
            </a>
          </div>
          <p className="cta__contact-info">
            <a href="tel:+31615337496">+31 6 1533 7496</a>
            <span>·</span>
            <a href="mailto:info@gethyped.nl">info@gethyped.nl</a>
          </p>

          {/* Floating decorative images */}
          <div className="cta__float-images">
            {ctaImages.map((img, i) => (
              <div key={i} className={`cta__float-item cta__float-item--${i + 1}`}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection;