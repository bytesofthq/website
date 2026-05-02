import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TerminalDemo } from '../components/TerminalDemo';
import { SERVICES_CATALOG } from '../data/servicesCatalog';
import { 
  Rocket, Code, Cloud, Smartphone, Bot, BarChart3, Globe, Zap, 
  ShieldCheck, Users, ArrowRight, CheckCircle2, ChevronRight, Play, 
  Star, Bus, School, Building2, ShoppingCart, HeartPulse, Database,
  Layout, Sparkles, Layers, Cpu, Globe2, Lock, Terminal, GitBranch,
  MousePointer2, Camera, Search, Monitor, Award, ThumbsUp, Clock,
  Headphones, TrendingUp, Briefcase, Mail, Phone, MapPin, 
  Globe as Facebook, Globe as Twitter, Users as Linkedin, Camera as Instagram, Code as Github, 
  Quote, MailOpen, FileCode,
  Truck, Headset, Shield, Zap as ZapFast, Leaf, Coffee, Gift
} from 'lucide-react';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({ projects: 0, clients: 0, countries: 0, satisfaction: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const heroContent = {
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    title: 'Build Software That Grows Your Business',
    highlight: '',
    desc: 'Web, mobile, and cloud-native products—with practical AI where it moves the needle. From discovery through deployment, one accountable team.'
  };

  const services = SERVICES_CATALOG;

  // Testimonials
  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechCorp', content: 'ByteSoft transformed our business operations completely. Their ERP solution saved us 40% in operational costs within the first 3 months.', rating: 5, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Michael Chen', role: 'CTO, InnovateLabs', content: 'The mobile app they built for us significantly improved user engagement and retention. Their team is collaborative and forward-thinking.', rating: 4.9, image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Priya Sharma', role: 'Founder, FitLife', content: 'Professional, responsive, and technically strong. They delivered our platform ahead of schedule with clear communication throughout.', rating: 4.8, image: 'https://randomuser.me/api/portraits/women/3.jpg' }
  ];

  const techStack = [
    { name: 'React.js', role: 'UI & SPA', icon: <Code size={26} strokeWidth={1.75} /> },
    { name: 'Next.js', role: 'Web platform', icon: <Layout size={26} strokeWidth={1.75} /> },
    { name: 'Node.js', role: 'Backend runtime', icon: <Cpu size={26} strokeWidth={1.75} /> },
    { name: 'Python', role: 'APIs & services', icon: <Terminal size={26} strokeWidth={1.75} /> },
    { name: 'AWS', role: 'Cloud infra', icon: <Cloud size={26} strokeWidth={1.75} /> },
    { name: 'MongoDB', role: 'Document data', icon: <Database size={26} strokeWidth={1.75} /> },
    { name: 'GraphQL', role: 'Flexible APIs', icon: <GitBranch size={26} strokeWidth={1.75} /> },
    { name: 'TypeScript', role: 'Type-safe JS', icon: <FileCode size={26} strokeWidth={1.75} /> }
  ];

  // Differentiators
  const differentiators = [
    { title: 'Business-first Delivery', desc: 'Every sprint is mapped to measurable business outcomes, not just feature output.' },
    { title: 'Senior Engineering Team', desc: 'You work directly with experienced engineers and architects from discovery to launch.' },
    { title: 'Transparent Execution', desc: 'Weekly demos, clear milestones, and predictable communication with zero black-box delivery.' },
    { title: 'Scale-ready Foundations', desc: 'Security, performance, and cloud architecture are built in from day one.' }
  ];

  // Honor OS reduced-motion preference.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    handleMotionPreference();
    mediaQuery.addEventListener('change', handleMotionPreference);
    return () => mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  useEffect(() => {
    const animateCounter = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(150, (val) => setCounters(prev => ({ ...prev, projects: val })));
          animateCounter(50, (val) => setCounters(prev => ({ ...prev, clients: val })));
          animateCounter(12, (val) => setCounters(prev => ({ ...prev, countries: val })));
          animateCounter(99, (val) => setCounters(prev => ({ ...prev, satisfaction: val })));
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  // Scroll Reveal
  useEffect(() => {
    if (prefersReducedMotion || window.innerWidth <= 768) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Mouse Move Effect
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <div className="modern-home">
      <Helmet>
        <title>ByteSoft HQ | AI-Powered Digital Solutions & Enterprise Software</title>
        <meta name="description" content="ByteSoft HQ offers next-gen AI-powered digital solutions, enterprise software development, mobile & web excellence, and custom software for modern businesses." />
        <meta name="keywords" content="AI-powered digital solutions, enterprise software development, custom software engineering, mobile app development, web excellence, tech agency, cloud services, software solutions company" />
        <meta property="og:title" content="ByteSoft HQ | AI-Powered Digital Solutions" />
        <meta property="og:description" content="Transform your business with enterprise software, AI integration, and custom web and mobile solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bytesoft.com/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="ByteSoft HQ | AI-Powered Digital Solutions" />
        <meta property="twitter:description" content="Enterprise-grade software services for modern businesses." />
        <link rel="canonical" href="https://bytesoft.com/" />
      </Helmet>
      {/* Global Mouse Glow */}
      {!prefersReducedMotion && <div className="mouse-glow" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />}
      
      {/* Background Gradient Mesh */}
      <div className="bg-mesh" />

      {/* ========== HERO SECTION (INTELLIGENT OVERHAUL) ========== */}
      <section className="hero-section">
        <motion.div
          className="hero-slide active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-bg" style={{ backgroundImage: `url(${heroContent.bg})` }} />
          <div className="hero-overlay" />

          <div className="hero-content-wrapper">
            <div className="container">
              <div className="hero-grid">
                <motion.div
                  className="hero-text"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="hero-badge">
                    <Sparkles size={16} />
                    <span>Custom software · AI-ready</span>
                  </div>
                  <h1 className="hero-title">
                    {heroContent.title}
                  </h1>
                  <p className="hero-desc">{heroContent.desc}</p>

                  <div className="hero-buttons">
                    <Link to="/contact" className="btn-primary btn-large">
                      Launch Project <Rocket size={18} />
                    </Link>
                    <Link to="/products" className="btn-outline btn-large">
                      <Play size={18} /> Explore Products
                    </Link>
                  </div>

                  <div className="hero-trust-chips">
                    <span className="trust-chip">150+ Projects Delivered</span>
                    <span className="trust-chip">4.9/5 Average Rating</span>
                    <span className="trust-chip">24/7 Support</span>
                  </div>

                </motion.div>

                <motion.div
                  className="hero-visual"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                >
                  <div className="hero-terminal-demo">
                    <TerminalDemo />
                    <div className="hero-floating-tags" aria-hidden="true">
                      <div className="tag glass">MERN Stack</div>
                      <div className="tag glass">AI / ML</div>
                      <div className="tag glass">Cloud Native</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><Briefcase size={32} /></div>
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Users size={32} /></div>
              <div className="stat-number">{counters.clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Globe size={32} /></div>
              <div className="stat-number">{counters.countries}+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ThumbsUp size={32} /></div>
              <div className="stat-number">{counters.satisfaction}%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="services-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title">
              Services Built For <span className="gradient-text">Real Outcomes</span>
            </h2>
            <p className="section-subtitle">
              Implementation-first delivery across product, UX, infra, and growth—focused on measurable impact, not slide decks.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => {
              const SvcIcon = service.Icon;
              return (
              <div key={service.id} className="service-card reveal-on-scroll" style={{ transitionDelay: `${idx * 0.05}s` }}>
                {service.tag && <div className="service-tag">{service.tag}</div>}
                <div className="service-icon" style={{ background: `${service.color}15`, color: service.color }}>
                  <SvcIcon size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <p className="service-metric">{service.metric}</p>
                <Link className="service-link" style={{ color: service.color }} to={`/services#${service.id}`}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="why-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Why ByteSoft</span>
            <h2 className="section-title">Built For <span className="gradient-text">Long-Term Results</span></h2>
            <p className="section-subtitle">
              Senior engineers and clear rituals—weekly demos, shared docs, no black-box milestones.
            </p>
          </div>

          <div className="why-grid">
            {differentiators.map((item, idx) => (
              <div key={idx} className="why-card reveal-on-scroll" style={{ transitionDelay: `${idx * 0.06}s` }}>
                <div className="why-card-index">0{idx + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECH STACK SECTION ========== */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Technologies</span>
            <h2 className="section-title">
              Tools We Ship <span className="gradient-text">With Confidence</span>
            </h2>
            <p className="section-subtitle">
              Battle-tested primitives for resilient products—paired with pragmatic architecture choices for your stack.
            </p>
          </div>

          <div className="tech-cloud-grid">
            {techStack.map((tech, idx) => (
              <div key={idx} className="tech-tile reveal-on-scroll" style={{ transitionDelay: `${idx * 0.05}s` }}>
                <div className="tech-tile-inner glass">
                  <div className="tech-tile-icon-wrap">{tech.icon}</div>
                  <span className="tech-tile-name">{tech.name}</span>
                  <span className="tech-tile-role">{tech.role}</span>
                  <div className="tech-glow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">Voices Of <span className="gradient-text">Trust</span></h2>
            <p className="section-subtitle">
              Feedback from leaders who prioritized shipping quality and stable delivery over buzzwords.
            </p>
          </div>

          <div className="testimonials-masonry">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-v2 reveal-on-scroll">
                <div className="testimonial-v2-inner glass">
                  <div className="testimonial-v2-quote"><Quote size={40} /></div>
                  <p className="testimonial-v2-text">{testimonial.content}</p>
                  <div className="testimonial-v2-footer">
                    <div className="testimonial-v2-avatar">
                      <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" />
                      <div className="avatar-border" />
                    </div>
                    <div className="testimonial-v2-info">
                      <h4 className="v2-name">{testimonial.name}</h4>
                      <p className="v2-role">{testimonial.role}</p>
                    </div>
                    <div className="testimonial-v2-rating">
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <span>{testimonial.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card reveal-on-scroll">
            <div className="cta-content">
              <h2>
                Ready to Shape Your Next <span className="gradient-text">Release?</span>
              </h2>
              <p>
                Tell us about scope, timelines, or tech constraints—we’ll respond with a clear next step, not a generic pitch.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-primary btn-large">
                  Start a project <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline btn-large">
                  Browse services <ChevronRight size={18} />
                </Link>
              </div>
              <small className="cta-trust-text">No obligation. Typical reply within one business day.</small>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <Link to="/contact" className="btn-primary">
          Start Your Project <ArrowRight size={16} />
        </Link>
      </div>



      <style jsx="true">{`
        /* ========== CSS STYLES ========== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .modern-home {
          position: relative;
          overflow-x: hidden;
          background: #0b1220;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #ffffff;
          -webkit-font-smoothing: antialiased;
        }

        .modern-home .btn-primary,
        .modern-home .btn-outline,
        .modern-home .service-link {
          text-decoration: none;
        }

        .modern-home .btn-outline {
          color: #f8fafc;
        }

        /* Background mesh (single layered definition) */
        .mouse-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 100;
          transition: transform 0.1s ease-out;
        }

        .bg-mesh {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle at 14% 22%, rgba(59, 130, 246, 0.07) 0%, transparent 45%),
            radial-gradient(circle at 88% 78%, rgba(139, 92, 246, 0.06) 0%, transparent 46%),
            radial-gradient(circle at 52% 48%, rgba(6, 182, 212, 0.04) 0%, transparent 55%);
          pointer-events: none;
          z-index: -1;
        }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(14px, 3vw, 24px);
        }

        /* Reveal Animations */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Typography */
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 100px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-subtitle {
          color: #b2bfd3;
          max-width: 42rem;
          margin: 0 auto;
          font-size: clamp(1rem, 2.2vw, 1.12rem);
          line-height: 1.65;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -8px rgba(59, 130, 246, 0.4);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .btn-large {
          padding: 16px 36px;
          font-size: 1rem;
        }

        /* ========== HERO REFINEMENTS ========== */
        .hero-section {
          min-height: 100vh;
          min-height: 100dvh;
          perspective: 1000px;
          position: relative;
          overflow-x: hidden;
          overflow-y: visible;
          margin-bottom: 0;
        }

        /* Fill viewport so bg image reaches the fold (avoids naked #0b1220 stripe). */
        .hero-slide {
          position: relative;
          display: block;
          min-height: 100vh;
          min-height: 100dvh;
        }

        .hero-visual {
          position: relative;
          z-index: 20;
          overflow: visible;
        }

        /* Side margin leaves room for orbit-style pills so they aren’t clipped. */
        .hero-terminal-demo {
          position: relative;
          overflow: visible;
          margin: 12px 20px;
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.6);
        }

        .hero-floating-tags {
          position: absolute;
          inset: -20px;
          pointer-events: none;
          z-index: 3;
        }

        .hero-floating-tags .tag {
          position: absolute;
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #e2e8f0;
          white-space: nowrap;
          animation: hero-tag-float 4s ease-in-out infinite;
        }

        .hero-floating-tags .tag:nth-child(1) {
          top: 10%;
          left: -8px;
          animation-delay: 0s;
        }

        .hero-floating-tags .tag:nth-child(2) {
          bottom: 22%;
          right: -12px;
          animation-delay: 0.55s;
        }

        .hero-floating-tags .tag:nth-child(3) {
          top: 58%;
          left: -18px;
          animation-delay: 1.1s;
        }

        @keyframes hero-tag-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          background-size: cover;
          background-position: center bottom;
          transform: scale(1.06);
          transition: transform 8s ease;
        }

        .hero-slide.active .hero-bg {
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(132deg, rgba(7, 12, 26, 0.58) 0%, rgba(11, 18, 32, 0.42) 48%, rgba(7, 12, 26, 0.52) 100%),
            linear-gradient(to bottom, rgba(11, 18, 32, 0) 45%, rgba(11, 18, 32, 0.35) 78%, rgba(11, 18, 32, 0.97) 100%);
        }

        .hero-content-wrapper {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          font-size: 0.8rem;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-desc {
          color: #c7d3e3;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .hero-trust-chips {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: -18px;
          margin-bottom: 24px;
        }

        .trust-chip {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        /* ========== STATS SECTION ========== */
        .stats-section {
          padding: clamp(52px, 7vw, 72px) 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, transparent 62%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .stat-card {
          text-align: center;
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(59, 130, 246, 0.05);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .stat-icon {
          margin-bottom: 16px;
          color: #3b82f6;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        /* ========== SERVICES SECTION ========== */
        .services-section {
          padding: clamp(72px, 9vw, 96px) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .service-card {
          position: relative;
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.03);
          box-shadow: 0 20px 40px -24px rgba(59, 130, 246, 0.5);
        }

        .service-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .service-desc {
          color: #b8c4d8;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .service-metric {
          color: #dbeafe;
          font-size: 0.84rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        /* ========== WHY SECTION ========== */
        .why-section {
          padding: clamp(72px, 9vw, 96px) 0;
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.03) 0%, rgba(0, 0, 0, 0) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .why-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(59, 130, 246, 0.35);
          box-shadow: 0 20px 40px -24px rgba(59, 130, 246, 0.5);
        }

        .why-card-index {
          font-size: 0.8rem;
          color: #60a5fa;
          letter-spacing: 1px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .why-card h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .why-card p {
          color: #94a3b8;
          line-height: 1.7;
        }

        /* ========== TECH STACK (ENHANCED) ========== */
        .tech-section {
          padding: clamp(72px, 9vw, 96px) 0;
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.04) 0%, transparent 72%);
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .tech-cloud-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .tech-tile-inner {
          position: relative;
          padding: 32px 18px;
          text-align: center;
          border-radius: 22px;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .tech-tile:hover .tech-tile-inner {
          transform: translateY(-6px);
          border-color: rgba(96, 165, 250, 0.35);
          box-shadow:
            0 0 0 1px rgba(59, 130, 246, 0.12),
            0 28px 48px -26px rgba(0, 0, 0, 0.55);
        }

        .tech-tile-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), transparent 72%),
            rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #93c5fd;
          transition: transform 0.35s ease, border-color 0.35s ease, color 0.35s ease;
        }

        .tech-tile:hover .tech-tile-icon-wrap {
          transform: scale(1.05);
          border-color: rgba(96, 165, 250, 0.4);
          color: #dbeafe;
        }

        .tech-tile-icon-wrap svg {
          flex-shrink: 0;
        }

        .tech-tile-name {
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-size: 0.82rem;
          color: #f1f5f9;
        }

        .tech-tile-role {
          font-size: 0.78rem;
          font-weight: 500;
          color: #73869b;
          line-height: 1.35;
          max-width: 12rem;
          text-wrap: balance;
        }

        .tech-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tech-tile:hover .tech-glow {
          opacity: 1;
        }

        /* ========== TESTIMONIALS (ENHANCED) ========== */
        .testimonials-section {
          padding: clamp(72px, 9vw, 96px) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .testimonials-masonry {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 32px;
        }

        .testimonial-v2-inner {
          padding: 40px;
          border-radius: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .testimonial-v2:hover .testimonial-v2-inner {
          transform: scale(1.02);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .testimonial-v2-quote {
          color: #3b82f6;
          margin-bottom: 24px;
        }

        .testimonial-v2-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #e2e8f0;
          margin-bottom: 32px;
          font-style: italic;
        }

        .testimonial-v2-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .testimonial-v2-avatar {
          position: relative;
          width: 56px;
          height: 56px;
        }

        .testimonial-v2-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .avatar-border {
          position: absolute;
          inset: -4px;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          opacity: 0.3;
        }

        .v2-name {
          font-weight: 700;
          margin-bottom: 2px;
        }

        .v2-role {
          font-size: 0.8rem;
          color: #64748b;
        }

        .testimonial-v2-rating {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(251, 191, 36, 0.1);
          border-radius: 20px;
          color: #fbbf24;
          font-weight: 700;
          font-size: 0.85rem;
        }

        /* ========== CTA SECTION ========== */
        .cta-section {
          padding: clamp(72px, 9vw, 96px) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .cta-card {
          position: relative;
          background:
            radial-gradient(ellipse 120% 80% at 20% -20%, rgba(59, 130, 246, 0.18), transparent 55%),
            radial-gradient(ellipse 90% 60% at 100% 100%, rgba(139, 92, 246, 0.12), transparent 50%),
            linear-gradient(145deg, rgba(15, 23, 42, 0.88), rgba(11, 18, 32, 0.68));
          border-radius: 32px;
          padding: clamp(44px, 7vw, 64px);
          text-align: center;
          border: 1px solid rgba(148, 163, 184, 0.18);
          box-shadow:
            0 0 0 1px rgba(59, 130, 246, 0.08),
            0 28px 64px -28px rgba(0, 0, 0, 0.58);
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 16px;
        }

        .cta-content p {
          color: #94a3b8;
          max-width: 500px;
          margin: 0 auto 32px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-trust-text {
          display: inline-block;
          margin-top: 14px;
          color: #cbd5e1;
        }

        .mobile-sticky-cta {
          display: none;
        }

        @media (min-width: 1536px) {
          .container {
            max-width: 1400px;
          }
        }

        /* ========== FOOTER ========== */
        .footer {
          background: #0a0f1a;
          padding: 60px 0 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .footer-logo span {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .footer-brand p {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .footer-social a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        .footer-social a:hover {
          background: #3b82f6;
          color: white;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .footer-links ul,
        .footer-contact ul {
          list-style: none;
        }

        .footer-links li,
        .footer-contact li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #3b82f6;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-bottom p {
          color: #64748b;
          font-size: 0.8rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #3b82f6;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: clamp(2.2rem, 6vw, 3.6rem);
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-visual {
            max-width: 780px;
            margin: 0 auto;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .testimonials-masonry {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            display: block;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-content-wrapper {
            min-height: auto;
            padding: 130px 0 80px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .tech-cloud-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .modern-home {
            padding-bottom: calc(92px + env(safe-area-inset-bottom, 0px));
          }

          .hero-visual {
            display: none;
          }

          .hero-grid {
            justify-items: center;
          }

          .hero-text {
            max-width: none;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .hero-badge {
            margin-bottom: 18px;
          }

          .reveal-on-scroll {
            opacity: 1;
            transform: none;
          }

          .container {
            padding: 0 16px;
          }

          .section-header {
            margin-bottom: 44px;
          }

          .section-title {
            font-size: clamp(1.7rem, 8vw, 2.2rem);
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .hero-section {
            min-height: auto;
          }

          .hero-content-wrapper {
            padding: 110px 0 70px;
          }

          .hero-title {
            font-size: clamp(2rem, 11vw, 2.8rem);
            margin-bottom: 16px;
          }

          .hero-desc {
            font-size: 0.98rem;
            line-height: 1.58;
            max-width: min(34ch, 92vw);
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 18px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .tech-cloud-grid {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-masonry {
            grid-template-columns: 1fr;
          }

          .testimonial-v2-inner {
            padding: 26px;
            border-radius: 22px;
          }

          .cta-card {
            padding: 34px 20px;
            border-radius: 22px;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 16px;
            align-items: center;
            width: 100%;
            max-width: min(380px, 92vw);
            margin-left: auto;
            margin-right: auto;
          }

          .hero-trust-chips {
            margin-top: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            width: 100%;
            max-width: min(380px, 92vw);
            margin-left: auto;
            margin-right: auto;
          }

          .btn-large {
            padding: 14px 18px;
            font-size: 0.96rem;
            border-radius: 10px;
          }

          .btn-outline {
            background: rgba(255, 255, 255, 0.03);
            border-color: rgba(148, 163, 184, 0.35);
          }

          .trust-chip {
            width: 100%;
            justify-content: center;
            padding: 8px 10px;
            font-size: 0.82rem;
          }

          .hero-terminal-demo {
            margin: 10px 2px;
          }

          .hero-floating-tags {
            inset: -14px;
          }

          .hero-floating-tags .tag {
            font-size: 0.72rem;
            padding: 6px 11px;
          }

          .hero-floating-tags .tag:nth-child(1) {
            top: 6%;
            left: -6px;
          }

          .hero-floating-tags .tag:nth-child(2) {
            bottom: 16%;
            right: -8px;
          }

          .hero-floating-tags .tag:nth-child(3) {
            top: 50%;
            left: -10px;
          }
          
          .btn-primary, .btn-outline {
            width: 100%;
            justify-content: center;
          }

          .mobile-sticky-cta {
            display: flex;
            position: fixed;
            left: 12px;
            right: 12px;
            bottom: 12px;
            z-index: 1500;
          }

          .mobile-sticky-cta .btn-primary {
            width: 100%;
            justify-content: center;
            box-shadow: 0 16px 30px -16px rgba(59, 130, 246, 0.8);
          }
        }

        @media (max-width: 420px) {
          .hero-badge {
            font-size: 0.72rem;
            padding: 5px 12px;
          }

          .hero-trust-chips {
            grid-template-columns: 1fr;
          }

          .service-card,
          .why-card {
            padding: 22px;
          }

          .stat-card {
            padding: 24px;
          }

          .stat-number {
            font-size: 2.1rem;
          }

          .hero-trust-chips {
            gap: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;