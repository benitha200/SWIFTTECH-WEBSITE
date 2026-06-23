export const brand = {
  name: 'Swittech',
  legalName: 'SwiftTech Ltd',
  /** Common search spellings — used in alt text and visible SEO copy */
  searchName: 'Swifttech',
  searchNameRegional: 'Swifttech Rwanda',
  tagline: 'Smart IT & Odoo Solutions',
  seoTagline: 'IT company in Kigali, Rwanda · Odoo ERP & custom software',
  email: 'info@swifttech.co.rw',
  phone: '+250 788 254 137',
  contactPerson: 'Sam Ngoga',
  contactRole: 'Managing Director',
  contactTitle: 'Your primary contact at Swittech',
  contactIntro:
    'For Odoo implementation quotes and IT project enquiries, speak directly with Sam. He coordinates discovery calls and assigns the right consultants to your scope.',
  contactHours: 'Mon–Fri, 8:00–18:00 (CAT)',
  address: 'Kigali, Rwanda',
  addressDetail: 'Kicukiro, Gikondo KST 344 St',
  responseTime: 'within one business day',
};

/** Official Odoo license pricing (external) */
export const odooPricing = {
  url: 'https://www.odoo.com/pricing',
  note: 'Odoo subscriptions are billed by Odoo S.A. Swittech handles implementation and support—we are not an official Odoo partner.',
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Case Studies' },
  { to: '/contact', label: 'Contact' },
];

export const trustStats = [
  { value: '100+', label: 'Projects delivered', detail: 'ERP, apps & integrations' },
  { value: '50+', label: 'Business clients', detail: 'SMEs to enterprise' },
  { value: '8+', label: 'Years of expertise', detail: 'IT & Odoo specialization' },
  { value: '90-day', label: 'Typical Odoo go-live', detail: 'Standard multi-module rollout', noSuffix: true },
];

export const heroPoints = [
  'Odoo ERP implementation & customization',
  'Web, mobile & API development',
  'Cloud, integration & managed support',
];

/** Short, punchy lines — professional but memorable */
export const microcopy = {
  heroPill: 'SwiftTech Ltd · IT company in Kigali, Rwanda',
  
  heroLine1: 'We build systems that make your business run faster.',
  
  heroLine2: 'Technology that works for you.',
  
  heroSub:
    'Swifttech Ltd is an IT company in Kigali, Rwanda—known as Swittech to many clients. We help companies automate operations, customize Odoo, improve workflows, secure infrastructure, and build scalable systems that support real growth.',
  
  heroAside: 'Less manual work. Faster operations. Smarter decisions.',
  
  ctaHome: 'Transform Your Business Systems',
  
  ctaSub: 'Book a free consultation and discover what technology can do for your company.',
};

export const businessChallenges = [
  {
    problem: 'Disconnected systems and spreadsheets',
    impact: 'Teams duplicate work, reports lag behind reality, and leadership lacks a single view of performance.',
    solution: 'We unify sales, inventory, finance, and operations on Odoo—or integrate your existing tools with secure APIs.',
  },
  {
    problem: 'Manual processes that do not scale',
    impact: 'Growth increases headcount instead of margin. Errors creep into orders, stock, and billing.',
    solution: 'We automate workflows end to end: approvals, notifications, invoicing, and warehouse moves—configured to how you actually operate.',
  },
  {
    problem: 'Legacy software holding back innovation',
    impact: 'New product lines, branches, or digital channels become expensive or slow to launch.',
    solution: 'We modernize with phased roadmaps—cloud-ready architecture, custom apps where needed, and training so your team owns the change.',
  },
];

export const odooService = {
  id: 'odoo',
  featured: true,
  title: 'Odoo Implementation & Customization',
  subtitle: 'Core ERP practice',
  description:
    'Odoo is the operational backbone for thousands of growing businesses worldwide. Swittech designs, implements, and extends Odoo so your teams run sales, inventory, accounting, HR, and manufacturing from one platform—with data you can trust.',
  longDescription:
    'Whether you are replacing spreadsheets, migrating from another ERP, or scaling an existing Odoo instance, we align configuration with your real processes—not generic templates. Our consultants map workflows in discovery workshops, configure modules, develop custom apps when standard Odoo is not enough, and train your staff before go-live.',
  benefits: ['Process automation', 'Operational efficiency', 'Scalable growth'],
  outcomes: [
    { stat: '40–60%', label: 'reduction in manual reporting (typical)' },
    { stat: '1', label: 'platform for sales, stock & finance' },
    { stat: '24/7', label: 'access to real-time dashboards' },
  ],
  features: [
    'Full Odoo ERP implementation',
    'Business process automation',
    'Custom module development',
    'Third-party integrations (payments, logistics, BI)',
    'Data migration & cutover planning',
    'User training & change management',
    'Ongoing Odoo support & upgrades',
  ],
  modules: [
    'Sales & CRM',
    'Inventory & Warehouse',
    'Accounting & Invoicing',
    'Purchase & Vendors',
    'Manufacturing (MRP)',
    'HR & Payroll',
    'Project & Timesheets',
    'Website & E-commerce',
  ],
};

