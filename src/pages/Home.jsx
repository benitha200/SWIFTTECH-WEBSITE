import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import ServiceShowcase from '../components/ServiceShowcase';
import CaseStudyFeature from '../components/CaseStudyFeature';
import StatsBar from '../components/StatsBar';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CatchyPill from '../components/CatchyPill';
import PhotoCollage from '../components/PhotoCollage';
import BentoGallery from '../components/BentoGallery';
import GalleryStrip from '../components/GalleryStrip';
import ImageFrame from '../components/ImageFrame';
import ClientsSection from '../components/ClientsSection';
import Section from '../components/Section';
import { HeroDecor } from '../components/DecorGraphics';
import { ArrowRightIcon, CheckIcon } from '../components/Icons';
import {
  brand,
  odooService,
  otherServices,
  whyChoose,
  caseStudies,
  testimonials,
  trustStats,
  heroPoints,
  businessChallenges,
  industries,
  deliveryProcess,
  faqs,
  microcopy,
} from '../data/content';
import { images, workGallery, projectStrip } from '../data/images';
import SEOHead from '../components/SEOHead';
import {
  OrganizationSchema,
  WebSiteSchema,
  SiteNavigationSchema,
  FAQSchema,
  BreadcrumbSchema,
} from '../components/StructuredData';
import { pageSEO } from '../data/seo';

