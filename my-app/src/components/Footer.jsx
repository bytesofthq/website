import { Link } from 'react-router-dom';
import { MessageCircle, Briefcase, Globe, Mail, Camera, Users, Code, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: '4rem', marginBottom: '4rem' }}>
          <div className="footer-col">
            <Link to="/" style={{ textDecoration: 'none', color: 'white', marginBottom: '1.5rem', display: 'inline-block' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>Bytesoft</span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Engineering the next generation of digital products and services for startups and enterprises worldwide. We turn complex ideas into scalable reality.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Camera, Users, Code].map((Icon, i) => (
                <a key={i} href="#" style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', 
                  transition: 'all 0.3s' 
                }} onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'var(--brand-primary)'; }} 
                   onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About Us', 'Our Process', 'Case Studies', 'Careers'].map(item => (
                <li key={item} style={{ marginBottom: '1rem' }}>
                  <Link to="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--brand-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Help Center', 'API Docs', 'Community', 'Contact Us'].map(item => (
                <li key={item} style={{ marginBottom: '1rem' }}>
                  <Link to="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--brand-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--brand-primary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Tech Tower, IT Park, <br/>Lucknow, UP 226010</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} color="var(--brand-primary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>+91 (555) 012-3456</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={20} color="var(--brand-primary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>hello@bytesoft.com</span>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <input 
                type="email" 
                placeholder="Join Newsletter" 
                style={{ background: 'transparent', border: 'none', color: 'white', padding: '8px 12px', outline: 'none', flex: 1, fontSize: '0.9rem' }}
              />
              <button className="btn-premium btn-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.8rem' }}>Join</button>
            </div>
          </div>
        </div>
        
        <div style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} ByteSoft. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <Link to="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>Privacy Policy</Link>
            <Link to="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>Terms of Service</Link>
            <Link to="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


