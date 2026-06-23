import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import CaseStudyFeature from '../components/CaseStudyFeature';
import GalleryStrip from '../components/GalleryStrip';
import BentoGallery from '../components/BentoGallery';
import ClientsSection from '../components/ClientsSection';
import Section from '../components/Section';
import { caseStudies } from '../data/content';
import { images, workGallery, projectStrip } from '../data/images';

import ecotrackImg from '../assets/ecotrack.png';
import mediswiftImg from '../assets/mediswift.png';
import webDevImg from '../assets/web_dev.png';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/StructuredData';
import { pageSEO } from '../data/seo';

const studies = [
  { ...caseStudies[0], image: webDevImg },
  { ...caseStudies[1], image: mediswiftImg },
  { ...caseStudies[2], image: ecotrackImg },
];

const Portfolio = () => (
  <div className="min-h-screen page-main">
    <SEOHead {...pageSEO['/portfolio']} path="/portfolio" />
    <BreadcrumbSchema
      items={[
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/portfolio' },
      ]}
    />
    <NavBar />

    <PageHero
      badge="Case Studies"
      title="Real problems."
      highlight="Measured outcomes."
      description="Each engagement below includes the business challenge, what we delivered, and results clients use in board reviews—not vanity metrics."
      image={ecotrackImg}
    />

    <Section
      variant="muted"
      className="section-y"
      decor={{ placement: 'bottom-left', size: 'md', chips: ['ERP', 'Apps', 'Data'], hiddenBelow: true }}
    >
      <ClientsSection className="mb-14" />
      <GalleryStrip images={projectStrip} title="Delivered across sectors" />
    </Section>

    <Section variant="light" className="section-y">
      <div className="space-y-28">
        {studies.map((study, i) => (
          <CaseStudyFeature
            key={study.title}
            study={study}
            image={study.image}
            reverse={i % 2 === 1}
            detailed
            linkTo="/contact"
            linkLabel="Discuss a similar project"
          />
        ))}
      </div>
    </Section>

    <Section variant="muted" className="section-y">
      <p className="section-label mb-2 text-center">More from our portfolio</p>
      <h2 className="section-title text-center mb-12">Platforms, apps, and integrations</h2>
      <BentoGallery items={workGallery} />
    </Section>

    <Section variant="light" className="section-y">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">Your story could be next</h2>
        <p className="readable">
          We treat case studies as patterns—not bragging. If your challenge resembles one above, we
          can often estimate scope faster because we have solved similar workflow, data, and
          go-live risks before.
        </p>
      </div>
    </Section>

    <CTASection
      title="Request a reference conversation"
      description="On a discovery call we can connect you with relevant experience—without naming clients when confidentiality requires it."
      primaryLabel="Book a call"
      image={images.caseStudies[1]}
    />

    <Footer />
  </div>
);

export default Portfolio;
