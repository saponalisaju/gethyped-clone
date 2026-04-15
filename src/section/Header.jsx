/* ─── Hero ────────────────────────────────────────────── */
const BCDN = 'https://gethyped.b-cdn.net'

function SectionHero() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="home">
        <div className="hero__inner">
          <div className="hero__left">
            <div className="hero__tag">Content bureau</div>
            <h1 className="hero__headline">
              Get Hyped.<br />Get Noticed.<br />Get Results.
            </h1>
            <p className="hero__subtitle">
              Klaar met gokken op content<br />die niets oplevert?
            </p>
          </div>

          <div className="hero__right">
            <div className="results-cards">
              {/* Card 1 – stat blue */}
              <div className="result-card result-card--blue">
                <div className="result-card__number">10M+</div>
                <div className="result-card__body">
                  <h2 className="result-card__label">Organische views</h2>
                  <div className="result-card__divider" />
                  <p className="result-card__sub">Groei door slimme content</p>
                </div>
              </div>

              {/* Card 2 – video */}
              <div className="result-card result-card--media">
                <img
                  src="/images/hero/video-thumb-01.avif"
                  alt=""
                  className="result-card__thumb"
                  loading="eager"
                />
                <video
                  className="result-card__video"
                  src={`${BCDN}/Salontopper/Loop%20Salontopper.mp4`}
                  muted loop autoPlay playsInline
                  preload="metadata"
                />
              </div>

              {/* Card 3 – stat green (hide on mobile) */}
              <div className="result-card result-card--green result-card--hide-mobile">
                <div className="result-card__number">30+</div>
                <div className="result-card__body">
                  <h2 className="result-card__label">Merken geholpen</h2>
                  <div className="result-card__divider" />
                  <p className="result-card__sub">Van start-up tot multinational</p>
                </div>
              </div>

              {/* Card 4 – video (desktop only) */}
              <div className="result-card result-card--media result-card--hide-tablet-mobile">
                <img
                  src="/images/hero/video-thumb-02.avif"
                  alt=""
                  className="result-card__thumb"
                  loading="lazy"
                />
                <video
                  className="result-card__video"
                  src={`${BCDN}/Petrol%20Head/petrolhead-loop.mp4`}
                  muted loop autoPlay playsInline
                  preload="none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="intro">
        <div className="container">
          <div className="intro__grid">
            <div className="intro__text-block">
              <h2 className="intro__heading">
                Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt
                en jouw merk in beweging brengt. Snel, krachtig en energiek.
              </h2>
            </div>

            <div className="intro__media">
              {/* Mobile: video */}
              <video
                className="intro__video"
                src={`${BCDN}/New%20Reach/new-reach-loop.mp4`}
                muted loop autoPlay playsInline
                preload="metadata"
              />
              {/* Desktop: image */}
              <img
                className="intro__image"
                src="/images/hero/anniek-bril.webp"
                srcSet="/images/hero/anniek-bril-500.webp 500w, /images/hero/anniek-bril-800.webp 800w, /images/hero/anniek-bril.webp 960w"
                sizes="(max-width: 960px) 100vw, 960px"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="intro__content">
              <p className="intro__body">
                We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
                Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
                Nooit meer content zonder resultaat.
              </p>
              <a href="#about" className="btn btn--outline">Leer ons kennen</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default SectionHero;
