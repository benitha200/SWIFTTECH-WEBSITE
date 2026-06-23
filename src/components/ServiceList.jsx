import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';
import { serviceIconMap } from './Icons';

const ServiceList = ({ items, showLink = true }) => (
  <ul className="divide-y divide-white/10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden">
    {items.map((item) => {
      const Icon = serviceIconMap[item.id];
      return (
        <li key={item.id}>
          <Link
            to="/services"
            className="flex gap-5 p-6 md:p-7 hover:bg-white/5 transition-colors group"
          >
            <div className="w-11 h-11 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
              {Icon && <Icon className="w-5 h-5" />}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-100 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.description}</p>
            </div>
            {showLink && (
              <ArrowRightIcon className="w-5 h-5 text-slate-500 group-hover:text-brand-primary shrink-0 mt-1 transition-colors" />
            )}
          </Link>
        </li>
      );
    })}
  </ul>
);

export default ServiceList;
