import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`site-header${isScrolled ? ' site-header--scrolled' : ''}${mobileMenuOpen ? ' site-header--menu-open' : ''}`}
      role="navigation"
      aria-label="Main"
    >
      {/* Scroll Progress Bar */}
      <div
        className="site-header-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />

      {/* Mobile: backdrop + drawer render first so bar (below) stacks on top */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="site-header-menu-backdrop"
              className="site-header-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-hidden
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              key="site-header-drawer"
              id="site-header-drawer"
              className="site-header-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="site-header-drawer-scroll">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="site-header-drawer-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn-premium btn-primary site-header-drawer-cta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work With Us <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="container site-header-inner">
        <Link to="/" className="site-header-logo">
          <span>Bytesoft</span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav site-header-desktop">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link site-header-nav-link">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-premium btn-primary site-header-cta">
            Work With Us <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="mobile-toggle site-header-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="site-header-drawer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;

