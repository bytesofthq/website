import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Code, Cloud, Smartphone, Bot, ShieldCheck, 
  ArrowRight, Database, Layout, MessageSquare, 
  Sparkles, Layers, Cpu, Globe2, Search, Monitor, 
  CheckCircle2, ChevronRight, Zap, Target
} from 'lucide-react';

const Services = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Move Effect
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Reveal Effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const detailedServices = [
    {
      icon: <Code size={36} />,
      title: "Custom Software Development",
      highlight: "Scalable Enterprise Solutions",
      desc: "We engineer bespoke software tailored to your unique business logic. From monolithic to microservices architecture, we build resilient, high-performance applications that drive operational efficiency, digital transformation, and sustainable growth.",
      keywords: ["Full-Stack Engineering", "Microservices", "API Development", "Legacy Modernization"],
      color: "#3b82f6"
    },
    {
      icon: <Bot size={36} />,
      title: "AI & Machine Learning",
      highlight: "Intelligent Automation Integration",
      desc: "Harness the power of Artificial Intelligence to automate complex workflows and gain predictive insights. We deploy custom NLP models, computer vision systems, and intelligent chatbots to give your business a profound cognitive edge.",
      keywords: ["Predictive Analytics", "Generative AI", "NLP", "Machine Learning Models"],
      color: "#8b5cf6"
    },
    {
      icon: <Cloud size={36} />,
      title: "Cloud Architecture & DevOps",
      highlight: "Secure & Resilient Infrastructure",
      desc: "Transform your operations with seamless cloud migrations and cloud-native application development. We specialize in AWS, Azure, and GCP, providing CI/CD pipelines, containerization, and auto-scaling serverless architectures.",
      keywords: ["AWS / Azure / GCP", "CI/CD Pipelines", "Kubernetes", "Serverless Infrastructure"],
      color: "#06b6d4"
    },
    {
      icon: <Smartphone size={36} />,
      title: "Mobile App Development",
      highlight: "Native & Cross-Platform Excellence",
      desc: "Deliver captivating user experiences on Android and iOS. We build robust, feature-rich mobile applications using React Native, Flutter, and Swift, ensuring high performance, intuitive UI/UX, and flawless app store deployment.",
      keywords: ["iOS & Android", "React Native", "Flutter", "Mobile UI/UX Design"],
      color: "#10b981"
    },
    {
      icon: <Layout size={36} />,
      title: "UI/UX Design & Prototyping",
      highlight: "Human-Centric Digital Experiences",
      desc: "Our design thinking approach ensures your digital products are not only aesthetically stunning but also highly intuitive. We conduct comprehensive user research, wireframing, and interactive prototyping to craft interfaces that convert.",
      keywords: ["Wireframing", "Interactive Prototyping", "User Research", "Design Systems"],
      color: "#ec4899"
    },
    {
      icon: <Globe2 size={36} />,
      title: "E-Commerce & Web Solutions",
      highlight: "High-Conversion Storefronts",
      desc: "Scale your online retail business with enterprise-grade e-commerce platforms. We develop fast, secure, and SEO-optimized web applications with seamless payment gateway integrations, advanced inventory management, and omnichannel support.",
      keywords: ["Shopify Plus", "Custom Web Apps", "Payment Gateways", "Technical SEO"],
      color: "#f59e0b"
    }
  ];

  const coreFeatures = [
    { title: "Agile Methodology", desc: "Iterative development ensuring transparency, adaptability, and rapid delivery cycles.", icon: <Target className="text-blue-400" /> },
    { title: "Enterprise Security", desc: "Bank-grade encryption, secure authentications, and GDPR compliance built-in.", icon: <ShieldCheck className="text-purple-400" /> },
    { title: "Scalable Architecture", desc: "Systems designed to handle millions of requests with zero downtime.", icon: <Layers className="text-cyan-400" /> },
    { title: "Performance Optimized", desc: "Lightning-fast load times, optimized queries, and efficient state management.", icon: <Zap className="text-emerald-400" /> }
  ];

  return (
    <div className="modern-services">
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
            <div className="hero-badge mx-auto mb-6">
              <Sparkles size={16} />
              <span>Premium Digital Services</span>
            </div>
            <h1 className="hero-title">
              Transforming Ideas Into <br />
              <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="hero-desc mx-auto">
              We leverage cutting-edge technology, strategic thinking, and exceptional design to deliver custom software solutions that propel your business forward. Explore our suite of enterprise-grade services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== DETAILED SERVICES GRID ========== */}
      <section className="detailed-services-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title">What We <span className="gradient-text">Deliver</span></h2>
            <p className="section-subtitle">Comprehensive, end-to-end technology solutions tailored for modern enterprises.</p>
          </div>

          <div className="services-showcase">
            {detailedServices.map((service, idx) => (
              <div key={idx} className={`service-row reveal-on-scroll ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="service-content glass">
                  <div className="service-icon-wrapper" style={{ background: `${service.color}15`, color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="service-heading">{service.title}</h3>
                  <h4 className="service-highlight" style={{ color: service.color }}>{service.highlight}</h4>
                  <p className="service-paragraph">{service.desc}</p>
                  
                  <div className="service-keywords">
                    {service.keywords.map((kw, i) => (
                      <span key={i} className="keyword-tag">{kw}</span>
                    ))}
                  </div>
                  
                  <button className="btn-learn-more" style={{ '--hover-color': service.color }}>
                    Explore Capabilities <ArrowRight size={16} />
                  </button>
                </div>
                
                <div className="service-visual">
                  <div className="visual-card glass">
                    <div className="visual-abstract" style={{ 
                      background: `radial-gradient(circle at 50% 50%, ${service.color}40 0%, transparent 70%)` 
                    }}>
                      {service.icon}
                    </div>
                    <div className="visual-stats-mockup">
                      <h4 className="stats-title" style={{ color: service.color }}>Expected Impact</h4>
                      <div className="stat-row">
                        <div className="stat-info">
                          <span>Efficiency & ROI</span>
                          <span style={{ color: service.color }}>+200%</span>
                        </div>
                        <div className="stat-bar"><div className="stat-fill" style={{ width: '90%', background: service.color }}></div></div>
                      </div>
                      <div className="stat-row">
                        <div className="stat-info">
                          <span>Security & Compliance</span>
                          <span style={{ color: service.color }}>Enterprise Grade</span>
                        </div>
                        <div className="stat-bar"><div className="stat-fill" style={{ width: '100%', background: service.color }}></div></div>
                      </div>
                      <div className="stat-row">
                        <div className="stat-info">
                          <span>User Satisfaction</span>
                          <span style={{ color: service.color }}>99.9%</span>
                        </div>
                        <div className="stat-bar"><div className="stat-fill" style={{ width: '95%', background: service.color }}></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="why-choose-us">
        <div className="container">
          <div className="glass-banner reveal-on-scroll">
            <div className="banner-content">
              <h2>Why Partner With <span className="gradient-text">Us?</span></h2>
              <p>We don't just write code; we build strategic digital assets. Our approach combines deep technical expertise with business acumen to ensure your investment yields measurable ROI.</p>
              
              <div className="features-grid">
                {coreFeatures.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card reveal-on-scroll">
            <div className="cta-content text-center">
              <h2>Ready to Accelerate Your <span className="gradient-text">Digital Growth?</span></h2>
              <p>Let's discuss how our bespoke technology services can solve your complex business challenges and drive innovation.</p>
              <div className="cta-buttons justify-center mt-8">
                <button className="btn-primary btn-large">
                  Get a Free Consultation <ArrowRight size={18} />
                </button>
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
          background: #030712;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #ffffff;
          min-height: 100vh;
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
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
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
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          border-radius: 24px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* ========== HERO SECTION ========== */
        .services-hero {
          padding: 160px 0 100px;
          position: relative;
          text-align: center;
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
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .hero-desc {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 700px;
          line-height: 1.7;
        }

        /* ========== SECTION HEADERS ========== */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 100px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: #a78bfa;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-subtitle {
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
        }

        /* ========== DETAILED SERVICES ========== */
        .detailed-services-section {
          padding: 80px 0;
        }

        .service-row {
          display: flex;
          align-items: center;
          gap: 64px;
          margin-bottom: 100px;
        }

        .service-row.reverse {
          flex-direction: row-reverse;
        }

        .service-content {
          flex: 1;
          padding: 48px;
        }

        .service-visual {
          flex: 1;
        }

        .service-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .service-heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .service-highlight {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .service-paragraph {
          color: #94a3b8;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .service-keywords {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .keyword-tag {
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.85rem;
          color: #e2e8f0;
          transition: all 0.3s ease;
        }

        .keyword-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .btn-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: gap 0.3s ease, color 0.3s ease;
          padding: 0;
        }

        .btn-learn-more:hover {
          gap: 16px;
          color: var(--hover-color);
        }

        /* Mockup / Visual Area */
        .visual-card {
          position: relative;
          height: 400px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .visual-abstract {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
        }

        .visual-abstract svg {
          width: 200px;
          height: 200px;
          opacity: 0.2;
        }

        .visual-stats-mockup {
          position: relative;
          width: 100%;
          max-width: 340px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 28px;
          z-index: 2;
          box-shadow: 0 24px 48px rgba(0,0,0,0.4);
        }

        .stats-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-row {
          margin-bottom: 20px;
        }

        .stat-row:last-child {
          margin-bottom: 0;
        }

        .stat-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #e2e8f0;
        }

        .stat-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          overflow: hidden;
        }

        .stat-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ========== WHY CHOOSE US ========== */
        .why-choose-us {
          padding: 60px 0 100px;
        }

        .glass-banner {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 64px;
          text-align: center;
        }

        .banner-content h2 {
          font-size: 2.5rem;
          margin-bottom: 24px;
        }

        .banner-content > p {
          color: #94a3b8;
          max-width: 800px;
          margin: 0 auto 64px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          text-align: left;
        }

        .feature-item {
          display: flex;
          gap: 16px;
        }

        .feature-icon {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 12px;
          height: fit-content;
        }

        .feature-text h4 {
          font-size: 1.125rem;
          margin-bottom: 8px;
        }

        .feature-text p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* ========== CTA SECTION ========== */
        .cta-section {
          padding: 60px 0 120px;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==');
          opacity: 0.5;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 24px;
        }

        .cta-content p {
          color: #cbd5e1;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
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
        @media (max-width: 992px) {
          .service-row, .service-row.reverse {
            flex-direction: column;
            gap: 40px;
          }
          .service-content {
            padding: 32px;
          }
        }

        @media (max-width: 768px) {
          .services-hero { padding: 120px 0 80px; }
          .hero-title { font-size: 2.5rem; }
          .glass-banner { padding: 40px 24px; }
          .cta-card { padding: 40px 24px; }
        }
      `}</style>
    </div>
  );
};

export default Services;
