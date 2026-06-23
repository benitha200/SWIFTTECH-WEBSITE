/** Canonical site URL — must match your live domain. */
export const SITE_URL = 'https://swifttech.rw';

export const SITE_NAME = 'SwiftTech Ltd';

export const SITE_TAGLINE = 'IT Company & Odoo ERP Solutions in Rwanda';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/swifttech_logo.jpeg`;

/** Brand name variants people search for (used in meta keywords & schema). */
export const BRAND_ALIASES = [
  'SwiftTech',
  'Swifttech',
  'Swift Tech',
  'Swifttech Ltd',
  'SwiftTech Rwanda',
  'Swifttech Rwanda',
  'Swittech',
];

export const SEO_KEYWORDS = [
  ...BRAND_ALIASES,
  'IT company Rwanda',
  'IT companies in Rwanda',
  'IT company Kigali',
  'IT companies Kigali',
  'Odoo Rwanda',
  'Odoo implementation Rwanda',
  'Odoo ERP Kigali',
  'Odoo partner Rwanda',
  'ERP implementation Rwanda',
  'software development Rwanda',
  'IT consulting Rwanda',
  'digital transformation Rwanda',
  'East Africa IT company',
].join(', ');

export const pageSEO = {
  '/': {
    title: SITE_TAGLINE,
    description:
      'SwiftTech Ltd (Swifttech) is a leading IT company in Kigali, Rwanda. Odoo ERP implementation, custom software, system integration, cloud solutions, and IT consulting for businesses across Rwanda and East Africa.',
    keywords: SEO_KEYWORDS,
  },
  '/services': {
    title: 'IT Services & Odoo ERP Implementation',
    description:
      'Odoo ERP implementation, customization, software development, system integration, and cloud services from SwiftTech Ltd — a trusted IT company in Rwanda serving Kigali and East Africa.',
    keywords: `${SEO_KEYWORDS}, Odoo services, ERP customization, web development Rwanda`,
  },
  '/about': {
    title: 'About SwiftTech Ltd — IT Company in Rwanda',
    description:
      'Meet SwiftTech Ltd (Swifttech Rwanda): independent IT consultancy and Odoo specialists based in Kigali. We help organizations across Rwanda and East Africa deliver reliable digital transformation.',
    keywords: `${SEO_KEYWORDS}, about Swifttech, IT consultancy Rwanda`,
  },
  '/portfolio': {
    title: 'Case Studies — Odoo & Software Projects in Rwanda',
    description:
      'See how SwiftTech Ltd delivers Odoo ERP, custom software, and integration projects for clients in Rwanda and East Africa. Real case studies from an experienced IT company in Kigali.',
    keywords: `${SEO_KEYWORDS}, Odoo case studies, software projects Rwanda`,
  },
  '/contact': {
    title: 'Contact SwiftTech Ltd — Kigali, Rwanda',
    description:
      'Contact SwiftTech Ltd for Odoo implementation quotes and IT project enquiries in Rwanda. Speak with Sam Ngoga, Managing Director. Kigali office: Kicukiro, Gikondo KST 344 St. info@swifttech.co.rw',
    keywords: `${SEO_KEYWORDS}, contact Swifttech, Odoo quote Rwanda`,
  },
};

/**
 * Main site sections — used for sitelink hints (schema + footer).
 * Google picks sitelinks automatically; clear nav + descriptions help.
 */
export const siteNav = [
  {
    path: '/services',
    name: 'Services',
    description:
      'Odoo ERP implementation, software development, system integration, and cloud services in Rwanda.',
  },
  {
    path: '/about',
    name: 'About',
    description:
      'Independent IT consultancy and Odoo specialists based in Kigali, serving East Africa.',
  },
  {
    path: '/portfolio',
    name: 'Case Studies',
    description:
      'Real Odoo ERP, custom software, and integration projects delivered for clients in Rwanda.',
  },
  {
    path: '/contact',
    name: 'Contact',
    description:
      'Free discovery call and Odoo quotes. Speak with Sam Ngoga, Managing Director, in Kigali.',
  },
];

export const sitemapRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/portfolio', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
];
