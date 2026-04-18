import { useState } from "react";
const BCDN = "https://gethyped.b-cdn.net";
import "./Header.css";

function SectionHero() {
  const [active, setActive] = useState(null);

  const getStyle = (index) => {
    const base = [-180, -90, 10, 110]; // initial positions

    let x = base[index];
    let scale = 1;
    let z = index;

    if (active !== null) {
      if (index === active) {
        scale = 1.1;
        z = 999;
      } else if (index < active) {
        x = base[index] - 25;
      } else {
        x = base[index] + 25;
      }
    }

    return {
      transform: `translate(${x}%, -50%) scale(${scale}) rotate(var(--r))`,
      zIndex: z,
    };
  };

  const handleHover = (e) => {
    const newAngle = Math.random() * 30 - 15;
    e.currentTarget.style.setProperty("--r", `${newAngle}deg`);
  };

  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__top">
          <h1 className="hero__headline">
            Get Hyped. Get Noticed. Get Results.
          </h1>
          <p className="hero__subtitle">
            Klaar met gokken op content
            <br />
            die niets oplevert?
          </p>
        </div>

        <div className="hero__bottom">
          <div className="results-card">
            {/* Card 1 */}
            <div
              className="result-card result-card--blue"
              style={{ ...getStyle(0), "--r": `${Math.random() * 20 - 10}deg` }}
              onMouseEnter={(e) => {
                setActive(0);
                handleHover(e);
              }}
              onMouseLeave={() => setActive(null)}
            >
              <div className="result-card__number">10M+</div>
              <div className="result-card__body">
                <h2 className="result-card__label">Organische views</h2>
                <div className="result-card__divider" />
                <p className="result-card__sub">Groei door slimme content</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="result-card result-card--media"
              style={{ ...getStyle(1), "--r": `${Math.random() * 20 - 10}deg` }}
              onMouseEnter={(e) => {
                setActive(1);
                handleHover(e);
              }}
              onMouseLeave={() => setActive(null)}
            >
              <img
                src="/images/hero/video-thumb-01.avif"
                className="result-card__thumb"
              />
              <video
                className="result-card__video"
                src={`${BCDN}/Salontopper/Loop%20Salontopper.mp4`}
                muted
                loop
                autoPlay
                playsInline
              />
            </div>

            {/* Card 3 */}
            <div
              className="result-card result-card--green result-card--hide-mobile"
              style={{ ...getStyle(2), "--r": `${Math.random() * 20 - 10}deg` }}
              onMouseEnter={(e) => {
                setActive(2);
                handleHover(e);
              }}
              onMouseLeave={() => setActive(null)}
            >
              <div className="result-card__number">30+</div>
              <div className="result-card__body">
                <h2 className="result-card__label">Merken geholpen</h2>
                <div className="result-card__divider" />
                <p className="result-card__sub">
                  Van start-up tot multinational
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="result-card result-card--media result-card--hide-tablet-mobile"
              style={{ ...getStyle(3), "--r": `${Math.random() * 20 - 10}deg` }}
              onMouseEnter={(e) => {
                setActive(3);
                handleHover(e);
              }}
              onMouseLeave={() => setActive(null)}
            >
              <img
                src="/images/hero/video-thumb-02.avif"
                className="result-card__thumb"
              />
              <video
                className="result-card__video"
                src={`${BCDN}/Petrol%20Head/petrolhead-loop.mp4`}
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
