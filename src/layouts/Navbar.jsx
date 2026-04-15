import { useState, useEffect } from 'react'

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
          <svg width="42" height="28" viewBox="0 0 42 28" fill="none" aria-hidden="true" className="navbar__logo-icon">
            <rect width="42" height="28" rx="7" fill="#FF4D00"/>
            <path d="M7 7.5h3.5v5h9v-5H23v13h-3.5v-5.2h-9V20.5H7V7.5z" fill="#fff"/>
            <rect x="26" y="7.5" width="9" height="2.6" rx="1.3" fill="#fff"/>
            <rect x="26" y="12.7" width="9" height="2.6" rx="1.3" fill="#fff"/>
            <rect x="26" y="17.9" width="9" height="2.6" rx="1.3" fill="#fff"/>
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

export default Navbar;