import React, { useEffect, useState } from 'react';
import {
  Rocket, Target, Award, Users, Heart, Code, Cloud, Smartphone,
  Shield, Clock, Globe, TrendingUp, CheckCircle, ChevronRight,
  Briefcase, Calendar, MapPin, Mail, Phone, 
  Users as Linkedin, Globe as Twitter, Globe as Facebook, Camera as Instagram, 
  Quote, Star, Sparkles, Zap, Coffee,
  BookOpen, Lightbulb, BarChart3, Settings, Headphones, Trophy,
  Eye, Flag, Compass, Gift, ThumbsUp, ArrowRight, Play,
  Building2, UserCheck, Rocket as RocketIcon, BadgeCheck,
  Crown, Diamond, Medal, Star as StarIcon, HeartHandshake,
  Camera
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0
  });

  // Company Stats
  const companyStats = [
    { icon: <Briefcase size={28} />, value: 150, suffix: '+', label: 'Projects Completed', color: '#3b82f6' },
    { icon: <Users size={28} />, value: 50, suffix: '+', label: 'Happy Clients', color: '#10b981' },
    { icon: <Award size={28} />, value: 25, suffix: '+', label: 'Industry Awards', color: '#f59e0b' },
    { icon: <Clock size={28} />, value: 6, suffix: '+', label: 'Years Experience', color: '#8b5cf6' }
  ];

  // Team Members
  const teamMembers = [
    {
      name: 'Arjun Mehta',
      role: 'Founder & CEO',
      bio: '15+ years in software architecture with a passion for AI-driven solutions.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      bio: 'Full-stack expert specializing in scalable cloud architectures.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Rahul Verma',
      role: 'Lead Designer',
      bio: 'Award-winning UI/UX designer focused on user-centric experiences.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Neha Gupta',
      role: 'Head of Product',
      bio: 'Product strategist with expertise in SaaS and enterprise solutions.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      social: { linkedin: '#', twitter: '#', email: '#' }
    }
  ];

  // Company Values
  const values = [
    { icon: <Heart size={24} />, title: 'Passion', desc: 'We love what we do and it shows in every project.', color: '#ef4444' },
    { icon: <Shield size={24} />, title: 'Integrity', desc: 'Honest communication and transparent processes.', color: '#10b981' },
    { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'Constantly learning and implementing new technologies.', color: '#f59e0b' },
    { icon: <Users size={24} />, title: 'Collaboration', desc: "We work as an extension of your team.", color: '#8b5cf6' }
  ];

  // Milestones
  const milestones = [
    { year: '2018', title: 'Company Founded', desc: 'Started with a vision to transform digital experiences.', icon: <Rocket size={20} />, achieved: true },
    { year: '2020', title: 'First 50 Projects', desc: 'Reached milestone of 50 successful deliveries.', icon: <Target size={20} />, achieved: true },
    { year: '2022', title: 'Global Expansion', desc: 'Expanded operations to 12+ countries worldwide.', icon: <Globe size={20} />, achieved: true },
    { year: '2024', title: 'AI Innovation Lab', desc: 'Launched dedicated AI research division.', icon: <Sparkles size={20} />, achieved: true }
  ];

  // Certifications
  const certifications = [
    { name: 'ISO 27001 Certified', icon: <Shield size={20} />, year: '2023' },
    { name: 'AWS Advanced Partner', icon: <Cloud size={20} />, year: '2023' },
    { name: 'Google Cloud Partner', icon: <Globe size={20} />, year: '2024' },
    { name: 'Microsoft Gold Partner', icon: <Award size={20} />, year: '2024' }
  ];

  // Industries Served
  const industries = [
    'Healthcare', 'Education', 'Finance', 'Retail', 
    'Manufacturing', 'Logistics', 'Real Estate', 'Entertainment'
  ];

  // Counter Animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 150, clients: 50, experience: 6, team: 25 };
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          experience: Math.floor(targets.experience * progress),
          team: Math.floor(targets.team * progress)
        });
        
        if (currentStep >= steps) {
          setCounters(targets);
          clearInterval(timer);
        }
      }, interval);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats-section');
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

  return (
    <div className="about-page">
      {/* Background Effects */}
      <div className="about-bg-mesh" />
      
      {/* ========== HERO SECTION ========== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-overlay" />
        </div>
        <div className="container">
          <div className="about-hero-content reveal-on-scroll">
            <div className="about-hero-badge">
              <Sparkles size={16} />
              <span>Our Story</span>
            </div>
            <h1 className="about-hero-title">
              Crafting Digital <span className="gradient-text">Excellence</span> Since 2018
            </h1>
            <p className="about-hero-desc">
              We're a team of passionate technologists, designers, and strategists 
              dedicated to building innovative software solutions that drive real business growth.
            </p>
            <div className="about-hero-buttons">
              <button className="btn-primary">Join Our Journey <ArrowRight size={18} /></button>
              <button className="btn-outline">Meet The Team <Users size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMPANY VALUES SECTION ========== */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Our Philosophy</span>
            <h2 className="section-title">What Drives <span className="gradient-text">Us Forward</span></h2>
            <p className="section-subtitle">Core values that shape our culture and define our approach</p>
          </div>

          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card reveal-on-scroll" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="value-icon" style={{ background: `${value.color}15`, color: value.color }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-wrapper">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="stat-item reveal-on-scroll">
                <div className="stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
                <div className="stat-number">
                  {stat.value === 150 ? counters.projects : 
                   stat.value === 50 ? counters.clients :
                   stat.value === 25 ? counters.team : counters.experience}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUR STORY / MISSION SECTION ========== */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content reveal-on-scroll">
              <div className="tabs-container">
                <div className="tabs-header">
                  <button 
                    className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                    onClick={() => setActiveTab('mission')}
                  >
                    <Flag size={18} /> Our Mission
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                    onClick={() => setActiveTab('vision')}
                  >
                    <Eye size={18} /> Our Vision
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'story' ? 'active' : ''}`}
                    onClick={() => setActiveTab('story')}
                  >
                    <BookOpen size={18} /> Our Story
                  </button>
                </div>
                <div className="tabs-content">
                  {activeTab === 'mission' && (
                    <div className="tab-pane">
                      <h3>Empowering Businesses Through Technology</h3>
                      <p>
                        Our mission is to democratize access to cutting-edge technology by delivering 
                        enterprise-grade software solutions that are accessible, scalable, and transformative. 
                        We believe that every business, regardless of size, deserves world-class digital tools 
                        to compete and thrive in the modern economy.
                      </p>
                      <div className="mission-points">
                        <div><CheckCircle size={18} /> Innovation First</div>
                        <div><CheckCircle size={18} /> Client Success Focus</div>
                        <div><CheckCircle size={18} /> Quality Excellence</div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'vision' && (
                    <div className="tab-pane">
                      <h3>Shaping The Future of Digital Innovation</h3>
                      <p>
                        We envision a world where technology seamlessly integrates into every aspect of 
                        business, creating intelligent systems that anticipate needs, automate processes, 
                        and unlock human potential. By 2030, we aim to be the global leader in AI-powered 
                        business solutions.
                      </p>
                      <div className="vision-points">
                        <div><Target size={18} /> Global Leader by 2030</div>
                        <div><Target size={18} /> 1000+ Successful Projects</div>
                        <div><Target size={18} /> AI-Driven Solutions</div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'story' && (
                    <div className="tab-pane">
                      <h3>From Humble Beginnings to Global Impact</h3>
                      <p>
                        Founded in a small garage in 2018, ByteSoft started with just 3 passionate developers 
                        and a dream to build exceptional software. Today, we've grown into a team of 25+ 
                        talented professionals serving clients across 12 countries. Our journey has been 
                        fueled by countless cups of coffee, late-night coding sessions, and an unwavering 
                        commitment to excellence.
                      </p>
                      <div className="story-highlight">
                        <Crown size={20} /> 150+ Projects • 50+ Clients • 98% Retention Rate
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="story-image reveal-on-scroll">
              <div className="image-card">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
                  alt="Team working"
                />
                <div className="image-badge">
                  <Coffee size={20} />
                  <span>1000+ Cups of Coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MILESTONES TIMELINE ========== */}
      <section className="milestones-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">Key <span className="gradient-text">Milestones</span></h2>
            <p className="section-subtitle">Celebrating our growth and achievements along the way</p>
          </div>

          <div className="timeline">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'} reveal-on-scroll`}>
                <div className="timeline-dot">
                  <div className="timeline-icon">{milestone.icon}</div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                  {milestone.achieved && <div className="timeline-badge">Achieved ✓</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="team-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Our Heroes</span>
            <h2 className="section-title">Meet The <span className="gradient-text">Leadership</span></h2>
            <p className="section-subtitle">The brilliant minds behind our success story</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card reveal-on-scroll" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a href={member.social.linkedin}><Linkedin size={18} /></a>
                    <a href={member.social.twitter}><Twitter size={18} /></a>
                    <a href={member.social.email}><Mail size={18} /></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="team-cta reveal-on-scroll">
            <p>Want to join our amazing team?</p>
            <button className="btn-outline">View Open Positions <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATIONS SECTION ========== */}
      <section className="certifications-section">
        <div className="container">
          <div className="certs-grid">
            <div className="certs-content reveal-on-scroll">
              <span className="section-badge">Certifications</span>
              <h2>Trusted by <span className="gradient-text">Industry Leaders</span></h2>
              <p>Our commitment to quality and security is backed by leading industry certifications.</p>
              <div className="certs-list">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="cert-item">
                    {cert.icon}
                    <div>
                      <strong>{cert.name}</strong>
                      <span>Since {cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="certs-image reveal-on-scroll">
              <div className="award-grid">
                <div className="award-card">
                  <Trophy size={32} />
                  <div>Best Software Agency 2023</div>
                </div>
                <div className="award-card">
                  <Medal size={32} />
                  <div>Top Rated on Clutch</div>
                </div>
                <div className="award-card">
                  <Diamond size={32} />
                  <div>Excellence in Innovation</div>
                </div>
                <div className="award-card">
                  <BadgeCheck size={32} />
                  <div>Verified Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES WE SERVE ========== */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Industries</span>
            <h2 className="section-title">Sectors We <span className="gradient-text">Transform</span></h2>
            <p className="section-subtitle">Delivering tailored solutions across diverse industries</p>
          </div>

          <div className="industries-cloud">
            {industries.map((industry, idx) => (
              <div key={idx} className="industry-tag reveal-on-scroll">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="about-testimonials">
        <div className="container">
          <div className="testimonial-feature reveal-on-scroll">
            <div className="testimonial-quote-icon">
              <Quote size={48} />
            </div>
            <p className="testimonial-feature-text">
              "ByteSoft has been an invaluable partner in our digital transformation journey. 
              Their technical expertise, commitment to quality, and client-centric approach 
              set them apart. They don't just build software; they build success stories."
            </p>
            <div className="testimonial-feature-author">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Client" />
              <div>
                <strong>Sarah Johnson</strong>
                <span>CEO, TechCorp International</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-card reveal-on-scroll">
            <div className="cta-content">
              <HeartHandshake size={48} color="#3b82f6" />
              <h2>Ready to Start Your Journey With Us?</h2>
              <p>Let's discuss how we can help transform your business with cutting-edge solutions.</p>
              <div className="cta-buttons">
                <button className="btn-primary btn-large">Start a Project <ArrowRight size={18} /></button>
                <button className="btn-outline btn-large">Schedule a Meeting <Calendar size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* ========== ABOUT PAGE STYLES ========== */
        .about-page {
          position: relative;
          background: #030712;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .about-bg-mesh {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: -2;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Reveal Animations */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
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
          font-size: 1rem;
        }

        /* Buttons */
        .btn-primary, .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 0.9rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -8px rgba(59, 130, 246, 0.4);
        }

        .btn-outline {
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .btn-outline:hover {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .btn-large {
          padding: 14px 32px;
          font-size: 1rem;
        }

        /* ========== HERO SECTION ========== */
        .about-hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .about-hero-bg {
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80') center/cover;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(3, 7, 18, 0.9), rgba(3, 7, 18, 0.7));
        }

        .about-hero-content {
          position: relative;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 0;
        }

        .about-hero-badge {
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

        .about-hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 20px;
        }

        .about-hero-desc {
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .about-hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ========== VALUES SECTION ========== */
        .values-section {
          padding: 80px 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .value-card {
          text-align: center;
          padding: 40px 24px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.03);
        }

        .value-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .value-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
        }

        .value-card p {
          color: #94a3b8;
          line-height: 1.6;
        }

        /* ========== STATS SECTION ========== */
        .about-stats-section {
          padding: 60px 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .stats-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          text-align: center;
        }

        .stat-item {
          padding: 20px;
        }

        .stat-icon {
          margin-bottom: 16px;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .stat-label {
          color: #64748b;
          font-size: 0.9rem;
        }

        /* ========== STORY SECTION ========== */
        .story-section {
          padding: 80px 0;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .tabs-container {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .tabs-header {
          display: flex;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          background: transparent;
          border: none;
          color: #94a3b8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
          border-bottom: 2px solid #3b82f6;
        }

        .tabs-content {
          padding: 32px;
        }

        .tab-pane h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .tab-pane p {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .mission-points, .vision-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mission-points div, .vision-points div {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #10b981;
        }

        .story-highlight {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          color: #3b82f6;
          font-weight: 600;
        }

        .story-image .image-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .story-image img {
          width: 100%;
          height: auto;
          border-radius: 20px;
        }

        .image-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 40px;
          font-size: 0.8rem;
        }

        /* ========== MILESTONES TIMELINE ========== */
        .milestones-section {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
        }

        .timeline-item.left {
          padding-right: calc(50% + 30px);
        }

        .timeline-item.right {
          padding-left: calc(50% + 30px);
        }

        .timeline-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: #1e293b;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .timeline-icon {
          color: #3b82f6;
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.02);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .timeline-year {
          font-size: 0.8rem;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .timeline-content h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .timeline-content p {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .timeline-badge {
          display: inline-block;
          margin-top: 10px;
          padding: 4px 12px;
          background: rgba(16, 185, 129, 0.2);
          border-radius: 20px;
          font-size: 0.7rem;
          color: #10b981;
        }

        /* ========== TEAM SECTION ========== */
        .team-section {
          padding: 80px 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .team-image {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-social {
          position: absolute;
          bottom: -50px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 12px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          transition: bottom 0.3s ease;
        }

        .team-card:hover .team-social {
          bottom: 0;
        }

        .team-social a {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .team-social a:hover {
          transform: scale(1.1);
        }

        .team-info {
          padding: 20px;
          text-align: center;
        }

        .team-info h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
        }

        .team-role {
          color: #3b82f6;
          font-size: 0.8rem;
          margin-bottom: 12px;
        }

        .team-info p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .team-cta {
          text-align: center;
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
        }

        .team-cta p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        /* ========== CERTIFICATIONS SECTION ========== */
        .certifications-section {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .certs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .certs-content .section-badge {
          display: inline-block;
          margin-bottom: 16px;
        }

        .certs-content h2 {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .certs-content p {
          color: #94a3b8;
          margin-bottom: 32px;
        }

        .certs-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cert-item div {
          display: flex;
          flex-direction: column;
        }

        .cert-item span {
          font-size: 0.8rem;
          color: #64748b;
        }

        .award-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .award-card {
          text-align: center;
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .award-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
        }

        .award-card svg {
          color: #f59e0b;
          margin-bottom: 12px;
        }

        /* ========== INDUSTRIES SECTION ========== */
        .industries-section {
          padding: 80px 0;
        }

        .industries-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .industry-tag {
          padding: 12px 28px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: default;
        }

        .industry-tag:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: #3b82f6;
          transform: translateY(-2px);
        }

        /* ========== TESTIMONIALS SECTION ========== */
        .about-testimonials {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .testimonial-feature {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .testimonial-quote-icon {
          color: #3b82f6;
          opacity: 0.5;
          margin-bottom: 20px;
        }

        .testimonial-feature-text {
          font-size: 1.3rem;
          line-height: 1.6;
          color: #e2e8f0;
          margin-bottom: 30px;
        }

        .testimonial-feature-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .testimonial-feature-author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-feature-author strong {
          display: block;
          margin-bottom: 4px;
        }

        .testimonial-feature-author span {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* ========== CTA SECTION ========== */
        .about-cta {
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
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          margin: 20px 0 16px;
        }

        .cta-content p {
          color: #94a3b8;
          margin-bottom: 32px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 968px) {
          .story-grid {
            grid-template-columns: 1fr;
          }
          
          .certs-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .timeline::before {
            left: 30px;
          }
          
          .timeline-item.left,
          .timeline-item.right {
            padding-left: 70px;
            padding-right: 0;
          }
          
          .timeline-dot {
            left: 30px;
          }
        }

        @media (max-width: 768px) {
          .stats-wrapper {
            grid-template-columns: 1fr;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
          }
          
          .award-grid {
            grid-template-columns: 1fr;
          }
          
          .tabs-header {
            flex-direction: column;
          }
          
          .cta-card {
            padding: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;