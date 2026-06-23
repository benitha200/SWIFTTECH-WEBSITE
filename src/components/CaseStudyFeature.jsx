import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from './Icons';

const CaseStudyFeature = ({
  study,
  image,
  reverse = false,
  detailed = false,
  linkTo = '/portfolio',
  linkLabel = 'More case studies',
}) => (
  <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
    <div
      className={`rounded-2xl overflow-hidden bg-[#141b2d] border border-white/10 img-frame ${reverse ? 'lg:order-2' : ''}`}
    >
      <img
        src={image}
        alt={study.title}
        className="w-full aspect-[16/10] object-cover"
        loading="lazy"
      />
    </div>
    <div className={reverse ? 'lg:order-1' : ''}>
      <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-2">
        {study.category}
      </p>
      {study.client && (
        <p className="text-sm text-slate-400 mb-3">{study.client}</p>
      )}
      <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">{study.title}</h3>

      {detailed && study.challenge && (
        <div className="space-y-5 mb-6 text-sm">
          <div>
            <h4 className="font-bold text-slate-100 mb-1">The challenge</h4>
            <p className="text-slate-400 leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-100 mb-1">What we delivered</h4>
            <p className="text-slate-400 leading-relaxed">{study.solution}</p>
          </div>
        </div>
      )}

      {!detailed && (
        <p className="text-slate-400 leading-relaxed mb-6">{study.description}</p>
      )}

      <ul className="space-y-2 mb-8">
        {(study.results || study.metrics).map((r) => (
          <li key={r} className="flex items-start gap-2 text-slate-300 text-sm">
            <CheckIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            {r}
          </li>
        ))}
      </ul>

      {linkTo && (
        <Link
          to={linkTo}
          className="font-semibold text-brand-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          {linkLabel} <ArrowRightIcon />
        </Link>
      )}
    </div>
  </div>
);

export default CaseStudyFeature;