export const otherServices = [
  {
    id: 'software',
    title: 'Software Development',
    description:
      'Customer portals, internal tools, and mobile apps built to integrate with Odoo and your existing stack—secure, maintainable, and ready to scale.',
    features: ['Web applications', 'Mobile apps (iOS & Android)', 'API-first architecture', 'UX-focused delivery'],
  },
  {
    id: 'consulting',
    title: 'IT Consulting & Digital Transformation',
    description:
      'Technology roadmaps, vendor selection, and transformation programs that connect board-level goals to an executable delivery plan.',
    features: ['IT strategy & audits', 'Process digitization', 'Change management', 'ROI-focused planning'],
  },
  {
    id: 'integration',
    title: 'System Integration',
    description:
      'Connect Odoo to banks, payment gateways, e-commerce, logistics, and legacy systems so data flows automatically and accurately.',
    features: ['REST & webhook APIs', 'Middleware & ETL', 'Real-time sync', 'Error monitoring'],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions & Deployment',
    description:
      'Hosted Odoo and application workloads on reliable cloud infrastructure—with backups, monitoring, and security baselines.',
    features: ['Cloud migration', 'Odoo hosting', 'CI/CD pipelines', 'Disaster recovery'],
  },
  {
    id: 'support',
    title: 'Maintenance & Technical Support',
    description:
      'SLA-backed support for Odoo and custom software: incident response, patches, performance tuning, and continuous improvement.',
    features: ['Help desk & SLAs', 'Security patches', 'Performance optimization', 'Monthly health reviews'],
  },
];

export const industries = [
  {
    name: 'Distribution & Retail',
    description: 'Multi-branch inventory, pricing, and sales integrated with accounting and purchasing.',
  },
  {
    name: 'Manufacturing',
    description: 'BOMs, work orders, quality checks, and stock moves tied to financials.',
  },
  {
    name: 'Professional Services',
    description: 'Projects, timesheets, billing, and CRM in one flow from lead to invoice.',
  },
  {
    name: 'Healthcare & Clinics',
    description: 'Scheduling, billing integrations, and operational dashboards with access controls.',
  },
  {
    name: 'NGOs & Public Sector',
    description: 'Transparent procurement, grants tracking, and reporting for donors and auditors.',
  },
  {
    name: 'Hospitality & F&B',
    description: 'POS integrations, stock recipes, and multi-location cost control.',
  },
];

export const deliveryProcess = [
  {
    step: '01',
    title: 'Discover',
    duration: '1–2 weeks',
    description:
      'We interview stakeholders, map current processes, and define success metrics. You receive a clear scope, timeline, and investment estimate—no surprises later.',
  },
  {
    step: '02',
    title: 'Design',
    duration: '2–3 weeks',
    description:
      'Solution architecture, Odoo module configuration plan, integration blueprint, and UX for any custom apps. Sign-off before build begins.',
  },
  {
    step: '03',
    title: 'Deliver',
    duration: 'Project-based',
    description:
      'Agile sprints with weekly demos. Data migration rehearsals, UAT with your team, and documentation throughout—not only at the end.',
  },
  {
    step: '04',
    title: 'Deploy',
    duration: '1–2 weeks',
    description:
      'Cutover planning, go-live support, and hypercare. We stay on call while your teams transition to the new system.',
  },
  {
    step: '05',
    title: 'Support',
    duration: 'Ongoing',
    description:
      'SLA-backed support, Odoo upgrades, optimization sprints, and training for new staff as you grow.',
  },
];

export const whyChoose = [
  {
    title: 'Hands-on Odoo experience',
    description:
      'Odoo is a core part of our work—not a side offering. Our team has delivered multiple implementations and customizations, so you get practical configuration advice and realistic timelines, not generic templates.',
  },
  {
    title: 'Business outcomes, not buzzwords',
    description:
      'Every proposal ties to metrics you care about: days to close books, order error rate, stock accuracy, or time spent on manual reports. Technology serves the number, not the slide deck.',
  },
  {
    title: 'Regional presence, global standards',
    description:
      'Based in Rwanda with experience serving East African and international clients. Local accountability with engineering and project practices aligned to enterprise expectations.',
  },
  {
    title: 'Partnership beyond go-live',
    description:
      'We do not disappear after launch. Training, documentation, support retainers, and upgrade paths are part of how we work—because ERP value compounds over years, not weeks.',
  },
];

