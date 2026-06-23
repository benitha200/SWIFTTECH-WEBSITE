import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import StatsBar from '../components/StatsBar';
import ProcessSteps from '../components/ProcessSteps';
import BentoGallery from '../components/BentoGallery';
import ClientsSection from '../components/ClientsSection';
import ImageFrame from '../components/ImageFrame';
import Section from '../components/Section';
import { aboutStats, values, companyStory, deliveryProcess, brand } from '../data/content';
import { images, workGallery } from '../data/images';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/StructuredData';
import { pageSEO } from '../data/seo';

const About = () => (
  <div className="min-h-screen page-main">
    <SEOHead {...pageSEO['/about']} path="/about" />
    <BreadcrumbSchema
      items={[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]}
    />
    <NavBar />

    <PageHero
      badge="About Swittech"
      title="We make enterprise technology"
      highlight="work in the real world"
      description="Independent IT consultancy and software engineers based in Kigali—experienced in Odoo ERP and serving ambitious organizations across East Africa and beyond."
      image={images.team}
    />

    <StatsBar stats={aboutStats.map((s) => ({ ...s, detail: undefined }))} />

    <Section
      variant="light"
      className="section-y"
      decor={{ placement: 'bottom-right', size: 'md', chips: ['Kigali', 'EA', 'Global'], hiddenBelow: true }}
    >
      <div className="split-section">
        <div className="space-y-6">
          <p className="readable-lead font-medium text-slate-200">{companyStory.intro}</p>
          <div>
            <h2 className="text-xl font-bold text-slate-100 mb-2">Our mission</h2>
            <p className="readable">{companyStory.mission}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100 mb-2">How we work</h2>
            <p className="readable">{companyStory.approach}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100 mb-2">Our vision</h2>
            <p className="readable">{companyStory.vision}</p>
          </div>
          <Link to="/contact" className="btn-primary inline-flex">
            Start a conversation
          </Link>
        </div>
        <div className="space-y-4">
          <ImageFrame src={images.hero} alt="Digital transformation" aspect="aspect-[16/10]" />
          <ImageFrame
            src={images.caseStudies[0]}
            alt="Client project delivery"
            aspect="aspect-[16/10]"
            label="Projects that scale"
          />
        </div>
      </div>
    </Section>

    <Section
      variant="light"
      className="section-y"
      decor={{ placement: 'top-right', size: 'sm', chips: ['Trust', 'Delivery', 'Care'], hiddenBelow: true }}
    >
      <ClientsSection />
    </Section>

    <Section variant="muted" className="section-y">
      <p className="section-label mb-2 text-center">Life at Swittech</p>
      <h2 className="section-title text-center mb-12">People, principles, and projects</h2>
      <BentoGallery items={workGallery} />
    </Section>

    <Section variant="light" className="section-y">
      <p className="section-label mb-2 text-center">Principles</p>
      <h2 className="section-title text-center mb-12">What we will not compromise on</h2>
      <dl className="space-y-10">
        {values.map((value) => (
          <div key={value.title}>
            <dt className="text-lg font-bold text-slate-100 mb-2">{value.title}</dt>
            <dd className="readable">{value.description}</dd>
          </div>
        ))}
      </dl>
    </Section>

    <Section variant="muted" className="section-y">
      <div className="split-section split-section--reverse">
        <div>
          <p className="section-label mb-2">Delivery</p>
          <h2 className="section-title mb-10">Your project, step by step</h2>
          <ProcessSteps steps={deliveryProcess} />
        </div>
        <ImageFrame
          src={images.team}
          alt="Swittech team"
          aspect="aspect-[3/4]"
          label="Kigali, Rwanda"
        />
      </div>
    </Section>

    <Section variant="dark" className="section-y">
      <div className="text-center">
        <ImageFrame
          src={images.hero}
          alt="Office location"
          aspect="aspect-[21/9]"
          className="mb-8 max-w-md mx-auto opacity-90"
        />
        <h2 className="text-2xl font-bold mb-4">Headquarters</h2>
        <p className="text-slate-300 mb-2">{brand.address}</p>
        <p className="text-slate-400 text-sm mb-6">{brand.addressDetail}</p>
        <p className="text-slate-300">
          <a href={`mailto:${brand.email}`} className="text-brand-primary hover:underline">
            {brand.email}
          </a>
          {' · '}
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="text-brand-primary hover:underline">
            {brand.phone}
          </a>
        </p>
      </div>
    </Section>

    <CTASection
      title="See if we are the right fit"
      description="We are selective—we want engagements where we can deliver clear value. A short call is enough to know if we should work together."
      primaryLabel="Book a discovery call"
      image={images.team}
    />

    <Footer />
  </div>
);

export default About;
