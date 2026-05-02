import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { TerminalDemo } from '../components/TerminalDemo';
import { 
  Rocket, Code, Cloud, Smartphone, Bot, BarChart3, Globe, Zap, 
  ShieldCheck, Users, ArrowRight, CheckCircle2, ChevronRight, Play, 
  Star, Bus, School, Building2, ShoppingCart, HeartPulse, Database,
  Layout, MessageSquare, Sparkles, Layers, Cpu, Globe2, Lock,
  MousePointer2, Camera, Search, Monitor, Award, ThumbsUp, Clock,
  Headphones, TrendingUp, Briefcase, Mail, Phone, MapPin, 
  Globe as Facebook, Globe as Twitter, Users as Linkedin, Camera as Instagram, Code as Github, 
  ExternalLink, Calendar,
  Clock3, Quote, MailOpen, PhoneCall, DollarSign, CreditCard,
  Truck, Headset, Shield, Zap as ZapFast, Leaf, Coffee, Gift
} from 'lucide-react';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [counters, setCounters] = useState({ projects: 0, clients: 0, countries: 0, satisfaction: 0 });

  // Hero Slides Data
  const heroSlides = [
    { 
      bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      title: "AI-Powered Digital Solutions",
      subtitle: "Transforming Businesses With",
      highlight: "Next-Gen Technology",
      desc: "Leverage cutting-edge AI and custom software to drive unprecedented growth and efficiency."
    },
    { 
      bg: "https://images.unsplash.com/photo-1551434678-e076c2235d1f?w=1920&q=80",
      title: "Enterprise Software Development",
      subtitle: "Scale Your Business With",
      highlight: "Custom Enterprise Solutions",
      desc: "From ERP to CRM, we build scalable systems that grow with your business."
    },
    { 
      bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80",
      title: "Mobile & Web Excellence",
      subtitle: "Experience The Future With",
      highlight: "Cutting-Edge Applications",
      desc: "Native mobile apps and responsive web applications that users love."
    }
  ];

  // Services Data
  const services = [
    { icon: <ShoppingCart size={28} />, title: 'E-Commerce Solutions', desc: 'Custom storefronts, multi-vendor marketplaces, and seamless payment integrations.', color: '#3b82f6', tag: 'Popular' },
    { icon: <School size={28} />, title: 'School ERP Systems', desc: 'Manage attendance, exams, fees, and communication in one unified cloud platform.', color: '#10b981', tag: 'Featured' },
    { icon: <HeartPulse size={28} />, title: 'Healthcare Software', desc: 'Secure patient management and diagnostic tools for modern clinics and hospitals.', color: '#ef4444', tag: 'HIPAA' },
    { icon: <Building2 size={28} />, title: 'Enterprise CRM', desc: 'Boost sales efficiency with automated lead tracking and client relationship tools.', color: '#f59e0b', tag: '' },
    { icon: <Smartphone size={28} />, title: 'App Development', desc: 'High-performance mobile applications for Android and iOS using modern frameworks.', color: '#8b5cf6', tag: 'React Native' },
    { icon: <Search size={28} />, title: 'SEO & Growth', desc: 'Data-driven marketing strategies to put your brand at the top of search results.', color: '#ec4899', tag: '' },
    { icon: <Bot size={28} />, title: 'AI Integration', desc: 'Custom AI models and automation solutions for intelligent business processes.', color: '#06b6d4', tag: 'Latest' },
    { icon: <Cloud size={28} />, title: 'Cloud Services', desc: 'AWS, Azure, and GCP cloud architecture, migration, and management.', color: '#f97316', tag: 'Enterprise' }
  ];

  // Portfolio Projects
  const projects = [
    { title: 'TrackFlow Pro', category: 'saas', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', desc: 'Transport Management System', tech: 'React, Node.js, MongoDB' },
    { title: 'MediCare Hub', category: 'healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', desc: 'Patient Management Platform', tech: 'Next.js, Python, PostgreSQL' },
    { title: 'EduSmart ERP', category: 'education', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', desc: 'School Management System', tech: 'React, Django, MySQL' },
    { title: 'ShopEase', category: 'ecommerce', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80', desc: 'Multi-Vendor Marketplace', tech: 'Vue.js, Laravel, Redis' },
    { title: 'FinFlow', category: 'fintech', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', desc: 'Financial Analytics Dashboard', tech: 'Angular, .NET Core, SQL Server' },
    { title: 'SmartRetail', category: 'retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', desc: 'POS & Inventory System', tech: 'Flutter, Firebase, Node.js' }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  // Testimonials
  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechCorp', content: 'ByteSoft transformed our business operations completely. Their ERP solution saved us 40% in operational costs within the first 3 months.', rating: 5, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Michael Chen', role: 'CTO, InnovateLabs', content: 'The mobile app they built for us increased our user engagement by 300%. Their team is truly exceptional and forward-thinking.', rating: 5, image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Priya Sharma', role: 'Founder, FitLife', content: 'Professional, responsive, and technically brilliant. They delivered our platform ahead of schedule and under budget.', rating: 5, image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'David Wilson', role: 'Director, EduGroup', content: 'The School ERP system has revolutionized how we manage our institutions. Highly recommended for educational organizations.', rating: 5, image: 'https://randomuser.me/api/portraits/men/4.jpg' }
  ];

  // Pricing Plans
  const pricingPlans = [
    { name: 'Starter', price: '$999', period: 'one-time', features: ['Custom Website', '5 Pages', 'Mobile Responsive', 'Basic SEO', '1 Month Support'], popular: false },
    { name: 'Professional', price: '$2,999', period: 'one-time', features: ['Custom Web App', '10+ Pages', 'Database Integration', 'Advanced SEO', '3 Months Support', 'Analytics Setup'], popular: true },
    { name: 'Enterprise', price: 'Custom', period: 'quote', features: ['Full Stack Solution', 'Unlimited Pages', 'AI Integration', 'Cloud Deployment', '1 Year Support', 'Dedicated Team'], popular: false }
  ];

  // Process Steps
  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and requirements.', icon: <MessageSquare size={32} />, color: '#3b82f6' },
    { step: '02', title: 'Strategy', desc: 'Creating a roadmap for success with timelines.', icon: <Layers size={32} />, color: '#8b5cf6' },
    { step: '03', title: 'Development', desc: 'Agile development with weekly updates.', icon: <Code size={32} />, color: '#06b6d4' },
    { step: '04', title: 'Launch', desc: 'Deployment, testing, and go-live support.', icon: <Rocket size={32} />, color: '#10b981' }
  ];

  // Tech Stack
  const techStack = [
    { name: 'React.js', icon: <Code size={22} />, level: 95 },
    { name: 'Next.js', icon: <Layout size={22} />, level: 90 },
    { name: 'Node.js', icon: <Cpu size={22} />, level: 92 },
    { name: 'Python', icon: <Database size={22} />, level: 88 },
    { name: 'AWS', icon: <Cloud size={22} />, level: 85 },
    { name: 'MongoDB', icon: <Database size={22} />, level: 90 },
    { name: 'GraphQL', icon: <Layers size={22} />, level: 82 },
    { name: 'TypeScript', icon: <Code size={22} />, level: 88 }
  ];

  // Blog Posts
  const blogPosts = [
    { title: 'How AI is Transforming Web Development in 2024', date: 'Dec 15, 2024', readTime: '5 min read', category: 'AI', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80' },
    { title: 'Top 10 Security Practices for Your Web App', date: 'Dec 10, 2024', readTime: '7 min read', category: 'Security', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80' },
    { title: 'Why Your Business Needs a Custom ERP', date: 'Dec 5, 2024', readTime: '4 min read', category: 'Business', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80' }
  ];

  // Animation and Counter Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

  // Mouse Move Effect
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const marqueeItems = [
    "🏆 150+ Projects Delivered", "⭐ 4.9/5 Client Rating", "🚀 50+ Happy Clients", 
    "🌍 12+ Countries", "💎 98% Client Retention", "🔒 100% Secure", 
    "⚡ 24/7 Support", "🎯 99.9% Uptime", "💡 Innovation First"
  ];

  const clients = [
    "TechCorp", "InnovateLabs", "FutureSoft", "DataDrive", "CloudNine", 
    "SmartScale", "EduGroup", "FitLife", "MediCare", "FinTech Pro"
  ];

  return (
    <div className="modern-home">
      <Helmet>
        <title>ByteSoft HQ | AI-Powered Digital Solutions & Enterprise Software</title>
        <meta name="description" content="ByteSoft HQ offers next-gen AI-powered digital solutions, enterprise software development, mobile & web excellence, and custom software for modern businesses." />
        <meta name="keywords" content="AI-powered digital solutions, enterprise software development, custom software engineering, mobile app development, web excellence, tech agency, cloud services, software solutions company" />
      </Helmet>
      {/* Global Mouse Glow */}
      <div className="mouse-glow" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      
      {/* Background Gradient Mesh */}
      <div className="bg-mesh" />

      {/* ========== HERO SECTION (INTELLIGENT OVERHAUL) ========== */}
      <section className="hero-section">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, idx) => idx === currentSlide && (
            <motion.div 
              key={idx} 
              className="hero-slide active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="hero-bg" style={{ backgroundImage: `url(${slide.bg})` }} />
              <div className="hero-overlay" />
              
              <div className="hero-content-wrapper">
                <div className="container">
                  <div className="hero-grid">
                    <motion.div 
                      className="hero-text"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <div className="hero-badge">
                        <Sparkles size={16} />
                        <span>Intelligence Powered Software</span>
                      </div>
                      <h1 className="hero-title">
                        {slide.title} <br />
                        <span className="gradient-text">{slide.highlight}</span>
                      </h1>
                      <p className="hero-desc">{slide.desc}</p>
                      
                      <div className="hero-buttons">
                        <button className="btn-primary btn-large">
                          Launch Project <Rocket size={18} />
                        </button>
                        <button className="btn-outline btn-large">
                          <Play size={18} /> Watch Demo
                        </button>
                      </div>

                      <div className="hero-stats-mini">
                        <div className="mini-stat">
                          <span className="mini-stat-val">150+</span>
                          <span className="mini-stat-label">Deliveries</span>
                        </div>
                        <div className="mini-stat">
                          <span className="mini-stat-val">50+</span>
                          <span className="mini-stat-label">Clients</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="hero-visual"
                      initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ delay: 0.6, duration: 1 }}
                    >
                      {idx === 0 ? (
                        <div className="hero-terminal-demo">
                          <TerminalDemo />
                          <div className="hero-floating-tags">
                            <div className="tag glass">MERN Stack</div>
                            <div className="tag glass">AI/ML</div>
                            <div className="tag glass">Cloud Native</div>
                          </div>
                        </div>
                      ) : (
                        <div className="hero-glass-card glass">
                          <div className="card-inner">
                            <div className="card-header">
                              <Zap color="#3b82f6" />
                              <h3>Start Innovating</h3>
                            </div>
                            <p>Free Technical Blueprint Call</p>
                            <form className="hero-form-compact">
                              <input type="email" placeholder="Work email" />
                              <button className="btn-primary">Book Now</button>
                            </form>
                            <div className="card-footer">
                              <Shield size={12} /> Privacy Guaranteed
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="hero-controls">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx}
              className={`control-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      <div className="section-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* ========== MARQUEE TRUST BAR ========== */}
      <div className="marquee-section">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="marquee-item">{item}</span>
                <span className="marquee-separator">✦</span>
              </React.Fragment>
            ))}
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={`dup-${idx}`}>
                <span className="marquee-item">{item}</span>
                <span className="marquee-separator">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

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
            <h2 className="section-title">Comprehensive <span className="gradient-text">Digital Solutions</span></h2>
            <p className="section-subtitle">End-to-end services to transform your business operations and drive growth</p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card reveal-on-scroll" style={{ transitionDelay: `${idx * 0.05}s` }}>
                {service.tag && <div className="service-tag">{service.tag}</div>}
                <div className="service-icon" style={{ background: `${service.color}15`, color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-link" style={{ color: service.color }}>
                  Learn More <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO SECTION ========== */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Our Work</span>
            <h2 className="section-title">Recent <span className="gradient-text">Projects</span></h2>
            <p className="section-subtitle">Showcasing our expertise across various industries</p>
          </div>

          <div className="portfolio-tabs reveal-on-scroll">
            <button className={activeTab === 'all' ? 'tab-active' : ''} onClick={() => setActiveTab('all')}>All</button>
            <button className={activeTab === 'saas' ? 'tab-active' : ''} onClick={() => setActiveTab('saas')}>SaaS</button>
            <button className={activeTab === 'ecommerce' ? 'tab-active' : ''} onClick={() => setActiveTab('ecommerce')}>E-Commerce</button>
            <button className={activeTab === 'healthcare' ? 'tab-active' : ''} onClick={() => setActiveTab('healthcare')}>Healthcare</button>
            <button className={activeTab === 'education' ? 'tab-active' : ''} onClick={() => setActiveTab('education')}>Education</button>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="portfolio-card reveal-on-scroll">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <button className="portfolio-btn">View Project <ExternalLink size={16} /></button>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  <div className="portfolio-tech">{project.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">How We Work</span>
            <h2 className="section-title">Engineered For <span className="gradient-text">Success</span></h2>
            <p className="section-subtitle">Our battle-tested development lifecycle ensures your project is delivered with surgical precision.</p>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, idx) => (
              <div key={idx} className={`process-item reveal-on-scroll ${idx % 2 === 0 ? 'left' : 'right'}`} style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="process-dot" style={{ background: step.color }}>
                  <div className="dot-inner" />
                </div>
                <div className="process-content glass">
                  <div className="process-header">
                    <div className="process-icon-box" style={{ background: `${step.color}15`, color: step.color }}>
                      {step.icon}
                    </div>
                    <span className="process-step-num">{step.step}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="process-line" />
          </div>
        </div>
      </section>

      {/* ========== TECH STACK SECTION ========== */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Technologies</span>
            <h2 className="section-title">Our <span className="gradient-text">Powerhouse</span> Stack</h2>
            <p className="section-subtitle">We don't just use tools; we master the ecosystem to build future-proof products.</p>
          </div>

          <div className="tech-cloud-grid">
            {techStack.map((tech, idx) => (
              <div key={idx} className="tech-tile reveal-on-scroll" style={{ transitionDelay: `${idx * 0.05}s` }}>
                <div className="tech-tile-inner glass">
                  <div className="tech-tile-icon">{tech.icon}</div>
                  <span className="tech-tile-name">{tech.name}</span>
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
            <p className="section-subtitle">Industry leaders rely on ByteSoft for mission-critical software solutions.</p>
          </div>

          <div className="testimonials-masonry">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-v2 reveal-on-scroll">
                <div className="testimonial-v2-inner glass">
                  <div className="testimonial-v2-quote"><Quote size={40} /></div>
                  <p className="testimonial-v2-text">{testimonial.content}</p>
                  <div className="testimonial-v2-footer">
                    <div className="testimonial-v2-avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                      <div className="avatar-border" />
                    </div>
                    <div className="testimonial-v2-info">
                      <h4 className="v2-name">{testimonial.name}</h4>
                      <p className="v2-role">{testimonial.role}</p>
                    </div>
                    <div className="testimonial-v2-rating">
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLIENTS MARQUEE ========== */}
      <div className="clients-marquee">
        <div className="clients-marquee-wrapper">
          <div className="clients-marquee-content">
            {clients.map((client, idx) => (
              <div key={idx} className="client-item">{client}</div>
            ))}
            {clients.map((client, idx) => (
              <div key={`dup-${idx}`} className="client-item">{client}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== BLOG SECTION ========== */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Blog</span>
            <h2 className="section-title">Latest <span className="gradient-text">Insights</span></h2>
            <p className="section-subtitle">Stay updated with the latest trends in technology</p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="blog-card reveal-on-scroll">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><Clock3 size={14} /> {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <button className="blog-link">Read More <ChevronRight size={16} /></button>
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
              <h2>Ready to Build Your <span className="gradient-text">Digital Future?</span></h2>
              <p>Join 150+ businesses that have transformed with our digital solutions. Let's discuss your project.</p>
              <div className="cta-buttons">
                <button className="btn-primary btn-large">Start a Project <ArrowRight size={18} /></button>
                <button className="btn-outline btn-large">Schedule a Call <PhoneCall size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      

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
          background: #030712;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #ffffff;
        }

        /* Background Effects */
        .bg-mesh {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -2;
        }

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
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.02) 0%, transparent 60%);
          pointer-events: none;
          z-index: -1;
        }

        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .section-divider {
          position: relative;
          top: -1px;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 10;
        }

        .section-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }

        .section-divider .shape-fill {
          fill: #030712;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
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
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
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
          height: 100vh;
          perspective: 1000px;
          position: relative;
          overflow: hidden;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          display: none;
        }

        .hero-slide.active {
          opacity: 1;
          display: block;
        }

        .hero-visual {
          position: relative;
          z-index: 20;
        }

        .hero-terminal-demo {
          position: relative;
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.6);
        }

        .hero-floating-tags {
          position: absolute;
          inset: -20px;
          pointer-events: none;
        }

        .tag {
          position: absolute;
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 0.8rem;
          font-weight: 600;
          animation: float 4s ease-in-out infinite;
        }

        .tag:nth-child(1) { top: 10%; left: -30px; animation-delay: 0s; }
        .tag:nth-child(2) { bottom: 20%; right: -20px; animation-delay: 1s; }
        .tag:nth-child(3) { top: 60%; left: -40px; animation-delay: 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .hero-stats-mini {
          display: flex;
          gap: 32px;
          margin-top: 40px;
        }

        .mini-stat {
          display: flex;
          flex-direction: column;
        }

        .mini-stat-val {
          font-size: 1.5rem;
          font-weight: 800;
          color: #3b82f6;
        }

        .mini-stat-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        .hero-controls {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 100;
        }

        .control-dot {
          width: 40px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .control-dot.active {
          background: #3b82f6;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          transition: transform 8s ease;
        }

        .hero-slide.active .hero-bg {
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.75));
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
          color: #94a3b8;
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

        .hero-stats {
          display: flex;
          gap: 32px;
        }

        .hero-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #3b82f6;
        }

        .hero-stat-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* Floating Form Card */
        .floating-card {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .floating-card h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .floating-card p {
          color: #94a3b8;
          margin-bottom: 24px;
        }

        .consult-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .consult-form input,
        .consult-form select {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 0.9rem;
        }

        .consult-form input:focus,
        .consult-form select:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .hero-slider-controls {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .slider-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          width: 30px;
          border-radius: 5px;
          background: #3b82f6;
        }

        /* ========== MARQUEE SECTION ========== */
        .marquee-section {
          background: rgba(59, 130, 246, 0.05);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 16px 0;
          overflow: hidden;
        }

        .marquee-wrapper {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-item {
          margin: 0 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .marquee-separator {
          margin: 0 10px;
          color: #3b82f6;
        }

        /* ========== STATS SECTION ========== */
        .stats-section {
          padding: 60px 0;
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
          padding: 80px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.03);
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
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
        }

        /* ========== PORTFOLIO SECTION ========== */
        .portfolio-section {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .portfolio-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .portfolio-tabs button {
          padding: 8px 24px;
          border-radius: 40px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .portfolio-tabs button:hover,
        .tab-active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .portfolio-card {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
        }

        .portfolio-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16/10;
        }

        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover .portfolio-image img {
          transform: scale(1.1);
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: rgba(59, 130, 246, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-btn {
          padding: 12px 24px;
          background: white;
          border: none;
          border-radius: 40px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .portfolio-info {
          padding: 20px;
        }

        .portfolio-info h4 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }

        .portfolio-info p {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .portfolio-tech {
          font-size: 0.8rem;
          color: #3b82f6;
        }

        /* ========== PROCESS SECTION (ENHANCED) ========== */
        .process-section {
          padding: 100px 0;
          position: relative;
        }

        .process-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .process-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent);
          transform: translateX(-50%);
        }

        .process-item {
          position: relative;
          margin-bottom: 60px;
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .process-item.left {
          justify-content: flex-start;
        }

        .process-dot {
          position: absolute;
          left: 50%;
          top: 30px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .dot-inner {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
        }

        .process-content {
          width: 42%;
          padding: 40px;
          border-radius: 24px;
          position: relative;
        }

        .process-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .process-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-step-num {
          font-size: 2.5rem;
          font-weight: 900;
          opacity: 0.1;
          color: white;
        }

        .process-content h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .process-content p {
          color: #94a3b8;
          line-height: 1.6;
        }

        /* ========== TECH STACK (ENHANCED) ========== */
        .tech-section {
          padding: 100px 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .tech-cloud-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .tech-tile {
          perspective: 1000px;
        }

        .tech-tile-inner {
          position: relative;
          padding: 40px 20px;
          text-align: center;
          border-radius: 24px;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          cursor: pointer;
        }

        .tech-tile:hover .tech-tile-inner {
          transform: translateY(-10px) rotateX(10deg);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 20px 40px -15px rgba(59, 130, 246, 0.3);
        }

        .tech-tile-icon {
          font-size: 2.5rem;
          color: #3b82f6;
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
        }

        .tech-tile-name {
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.9rem;
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
          padding: 100px 0;
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
          color: #cbd5e1;
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

        /* ========== CLIENTS MARQUEE ========== */
        .clients-marquee {
          padding: 40px 0;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
        }

        .clients-marquee-wrapper {
          overflow: hidden;
        }

        .clients-marquee-content {
          display: flex;
          gap: 50px;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }

        .client-item {
          font-size: 1.2rem;
          font-weight: 500;
          color: #64748b;
          transition: color 0.3s ease;
        }

        .client-item:hover {
          color: #3b82f6;
        }

        /* ========== BLOG SECTION ========== */
        .blog-section {
          padding: 80px 0;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .blog-card {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
        }

        .blog-image {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-category {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 12px;
          background: #3b82f6;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .blog-info {
          padding: 24px;
        }

        .blog-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
          font-size: 0.8rem;
          color: #64748b;
        }

        .blog-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .blog-info h3 {
          font-size: 1.1rem;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .blog-link {
          background: none;
          border: none;
          color: #3b82f6;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        /* ========== CTA SECTION ========== */
        .cta-section {
          padding: 80px 0;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 32px;
          padding: 64px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
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
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
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
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .process-line {
            left: 20px;
          }
          
          .process-dot {
            left: 20px;
          }
          
          .process-item {
            justify-content: flex-start !important;
            padding-left: 45px;
          }
          
          .process-content {
            width: 100% !important;
            padding: 24px;
          }
          
          .tech-cloud-grid {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
          
          .testimonials-masonry {
            grid-template-columns: 1fr;
          }
          
          .blog-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .btn-primary, .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;