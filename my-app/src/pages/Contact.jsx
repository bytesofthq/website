import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, User, Building, MessageSquare, Briefcase, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
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

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: The user needs to replace these with their actual EmailJS credentials
    const SERVICE_ID = "service_gwe0ocl";
    const TEMPLATE_ID = "template_uu4adkx";
    const PUBLIC_KEY = "rnv_5Dfi34ewElXPD";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus({ type: 'success' });
          form.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus({ type: 'error', message: error.text });
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | ByteSoft HQ</title>
        <meta name="description" content="Get in touch with ByteSoft HQ to discuss your next custom software, AI integration, or enterprise web application project." />
      </Helmet>

      {/* Global Mouse Glow */}
      <div className="mouse-glow" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      <div className="bg-mesh" />

      {/* Hero Section */}
      <section className="contact-hero text-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge mx-auto mb-6">
              <Mail size={16} />
              <span>Let's Talk</span>
            </div>
            <h1 className="hero-title">
              Ready to Build Your <span className="gradient-text">Next Project?</span>
            </h1>
            <p className="hero-desc mx-auto">
              Fill out the form below and our team will get back to you within 24 hours to discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Info Column */}
            <div className="contact-info reveal-on-scroll">
              <div className="info-card glass">
                <h3>Contact Information</h3>
                <p className="mb-8 text-slate-400">Reach out to us directly through any of these channels.</p>

                <div className="info-item">
                  <div className="info-icon"><Mail size={20} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@bytesofthq.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Phone size={20} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Headquarters</h4>
                    <p>123 Innovation Drive<br />Tech District, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-wrapper reveal-on-scroll">
              <div className="form-card glass">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-row">
                    <div className="input-group">
                      <label>Your Name <span className="text-red-400">*</span></label>
                      <div className="input-wrapper">
                        <User size={18} className="input-icon" />
                        <input type="text" name="name" placeholder="John Doe" required />
                      </div>
                    </div>

                    <div className="input-group">
                      <label>Company Name <span className="text-red-400">*</span></label>
                      <div className="input-wrapper">
                        <Building size={18} className="input-icon" />
                        <input type="text" name="company" placeholder="Acme Corp" required />
                      </div>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Email Address <span className="text-red-400">*</span></label>
                    <div className="input-wrapper">
                      <Mail size={18} className="input-icon" />
                      <input type="email" name="email" placeholder="john@company.com" required />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Software Type <span className="text-red-400">*</span></label>
                    <div className="input-wrapper select-wrapper">
                      <Briefcase size={18} className="input-icon" />
                      <select name="software_type" required defaultValue="">
                        <option value="" disabled>Select software type...</option>
                        <option value="Web Application">Custom Web Application</option>
                        <option value="Mobile App">Mobile Application (iOS/Android)</option>
                        <option value="Enterprise SaaS">Enterprise SaaS Product</option>
                        <option value="E-commerce">E-commerce Platform</option>
                        <option value="AI Solution">AI / Machine Learning Solution</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Project Details <span className="text-red-400">*</span></label>
                    <div className="input-wrapper textarea-wrapper">
                      <MessageSquare size={18} className="input-icon" />
                      <textarea
                        name="message"
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {submitStatus?.type === 'success' && (
                    <div className="status-message success">
                      <CheckCircle2 size={20} />
                      Your message has been sent successfully! We will get back to you soon.
                    </div>
                  )}

                  {submitStatus?.type === 'error' && (
                    <div className="status-message error">
                      Oops! EmailJS Error: {submitStatus.message || "Unknown error"}
                    </div>
                  )}

                  <button type="submit" className="btn-primary w-full justify-center" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .contact-page {
          position: relative;
          background: #030712;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          padding-bottom: 100px;
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
          top: 0; left: 0;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 100;
          transition: transform 0.1s ease-out;
        }

        .container {
          max-width: 1200px;
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

        /* Hero */
        .contact-hero {
          padding: 160px 0 60px;
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
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 24px;
        }

        .hero-desc {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 600px;
        }

        /* Content Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        /* Info Column */
        .info-card {
          padding: 40px;
          height: 100%;
        }

        .info-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 32px;
        }

        .info-item:last-child { margin-bottom: 0; }

        .info-icon {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          padding: 12px;
          border-radius: 12px;
        }

        .info-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .info-item p {
          color: #94a3b8;
          line-height: 1.6;
        }

        /* Form Column */
        .form-card {
          padding: 40px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 8px;
          color: #cbd5e1;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .textarea-wrapper .input-icon {
          top: 16px;
          transform: none;
        }

        input, select, textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 16px 14px 48px;
          color: #ffffff;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        select {
          appearance: none;
          cursor: pointer;
        }

        select option {
          background: #0f172a;
          color: #fff;
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -8px rgba(59, 130, 246, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Status Messages */
        .status-message {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .status-message.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #34d399;
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #f87171;
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

export default Contact;
