/* ─── Work Section ────────────────────────────────────── */
import { useRef } from 'react';
import './SectionSelectedWork.css';

const BCDN = 'https://gethyped.b-cdn.net';

const cases = [
  {
    slug: 'bullit',
    title: 'Bullit',
    cat: 'Van null narr vol, binnen three weken',
    video: `${BCDN}/Bullit/Bullit%20%7C%20Loop.mp4`,
    thumb: '/images/work/bullit.avif',
    thumbAlt:
      'Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.',
  },
  {
    slug: 'roasta',
    title: 'Roasta',
    cat: 'Zacht in smaak, Sterk in beeld',
    video: `${BCDN}/Roasta/roasta-loop.mp4`,
    thumb: '/images/work/roasta.avif',
    thumbAlt: 'Met to-the-point visuals brengen we de pure smaak van Jamaica over.',
  },
  {
    slug: 'loco-loco',
    title: 'Loco',
    cat: 'Content dat smaakt naar meer',
    video: `${BCDN}/Loco/loco-bites-loop.mp4`,
    thumb: '/images/work/loco-loco.avif',
    thumbAlt: 'Voor Loco vertaalden we sfeer naar shorts die werken.',
  },
];

function WorkSection() {
  const videoRefs = useRef({});
  const handlePlay = (slug) => {
    const video = videoRefs.current[slug];
    if (video) {
      video.play();
    }
  };

  const handlePause = (slug) => {
    const video = videoRefs.current[slug];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="work__layout">
          <div className="work__header">
            <h2 className="section-title">
              <strong>Content dat scoort.</strong>
            </h2>
            <p className="work__intro">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met
              creatieve content die werkt en het verschil maakt.
            </p>
            <a
              href="https://www.gethyped.nl/work"
              className="btn btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn__text">Bekijik al ons werk</span>
              <span className="btn__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="work__grid">
            {cases.map((c) => (
              <a
                key={c.slug}
                href={`https://www.gethyped.nl/work/${c.slug}`}
                className="case-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="case-card__thumb"
                  onMouseEnter={() => handlePlay(c.slug)}
                  onMouseLeave={() => handlePause(c.slug)}
                >
                  <img
                    src={c.thumb}
                    alt={c.thumbAlt}
                    className="case-card__poster"
                    loading="lazy"
                  />
                  <video
                    ref={(el) => (videoRefs.current[c.slug] = el)}
                    src={c.video}
                    muted
                    loop
                    playsInline
                    className="case-card__video"
                  />
                  <div className="case-card__overlay">
                    <div className="case-card__info">
                      <div className="case-card__text">
                        <span className="case-card__cat">{c.cat}</span>
                        <span className="case-card__title">
                          <span className="title-inner">{c.title}</span>
                        </span>
                      </div>

                      <button className="btn-icon__work">
                        <span className="icon-wrapper__work">
                          {/* top arrow (out) */}
                          <svg
                            className="icon__work icon--out"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7 17L17 7M7 7h10v10"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          {/* bottom arrow (in) */}
                          <svg
                            className="icon__work icon--in"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7 17L17 7M7 7h10v10"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
