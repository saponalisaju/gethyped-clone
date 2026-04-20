import { useState, useRef, useEffect } from 'react';
import './SectionExpertise.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BCDN = 'https://gethyped.b-cdn.net';

const expertises = [
  {
    num: '01',
    tag: 'Social strategy',
    title: 'Slimme strategie.\nSterke start.',
    body: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    video: `${BCDN}/MD/MD%20Loop%20Schaken.mp4`,
    color: '#EAE4D8',
  },
  {
    num: '02',
    tag: 'Content creation',
    title: 'Content die opvalt\nen raakt.',
    body: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    video: `${BCDN}/Expertises/Loop%20BTS%20comp.mp4`,
    color: '#1fead1',
  },
  {
    num: '03',
    tag: 'Activation',
    title: 'Zichtbaar waar en\nwanneer het telt.',
    body: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    video: `${BCDN}/Over%20de%20Top/overdetop-loop.mp4`,
    color: '#FF4D4D',
  },
  {
    num: '04',
    tag: 'Data',
    title: 'Inzichten die impact maken.',
    body: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    video: `${BCDN}/Expertises/Data%20comp.mp4`,
    color: '#4CAF50',
  },
];

function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const panelsRef = useRef([]);
  const videoRefs = useRef([]);

  useGSAP(() => {
    const panels = panelsRef.current;

    gsap.set(panels, { yPercent: 100 });
    gsap.set(panels[0], { yPercent: 0 });

    const total = panels.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.expertise',
        start: 'top top',
        end: `+=${window.innerHeight * total}`,
        scrub: true,
        pin: true,

        onUpdate: (self) => {
          const index = Math.floor(self.progress * total);
          const safeIndex = Math.min(index, total - 1);

          setActive((prev) => {
            if (prev !== safeIndex) {
              console.log('ACTIVE:', safeIndex); // 👈 add this
              return safeIndex;
            }
            return prev;
          });
        },
      },
    });

    panels.forEach((panel, i) => {
      if (i === 0) return;

      tl.to(panel, {
        yPercent: 0,
        duration: 1,
        ease: 'none',
      });
    });
  }, []);

  useEffect(() => {
    const current = videoRefs.current[active];

    if (!current) return;

    // সব pause
    videoRefs.current.forEach((v, i) => {
      if (v && i !== active) {
        v.pause();
        v.currentTime = 0;
      }
    });

    // delay দিয়ে play (IMPORTANT)
    const t = setTimeout(() => {
      current
        .play()
        .then(() => {
          console.log('playing:', active);
        })
        .catch((e) => {
          console.log('play failed:', e);
        });
    }, 250);

    return () => clearTimeout(t);
  }, [active]);

  return (
    <section className="expertise position-relative min-h-screen" id="expertise">
      <div className="position-absolute">
        {expertises.map((e, i) => (
          <div key={e.num} ref={(el) => (panelsRef.current[i] = el)} className="expertise__panel">
            <div className="card" style={{ backgroundColor: e.color }}>
              <div className="left__item flex flex-col">
                <p className="expertise__head">Expertise</p>
                <h1 className="expertise__tag">{e.tag}</h1>
                <h4 className="expertise__title">{e.title}</h4>
                <p className="expertise__body">{e.body}</p>
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
              </div>
              <div className="right__item flex flex-col">
                <p className="serial__number">{e.num}</p>
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={e.video}
                  muted
                  loop
                  playsInline
                  autoPlay={false} // 👈 ensure false
                  preload="auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpertiseSection;
