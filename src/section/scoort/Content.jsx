import React from "react";
const BCDN = "https://gethyped.b-cdn.net";
import "./Content.css";

const cases = [
  {
    slug: "bullit",
    title: "Bullit",
    cat: "Content creation · Social strategy",
    video: `${BCDN}/Bullit/Bullit%20%7C%20Loop.mp4`,
    thumb: "/images/work/bullit.avif",
    thumbAlt:
      "Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.",
  },
  {
    slug: "roasta",
    title: "Roasta",
    cat: "Content creation · Activation",
    video: `${BCDN}/Roasta/roasta-loop.mp4`,
    thumb: "/images/work/roasta.avif",
    thumbAlt:
      "Met to-the-point visuals brengen we de pure smaak van Jamaica over.",
  },
  {
    slug: "loco-loco",
    title: "Loco Loco",
    cat: "Social strategy · Data",
    video: `${BCDN}/Loco/loco-bites-loop.mp4`,
    thumb: "/images/work/loco-loco.avif",
    thumbAlt: "Voor Loco vertaalden we sfeer naar shorts die werken.",
  },
];

export const Content = () => {
  return (
    <div className="work__grid">
      {cases.map((c) => (
        <a
          key={c.slug}
          href={`https://www.gethyped.nl/work/${c.slug}`}
          className="case-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="case-card__thumb w-full aspect-video relative overflow-hidden bg-black">
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
              muted
              loop
              playsInline
              className="case-card__video"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
              onTouchStart={(e) => e.currentTarget.play()}
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
  );
};

<section>
  <div>
    <img
      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg"
      alt="Get Hyped Logo"
      draggable="false"
    />
    <img
      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg"
      alt="Get Hyped Logo"
      draggable="false"
    />
    <img
      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
      alt="Get Hyped Logo"
      draggable="false"
    />
    <img
      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg"
      alt="Get Hyped Logo"
      draggable="false"
    />
  </div>
</section>;
