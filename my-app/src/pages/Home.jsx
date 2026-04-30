// Home.jsx
import { useEffect, useState, useRef } from 'react';
import { 
  Rocket, 
  Code, 
  Cloud, 
  Cpu, 
  Shield, 
  Zap, 
  Layers, 
  Database,
  ArrowRight,
  CheckCircle2,
  Star,
  MonitorSmartphone,
  Server,
  ChevronRight,
  Globe,
  Sparkles,
  Clock,
  Headphones,
  Play,
  Globe as GlobeIcon,
  MessageCircle,
  Share2,
  ThumbsUp,
  Mail,
  MapPin,
  Phone,
  Menu,
  XCircle,
  TrendingUp,
  Users,
  Award,
  Briefcase,
  MessageSquare,
  Heart,
  Settings,
  BarChart3,
  Lock,
  CloudCog,
  Smartphone,
  Bot,
  LineChart,
  ShieldCheck,
  Rocket as RocketIcon
} from 'lucide-react';

// If you don't have images, use these placeholders
const slide1 = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop";
const slide2 = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop";
const slide3 = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop";
const dashboardMockup = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop";

const slides = [
  {
    id: 1,
    image: slide1,
    title: 'Global Scale Infrastructure',
    highlight: 'Scale',
    subtitle: 'Deploy powerful, ultra-fast applications globally with our next-gen cloud architecture.',
    cta: 'Explore Infrastructure'
  },
  {
    id: 2,
    image: slide2,
    title: 'Artificial Intelligence',
    highlight: 'Innovate',
    subtitle: 'Leverage cutting-edge machine learning to automate workflows and drive intelligent decisions.',
    cta: 'Discover AI Solutions'
  },
  {
    id: 3,
    image: slide3,
    title: 'Enterprise Security',
    highlight: 'Secure',
    subtitle: 'Bank-grade encryption and advanced threat protection for your most sensitive data.',
    cta: 'Security Overview'
  }
];

