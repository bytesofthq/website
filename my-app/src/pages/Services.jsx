import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Layers, Zap, Target } from 'lucide-react';
import { SERVICES_CATALOG } from '../data/servicesCatalog';

const Services = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, '');
    if (!hash) return;
    const id = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(id);
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const coreFeatures = [
    { title: 'Clear phases', desc: 'Discovery, build, and ship in visible slices—weekly demos and written decisions.', icon: <Target size={20} strokeWidth={2} /> },
    { title: 'Security-conscious', desc: 'Auth, permissions, and audit-friendly patterns appropriate to your domain.', icon: <ShieldCheck size={20} strokeWidth={2} /> },
    { title: 'Maintainable systems', desc: 'Codebase and infra choices you can extend without a rewrite every year.', icon: <Layers size={20} strokeWidth={2} /> },
    { title: 'Performance aware', desc: 'Practical budgets for speed, cost, and observability from day one.', icon: <Zap size={20} strokeWidth={2} /> },
  ];

  return (
    <div className="modern-services">
      <Helmet>
        <title>Services | Commerce, ERP, Healthcare, Apps, AI & Cloud | ByteSoft HQ</title>
        <meta
          name="description"
          content="ByteSoft services: E-commerce, school ERP, healthcare software, enterprise CRM, mobile apps, SEO & growth, AI integration, cloud, and UI/UX—with proof-minded delivery."
        />
        <meta
          name="keywords"
          content="e-commerce development, school ERP software, healthcare software HIPAA, enterprise CRM, mobile app development, SEO agency, AI workflow integration, cloud architecture, UI UX design agency"
        />
      </Helmet>
      {/* Global Mouse Glow */}
      <div className="mouse-glow" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      
      {/* Background Gradient Mesh */}
      <div className="bg-mesh" />

      {/* ========== HERO SECTION ========== */}
      <section className="services-hero">
        <div className="hero-overlay" />
        <div className="container relative z-10">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Built for business impact</span>
            </div>
            <h1 className="hero-title">
              Services that <span className="gradient-text">Move Metrics</span>
            </h1>
            <p className="hero-desc">
              From commerce and ERP to AI, cloud, and design - practical execution, clear scope, and measurable results for each engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== DETAILED SERVICES GRID ========== */}
      <section className="detailed-services-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Catalog</span>
            <h2 className="section-title">All <span className="gradient-text">Services</span></h2>
            <p className="section-subtitle">
              Tell us what you&apos;re building—we&apos;ll map it to the right stream and next steps.
            </p>
          </div>

          <div className="services-list">
            {SERVICES_CATALOG.map((service) => {
              const Icon = service.Icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="svc-card reveal-on-scroll glass"
                  style={{ '--svc-accent': service.color }}
                >
                  <div className="svc-card-accent" aria-hidden="true" />
                  <div className="svc-card-main">
                    <header className="svc-card-head">
                      <div className="svc-icon" style={{ background: `${service.color}12`, color: service.color }}>
                        <Icon size={26} strokeWidth={1.75} aria-hidden />
                      </div>
                      <div className="svc-head-text">
                        <h3 className="svc-title">{service.title}</h3>
                        <p className="svc-tagline" style={{ color: service.color }}>{service.highlight}</p>
                      </div>
                      {service.tag ? (
                        <span className="svc-pill">{service.tag}</span>
                      ) : null}
                    </header>
                    <p className="svc-desc">{service.desc}</p>
                    <p className="svc-detail">{service.detail}</p>
                    <div className="svc-keywords" aria-label="Focus areas">
                      {service.keywords.map((kw) => (
                        <span key={kw} className="svc-keyword">{kw}</span>
                      ))}
                    </div>
                    <Link className="svc-link" to="/contact" style={{ '--svc-hover': service.color }}>
                      Discuss on a call <ArrowRight size={16} aria-hidden />
                    </Link>
                  </div>
                  <aside className="svc-aside">
                    <span className="svc-aside-label">Proof line</span>
                    <p className="svc-aside-metric">{service.metric}</p>
                  </aside>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="why-choose-us">
        <div className="container">
          <div className="values-panel reveal-on-scroll">
            <h2 className="values-heading">How we <span className="gradient-text">work</span></h2>
            <p className="values-lede">
              Senior engineers, clear milestones, and demos you can share with stakeholders—no black-box delivery.
            </p>
            <div className="values-grid">
              {coreFeatures.map((feature, idx) => (
                <div key={idx} className="values-item">
                  <div className="values-icon">{feature.icon}</div>
                  <div>
                    <h4 className="values-item-title">{feature.title}</h4>
                    <p className="values-item-desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card reveal-on-scroll">
            <div className="cta-content text-center">
              <h2>Have a project in mind?</h2>
              <p>Share goals, timeline, and constraints—we&apos;ll reply with a sensible next step.</p>
              <div className="cta-buttons">
                <Link className="btn-primary btn-large" to="/contact">
                  Start a conversation <ArrowRight size={18} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* ========== GLOBAL & BASE STYLES ========== */
        .modern-services {
          position: relative;
          overflow-x: hidden;
          background: #0b1220;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #ffffff;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .bg-mesh {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.02) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .mouse-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 72%);
          pointer-events: none;
          z-index: 100;
          transition: transform 0.1s ease-out;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        .glass {
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.065);
          border-radius: 18px;
          box-shadow: 0 12px 40px -24px rgba(0, 0, 0, 0.55);
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* ========== HERO SECTION ========== */
        .services-hero {
          padding: clamp(120px, 18vw, 152px) 0 clamp(72px, 10vw, 88px);
          position: relative;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .services-hero .hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.12), transparent 55%),
            linear-gradient(to bottom, rgba(11, 18, 32, 0.15) 0%, #0b1220 100%);
        }

        .services-hero .container {
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          font-size: 0.875rem;
          font-weight: 600;
          margin: 0 auto 20px;
        }

        .hero-title {
          font-size: clamp(2.25rem, 5.5vw, 3.35rem);
          font-weight: 800;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -0.03em;
        }

        .hero-desc {
          font-size: clamp(1rem, 2.2vw, 1.08rem);
          color: #94a3b8;
          max-width: 34rem;
          line-height: 1.65;
          margin-left: auto;
          margin-right: auto;
        }

        /* ========== SECTION HEADERS ========== */
        .section-header {
          text-align: center;
          margin-bottom: clamp(40px, 6vw, 56px);
        }

        .section-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.22);
          color: #7ab7ff;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.35rem);
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          color: #8b9aad;
          max-width: 28rem;
          margin: 0 auto;
          font-size: 0.98rem;
          line-height: 1.6;
        }

        /* ========== SERVICE CARDS (clean list) ========== */
        .detailed-services-section {
          padding: clamp(56px, 8vw, 80px) 0 clamp(64px, 9vw, 88px);
        }

        .services-list {
          max-width: 920px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .svc-card {
          --svc-accent: #3b82f6;
          display: grid;
          grid-template-columns: 4px minmax(0, 1fr) minmax(140px, 200px);
          align-items: stretch;
          padding: 0;
          overflow: hidden;
          scroll-margin-top: 88px;
        }

        .svc-card-accent {
          background: linear-gradient(180deg, var(--svc-accent) 0%, rgba(59, 130, 246, 0.15) 55%, transparent 100%);
          opacity: 0.95;
        }

        .svc-card-main {
          padding: clamp(22px, 4vw, 30px) clamp(20px, 4vw, 32px);
        }

        .svc-card-head {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .svc-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .svc-head-text {
          flex: 1;
          min-width: 0;
        }

        .svc-title {
          font-size: clamp(1.2rem, 2.6vw, 1.45rem);
          font-weight: 700;
          margin: 0 0 4px;
          letter-spacing: -0.02em;
          color: #f1f5f9;
        }

        .svc-tagline {
          font-size: 0.88rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.35;
        }

        .svc-pill {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          background: rgba(255, 255, 255, 0.04);
          height: fit-content;
        }

        .svc-desc {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.65;
          margin: 0 0 10px;
        }

        .svc-detail {
          color: #8b9aad;
          font-size: 0.88rem;
          line-height: 1.65;
          margin: 0 0 16px;
        }

        .svc-keywords {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .svc-keyword {
          font-size: 0.75rem;
          font-weight: 500;
          color: #b5c3d4;
          padding: 5px 11px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.02);
        }

        .svc-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #e2e8f0;
          text-decoration: none;
          transition: gap 0.25s ease, color 0.25s ease;
        }

        .svc-link:hover {
          gap: 12px;
          color: var(--svc-hover, #60a5fa);
        }

        .svc-aside {
          padding: clamp(22px, 4vw, 28px) 22px;
          border-left: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(0, 0, 0, 0.12);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .svc-aside-label {
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #64748b;
          margin-bottom: 10px;
        }

        .svc-aside-metric {
          margin: 0;
          font-size: clamp(0.95rem, 2.2vw, 1.12rem);
          font-weight: 700;
          line-height: 1.35;
          color: #f8fafc;
        }

        /* ========== VALUES ========== */
        .why-choose-us {
          padding: 0 0 clamp(72px, 10vw, 100px);
        }

        .values-panel {
          max-width: 920px;
          margin: 0 auto;
          padding: clamp(36px, 5vw, 48px) clamp(24px, 4vw, 40px);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
        }

        .values-heading {
          font-size: clamp(1.5rem, 3.5vw, 1.85rem);
          font-weight: 700;
          text-align: center;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .values-lede {
          text-align: center;
          color: #8b9aad;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 32rem;
          margin: 0 auto 28px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px 28px;
        }

        .values-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .values-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #94a3b8;
          flex-shrink: 0;
        }

        .values-item-title {
          font-size: 0.98rem;
          font-weight: 600;
          margin: 0 0 6px;
          color: #e2e8f0;
        }

        .values-item-desc {
          margin: 0;
          color: #8b9aad;
          font-size: 0.84rem;
          line-height: 1.52;
        }

        /* ========== CTA SECTION ========== */
        .cta-section {
          padding: 24px 0 clamp(72px, 12vw, 112px);
        }

        .cta-card {
          max-width: 720px;
          margin: 0 auto;
          background: linear-gradient(145deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.06));
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          padding: clamp(40px, 6vw, 56px) clamp(24px, 5vw, 40px);
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: clamp(1.45rem, 3.5vw, 1.85rem);
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .cta-content p {
          color: #94a3b8;
          font-size: 0.98rem;
          max-width: 26rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          box-sizing: border-box;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -8px rgba(59, 130, 246, 0.4);
        }

        .btn-large {
          padding: 16px 36px;
          font-size: 1rem;
        }

        /* Animations */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 720px) {
          .svc-card {
            grid-template-columns: 4px minmax(0, 1fr);
          }

          .svc-aside {
            grid-column: 1 / -1;
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            padding: 16px 22px 22px;
            flex-direction: row;
            align-items: baseline;
            justify-content: space-between;
            gap: 12px;
          }

          .svc-aside-label {
            margin-bottom: 0;
          }

          .svc-aside-metric {
            text-align: right;
            max-width: 58%;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 18px;
          }

          .services-hero {
            padding: 108px 0 64px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
