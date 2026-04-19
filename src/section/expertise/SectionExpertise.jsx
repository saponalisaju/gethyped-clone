import { useState, useRef } from 'react';
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
    body: 'We duiken diep in jouw merk, doelgroep en doelen.',
    video: `${BCDN}/MD/MD%20Loop%20Schaken.mp4`,
    color: '#EAE4D8',
  },
  {
    num: '02',
    tag: 'Content creation',
    title: 'Content die opvalt\nen raakt.',
    body: 'We maken content die blijft hangen.',
    video: `${BCDN}/Expertises/Loop%20BTS%20comp.mp4`,
    color: '#000',
  },
  {
    num: '03',
    tag: 'Activation',
    title: 'Zichtbaar waar en\nwanneer het telt.',
    body: 'We verspreiden content strategisch.',
    video: `${BCDN}/Over%20de%20Top/overdetop-loop.mp4`,
    color: '#FF4D4D',
  },
  {
    num: '04',
    tag: 'Data',
    title: 'Inzichten die impact maken.',
    body: 'We sturen op data en performance.',
    video: `${BCDN}/Expertises/Data%20comp.mp4`,
    color: '#4CAF50',
  },
];

function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const stackRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.expertise',
      start: 'top top',
      end: `button top`,
      pin: true,
      scrub: 1,
      ease: 'linear',
      onUpdate: (self) => {
        const index = Math.floor(self.progress * expertises.length);

        setActive(Math.min(index, expertises.length - 1));
      },
    });
  }, []);

  return (
    <section className="expertise position-relative min-h-screen" id="expertise">
      <div className="position-absolute">
        {expertises.map((e, i) => (
          <div key={e.num} className={`expertise__panel ${active === i ? 'active' : ''}`}>
            <div className="card" style={{ backgroundColor: e.color }}>
              <p>
                {e.num} / {e.tag}
              </p>
              <h2>{e.title}</h2>
              <p>{e.body}</p>

              <video src={e.video} muted loop playsInline autoPlay={active === i} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpertiseSection;