// ============ STYLES ============
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
    --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    line-height: 1.6;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: var(--bg-secondary); }
  ::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: linear-gradient(135deg, #8b5cf6, #ec4899); }

  /* Typography */
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

  /* Container */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    .container { padding: 0 1.5rem; }
  }

  /* Buttons */
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
    text-decoration: none;
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

  .btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  /* Navbar */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1rem 0;
    transition: all 0.3s ease;
  }

  .navbar.scrolled {
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
    padding: 0.75rem 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-icon {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    padding: 0.5rem;
    border-radius: 12px;
    color: white;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
  }

  .nav-link-underline {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transition: width 0.3s;
  }

  .nav-link:hover {
    color: white;
  }

  .nav-link:hover .nav-link-underline {
    width: 100%;
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      height: 100vh;
      background: rgba(10, 10, 15, 0.98);
      backdrop-filter: blur(20px);
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      transition: right 0.3s ease;
      z-index: 100;
    }
    .nav-links.active {
      right: 0;
    }
    .mobile-menu-btn {
      display: block;
      z-index: 101;
    }
  }

  /* Hero Section */
  .hero {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-bg-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease;
  }

  .hero-slide.active {
    opacity: 1;
  }

  .hero-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(10, 10, 15, 0.7) 50%, rgba(10, 10, 15, 0.9) 100%);
  }

  .slider-nav {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    z-index: 10;
  }

  .slider-dot {
    width: 40px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .slider-dot.active .slider-dot-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    animation: progressBar 5s linear;
  }

  @keyframes progressBar {
    from { width: 0; }
    to { width: 100%; }
  }

  .hero-container {
    position: relative;
    z-index: 5;
    width: 100%;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(59, 130, 246, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid rgba(59, 130, 246, 0.3);
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .hero-title-gradient {
    background: linear-gradient(135deg, white, #3b82f6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .hero-stats {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .hero-stat {
    display: flex;
    flex-direction: column;
  }

  .hero-stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3b82f6;
  }

  .hero-stat-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }

  .hero-stat-divider {
    width: 1px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
  }

  .hero-scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    z-index: 10;
  }

  .scroll-mouse {
    width: 26px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    position: relative;
  }

  .scroll-wheel {
    width: 4px;
    height: 8px;
    background: white;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    animation: scrollWheel 2s infinite;
  }

  @keyframes scrollWheel {
    0% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
  }

  .scroll-text {
    font-size: 0.7rem;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .hero-title { font-size: 2.5rem; }
    .hero-subtitle { font-size: 1rem; }
    .hero-cta { flex-direction: column; }
    .hero-cta button { width: 100%; justify-content: center; }
  }

  /* Sections */
  .section {
    padding: 80px 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    padding: 0.25rem 1rem;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #3b82f6;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .section { padding: 60px 0; }
    .section-title { font-size: 2rem; }
  }

  /* Glass Effect */
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

  /* Split Section */
  .split-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .split-card {
    padding: 2rem;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }

  .split-card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .split-card-icon {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    padding: 0.75rem;
    border-radius: 16px;
    color: white;
  }

  .split-card h3 {
    font-size: 1.5rem;
  }

  .split-list {
    list-style: none;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .split-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
  }

  .split-card-footer {
    margin-top: 1rem;
  }

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    padding: 2rem;
    border-radius: 24px;
    transition: all 0.3s;
  }

  .feature-icon-wrapper {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: #3b82f6;
  }

  .feature-card h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .feature-card p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  .feature-link {
    color: #3b82f6;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: gap 0.3s;
  }

  .feature-link:hover {
    gap: 0.75rem;
  }

  /* Demo Section */
  .demo-container {
    border-radius: 24px;
    overflow: hidden;
  }

  .demo-image-wrapper {
    position: relative;
    overflow: hidden;
  }

  .demo-img {
    width: 100%;
    transition: transform 0.5s ease;
  }

  .demo-image-wrapper:hover .demo-img {
    transform: scale(1.05);
  }

  .demo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .demo-image-wrapper:hover .demo-overlay {
    opacity: 1;
  }

  .demo-overlay-content {
    text-align: center;
  }

  .demo-play-btn {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(59, 130, 246, 0.9);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto 1rem;
    transition: transform 0.3s;
  }

  .demo-play-btn:hover {
    transform: scale(1.1);
    background: #3b82f6;
  }

  .demo-features {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .demo-feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
  }

  /* Timeline */
  .timeline-container {
    padding: 3rem;
    border-radius: 32px;
    background: rgba(20, 20, 30, 0.6);
  }

  .timeline-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .timeline-item {
    display: flex;
    gap: 1.5rem;
  }

  .timeline-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
    flex-shrink: 0;
  }

  .timeline-content {
    flex: 1;
    padding: 1.5rem;
    border-radius: 16px;
    border-left: 3px solid #3b82f6;
  }

  .timeline-content h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .timeline-content p {
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .timeline-container { padding: 1.5rem; }
    .timeline-icon { width: 45px; height: 45px; font-size: 1.2rem; }
    .timeline-content { padding: 1rem; }
  }

  /* Stats Section */
  .trust-section {
    padding: 3rem;
    border-radius: 32px;
    text-align: center;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .counter-item {
    text-align: center;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 800;
  }

  .stat-label {
    color: var(--text-secondary);
    margin-top: 0.5rem;
  }

  /* Testimonials */
  .testimonials-carousel {
    max-width: 800px;
    margin: 0 auto;
  }

  .testimonial-card {
    padding: 3rem;
    border-radius: 32px;
    text-align: center;
  }

  .testimonial-rating {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    color: #fbbf24;
    margin-bottom: 1.5rem;
  }

  .testimonial-content {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .testimonial-author img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .testimonial-author-info h4 {
    font-size: 1.1rem;
  }

  .testimonial-author-info p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .testimonial-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .testimonial-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .testimonial-dot.active {
    width: 24px;
    border-radius: 4px;
    background: #3b82f6;
  }

  /* Blog Grid */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .blog-card {
    border-radius: 24px;
    overflow: hidden;
    transition: transform 0.3s;
  }

  .blog-card-image {
    height: 200px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  }

  .blog-card-content {
    padding: 1.5rem;
  }

  .blog-card-meta {
    display: flex;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .blog-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .blog-card p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  .blog-card-link {
    color: #3b82f6;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  /* Newsletter */
  .newsletter-section {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    border-radius: 32px;
    padding: 4rem 2rem;
    text-align: center;
  }

  .newsletter-icon {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  .newsletter-form {
    display: flex;
    max-width: 500px;
    margin: 2rem auto 0;
    gap: 1rem;
  }

  .newsletter-form input {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(59, 130, 246, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-family: inherit;
  }

  .newsletter-form input:focus {
    outline: none;
    border-color: #3b82f6;
  }

  .newsletter-form input::placeholder {
    color: var(--text-muted);
  }

  @media (max-width: 640px) {
    .newsletter-form { flex-direction: column; }
  }

  /* Final CTA */
  .final-cta {
    border-radius: 32px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    padding: 5rem 2rem;
    text-align: center;
  }

  .final-cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
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
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
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

  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }

  /* Video Modal */
  .video-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-modal-content {
    width: 80%;
    height: 60%;
    position: relative;
  }

  .video-modal-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .video-modal-content {
      width: 95%;
      height: 50%;
    }
  }

  /* Animations */
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

  /* Floating Animation */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

// ============ COMPONENTS ============

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Products', 'Services', 'How We Work', 'Testimonials'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-wrapper">
          <div className="logo-icon"><Rocket size={28} /></div>
          <span className="logo-text">Byte<span className="text-gradient">Soft</span></span>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <button 
              key={index} 
              onClick={() => scrollToSection(link.toLowerCase().replace(/\s+/g, '-'))}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {link}
              <span className="nav-link-underline"></span>
            </button>
          ))}
          <button className="btn btn-primary btn-small">
            Get Started <ChevronRight size={18} />
          </button>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <XCircle size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const Counter = ({ target, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div className="counter-item" ref={ref}>
      <div className="stat-number text-gradient">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, index }) => (
  <div className="feature-card glass glowing-border card-3d reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
    <div className="feature-icon-wrapper">{icon}</div>
    <h4>{title}</h4>
    <p>{desc}</p>
    <div className="feature-link">
      Learn More <ChevronRight size={16} />
    </div>
  </div>
);

const VideoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>×</button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

// ============ MAIN HOME COMPONENT ============
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    { icon: <Zap size={28} />, title: 'Lightning Fast', desc: 'Optimized performance for sub-second load times and smooth user experiences.' },
    { icon: <Database size={28} />, title: 'Highly Scalable', desc: 'Architecture designed to grow seamlessly with your user base and demands.' },
    { icon: <Shield size={28} />, title: 'Enterprise Secure', desc: 'Bank-grade security protocols to protect your sensitive data and assets.' },
    { icon: <Cpu size={28} />, title: 'AI Powered', desc: 'Intelligent algorithms that automate and enhance your business operations.' },
    { icon: <Globe size={28} />, title: 'Global Infrastructure', desc: 'Multi-region deployment for worldwide coverage and low latency.' },
    { icon: <Headphones size={28} />, title: '24/7 Support', desc: 'Round-the-clock technical support and dedicated account management.' }
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO, TechNova Solutions',
      content: 'ByteSoft completely transformed our digital infrastructure. Their SaaS platform is incredibly intuitive, and their custom development team delivered our new app ahead of schedule. The quality and attention to detail are unmatched.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'The team at ByteSoft is exceptional. They understood our vision perfectly and delivered a product that exceeded all expectations. Highly recommended for any business looking to scale!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Director, CloudScale',
      content: 'Working with ByteSoft has been a game-changer for our business. Their AI solutions have automated processes we thought would take years to optimize. The ROI has been incredible.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    }
  ];

  const timelineSteps = [
    { icon: <Rocket size={24} />, title: 'Discovery', desc: 'We analyze your requirements and define a strategic roadmap for success.' },
    { icon: <Layers size={24} />, title: 'Design', desc: 'Creating intuitive UI/UX with premium, user-centric aesthetics and interactions.' },
    { icon: <Code size={24} />, title: 'Development', desc: 'Building robust, scalable solutions using cutting-edge technology stacks.' },
    { icon: <Zap size={24} />, title: 'Launch', desc: 'Rigorous testing followed by a seamless, zero-downtime deployment.' },
    { icon: <Shield size={24} />, title: 'Support', desc: 'Continuous monitoring, updates, and dedicated 24/7 technical support.' }
  ];

  const blogPosts = [
    { title: 'The Future of AI in Business', desc: 'How artificial intelligence is reshaping enterprise operations and creating new opportunities.', date: 'Dec 15, 2024', readTime: '5 min read' },
    { title: 'Cloud Security Best Practices', desc: 'Essential strategies for protecting your cloud infrastructure from emerging threats.', date: 'Dec 10, 2024', readTime: '7 min read' },
    { title: 'Scaling Your Startup with SaaS', desc: 'Leveraging software-as-a-service for exponential growth and operational efficiency.', date: 'Dec 5, 2024', readTime: '4 min read' }
  ];

  useEffect(() => {
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

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      observer.disconnect();
      clearInterval(slideTimer);
      clearInterval(testimonialTimer);
      document.head.removeChild(styleSheet);
    };
  }, [testimonials.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-wrapper hero-slider">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image} alt={slide.title} />
              <div className="hero-gradient-overlay"></div>
            </div>
          ))}
          
          <div className="slider-nav">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="slider-dot-progress"></span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-up">
              <Sparkles size={14} />
              <span>AI-Powered Technology Solutions</span>
            </div>
            <h1 className="hero-title animate-fade-up" key={`title-${currentSlide}`}>
              Build. <span className="text-gradient">{slides[currentSlide].highlight}</span>. Dominate.
              <br />
              <span className="hero-title-gradient"> with ByteSoft</span>
            </h1>
            <p className="hero-subtitle animate-fade-up" key={`desc-${currentSlide}`} style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].subtitle}
            </p>
            <div className="hero-cta animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <button className="btn btn-primary btn-large">
                Explore Products <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline btn-large" onClick={() => setIsVideoOpen(true)}>
                Watch Demo <Play size={20} />
              </button>
            </div>
            <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="hero-stat">
                <span className="hero-stat-number">50+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">30+</span>
                <span className="hero-stat-label">Clients</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">98%</span>
                <span className="hero-stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <div className="scroll-text">Scroll to explore</div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section container">
        <div className="section-header reveal">
          <div className="section-badge">What We Offer</div>
          <h2 className="section-title">Everything You Need to <span className="text-gradient">Succeed</span></h2>
          <p className="section-subtitle">Whether you need out-of-the-box SaaS products or tailor-made enterprise solutions, we've got you covered.</p>
        </div>

        <div className="split-section">
          <div className="split-card glass glowing-border card-3d reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="split-card-header">
              <div className="split-card-icon"><Layers size={32} /></div>
              <h3>SaaS Products</h3>
            </div>
            <p>Ready-to-use, scalable platforms designed to optimize your workflow and operations instantly.</p>
            <ul className="split-list">
              <li><CheckCircle2 size={18} color="#10b981" /> AI-Powered Analytics Dashboard</li>
              <li><CheckCircle2 size={18} color="#10b981" /> Secure Cloud Storage Solutions</li>
              <li><CheckCircle2 size={18} color="#10b981" /> Automated Marketing Suite</li>
              <li><CheckCircle2 size={18} color="#10b981" /> Real-time Collaboration Tools</li>
            </ul>
            <div className="split-card-footer">
              <button className="btn btn-outline btn-full">View Products <ArrowRight size={16} /></button>
            </div>
          </div>

          <div className="split-card glass glowing-border card-3d reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="split-card-header">
              <div className="split-card-icon"><Code size={32} /></div>
              <h3>Custom Services</h3>
            </div>
            <p>End-to-end development services tailored specifically to your unique business requirements.</p>
            <ul className="split-list">
              <li><MonitorSmartphone size={18} color="#8b5cf6" /> Web & Mobile App Development</li>
              <li><Server size={18} color="#8b5cf6" /> Backend & API Architecture</li>
              <li><Cpu size={18} color="#8b5cf6" /> Custom AI & ML Integration</li>
              <li><CloudCog size={18} color="#8b5cf6" /> Cloud Migration & Optimization</li>
            </ul>
            <div className="split-card-footer">
              <button className="btn btn-outline btn-full">Hire Our Team <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section container">
        <div className="section-header reveal">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">Why Choose <span className="text-gradient">ByteSoft</span></h2>
          <p className="section-subtitle">We don't just write code; we engineer scalable, high-performance digital products.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="section container reveal">
        <div className="section-header">
          <div className="section-badge">Experience The Future</div>
          <h2 className="section-title">Try Our <span className="text-gradient">Solutions</span> Instantly</h2>
          <p className="section-subtitle">Experience the sleek, intuitive, and highly responsive interfaces we build.</p>
        </div>
        
        <div className="demo-container glass glowing-border card-3d">
          <div className="demo-image-wrapper">
            <img src={dashboardMockup} alt="Dashboard Preview" className="demo-img" />
            <div className="demo-overlay">
              <div className="demo-overlay-content">
                <button className="demo-play-btn" onClick={() => setIsVideoOpen(true)}>
                  <Play size={32} fill="white" />
                </button>
                <h3>Interactive Dashboard Preview</h3>
                <p>See how our platform transforms data into actionable insights</p>
              </div>
            </div>
          </div>
          <div className="demo-features">
            <div className="demo-feature"><Zap size={18} /> Real-time Analytics</div>
            <div className="demo-feature"><Database size={18} /> Live Data Sync</div>
            <div className="demo-feature"><Shield size={18} /> Enterprise Security</div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="section container">
        <div className="section-header reveal">
          <div className="section-badge">Our Process</div>
          <h2 className="section-title">How We <span className="text-gradient">Work</span></h2>
          <p className="section-subtitle">Our proven five-step process ensures flawless delivery and exceptional quality.</p>
        </div>

        <div className="timeline-container glass glowing-border">
          <div className="timeline-items">
            {timelineSteps.map((step, index) => (
              <div key={index} className="timeline-item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="timeline-icon">{step.icon}</div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section container reveal">
        <div className="trust-section glass glowing-border">
          <div className="section-header">
            <div className="section-badge">Trust & Credibility</div>
            <h2 className="section-title">Trusted by <span className="text-gradient">Industry Leaders</span></h2>
          </div>
          <div className="stats-grid">
            <Counter target={50} label="Projects Completed" />
            <Counter target={30} label="Global Clients" />
            <Counter target={98} label="Client Satisfaction" suffix="%" />
            <Counter target={24} label="Support Hours" suffix="/7" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section container reveal">
        <div className="section-header">
          <div className="section-badge">Client Stories</div>
          <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
        </div>
        
        <div className="testimonials-carousel">
          <div className="testimonial-card glass glowing-border card-3d">
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p className="testimonial-content">"{testimonials[currentTestimonial].content}"</p>
            <div className="testimonial-author">
              <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
              <div className="testimonial-author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section container reveal">
        <div className="section-header">
          <div className="section-badge">Latest Insights</div>
          <h2 className="section-title">Technology <span className="text-gradient">Insights</span></h2>
          <p className="section-subtitle">Stay updated with the latest trends and innovations in tech.</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card glass glowing-border card-3d reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="blog-card-image"></div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className="blog-card-link">Read More <ChevronRight size={16} /></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section container reveal">
        <div className="newsletter-section glass glowing-border">
          <div className="newsletter-icon"><Mail size={32} /></div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Subscribe to Our <span className="text-gradient">Newsletter</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Get the latest tech insights and exclusive offers delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section container reveal">
        <div className="final-cta">
          <h2 className="section-title">Let's Build Something <span className="text-gradient">Powerful</span></h2>
          <p className="section-subtitle">Ready to scale your business with next-generation technology? Let's talk.</p>
          <div className="final-cta-buttons">
            <button className="btn btn-primary btn-large">
              Start Your Project <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline btn-large">
              Schedule Consultation <Clock size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
};

export default Home;