export const engagementModels = [
  {
    title: 'Fixed-scope implementation',
    bestFor: 'Clear requirements, defined modules, target go-live date',
    includes: 'Discovery, design, build, migration, training, and go-live support',
  },
  {
    title: 'Dedicated team / retainer',
    bestFor: 'Ongoing product work, integrations, or multiple workstreams',
    includes: 'Monthly capacity for development, Odoo enhancements, and support',
  },
  {
    title: 'Advisory & discovery',
    bestFor: 'Evaluating Odoo, planning migration, or auditing current systems',
    includes: 'Workshops, documentation, roadmap, and executive summary',
  },
];

export const caseStudies = [
  {
    title: 'Regional Distribution ERP',
    category: 'Odoo Implementation',
    client: 'Multi-branch distributor · East Africa',
    challenge:
      'Four branches ran separate spreadsheets for stock and sales. Month-end consolidation took five days and was often disputed by branch managers.',
    solution:
      'Swittech deployed Odoo Inventory, Sales, and Accounting with branch-specific warehouses, automated inter-branch transfers, and role-based dashboards for HQ.',
    description:
      'Unified inventory, sales, and accounting for a multi-branch distributor—reducing manual reporting by 60% within 90 days.',
    results: [
      'Month-end close reduced from 5 days to 2',
      'Stock accuracy improved to 98% across branches',
      'Full rollout in 90 days with parallel training',
    ],
    metrics: ['60% less manual work', '4 branches connected', '90-day rollout'],
  },
  {
    title: 'Healthcare Operations Platform',
    category: 'System Integration',
    client: 'Clinic network · Healthcare',
    challenge:
      'Patient scheduling, billing, and lab results lived in separate systems. Staff re-keyed data daily; leadership had no live view of utilization.',
    solution:
      'API integrations between scheduling, billing, and a central analytics layer—with Odoo for procurement and financial consolidation.',
    description:
      'Integrated patient scheduling, billing, and analytics across clinics with secure APIs and real-time dashboards.',
    results: [
      'Eliminated 12+ hours/week of duplicate data entry',
      '99.9% uptime on integration middleware',
      'Executive dashboard refreshed every 15 minutes',
    ],
    metrics: ['99.9% uptime', 'Real-time sync', 'Secure access controls'],
  },
  {
    title: 'E-Commerce & Fulfillment Suite',
    category: 'Software Development',
    client: 'Retail brand · E-commerce',
    challenge:
      'Online orders were emailed to warehouse staff; inventory counts in the web shop often disagreed with the warehouse.',
    solution:
      'Custom storefront connected to Odoo via API—orders, payments, and stock levels synchronized automatically with pick-pack-ship workflows.',
    description:
      'Custom web storefront with Odoo backend integration, automating orders from checkout to warehouse dispatch.',
    results: [
      'Order processing throughput increased 3×',
      'Inventory sync errors dropped below 0.5%',
      'Mobile-friendly experience for field sales reps',
    ],
    metrics: ['3× order throughput', 'Odoo + payment APIs', 'Mobile-ready'],
  },
];

/** Organizations Swittech has delivered for — add names in content.js as needed */
export const clientsSection = {
  label: 'Trusted by',
  title: 'Organizations we\'ve worked with',
  description:
    'Manufacturing, healthcare, logistics, and retail teams in Rwanda and East Africa who trust us for Odoo, software, and integrations.',
};

export const clients = [
  {
    name: 'Salama Machine Ltd',
    sector: 'Manufacturing',
    work: 'Odoo ERP · inventory & production',
    featured: true,
  },
  {
    name: 'EcoTrack',
    sector: 'Sustainability & analytics',
    work: 'Enterprise platform & dashboards',
  },
  {
    name: 'MediSwift',
    sector: 'Healthcare',
    work: 'Mobile app · system integration',
  },
  {
    name: 'East Africa Logistics Co.',
    sector: 'Distribution',
    work: 'Multi-branch Odoo rollout',
  },
  {
    name: 'FinTech Solutions Ltd.',
    sector: 'Financial services',
    work: 'API integrations & support',
  },
  {
    name: 'Professional Services Group',
    sector: 'Consulting',
    work: 'Digital transformation roadmap',
  },
];