const Home = () => {
  const featuredCase = caseStudies[0];

  return (
    <div className="min-h-screen overflow-x-hidden page-main">
      <SEOHead {...pageSEO['/']} path="/" />
      <OrganizationSchema />
      <WebSiteSchema />
      <SiteNavigationSchema />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }]} />
      <NavBar />

      <Section variant="hero" className="relative section-y pb-8 overflow-hidden" noContainer>
        <HeroDecor className="hidden lg:block" />
        <div className="site-container grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
          <div>
            <div className="hero-reveal mb-5">
              <CatchyPill>{microcopy.heroPill}</CatchyPill>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] mb-5">
              <span className="hero-reveal hero-reveal-delay-1 block">{microcopy.heroLine1}</span>
              <span className="block text-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2">
                {microcopy.heroLine2}
              </span>
            </h1>
            <p className="hero-reveal hero-reveal-delay-2 readable-lead mb-3">
              {microcopy.heroSub}
            </p>
            <p className="hero-reveal hero-reveal-delay-3 readable-muted mb-8">
              {microcopy.heroAside}
            </p>
            <div className="hero-reveal hero-reveal-delay-3 flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="btn-primary">
                Get a free consultation <ArrowRightIcon />
              </Link>
              <Link to="/services" className="btn-secondary">
                See the playbook
              </Link>
            </div>
            <ul className="hero-reveal hero-reveal-delay-4 space-y-2 text-sm text-slate-400">
              {heroPoints.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-brand-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-reveal hero-reveal-delay-2">
            <PhotoCollage
              main={images.hero}
              secondary={images.software}
              mainAlt="Swittech consultants delivering IT solutions"
              secondaryAlt="Mobile and web applications we build"
            />
          </div>
        </div>
      </Section>

      <StatsBar stats={trustStats} />

      <Section
        variant="light"
        className="section-y"
        decor={{ placement: 'bottom-left', size: 'sm', chips: ['Odoo', 'Sync', 'Scale'], hiddenBelow: true }}
      >
        <div className="split-section">
          <div className="readable-wide">
            <p className="section-label mb-3">Why businesses call us</p>
            <h2 className="section-title mb-5">
              Sound familiar? <span className="text-highlight">You are not alone.</span>
            </h2>
            <p className="readable-lead mb-3">
              Growth has outpaced your tools. We replace friction with flow—usually starting with
              Odoo, then extending where your market demands it.
            </p>
            <p className="readable-muted mb-8">{microcopy.challengesHook}</p>
            <div className="space-y-8">
              {businessChallenges.map((item, i) => (
                <article key={item.problem} className="pb-8 border-b border-white/10 last:border-0 last:pb-0">
                  <span className="text-brand-primary font-bold text-sm">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-slate-100 mt-2 mb-2">{item.problem}</h3>
                  <p className="readable text-sm mb-3">{item.impact}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="font-semibold text-brand-primary">The fix: </span>
                    {item.solution}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="split-section-media hidden lg:block">
            <ImageFrame
              src={images.team}
              alt="Team collaboration"
              aspect="aspect-[3/4]"
              label="Delivery & support"
            />
          </div>
        </div>
      </Section>

      <Section
        variant="muted"
        className="section-y overflow-x-hidden"
        decor={{ placement: 'top-right', size: 'md', chips: ['ERP', 'Stock', 'Finance'], hiddenBelow: true }}
      >
        <GalleryStrip images={projectStrip} title="Work we deliver" fullWidth />
        <div className="odoo-feature-grid mt-16">
          <ImageFrame
            src={images.odoo}
            alt="Odoo ERP implementation"
            aspect="aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
            className="odoo-feature-visual"
            label="Odoo ERP"
          />
          <div className="flex flex-col justify-center">
            <CatchyPill>Core capability</CatchyPill>
            <h2 className="section-title mt-4 mb-4">{odooService.title}</h2>
            <p className="readable mb-6">{odooService.longDescription}</p>
            <p className="text-sm text-slate-400 mb-6 italic">{microcopy.odooBanner}</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {odooService.outcomes.map((o) => (
                <div key={o.label} className="p-4 rounded-xl glass-card">
                  <p className="text-2xl font-bold text-brand-primary">{o.stat}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">{o.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.odoo.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Odoo official pricing <ArrowRightIcon />
              </a>
              <Link
                to="/contact#contact-person"
                className="font-semibold text-slate-400 inline-flex items-center gap-2 hover:text-brand-primary transition-colors"
              >
                Contact {brand.contactPerson} <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="section-label mb-4">Beyond ERP</p>
          <ServiceShowcase items={otherServices} />
        </div>
      </Section>

      <Section
        variant="light"
        className="section-y"
        decor={{ placement: 'bottom-right', size: 'sm', chips: ['Retail', 'MFG', 'Health'], hiddenBelow: true }}
      >
        <div className="split-section split-section--reverse">
          <div>
            <p className="section-label mb-2">Industries</p>
            <h2 className="section-title mb-4">
              Built for <span className="text-highlight">your sector</span>
            </h2>
            <p className="readable mb-8">
              Odoo flexes—we configure it for compliance, multi-branch reporting, and operating
              realities across East Africa.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {industries.map((ind) => (
                <div key={ind.name}>
                  <h3 className="font-bold text-slate-100 mb-1">{ind.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{ind.description}</p>
                </div>
              ))}
            </div>
          </div>
          <BentoGallery items={workGallery} />
        </div>
      </Section>

      <Section
        variant="muted"
        className="section-y"
        decor={{ placement: 'bottom-left', size: 'md', chips: ['Discover', 'Build', 'Support'], hiddenBelow: true }}
      >
        <div className="split-section">
          <div className="readable-wide mb-10 lg:mb-0">
            <p className="section-label mb-2">How we work</p>
            <h2 className="section-title mb-4">From first call to long-term support</h2>
            <p className="readable">{microcopy.processHook}</p>
          </div>
          <ImageFrame
            src={images.consulting}
            alt="Planning and delivery"
            aspect="aspect-[4/3] lg:aspect-[3/4]"
            label="Discovery → Go-live"
          />
        </div>
        <div className="mt-14">
          <ProcessSteps steps={deliveryProcess} />
        </div>
      </Section>

      <Section
        variant="light"
        className="section-y"
        decor={{ placement: 'top-right', size: 'sm', chips: false, hiddenBelow: true }}
      >
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="section-label mb-2">Why {brand.name}</p>
            <h2 className="section-title mb-6">
              Sharp tech. <span className="text-highlight">Straight talk.</span>
            </h2>
            <ul className="space-y-8">
              {whyChoose.map((item) => (
                <li key={item.title}>
                  <h3 className="font-bold text-slate-100 text-lg mb-2">{item.title}</h3>
                  <p className="readable">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg img-frame">
            <img
              src={images.team}
              alt="Swittech delivery team"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <div className="p-8 bg-slate-900 text-white">
              <p className="text-lg font-medium leading-relaxed italic">
                “Technology only creates value when it matches how people work. We simplify what
                should be simple—and automate what should not be manual.”
              </p>
              <p className="mt-4 text-sm text-slate-400">
                — {brand.contactPerson}, {brand.contactRole}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        variant="muted"
        className="section-y"
        decor={{ placement: 'bottom-right', size: 'sm', chips: ['ROI', 'Data', 'Growth'], hiddenBelow: true }}
      >
        <p className="section-label mb-2">Proof</p>
        <h2 className="section-title mb-10">{microcopy.proofHook}</h2>
        <CaseStudyFeature
          study={featuredCase}
          image={images.caseStudies[0]}
          detailed
          linkTo="/portfolio"
          linkLabel="More wins →"
        />
      </Section>

      <Section variant="light" className="section-y">
        <ClientsSection className="mb-16 md:mb-20" />
        <p className="section-label mb-2 text-center">Client voices</p>
        <h2 className="section-title text-center mb-12">After go-live, this is what we hear</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.author}
              className="border-t-2 border-brand-primary pt-8 bg-white/5 backdrop-blur-sm rounded-b-2xl px-4 pb-4 glass-card"
            >
              <div className="mb-4 rounded-lg overflow-hidden h-24 img-frame">
                <img
                  src={images.caseStudies[i % images.caseStudies.length]}
                  alt=""
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">“{t.quote}”</p>
              <footer>
                <cite className="not-italic font-semibold text-slate-100 block text-sm">
                  {t.author}
                </cite>
                <span className="text-xs text-slate-400">{t.company}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section variant="muted" className="section-y">
        <p className="section-label mb-2 text-center">Questions</p>
        <h2 className="section-title text-center mb-4">No jargon. Just answers.</h2>
        <p className="readable text-center mb-10 max-w-2xl mx-auto">
          What CFOs, ops leads, and IT managers ask us before signing.
        </p>
        <FAQ items={faqs} limit={4} />
        <p className="text-center mt-8">
          <Link to="/contact" className="font-semibold text-brand-primary hover:underline">
            Still curious? Book a discovery call →
          </Link>
        </p>
      </Section>

      <CTASection
        title={microcopy.ctaHome}
        description={`Tell us where you are today—spreadsheets, legacy ERP, or scaling Odoo. We respond ${brand.responseTime} with a plan you can act on.`}
        primaryLabel="Book a discovery call"
        image={images.team}
      />

      <Footer />
    </div>
  );
};

export default Home;
