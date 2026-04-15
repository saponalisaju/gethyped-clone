import { useState, useEffect, useRef } from "react";

const BCDN = 'https://gethyped.b-cdn.net'

/* ─── Expertise Section ───────────────────────────────── */
const expertises = [
  {
    num: '01',
    tag: 'Social strategy',
    title: 'Slimme strategie.\nSterke start.',
    body: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    link: 'https://www.gethyped.nl/expertises/social-strategie',
    linkText: 'Meer over social strategie',
    video: `${BCDN}/MD/MD%20Loop%20Schaken.mp4`,
  },
  {
    num: '02',
    tag: 'Content creation',
    title: 'Content die opvalt\nen raakt.',
    body: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    link: 'https://www.gethyped.nl/expertises/content-creatie',
    linkText: 'Meer over content creatie',
    video: `${BCDN}/Expertises/Loop%20BTS%20comp.mp4`,
  },
  {
    num: '03',
    tag: 'Activation',
    title: 'Zichtbaar waar en\nwanneer het telt.',
    body: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    link: 'https://www.gethyped.nl/expertises/activatie',
    linkText: 'Meer over activatie',
    video: `${BCDN}/Over%20de%20Top/overdetop-loop.mp4`,
  },
  {
    num: '04',
    tag: 'Data',
    title: 'Inzichten die\nimpact maken.',
    body: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    link: 'https://www.gethyped.nl/expertises/data',
    linkText: 'Meer over data',
    video: `${BCDN}/Expertises/Data%20comp.mp4`,
  },
]

function ExpertiseSection() {
  const [active, setActive] = useState(0)
  const videoRefs = useRef([])

  // Play only the active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return
      if (i === active) {
        vid.currentTime = 0
        vid.play().catch(() => {})
      } else {
        vid.pause()
      }
    })
  }, [active])

  return (
    <section className="expertise" id="expertises">
      <div className="container">
        <div className="section-tag">Expertise</div>

        <div className="expertise__layout">
          <div className="expertise__list">
            {expertises.map((e, i) => (
              <button
                key={e.num}
                className={`expertise__item${active === i ? ' expertise__item--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="expertise__num">{e.num}</span>
                <span className="expertise__name">{e.tag}</span>
                <span className="expertise__arrow">→</span>
              </button>
            ))}
          </div>

          <div className="expertise__detail">
            {expertises.map((e, i) => (
              <div
                key={e.num}
                className={`expertise__panel${active === i ? ' expertise__panel--active' : ''}`}
                aria-hidden={active !== i}
              >
                <div className="expertise__panel-video">
                  <video
                    ref={el => { videoRefs.current[i] = el }}
                    src={e.video}
                    muted loop playsInline
                    className="expertise__video"
                  />
                </div>
                <p className="expertise__panel-num">{e.num}</p>
                <h3 className="expertise__panel-title">
                  {e.title.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h3>
                <p className="expertise__panel-body">{e.body}</p>
                <a href={e.link} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                  {e.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection;