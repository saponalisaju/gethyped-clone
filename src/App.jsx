import { useState, useEffect, useRef } from 'react'
import './App.css'

/* ─── Navbar ──────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo" aria-label="Get Hyped">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect width="36" height="36" rx="8" fill="#FF4D00"/>
            <path d="M10 11h4v5.5h8V11h4v14h-4v-5.5h-8V25h-4V11z" fill="#ffffff"/>
          </svg>
          <span>Get Hyped</span>
        </a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <li><a href="#expertises" onClick={() => setMenuOpen(false)}>Expertises</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <a href="mailto:info@gethyped.nl" className="btn btn--accent navbar__cta">
          Get Hyped
        </a>

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

/* ─── Hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-text" aria-hidden="true">HYPED</div>
      <div className="container">
        <div className="hero__tag">Content bureau</div>
        <h1 className="hero__headline">
          Klaar met gokken op content{' '}
          <em>die niets oplevert?</em>
        </h1>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">10M<sup>+</sup></span>
            <p className="hero__stat-label">Organische views</p>
            <p className="hero__stat-sub">Groei door slimme content</p>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">30<sup>+</sup></span>
            <p className="hero__stat-label">Merken geholpen</p>
            <p className="hero__stat-sub">Van start-up tot multinational</p>
          </div>
        </div>

        <div className="hero__body">
          <p className="hero__lead">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt
            en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </p>
          <p className="hero__text">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
            Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
            Nooit meer content zonder resultaat.
          </p>
          <a href="#about" className="btn btn--accent">Leer ons kennen</a>
        </div>
      </div>
    </section>
  )
}

/* ─── Expertise Section ───────────────────────────────── */
const expertises = [
  {
    num: '01',
    tag: 'Social strategy',
    title: 'Slimme strategie.\nSterke start.',
    body: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    link: 'https://www.gethyped.nl/expertises/social-strategie',
    linkText: 'Meer over social strategie',
  },
  {
    num: '02',
    tag: 'Content creation',
    title: 'Content die opvalt\nen raakt.',
    body: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    link: 'https://www.gethyped.nl/expertises/content-creatie',
    linkText: 'Meer over content creatie',
  },
  {
    num: '03',
    tag: 'Activation',
    title: 'Zichtbaar waar en\nwanneer het telt.',
    body: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    link: 'https://www.gethyped.nl/expertises/activatie',
    linkText: 'Meer over activatie',
  },
  {
    num: '04',
    tag: 'Data',
    title: 'Inzichten die\nimpact maken.',
    body: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    link: 'https://www.gethyped.nl/expertises/data',
    linkText: 'Meer over data',
  },
]

function ExpertiseSection() {
  const [active, setActive] = useState(0)

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

/* ─── Work Section ────────────────────────────────────── */
const cases = [
  {
    slug: 'bullit',
    title: 'Bullit',
    cat: 'Content creation · Social strategy',
    color: '#1A1A2E',
    emoji: '⚡',
  },
  {
    slug: 'roasta',
    title: 'Roasta',
    cat: 'Content creation · Activation',
    color: '#1A0D00',
    emoji: '☕',
  },
  {
    slug: 'loco-loco',
    title: 'Loco Loco',
    cat: 'Social strategy · Data',
    color: '#0D1A0D',
    emoji: '🌶️',
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
              <div className="case-card__thumb" style={{ background: c.color }}>
                <span className="case-card__emoji">{c.emoji}</span>
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

/* ─── Brands Marquee ──────────────────────────────────── */
const brands = [
  'Bullit', 'Roasta', 'Loco Loco', 'Red Bull', 'Nike', 'Heineken',
  'Albert Heijn', 'Jumbo', 'Coolblue', 'Picnic', 'Booking.com', 'HEMA',
  'Rituals', 'Bol.com', 'ING', 'ABN AMRO', 'Vodafone', 'T-Mobile',
  'KPN', 'Randstad', 'Philips', 'ASML', 'Shell', 'Unilever',
]

function BrandsSection() {
  const row1 = brands.slice(0, 12)
  const row2 = brands.slice(12)

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-tag">Partners</div>
        <h2 className="section-title">These brands got hyped.</h2>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee">
          {[...row1, ...row1].map((b, i) => (
            <span key={i} className="marquee__item">{b}</span>
          ))}
        </div>
        <div className="marquee marquee--reverse">
          {[...row2, ...row2].map((b, i) => (
            <span key={i} className="marquee__item">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Section ─────────────────────────────────────── */
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
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="Get Hyped">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#FF4D00"/>
                <path d="M10 11h4v5.5h8V11h4v14h-4v-5.5h-8V25h-4V11z" fill="#ffffff"/>
              </svg>
              <span>Get Hyped</span>
            </a>
            <p className="footer__tagline">Get Noticed. Get Results.</p>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Navigatie</p>
              <ul>
                <li><a href="#expertises">Expertises</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Volg ons</p>
              <ul>
                <li><a href="https://www.linkedin.com/company/gethypednl/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><a href="https://www.instagram.com/gethyped.nl/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.youtube.com/@gethypednl" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Contact</p>
              <ul>
                <li><a href="mailto:info@gethyped.nl">info@gethyped.nl</a></li>
                <li><a href="tel:+31615337496">+31 6 1533 7496</a></li>
              </ul>
              <p className="footer__nav-heading footer__nav-heading--mt">Adres</p>
              <p className="footer__address">
                Beltrumsestraat 6<br />
                7141 AL Groenlo
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2025 Get Hyped</p>
          <p className="footer__design">
            <a href="https://dylanbrouwer.design/" target="_blank" rel="noopener noreferrer">
              © Design by Dylan
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExpertiseSection />
        <WorkSection />
        <BrandsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
