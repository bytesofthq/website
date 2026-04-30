// About.jsx
import { useEffect, useRef, useState } from 'react';
import { 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  HeartHandshake, 
  ShieldCheck, 
  Code2, 
  Server, 
  Cpu, 
  Cloud, 
  Users, 
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  Briefcase,
  Globe,
  Clock,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Rocket,
  Zap,
  BarChart3,
  LineChart,
  TrendingUp,
  Play,
  X
} from 'lucide-react';
import aboutVision from '../assets/about_vision.png';

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-primary: #0a0a0f;
    --bg-secondary: #0f0f15;
    --bg-card: rgba(20, 20, 30, 0.8);
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --accent-blue: #3b82f6;
    --accent-purple: #8b5cf6;
    --accent-pink: #ec4899;
    --accent-cyan: #06b6d4;
    --accent-green: #10b981;
    --gradient-1: linear-gradient(135deg, #3b82f6, #8b5cf6);
    --gradient-2: linear-gradient(135deg, #8b5cf6, #ec4899);
    --gradient-3: linear-gradient(135deg, #06b6d4, #3b82f6);
    --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    line-height: 1.6;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }
  }

  .text-gradient {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    font-family: inherit;
    position: relative;
    overflow: hidden;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .btn:hover::before {
    width: 300px;
    height: 300px;
  }

  .btn-primary {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  }

  .btn-outline {
    background: transparent;
    color: white;
    border: 2px solid rgba(59, 130, 246, 0.5);
  }

  .btn-outline:hover {
    border-color: #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
    transform: translateY(-2px);
  }

  .btn-large {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .section {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    .section {
      padding: 60px 0;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .glass {
    background: rgba(20, 20, 30, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.2);
  }

  .glowing-border {
    position: relative;
  }

  .glowing-border::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }

  .glowing-border:hover::before {
    opacity: 0.5;
  }

  .card-3d {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-3d:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  .animate-fade-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s forwards;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Hero Section */
  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.35rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
  }

  /* Timeline */
  .timeline {
    max-width: 900px;
    margin: 0 auto;
  }

  .timeline-item {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .timeline-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    flex-shrink: 0;
  }

  .timeline-content {
    flex: 1;
    padding: 2rem;
    border-radius: 16px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    .timeline-item {
      flex-direction: column;
    }
    .timeline-icon {
      margin: 0 auto;
    }
  }

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    padding: 2rem;
    border-radius: 24px;
    transition: all 0.3s;
    background: rgba(20, 20, 30, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.2);
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .feature-icon-wrapper {
    width: 64px;
    height: 64px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  /* Split Section */
  .split-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 968px) {
    .split-section {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  /* Team Grid */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .team-card {
    text-align: center;
    padding: 2rem;
    border-radius: 24px;
    transition: all 0.3s;
  }

  .team-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }

  .team-card h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .team-role {
    color: #3b82f6;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .team-bio {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
  }

  /* Value Props */
  .value-props {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .value-item {
    text-align: center;
    padding: 2rem;
  }

  .value-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  /* Footer */
  .footer {
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(10px);
    padding: 4rem 0 2rem;
    margin-top: 4rem;
    border-top: 1px solid rgba(59, 130, 246, 0.2);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }

  .footer-brand p {
    color: var(--text-secondary);
    margin: 1rem 0;
    line-height: 1.6;
  }

  .footer-social {
    display: flex;
    gap: 1rem;
  }

  .footer-social a {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--text-secondary);
    transition: all 0.3s;
  }

  .footer-social a:hover {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    transform: translateY(-3px);
  }

  .footer-links h4, .footer-contact h4 {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .footer-links ul, .footer-contact ul {
    list-style: none;
  }

  .footer-links li, .footer-contact li {
    margin-bottom: 0.75rem;
  }

  .footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
  }

  .footer-links a:hover {
    color: #3b82f6;
  }

  .footer-contact li {
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 640px) {
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }

  .footer-bottom-links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-bottom-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s;
  }

  .footer-bottom-links a:hover {
    color: #3b82f6;
  }

  /* Badge */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 20px;
    color: #3b82f6;
    margin-bottom: 24px;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const teamMembers = [
    { name: 'David Chen', role: 'Founder & CEO', bio: '15+ years in enterprise software, previously led engineering at Fortune 500 companies.', image: 'DC' },
    { name: 'Sarah Williams', role: 'CTO', bio: 'Architecture expert with deep expertise in scalable cloud infrastructure.', image: 'SW' },
    { name: 'Marcus Rodriguez', role: 'Head of Product', bio: 'Passionate about bridging business goals with technical excellence.', image: 'MR' },
    { name: 'Emily Thompson', role: 'Lead Engineer', bio: 'Full-stack specialist focused on delivering performant user experiences.', image: 'ET' }
  ];

  const companyValues = [
    { icon: <Target size={32} />, title: 'Purpose-Driven', desc: 'We solve real business challenges, not just technical ones.' },
    { icon: <HeartHandshake size={32} />, title: 'Partnership Mentality', desc: 'Your success is our success. We grow together.' },
    { icon: <ShieldCheck size={32} />, title: 'Uncompromising Quality', desc: 'Enterprise-grade standards in everything we deliver.' },
    { icon: <TrendingUp size={32} />, title: 'Continuous Improvement', desc: 'Always learning, always evolving, always delivering better.' }
  ];

  const milestones = [
    { year: '2020', title: 'Foundation', desc: 'Started with a vision to transform how businesses leverage technology.' },
    { year: '2021', title: 'First Product Launch', desc: 'Released our flagship SaaS platform to critical acclaim.' },
    { year: '2022', title: 'Global Expansion', desc: 'Opened offices in three continents, serving clients worldwide.' },
    { year: '2023', title: 'Enterprise Recognition', desc: 'Recognized as a leading technology partner by industry analysts.' },
    { year: '2024', title: 'Innovation Hub', desc: 'Launched our dedicated research and development center.' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="animate-fade-up badge">
                <Sparkles size={16} /> Our Story
              </div>
              <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
                We Build Technology That <span className="text-gradient">Solves Real Problems</span>
              </h1>
              <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
                ByteSoft is not just a service company — we are a product-driven innovation partner dedicated to transforming ideas into scalable realities.
              </p>
            </div>
          </div>
        </section>

        {/* Company Stats Banner */}
        <section className="section container">
          <div className="glass glowing-border card-3d" style={{ padding: '3rem', borderRadius: '24px' }}>
            <div className="stats-grid">
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number text-gradient">50+</div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number text-gradient">99.9%</div>
                <div className="stat-label">Uptime Record</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number text-gradient">24/7</div>
                <div className="stat-label">Support Coverage</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number text-gradient">4.9★</div>
                <div className="stat-label">Client Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section container reveal">
          <div className="glass glowing-border card-3d" style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '80px 40px',
            textAlign: 'center',
            borderRadius: '24px'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: aboutVision ? `url(${aboutVision})` : 'linear-gradient(135deg, #1e1e2e, #0a0a0f)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
              zIndex: -1
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95), rgba(10, 10, 15, 0.85))',
              zIndex: -1
            }}></div>
            <Target size={48} color="#3b82f6" style={{ margin: '0 auto 24px' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, maxWidth: 900, margin: '0 auto', lineHeight: 1.3 }}>
              "To build impactful digital products used globally, bridging the gap between complex engineering and elegant user experiences."
            </h2>
            <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              — Our founding principle since day one
            </p>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="section container">
          <div className="section-header reveal">
            <h2 className="section-title">The ByteSoft Journey</h2>
            <p className="section-subtitle">How we started and where we are heading.</p>
          </div>

          <div className="timeline">
            {[
              { 
                phase: 'The Spark', 
                title: 'Why We Started', 
                desc: 'Frustrated by agencies that over-promised and under-delivered, we founded ByteSoft to bring enterprise-level engineering to businesses of all sizes.' 
              },
              { 
                phase: 'The Evolution', 
                title: 'Product-Led Growth', 
                desc: 'We began building our own internal tools to optimize our workflows, which quickly evolved into standalone platforms trusted by industry leaders.' 
              },
              { 
                phase: 'The Mission', 
                title: 'Solving Real-World Problems', 
                desc: 'Today, our mission remains unchanged: leveraging scalable technology to eliminate inefficiencies and drive measurable returns for our partners.' 
              }
            ].map((item, index) => (
              <div className="timeline-item reveal" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="timeline-icon">{index + 1}</div>
                <div className="timeline-content glass card-3d glowing-border">
                  <div style={{ color: '#3b82f6', fontWeight: 700, marginBottom: '8px' }}>{item.phase}</div>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="section container">
          <div className="section-header reveal">
            <h2 className="section-title">The ByteSoft Difference</h2>
            <p className="section-subtitle">We don't just write code; we engineer success.</p>
          </div>

          <div className="value-props">
            {companyValues.map((value, index) => (
              <div key={index} className="value-item glass glowing-border card-3d reveal" style={{ transitionDelay: `${index * 0.1}s`, borderRadius: '24px' }}>
                <div className="value-icon">{value.icon}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{value.title}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach & Expertise */}
        <section className="section container">
          <div className="split-section">
            <div className="reveal">
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px', textAlign: 'left' }}>Our Engineering Approach</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="glass" style={{ padding: '28px', borderLeft: '4px solid #3b82f6', borderRadius: '16px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', marginBottom: '12px' }}>
                    <Lightbulb size={24} color="#3b82f6" /> Problem-First Thinking
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>We analyze business constraints before writing a single line of code, ensuring every solution addresses real needs.</p>
                </div>
                <div className="glass" style={{ padding: '28px', borderLeft: '4px solid #3b82f6', borderRadius: '16px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', marginBottom: '12px' }}>
                    <Code2 size={24} color="#3b82f6" /> Clean Architecture
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>We build modular, maintainable systems that don't accrue technical debt, ensuring long-term sustainability.</p>
                </div>
                <div className="glass" style={{ padding: '28px', borderLeft: '4px solid #3b82f6', borderRadius: '16px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', marginBottom: '12px' }}>
                    <Server size={24} color="#3b82f6" /> Scalable Systems
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Infrastructure designed to handle your first 100 users and your next million without compromise.</p>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px', textAlign: 'left' }}>Technology Expertise</h2>
              <div className="glass card-3d glowing-border" style={{ padding: '40px', borderRadius: '24px', height: '100%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', margin: '0 auto 16px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Code2 size={40} color="#3b82f6" />
                    </div>
                    <h4>Frontend</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '8px' }}>React, Vue, Next.js</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', margin: '0 auto 16px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Server size={40} color="#8b5cf6" />
                    </div>
                    <h4>Backend</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '8px' }}>Node.js, Python, Go</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', margin: '0 auto 16px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Cloud size={40} color="#06b6d4" />
                    </div>
                    <h4>Cloud</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '8px' }}>AWS, Azure, GCP</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', margin: '0 auto 16px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Cpu size={40} color="#ec4899" />
                    </div>
                    <h4>Infrastructure</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '8px' }}>Kubernetes, Terraform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section container reveal">
          <div className="section-header">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">The experts behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card glass glowing-border card-3d reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="team-image">{member.image}</div>
                <h4>{member.name}</h4>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="section container">
          <div className="glass bg-gradient card-3d glowing-border" style={{ padding: '60px 40px', borderRadius: '24px' }}>
            <div className="section-header">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle">Key milestones that shaped our company</p>
            </div>
            <div style={{ position: 'relative', padding: '2rem 0' }}>
              {milestones.map((milestone, index) => (
                <div key={index} style={{ display: 'flex', marginBottom: '2rem', position: 'relative' }}>
                  <div style={{ minWidth: '120px', textAlign: 'right', paddingRight: '2rem' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6' }}>{milestone.year}</div>
                  </div>
                  <div style={{ flex: 1, paddingLeft: '2rem', borderLeft: '2px solid rgba(59, 130, 246, 0.3)' }}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{milestone.title}</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section container reveal">
          <div className="glass card-3d glowing-border" style={{ padding: '60px', textAlign: 'center', borderRadius: '24px' }}>
            <Users size={48} color="#8b5cf6" style={{ margin: '0 auto 24px' }} />
            <h2 className="section-title">Built by Passionate Professionals</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>Our culture is rooted in core pillars that guide every line of code we write.</p>
            
            <div className="stats-grid">
              <div>
                <div className="stat-number text-gradient" style={{ fontSize: '2rem' }}>Transparency</div>
                <div className="stat-label">Open communication at every level</div>
              </div>
              <div>
                <div className="stat-number text-gradient" style={{ fontSize: '2rem' }}>Innovation</div>
                <div className="stat-label">Pushing boundaries daily</div>
              </div>
              <div>
                <div className="stat-number text-gradient" style={{ fontSize: '2rem' }}>Reliability</div>
                <div className="stat-label">Consistent delivery excellence</div>
              </div>
              <div>
                <div className="stat-number text-gradient" style={{ fontSize: '2rem' }}>Excellence</div>
                <div className="stat-label">Quality without compromise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Certifications */}
        <section className="section container reveal">
          <div className="glass" style={{ padding: '60px', textAlign: 'center', borderRadius: '24px' }}>
            <h2 className="section-title">Trusted Partnerships</h2>
            <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Proud to work with industry leaders</p>
            <div className="stats-grid">
              <div>
                <Award size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
                <div className="stat-label">AWS Advanced Partner</div>
              </div>
              <div>
                <ShieldCheck size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
                <div className="stat-label">ISO 27001 Certified</div>
              </div>
              <div>
                <Globe size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
                <div className="stat-label">Global Operations</div>
              </div>
              <div>
                <Briefcase size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
                <div className="stat-label">Enterprise Ready</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section container reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="final-cta" style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            padding: '80px 40px',
            borderRadius: '32px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Start Your Journey With <span className="text-gradient">ByteSoft</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '40px', fontSize: '1.2rem' }}>Let's build the future, together.</p>
            <button className="btn btn-primary" style={{ padding: '20px 48px', fontSize: '1.2rem', borderRadius: '12px' }}>
              Partner With Us <ArrowRight size={24} />
            </button>
          </div>
        </section>

        {/* Footer */}
        
      </div>
    </>
  );
};

export default About;