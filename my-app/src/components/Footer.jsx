import { Link } from 'react-router-dom';
import { Code, Globe2, Mail, MapPin, Phone, SendHorizontal } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const subscribe = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') ?? '').trim();
    const body = email
      ? `Please add this address to your newsletter:\n${email}`
      : 'Please add me to the newsletter.';
    window.location.href = `mailto:hello@bytesoft.com?subject=${encodeURIComponent(
      'Newsletter signup'
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="container">
          <div className="site-footer-main">
            <div className="site-footer-col site-footer-col--brand">
              <Link to="/" className="site-footer-logo">
                Bytesoft
              </Link>
              <p className="site-footer-lede">
                We design and ship web products, integrations, and cloud-ready systems—from first
                prototype to production.
              </p>
              <div className="site-footer-social" aria-label="Social links">
                <a
                  className="site-footer-social-btn"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Globe2 size={18} strokeWidth={2} aria-hidden />
                </a>
                <a
                  className="site-footer-social-btn"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Code size={18} strokeWidth={2} aria-hidden />
                </a>
                <a className="site-footer-social-btn" href="mailto:hello@bytesoft.com" aria-label="Email">
                  <Mail size={18} strokeWidth={2} aria-hidden />
                </a>
              </div>
            </div>

            <nav className="site-footer-col" aria-labelledby="footer-nav-heading">
              <h2 id="footer-nav-heading" className="site-footer-heading">
                Navigate
              </h2>
              <ul className="site-footer-list">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Services', to: '/services' },
                  { label: 'Products', to: '/products' },
                  { label: 'About', to: '/about' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="site-footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="site-footer-col" aria-labelledby="footer-company-heading">
              <h2 id="footer-company-heading" className="site-footer-heading">
                Company
              </h2>
              <ul className="site-footer-list">
                <li>
                  <Link to="/contact" className="site-footer-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="site-footer-link">
                    What we deliver
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="site-footer-link">
                    Case studies
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="site-footer-col site-footer-col--contact">
              <h2 className="site-footer-heading">Say hello</h2>
              <ul className="site-footer-contact">
                <li>
                  <MapPin size={18} className="site-footer-contact-icon" aria-hidden />
                  <span>
                    Tech Tower, IT Park
                    <br />
                    Lucknow, UP 226010
                  </span>
                </li>
                <li>
                  <Phone size={18} className="site-footer-contact-icon" aria-hidden />
                  <a href="tel:+915550123456" className="site-footer-contact-link">
                    +91 (555) 012-3456
                  </a>
                </li>
                <li>
                  <Mail size={18} className="site-footer-contact-icon" aria-hidden />
                  <a href="mailto:hello@bytesoft.com" className="site-footer-contact-link">
                    hello@bytesoft.com
                  </a>
                </li>
              </ul>

              <form className="site-footer-newsletter" onSubmit={subscribe}>
                <label htmlFor="footer-newsletter-email" className="visually-hidden">
                  Email for updates
                </label>
                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  className="site-footer-newsletter-input"
                />
                <button type="submit" className="site-footer-newsletter-btn" aria-label="Subscribe">
                  <SendHorizontal size={18} aria-hidden />
                </button>
              </form>
              <p className="site-footer-newsletter-hint">We’ll only use this to share product updates.</p>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p className="site-footer-copy">
              &copy; {year} ByteSoft. All rights reserved.
            </p>
            <div className="site-footer-legal">
              <a
                href="mailto:hello@bytesoft.com?subject=Privacy%20policy"
                className="site-footer-legal-link"
              >
                Privacy
              </a>
              <a
                href="mailto:hello@bytesoft.com?subject=Terms%20of%20service"
                className="site-footer-legal-link"
              >
                Terms
              </a>
              <a href="mailto:hello@bytesoft.com?subject=Cookies%20policy" className="site-footer-legal-link">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
