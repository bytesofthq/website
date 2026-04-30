import { Link } from 'react-router-dom';
import { Code2, MessageCircle, Briefcase, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo" style={{ marginBottom: '20px', display: 'inline-flex' }}>
              <Code2 size={28} color="var(--accent-blue)" />
              ByteSoft
            </Link>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '300px' }}>
              We create powerful software products and deliver custom digital solutions that drive real growth.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><MessageCircle size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Briefcase size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="#">SaaS Platform</Link></li>
              <li><Link to="#">AI Analytics</Link></li>
              <li><Link to="#">Cloud Storage</Link></li>
              <li><Link to="#">Security Suite</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="#">Web Development</Link></li>
              <li><Link to="#">App Development</Link></li>
              <li><Link to="#">AI Integration</Link></li>
              <li><Link to="#">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.9rem' }}>
              Subscribe to get the latest updates and tech news.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Email address" 
                style={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  width: '100%',
                  outline: 'none'
                }}
              />
              <button 
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'var(--accent-blue)',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ByteSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
