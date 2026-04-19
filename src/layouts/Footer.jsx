import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Expertises', href: '/expertises' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    type: 'linkedin',
    href: 'https://www.linkedin.com/company/gethypednl/',
    label: 'LinkedIn',
  },
  {
    type: 'tiktok',
    href: 'https://www.tiktok.com/@gethyped.nl',
    label: 'TikTok',
  },
  {
    type: 'instagram',
    href: 'https://www.instagram.com/gethyped.nl/',
    label: 'Instagram',
  },
  {
    type: 'youtube',
    href: 'https://www.youtube.com/@gethypednl',
    label: 'YouTube',
  },
];

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5C1.9 5.5 1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5C4.1 1.5 4.98 2.4 4.98 3.5ZM.5 22.5H5.5V7.5H.5V22.5ZM8.5 7.5H13.2V9.4H13.3C13.8 8.5 15 7.4 16.8 7.4C20.8 7.4 21.5 9.9 21.5 13.4V22.5H16.5V14.3C16.5 12.4 16.4 9.9 13.7 9.9C11 9.9 10.6 11.8 10.6 14.1V22.5H5.6V7.5H8.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'tiktok':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2 5.8C18.5 5.7 17.9 5.6 17.3 5.6C16.9 5.6 16.7 5.6 16.3 5.6C15.8 5.6 15.4 5.6 15 5.7V13.1C14.7 12.9 14.2 12.8 13.7 12.8C11.9 12.8 10.6 13.9 10.6 15.8C10.6 17.7 12 18.8 13.8 18.8C15.4 18.8 16.8 17.9 17.1 16.4H18.9C18.6 19.1 16.3 21.1 13.6 21.1C10.3 21.1 7.5 18.4 7.5 15.1C7.5 11.9 10.3 9.1 13.6 9.1C13.8 9.1 14 9.1 14.3 9.1V5.8H19.2V5.8Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 7.2C9.4 7.2 7.2 9.4 7.2 12C7.2 14.6 9.4 16.8 12 16.8C14.6 16.8 16.8 14.6 16.8 12C16.8 9.4 14.6 7.2 12 7.2ZM12 15.2C10.3 15.2 9 13.9 9 12.2C9 10.5 10.3 9.2 12 9.2C13.7 9.2 15 10.5 15 12.2C15 13.9 13.7 15.2 12 15.2Z"
            fill="currentColor"
          />
          <path
            d="M17.9 3.6H6.1C3.9 3.6 2.1 5.4 2.1 7.6V16.4C2.1 18.6 3.9 20.4 6.1 20.4H17.9C20.1 20.4 21.9 18.6 21.9 16.4V7.6C21.9 5.4 20.1 3.6 17.9 3.6ZM19.5 16.4C19.5 17.8 18.3 19 16.9 19H7.1C5.7 19 4.5 17.8 4.5 16.4V7.6C4.5 6.2 5.7 5 7.1 5H16.9C18.3 5 19.5 6.2 19.5 7.6V16.4Z"
            fill="currentColor"
          />
          <path
            d="M18.7 6.8C18.7 7.4 18.2 7.9 17.6 7.9C17 7.9 16.5 7.4 16.5 6.8C16.5 6.2 17 5.7 17.6 5.7C18.2 5.7 18.7 6.2 18.7 6.8Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5953 8.42627C28.4431 7.88117 28.1529 7.38456 27.7526 6.98448C27.3523 6.58441 26.8555 6.2944 26.3103 6.14252C24.2641 5.59377 16.0303 5.59377 16.0303 5.59377C16.0303 5.59377 7.81658 5.58252 5.74908 6.14252C5.20389 6.2944 4.70713 6.58441 4.30683 6.98448C3.90654 7.38456 3.61626 7.88117 3.46408 8.42627C3.07592 10.5213 2.88467 12.6481 2.89283 14.7788C2.88556 16.9011 3.07639 19.0194 3.46283 21.1063C3.61475 21.652 3.90505 22.1492 4.3056 22.5497C4.70615 22.9503 5.20337 23.2406 5.74908 23.3925C7.79283 23.9425 16.0303 23.9425 16.0303 23.9425C16.0303 23.9425 24.2428 23.9425 26.3103 23.3925C26.8555 23.2406 27.3523 22.9506 27.7526 22.5506C28.1529 22.1505 28.4431 21.6539 28.5953 21.1088C28.9737 19.0211 29.157 16.9028 29.1428 14.7813C29.1584 12.6505 28.9751 10.523 28.5953 8.42627ZM13.4016 18.7075V10.8325L20.2553 14.7738L13.4016 18.7075Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
};

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-title">Let's Get Hyped!</h2>
      <div className="flex w-full justify-center align-items-center gap-4">
        <a href="mailto:info@gethyped.nl" className="footer__button-default-mail">
          <div className="footer__button-default__inner">
            <span className="footer__button-default__text">Mail ons direct</span>
            <span className="footer__button-default__mail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
            </span>
          </div>
        </a>
        <a href="mailto:info@gethyped.nl" className="footer__button-default-fire">
          <div className="footer__button-default__inner">
            <span className="footer__button-default__text">Get Results</span>
            <span className="footer__button-default__fire-icon">🔥</span>
          </div>
        </a>
      </div>
      <div className="footer-content ">
        <div className="footer__info flex w-full justify-end">
          <div className="footer__links flex">
            <div className="footer__links-content ">
              <div className="footer__nav">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="footer__nav-link">
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="footer__social">
                <span className="footer__social-label">Follow us</span>
                <div className="footer__social-list">
                  {socialLinks.map((social) => (
                    <a
                      key={social.type}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="footer__social-link"
                    >
                      <SocialIcon type={social.type} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer__contact gap-4">
              <div className="footer__contact-col">
                <div className="footer__label">Contact</div>
                <a href="mailto:info@gethyped.nl" className="footer__link">
                  info@gethyped.nl
                </a>
                <a href="tel:+31615337496" className="footer__link">
                  +31 6 1533 7496
                </a>
              </div>

              <div className="footer__contact-col">
                <div className="footer__label mt-4">Adres</div>
                <a
                  href="https://www.google.nl/maps/dir/52.2173687,6.866555/Beltrumsestraat+6,+7141+AL+Groenlo/@52.0427183,6.6137857,17z/data=!4m18!1m8!3m7!1s0x47b8772ecd81aedd:0x7c0d9a22590807d9!2sBeltrumsestraat+6,+7141+AL+Groenlo!3b1!8m2!3d52.0427183!4d6.6163606!16s%2Fg%2F11b8zbd_sy!4m8!1m1!4e1!1m5!1m1!1s0x47b8772ecd81aedd:0x7c0d9a22590807d9!2m2!1d6.6163606!2d52.0427183?entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Beltrumsestraat 6,
                  <br />
                  7141 AL Groenlo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex footer__bottom">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <div className="flex footer__bottom-content justify-end w-full">
            <div className="footer__copyright">© 2025 Get Hyped</div>

            <a
              href="https://dylanbrouwer.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__design"
            >
              © Design by Dylan
            </a>
            <a href="#" className="">
              Privacyvoorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
