import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - lastScrollY.current) < 10) return;

      if (currentY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${show ? 'nav--show' : 'nav--hide'}`}>
      <div className="navbar">
        {/* LOGO */}
        <a href="/" className="navbar__brand">
          <img src={logo} alt="Get Hyped" className="logo" />
        </a>

        {/* CENTER MENU (DESKTOP) */}
        <div className="navbar__menu">
          <a className="nav__link-menu" href="#expertises">
            Expertises
          </a>
          <a className="nav__link-menu" href="#work">
            Work
          </a>
          <a className="nav__link-menu" href="#about">
            About
          </a>
          <a className="nav__link-menu" href="#contact">
            Contact
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav__right">
          {/* CTA BUTTON */}
          <a href="mailto:info@gethyped.nl" className="btn-default">
            <span>Get Results 🔥</span>
          </a>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              document.body.classList.toggle('no-scroll');
            }}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu__items">
          <a href="#expertises" onClick={() => setMenuOpen(false)}>
            Expertises
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <a href="mailto:info@gethyped.nl" className="nav__button-default-fire">
          <div className="nav__button-default__inner">
            <span className="nav__button-default__text">Get Results</span>
            <span className="nav__button-default__fire-icon">🔥</span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
