/* ─── Footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="Get Hyped">
              <svg width="38" height="25" viewBox="0 0 42 28" fill="none" aria-hidden="true">
                <rect width="42" height="28" rx="7" fill="#FF4D00"/>
                <path d="M7 7.5h3.5v5h9v-5H23v13h-3.5v-5.2h-9V20.5H7V7.5z" fill="#fff"/>
                <rect x="26" y="7.5" width="9" height="2.6" rx="1.3" fill="#fff"/>
                <rect x="26" y="12.7" width="9" height="2.6" rx="1.3" fill="#fff"/>
                <rect x="26" y="17.9" width="9" height="2.6" rx="1.3" fill="#fff"/>
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

export default Footer;