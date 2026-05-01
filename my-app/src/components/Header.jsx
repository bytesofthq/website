import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X, ArrowRight } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
      background: isScrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(24px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '2px',
        width: `${scrollProgress}%`,
        background: 'var(--brand-primary)',
        transition: 'width 0.1s linear',
        boxShadow: '0 0 10px var(--brand-primary)'
      }} />

      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'white' }}>
          <div style={{
            background: 'var(--gradient-brand)',
            padding: '0.6rem',
            borderRadius: '12px',
            color: 'white',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Rocket size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>Byte<span className="text-gradient">Soft</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem'
            }}>
              {link.name}
            </Link>
          ))}
          <button className="btn-premium btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
            Work With Us <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer', color: 'white' }}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu (Simplified for now) */}
      {mobileMenuOpen && (
        <div className="glass" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }} onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;

