import React from 'react';
import { Link } from 'react-router-dom';
import { CompassDecor } from './DecorGraphics';

const isExternalLink = (to) => /^(https?:|tel:|mailto:)/i.test(to);

const CtaLink = ({ to, className, children }) =>
  isExternalLink(to) ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );

const CTASection = ({
  title = 'Ready to Transform Your Business?',
  description = 'Schedule a consultation with our experts. We will assess your needs and propose a clear path to modernization.',
  primaryLabel = 'Get a Quote',
  primaryTo = '/contact',
  secondaryLabel = 'View Services',
  secondaryTo = '/services',
  image,
}) => (
  <section className="py-20 section-muted">
    <div className="site-container cta-band relative overflow-hidden p-10 md:p-14">
      <CompassDecor
        placement="bottom-right"
        size="sm"
        theme="dark"
        chips={false}
        rotate={false}
        className="hidden sm:block opacity-40"
      />
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a]/90 via-brand-primary/70 to-[#141b2d]/90" aria-hidden="true" />
        </>
      )}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
          <p className="text-lg text-slate-200 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4 shrink-0">
          <CtaLink to={primaryTo} className="btn-white">
            {primaryLabel}
          </CtaLink>
          <CtaLink
            to={secondaryTo}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-colors"
          >
            {secondaryLabel}
          </CtaLink>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
