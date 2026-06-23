import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ServiceShowcase from '../components/ServiceShowcase';
import GalleryStrip from '../components/GalleryStrip';
import ImageFrame from '../components/ImageFrame';
import StatsBar from '../components/StatsBar';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import OdooPricingCallout from '../components/OdooPricingCallout';
import Section from '../components/Section';
import { ArrowRightIcon, CheckIcon } from '../components/Icons';
import {
  odooService,
  otherServices,
  deliveryProcess,
  engagementModels,
  faqs,
  trustStats,
  microcopy,
} from '../data/content';
import { images, serviceImages, projectStrip } from '../data/images';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema, ServiceSchema } from '../components/StructuredData';
import { pageSEO } from '../data/seo';

const serviceList = [
  { name: odooService.title, description: odooService.description },
  ...otherServices.map((s) => ({ name: s.title, description: s.description })),
];

const Services = () => (
  <div className="min-h-screen page-main">
    <SEOHead {...pageSEO['/services']} path="/services" />
    <BreadcrumbSchema
      items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ]}
    />
    <ServiceSchema services={serviceList} />
    <NavBar />

    <PageHero
      badge="Our Services"
      title="End-to-end IT services"
      highlight="built around Odoo"
      description={microcopy.servicesHero}
      image={images.hero}
    >
      <p className="mt-6 readable-muted max-w-lg">
        Independent consultancy—experienced with Odoo; not affiliated with Odoo S.A.
      </p>
    </PageHero>

    <StatsBar stats={trustStats} />

    <Section
      variant="light"
      className="section-y"
      decor={{ placement: 'top-right', size: 'md', chips: ['Odoo', 'ERP', 'Cloud'], hiddenBelow: true }}
    >
      <div className="odoo-feature-grid">
        <ImageFrame
          src={serviceImages.odoo}
          alt="Odoo ERP dashboards and workflows"
          aspect="aspect-[4/3] lg:aspect-auto lg:min-h-[480px]"
          label="Flagship · Odoo ERP"
        />
        <div className="lg:py-4">
          <p className="section-label mb-2">Flagship service</p>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">{odooService.title}</h2>
          <p className="readable mb-4">{odooService.description}</p>
          <p className="readable mb-8">{odooService.longDescription}</p>

          <h3 className="font-bold text-slate-100 mb-3">What you gain</h3>
          <ul className="grid sm:grid-cols-3 gap-4 mb-8">
            {odooService.outcomes.map((o) => (
              <li key={o.label} className="p-4 rounded-xl glass-card">
                <p className="text-2xl font-bold text-brand-primary">{o.stat}</p>
                <p className="text-xs text-slate-400 mt-1">{o.label}</p>
              </li>
            ))}
          </ul>

          <ul className="space-y-3 mb-10">
            {odooService.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary">
            Discuss your Odoo project <ArrowRightIcon />
          </Link>
          <OdooPricingCallout className="mt-8" />
        </div>
      </div>
    </Section>

    <Section
      variant="light"
      className="section-y"
      decor={{ placement: 'bottom-left', size: 'sm', chips: ['Web', 'Mobile', 'API'], hiddenBelow: true }}
    >
      <GalleryStrip images={projectStrip} title="Project snapshots" />
      <div className="readable-wide mt-14 mb-10">
        <p className="section-label mb-2">Complementary services</p>
        <h2 className="section-title mb-4">Extend Odoo—or stand alone</h2>
        <p className="readable">
          Many clients start with ERP and add development, cloud, or integrations in phase two.
          Each service connects to measurable outcomes—not technology for its own sake.
        </p>
      </div>
      <ServiceShowcase items={otherServices} linkTo="/contact" />
    </Section>

    <Section
      variant="muted"
      className="section-y"
      decor={{ placement: 'top-left', size: 'sm', chips: ['Fixed', 'Retainer', 'Advisory'], hiddenBelow: true }}
    >
      <div className="split-section split-section--reverse">
        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((m) => (
            <div key={m.title} className="glass-card p-6">
              <h3 className="font-bold text-slate-100 mb-2">{m.title}</h3>
              <p className="text-sm text-brand-primary font-medium mb-3">Best for: {m.bestFor}</p>
              <p className="text-slate-400 text-sm readable">{m.includes}</p>
            </div>
          ))}
        </div>
        <ImageFrame
          src={images.team}
          alt="Consulting workshop"
          aspect="aspect-[4/3]"
          label="Engagement models"
          className="hidden lg:block"
        />
      </div>
    </Section>

    <Section variant="muted" className="section-y">
      <div className="split-section">
        <ImageFrame
          src={images.integration}
          alt="System integrations"
          aspect="aspect-[4/3]"
          label="Delivery methodology"
        />
        <div>
          <p className="section-label mb-2">Delivery methodology</p>
          <h2 className="section-title mb-10">How your project runs</h2>
          <ProcessSteps steps={deliveryProcess} compact />
        </div>
      </div>
    </Section>

    <Section variant="light" className="section-y">
      <h2 className="section-title text-center mb-10">Service FAQs</h2>
      <FAQ items={faqs} />
    </Section>

    <CTASection
      title="Get a scoped proposal—not a guess"
      description="Share your modules, branches, and timeline. We will recommend a phased plan you can take to your board or fund internally."
      primaryLabel="Request a quote"
      secondaryLabel="View case studies"
      secondaryTo="/portfolio"
      image={images.caseStudies[1]}
    />

    <Footer />
  </div>
);

export default Services;
