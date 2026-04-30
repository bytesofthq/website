import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Products', 'Services', 'Contact'];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: isScrolled ? '0.75rem 0' : '1rem 0',
      background: isScrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(59, 130, 246, 0.2)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'white' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            padding: '0.5rem',
            borderRadius: '12px',
            color: 'white'
          }}>
            <Rocket size={28} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>Byte<span className="text-gradient">Soft</span></span>
        </Link>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }} className="nav-links">
          {navLinks.map((link, index) => (
            <Link key={index} to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.3s'
            }} onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              {link}
            </Link>
          ))}
          <button className="btn btn-primary btn-small">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
