import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${show ? "nav--show" : "nav--hide"}`}>
      <div className="navbar">
        {/* LOGO */}
        <a href="/">
          <img src={logo} alt="Get Hyped" className="logo" />
        </a>

        {/* MENU */}
        <div className={`navbar__menu ${menuOpen ? "open" : ""}`}>
          <a
            className="button-color-smooth"
            href="#expertises"
            onClick={() => setMenuOpen(false)}
          >
            <span className="button-color-smooth__inner">Expertises</span>
          </a>

          <a
            className="button-color-smooth"
            href="#work"
            onClick={() => setMenuOpen(false)}
          >
            <span className="button-color-smooth__inner">Work</span>
          </a>

          <a
            className="button-color-smooth"
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            <span className="button-color-smooth__inner">About</span>
          </a>

          <a
            className="button-color-smooth"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            <span className="button-color-smooth__inner">Contact</span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav__right">
          <a href="mailto:info@gethyped.nl" className="btn-default is-nav">
            <div className="button-default__inner">
              <span className="button-default__text">Get Results</span>
              <span className="button-default__icon">🔥</span>
            </div>
          </a>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
