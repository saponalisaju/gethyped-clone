import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <section className="intro">
      <div className="container">
        {/* 🔥 TOP TEXT */}
        <div className="intro__text-block">
          <h2 className="intro__heading">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk
            in beweging brengt. Snel, krachtig en energiek.
          </h2>
        </div>

        {/* 🔥 GRID (image + content) */}
        <div className="intro__grid">
          {/* LEFT IMAGE */}
          <div className="intro__media">
            <img className="intro__image" src="/images/hero/anniek-bril.webp" alt="" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="intro__content">
            <p className="intro__body">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je
              precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content
              zonder resultaat.
            </p>
            <div className="bottom-btn">
              <a href="#about" className="btn btn--outline">
                <span className="btn__text">Leer ons kennen</span>
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

              <button className="btn-scroll">
                <span className="icon-wrapper">
                  {/* top arrow (out) */}
                  <svg
                    className="icon icon--out"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5v14M6 13l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* bottom arrow (in) */}
                  <svg
                    className="icon icon--in"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5v14M6 13l6 6 6-6"
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
      </div>
    </section>
  );
}

export default IntroSection;
