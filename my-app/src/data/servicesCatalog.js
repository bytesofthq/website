import {
  ShoppingCart,
  School,
  HeartPulse,
  Building2,
  Smartphone,
  Search,
  Bot,
  Cloud,
  Layout,
} from 'lucide-react';

/**
 * Single source of truth for services (Home + Services pages).
 * Icon: Lucide component constructor.
 */
export const SERVICES_CATALOG = [
  {
    id: 'ecommerce',
    Icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    desc: 'High-converting storefronts and marketplaces with smooth checkout.',
    metric: '+32% avg conversion uplift',
    color: '#3b82f6',
    tag: 'Popular',
    highlight: 'Commerce that converts',
    detail:
      'We design storefronts and marketplaces around checkout clarity, performance, and integrations—so merchandising and fulfillment teams can move fast without breaking the customer experience.',
    keywords: ['Storefront UX', 'Payments & checkout', 'Catalog & inventory', 'Order ops'],
  },
  {
    id: 'school-erp',
    Icon: School,
    title: 'School ERP Systems',
    desc: 'Attendance, exams, fees, and communication in one platform.',
    metric: '10k+ students supported',
    color: '#10b981',
    tag: 'Featured',
    highlight: 'One system for your campus',
    detail:
      'Unify attendance, assessments, fee collection, and parent communication with role-based access and workflows school staff already understand—reducing admin load and support tickets.',
    keywords: ['Attendance & timetables', 'Exams & grading', 'Fees & reminders', 'Parent portal'],
  },
  {
    id: 'healthcare',
    Icon: HeartPulse,
    title: 'Healthcare Software',
    desc: 'Secure patient workflows for clinics and hospital teams.',
    metric: '99.9% data accuracy goal',
    color: '#ef4444',
    tag: 'HIPAA',
    highlight: 'Clinical workflows, safely',
    detail:
      'From intake to follow-up, we build HIPAA-aware flows with auditing, consent, and least-privilege access—so clinicians spend time on patients, not duplicate data entry.',
    keywords: ['Secure PHI handling', 'Scheduling & intake', 'Care team coordination', 'Audit trails'],
  },
  {
    id: 'enterprise-crm',
    Icon: Building2,
    title: 'Enterprise CRM',
    desc: 'Lead and customer lifecycle management with smart automation.',
    metric: '+41% sales team productivity',
    color: '#f59e0b',
    tag: '',
    highlight: 'Pipeline clarity & automation',
    detail:
      'Implement CRM pipelines, assignment rules, and automation that mirror how your revenue team actually sells—fewer spreadsheets, clearer accountability, measurable funnel movement.',
    keywords: ['Lead routing', 'Pipeline reporting', 'Integrations', 'Workflow automation'],
  },
  {
    id: 'app-development',
    Icon: Smartphone,
    title: 'App Development',
    desc: 'Fast, reliable mobile apps for Android and iOS.',
    metric: '4.8+ app store UX targets',
    color: '#8b5cf6',
    tag: 'React Native',
    highlight: 'Ship on both stores',
    detail:
      'Product-minded mobile builds with offline-ready patterns, push, and observability—we stay close to release requirements so store reviews and crash rates stay healthy.',
    keywords: ['Android & iOS', 'Offline-first UX', 'Push & deeplinks', 'Release readiness'],
  },
  {
    id: 'seo-growth',
    Icon: Search,
    title: 'SEO & Growth',
    desc: 'Search visibility and growth campaigns backed by analytics.',
    metric: '+3.1x average traffic growth',
    color: '#ec4899',
    tag: '',
    highlight: 'Measured acquisition',
    detail:
      'Technical SEO foundations plus content and analytics instrumentation—so experiments tie back to conversions, not vanity metrics.',
    keywords: ['Technical SEO', 'Content structure', 'Analytics & events', 'CRO experiments'],
  },
  {
    id: 'ai-integration',
    Icon: Bot,
    title: 'AI Integration',
    desc: 'Practical AI features and automation for core workflows.',
    metric: '-37% manual effort',
    color: '#06b6d4',
    tag: 'Latest',
    highlight: 'AI where it earns ROI',
    detail:
      'We embed retrieval, summarization, and routing where they reduce rework—paired with evaluations, guardrails, and observability suited to regulated or high-trust domains.',
    keywords: ['Workflow copilots', 'RAG & knowledge', 'Evals & safety', 'API orchestration'],
  },
  {
    id: 'cloud-services',
    Icon: Cloud,
    title: 'Cloud Services',
    desc: 'Cloud architecture, migration, and cost-optimized infrastructure.',
    metric: '-28% infra cost optimization',
    color: '#f97316',
    tag: 'Enterprise',
    highlight: 'Resilient, right-sized infra',
    detail:
      'Landing zones, migrations, IaC, and cost guardrails—we align environments to your compliance and uptime needs without oversized bills.',
    keywords: ['Landing zones', 'Kubernetes & IaC', 'Observability', 'Cost controls'],
  },
  {
    id: 'ui-ux-design',
    Icon: Layout,
    title: 'UI/UX Design',
    desc: 'User-first interfaces designed for clarity and conversion.',
    metric: '+26% funnel completion',
    color: '#14b8a6',
    tag: 'Agency',
    highlight: 'Design tied to outcomes',
    detail:
      'Research-informed UI systems, prototyping, and handoff-ready specs—so engineering ships quickly and users don’t stall in confusing flows.',
    keywords: ['Design systems', 'Prototypes', 'Accessibility', 'Handoff QA'],
  },
];
