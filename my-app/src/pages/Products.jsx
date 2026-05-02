import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projects';

const Products = () => {
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

  return (
    <div className="modern-products">
      <Helmet>
        <title>Our Digital Portfolio | Premium Software Products & Projects</title>
        <meta name="description" content="Explore our diverse portfolio of scalable software products, full-stack web applications, enterprise solutions, and high-performance digital projects." />
        <meta name="keywords" content="premium software portfolio, scalable digital products, enterprise web applications, full-stack software development projects, SaaS products showcase, high-performance web architecture, professional tech portfolio, custom software solutions, digital transformation case studies" />
      </Helmet>
      {/* Global Mouse Glow */}
      <div className="mouse-glow" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      
      {/* Background Gradient Mesh */}
      <div className="bg-mesh" />

      {/* ========== HERO SECTION ========== */}
      <section className="products-hero">
        <div className="container relative z-10">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge mx-auto mb-6">
              <Sparkles size={16} />
              <span>Our Portfolio</span>
            </div>
            <h1 className="hero-title">
              Our Digital <span className="gradient-text">Products & Projects</span>
            </h1>
            <p className="hero-desc mx-auto">
              Explore our diverse portfolio of scalable software products, full-stack applications, and enterprise solutions designed to transform industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== PROJECTS GRID ========== */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projectsData.map((project, idx) => (
              <div key={project.id} className="project-card glass reveal-on-scroll" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-category">{project.category}</div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-short-desc">{project.shortDescription}</p>
                  
                  <div className="project-tech-mini">
                    {(project.techStack?.frontend || project.techStack?.backend || []).slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-chip">{tech}</span>
                    ))}
                    {(project.techStack?.frontend || project.techStack?.backend || []).length > 3 && (
                      <span className="tech-chip">+{(project.techStack?.frontend || project.techStack?.backend || []).length - 3} more</span>
                    )}
                  </div>
                  
                  <Link to={`/project/${project.id}`} className="btn-view-details">
                    View Complete Details <ArrowUpRight size={18} />
                  </Link>
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
            <div className="cta-content text-center">
              <h2>Have a Similar <span className="gradient-text">Vision?</span></h2>
              <p>We can build a tailored solution just like these for your business. Let's make it happen.</p>
              <div className="cta-buttons justify-center mt-8">
                <button className="btn-primary btn-large">
                  Start Your Project <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* ========== GLOBAL & BASE STYLES ========== */
        .modern-products {
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
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 40%);
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
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* ========== HERO SECTION ========== */
        .products-hero {
          padding: 160px 0 80px;
          position: relative;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: #c4b5fd;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
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

        /* ========== PROJECTS GRID ========== */
        .projects-section {
          padding: 60px 0 100px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .project-image-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-category {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #e2e8f0;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-info {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .project-short-desc {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .project-tech-mini {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tech-chip {
          padding: 4px 10px;
          background: rgba(59, 130, 246, 0.1);
          color: #93c5fd;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .btn-view-details {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-view-details:hover {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
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
      `}</style>
    </div>
  );
};

export default Products;