export const testimonials = [
  {
    quote:
      'Swittech transformed our operations with Odoo. What used to take days of spreadsheets now happens in real time. Their team understood our processes from day one and challenged us where our workflows were inefficient—in a good way.',
    author: 'Operations Director',
    company: 'East Africa Logistics Co.',
  },
  {
    quote:
      'Professional, responsive, and technically excellent. They delivered our integration project on schedule, documented everything clearly, and continue to provide outstanding support when we expand to new branches.',
    author: 'Chief Technology Officer',
    company: 'FinTech Solutions Ltd.',
  },
  {
    quote:
      'From strategy to deployment, Swittech felt like an extension of our team. Our digital transformation roadmap is now executable, funded, and owned by department heads—not locked in a consultant’s deck.',
    author: 'Managing Partner',
    company: 'Professional Services Group',
  },
];

export const faqs = [
  {
    question: 'How long does a typical Odoo implementation take?',
    answer:
      'A focused deployment for one company with standard modules (sales, inventory, accounting) often goes live in 8–14 weeks after discovery. Multi-branch, manufacturing, or heavy customization extends timeline—we provide a detailed plan after discovery, never a generic estimate.',
  },
  {
    question: 'Can you migrate data from our current ERP or Excel?',
    answer:
      'Yes. We audit your data, map fields to Odoo, run test migrations, and reconcile balances before cutover. Messy historical data is common; we plan cleansing sprints so go-live is not blocked by perfectionism.',
  },
  {
    question: 'Do you support Odoo after go-live?',
    answer:
      'Support retainers include help desk access, bug fixes, minor configuration changes, upgrade planning, and performance reviews. Most clients stay with us long term because context matters—your processes, your customizations, your team.',
  },
  {
    question: 'Is Odoo suitable for our industry?',
    answer:
      'Odoo is used in distribution, manufacturing, services, retail, nonprofits, and more. In discovery we validate fit honestly—if a niche requirement needs custom development or a complementary tool, we say so upfront.',
  },
  {
    question: 'How do you price projects?',
    answer:
      'Fixed scope after discovery for implementations; monthly retainers for ongoing work. We break down phases (discovery, build, migration, training) so you can stage investment. No hidden licensing surprises—we clarify Odoo edition and hosting costs early.',
  },
  {
    question: 'Where do I see Odoo license pricing?',
    answer:
      'Subscription plans and current rates are published by Odoo S.A. at odoo.com/pricing. Swittech helps you implement and support Odoo—we can advise on edition fit during discovery, but licenses are purchased through Odoo.',
  },
  {
    question: 'Where is your team based?',
    answer:
      'Our headquarters is in Kigali, Rwanda. We deliver remotely and on-site across East Africa and work with international clients who need a capable, accountable technology provider in the region.',
  },
];

export const aboutStats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Active Clients' },
  { value: '8+', label: 'Years in IT Services' },
  { value: '15+', label: 'Technology consultants' },
];

export const companyStory = {
  intro:
    'Swittech was founded to close a gap we saw repeatedly: ambitious businesses investing in software that never matched how work actually happened. Spreadsheets multiplied. ERPs sat underused. IT vendors disappeared after go-live.',
  mission:
    'Our mission is to make enterprise-grade technology—especially Odoo ERP—accessible, understandable, and profitable for organizations in Rwanda and across East Africa.',
  approach:
    'We hire consultants who can sit in a finance meeting and a technical stand-up the same day. We document decisions. We train your people. We measure success in operational terms, not ticket counts.',
  vision:
    'To be the most trusted independent IT services provider in the region for Odoo and software delivery—known for honest advice, reliable execution, and relationships measured in years, not projects.',
};

export const values = [
  {
    title: 'Innovation with discipline',
    description:
      'We adopt proven tools and architectures—not hype. When we recommend AI, cloud, or custom code, it is because the business case is clear.',
  },
  {
    title: 'Reliability you can plan around',
    description:
      'Milestones, demos, and transparent status reports. When risks appear, we surface them early with options—not surprises at go-live.',
  },
  {
    title: 'Integrity in every engagement',
    description:
      'Fair scoping, realistic timelines, and the willingness to say no when a project is not a fit. Trust is our primary sales channel.',
  },
];

export const contactPage = {
  title: 'Contact us',
  headline: 'Start a conversation',
  highlight: 'that moves your project forward',
  subtext:
    'Tell us what you are trying to fix—Odoo rollout, custom software, or integration. We reply with clear next steps, not a generic auto-response.',
  formTitle: 'Send us a message',
  formIntro:
    'Share as much context as you can. Sam Ngoga (Managing Director) coordinates enquiries and assigns the right consultant to your scope.',
};

export const contactReasons = [
  'Free discovery call for Odoo and IT projects',
  'Written proposal with scope, timeline, and phases',
  'No obligation—use our roadmap internally even if you defer',
  'NDA available for sensitive process or data discussions',
];

/** Shown in footer — accurate positioning re: Odoo S.A. */
export const legalNote =
  'Swittech is an independent IT services company. We are not an official Odoo partner or affiliate of Odoo S.A.';
