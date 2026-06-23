import React from 'react';
import { Link } from 'react-router-dom';
import { brand, legalNote } from '../data/content';
import { siteNav } from '../data/seo';
import Logo from './Logo';

const Footer = () => (
  <footer className="section-dark border-t border-white/10">
    <div className="site-container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          <Logo className="mb-4" />
            <p className="text-slate-400 mt-4 max-w-md leading-relaxed">
              {brand.legalName} ({brand.name}) is an IT company in Rwanda specializing in Odoo ERP
              implementation, custom software, and IT consulting from Kigali—serving East Africa and
              international clients who need accountable delivery and long-term support.
            </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Explore
          </h4>
          <ul className="space-y-4">
            {siteNav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-slate-300 hover:text-brand-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed max-w-xs">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>{brand.address}</li>
            <li className="text-slate-400">{brand.addressDetail}</li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-brand-primary transition-colors">
                {brand.email}
              </a>
            </li>
            <li>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="hover:text-brand-primary transition-colors">
                {brand.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-slate-500 space-y-3">
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">{legalNote}</p>
          <p>© {new Date().getFullYear()} {brand.legalName} ({brand.name}). All rights reserved.</p>
        </div>
    </div>
  </footer>
);

export default Footer;
