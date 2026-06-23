import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, BRAND_ALIASES, siteNav } from '../data/seo';

/**
 * Organization + LocalBusiness structured data.
 * Injected once on the Home page.
 */
export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: BRAND_ALIASES,
    url: SITE_URL,
    logo: `${SITE_URL}/swifttech_logo.jpeg`,
    image: `${SITE_URL}/swifttech_logo.jpeg`,
    description:
      'SwiftTech Ltd is a leading IT company in Kigali, Rwanda specializing in Odoo ERP implementation, custom software development, system integration, cloud solutions, and IT consulting for businesses across East Africa.',
    telephone: '+250788254137',
    email: 'info@swifttech.co.rw',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kicukiro, Gikondo KST 344 St',
      addressLocality: 'Kigali',
      addressCountry: 'RW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.9740,
      longitude: 30.0619,
    },
    areaServed: [
      { '@type': 'Country', name: 'Rwanda' },
      { '@type': 'Place', name: 'East Africa' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    priceRange: '$$',
    foundingDate: '2018',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 15,
    },
    knowsAbout: [
      'Odoo ERP',
      'ERP Implementation',
      'Software Development',
      'IT Consulting',
      'System Integration',
      'Cloud Solutions',
      'Digital Transformation',
      'Web Development',
      'Mobile App Development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Odoo ERP Implementation & Customization',
            description: 'Full Odoo ERP implementation, customization, data migration, training, and ongoing support for businesses in Rwanda and East Africa.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Development',
            description: 'Custom web applications, mobile apps, and API development for businesses in Kigali, Rwanda.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Consulting & Digital Transformation',
            description: 'Technology roadmaps, IT strategy, and digital transformation consulting for organizations in Rwanda and East Africa.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'System Integration',
            description: 'Connect Odoo to banks, payment gateways, e-commerce, logistics, and legacy systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Solutions & Deployment',
            description: 'Cloud migration, Odoo hosting, CI/CD pipelines, and disaster recovery for businesses in Rwanda.',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/**
 * WebSite schema — enables sitelinks search box in Google.
 */
export const WebSiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: BRAND_ALIASES,
    description: 'Leading IT company and Odoo ERP solutions provider in Rwanda',
    publisher: { '@id': `${SITE_URL}/#organization` },
    hasPart: siteNav.map((item) => ({
      '@type': 'WebPage',
      '@id': `${SITE_URL}${item.path}`,
      name: item.name,
      description: item.description,
      url: `${SITE_URL}${item.path}`,
      isPartOf: { '@id': `${SITE_URL}/#website` },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** Tells Google which pages are primary navigation (sitelink candidates). */
export const SiteNavigationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SwiftTech Ltd site navigation',
    itemListElement: siteNav.map((item, i) => ({
      '@type': 'SiteNavigationElement',
      position: i + 1,
      name: item.name,
      description: item.description,
      url: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/**
 * Breadcrumb schema for any page.
 * @param {Array} items – [{name, path}] e.g. [{name: 'Home', path: '/'}, {name: 'Services', path: '/services'}]
 */
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/**
 * FAQPage schema — makes Google show FAQ dropdowns in search results.
 * @param {Array} faqs – [{question, answer}]
 */
export const FAQSchema = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/**
 * Service schema for the services page.
 * @param {Array} services – [{name, description}]
 */
export const ServiceSchema = ({ services }) => {
  const schema = services.map((svc) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: svc.name,
    provider: { '@id': `${SITE_URL}/#organization` },
    name: svc.name,
    description: svc.description,
    areaServed: [
      { '@type': 'Country', name: 'Rwanda' },
      { '@type': 'Place', name: 'East Africa' },
    ],
  }));

  return (
    <Helmet>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
