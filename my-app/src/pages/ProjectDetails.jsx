import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ExternalLink, GraduationCap, Users, Shield, 
  Activity, Zap, Layout, Server, Database, Sparkles, CheckCircle2
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Find project by id
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
  }, [project]);

  if (!project) return <div className="loading-state">Loading project details...</div>;

  return (
    <div className="project-details-page">
      <Helmet>
        <title>{project.name} | Project Case Study | Custom Software</title>
        <meta name="description" content={project.shortDescription || project.introduction} />
        <meta name="keywords" content={`${project.name}, ${project.category}, custom software development case study, enterprise application showcase, ${(project.techStack?.frontend || []).join(', ')}, ${(project.techStack?.backend || []).join(', ')}, secure scalable architecture, professional software implementation`} />
      </Helmet>
      {/* Global Mouse Glow */}
      <div className="mouse-glow" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      <div className="bg-mesh" />

      {/* Hero Header Section */}
      <div className="project-hero">
        <div className="container relative z-10">
          <Link to="/products" className="back-link mb-8 inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="details-header text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-badge mx-auto mb-6">
                <Sparkles size={16} />
                <span>Project Overview</span>
              </div>
              <h1 className="hero-title gradient-text">
                {project.name}
              </h1>
              {project.partner && (
                <div className="mt-6 mb-2">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    🤝 In Strategic Partnership with <strong className="text-white">{project.partner}</strong>
                  </span>
                </div>
              )}
              <p className="hero-category">{project.category}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 project-details-content">
        {/* Main Image */}
        <motion.div 
          className="main-image-wrapper glass mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={project.image} alt={project.name} className="main-image" />
        </motion.div>

        <div className="content-grid">
          {/* Left Column: Details */}
          <div className="main-content">
            <section className="detail-section reveal-on-scroll">
              <h2 className="section-heading">Introduction</h2>
              <p className="section-text">{project.introduction}</p>
            </section>

            <section className="detail-section reveal-on-scroll">
              <h2 className="section-heading">Key Features</h2>
              
              {Object.entries(project.features || {}).map(([key, list], index) => {
                const colors = ['text-blue-400', 'text-purple-400', 'text-emerald-400', 'text-orange-400'];
                const colorClass = colors[index % colors.length];
                return (
                  <div key={key} className="feature-group mb-8">
                    <h3 className={`sub-heading flex items-center gap-2 capitalize ${colorClass}`}>
                      <CheckCircle2 size={24} /> {key} Features
                    </h3>
                    <ul className="feature-list">
                      {(list || []).map((item, i) => (
                        <li key={i}><CheckCircle2 size={18} className={colorClass} /> {item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </section>

            {project.realTime && project.realTime.length > 0 && (
              <section className="detail-section reveal-on-scroll">
                <h2 className="section-heading flex items-center gap-3">
                  <Zap className="text-yellow-400" /> Real-Time Capabilities
                </h2>
                <p className="section-text mb-4">Uses WebSocket technology to deliver a seamless live experience:</p>
                <ul className="feature-list">
                  {project.realTime.map((item, i) => (
                    <li key={i}><Activity size={18} className="text-yellow-400" /> {item}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.security && project.security.length > 0 && (
              <section className="detail-section reveal-on-scroll">
                <h2 className="section-heading flex items-center gap-3">
                  <Shield className="text-red-400" /> Security & Performance
                </h2>
                <ul className="feature-list">
                  {project.security.map((item, i) => (
                    <li key={i}><CheckCircle2 size={18} className="text-red-400" /> {item}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.impact && project.impact.length > 0 && (
              <section className="detail-section reveal-on-scroll">
                <h2 className="section-heading text-cyan-400">Impact & Value</h2>
                <ul className="feature-list">
                  {project.impact.map((item, i) => (
                    <li key={i}><CheckCircle2 size={18} className="text-cyan-400" /> {item}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="detail-section reveal-on-scroll">
              <h2 className="section-heading">Conclusion</h2>
              <p className="section-text">{project.conclusion}</p>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="sidebar">
            <div className="sidebar-card glass reveal-on-scroll sticky top-24">
              <h3 className="sidebar-heading">Technology Stack</h3>
              
              {project.techStack?.frontend && project.techStack.frontend.length > 0 && (
                <div className="tech-group mb-6">
                  <h4 className="tech-heading flex items-center gap-2"><Layout size={16} /> Frontend</h4>
                  <div className="tech-tags">
                    {project.techStack.frontend.map((t, i) => <span key={i} className="tech-tag bg-blue-500/20 text-blue-300">{t}</span>)}
                  </div>
                </div>
              )}

              {project.techStack?.backend && project.techStack.backend.length > 0 && (
                <div className="tech-group mb-6">
                  <h4 className="tech-heading flex items-center gap-2"><Server size={16} /> Backend</h4>
                  <div className="tech-tags">
                    {project.techStack.backend.map((t, i) => <span key={i} className="tech-tag bg-purple-500/20 text-purple-300">{t}</span>)}
                  </div>
                </div>
              )}

              {project.techStack?.tools && project.techStack.tools.length > 0 && (
                <div className="tech-group mb-8">
                  <h4 className="tech-heading flex items-center gap-2"><Database size={16} /> Additional Tools</h4>
                  <div className="tech-tags">
                    {project.techStack.tools.map((t, i) => <span key={i} className="tech-tag bg-emerald-500/20 text-emerald-300">{t}</span>)}
                  </div>
                </div>
              )}

              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                  Live Project Link <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        /* ========== GLOBAL & BASE STYLES ========== */
        .project-details-page {
          position: relative;
          overflow-x: hidden;
          background: #030712;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #ffffff;
          min-height: 100vh;
        }

        .project-hero {
          padding-top: 160px;
          padding-bottom: 40px;
          position: relative;
          z-index: 10;
        }

        .project-details-content {
          padding-bottom: 100px;
        }

        .hero-category {
          color: #94a3b8;
          font-size: 1.2rem;
          margin-top: 16px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .bg-mesh {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .mouse-glow {
          position: fixed;
          top: 0; left: 0;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 100;
          transition: transform 0.1s ease-out;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
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

        .back-link {
          color: #94a3b8;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .back-link:hover { color: #fff; }

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
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .main-image-wrapper {
          width: 100%;
          height: 500px;
          overflow: hidden;
          padding: 12px;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
        }

        .detail-section {
          margin-bottom: 60px;
        }

        .section-heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .sub-heading {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .section-text {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.8;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1.05rem;
          color: #cbd5e1;
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .feature-list li svg {
          margin-top: 4px;
          flex-shrink: 0;
        }

        /* Sidebar Styles */
        .sidebar-card {
          padding: 32px;
        }

        .sidebar-heading {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-heading {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 12px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -8px rgba(59, 130, 246, 0.4);
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

        @media (max-width: 992px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .main-image-wrapper {
            height: 350px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
