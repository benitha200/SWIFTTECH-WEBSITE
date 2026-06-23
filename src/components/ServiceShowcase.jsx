import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';
import { serviceImages } from '../data/images';

const ServiceShowcase = ({ items, linkTo = '/services' }) => (
  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
    {items.map((item) => (
      <Link
        key={item.id}
        to={linkTo}
        className="service-showcase group flex flex-col sm:flex-row gap-0 sm:gap-0 glass-card rounded-2xl overflow-hidden hover:border-brand-primary/40 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] transition-all"
      >
        <div className="sm:w-2/5 shrink-0 bg-[#141b2d] overflow-hidden">
          <img
            src={serviceImages[item.id]}
            alt={item.title}
            className="w-full h-full min-h-[140px] sm:min-h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5 sm:p-6 flex flex-col justify-center flex-1 min-w-0">
          <h3 className="font-bold text-slate-100 group-hover:text-brand-primary transition-colors mb-2">
            {item.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{item.description}</p>
          <span className="mt-4 text-sm font-semibold text-brand-primary inline-flex items-center gap-1">
            Learn more <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    ))}
  </div>
);

export default ServiceShowcase;
