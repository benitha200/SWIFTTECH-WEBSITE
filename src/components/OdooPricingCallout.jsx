import React from 'react';
import { odooPricing } from '../data/content';
import { ArrowRightIcon } from './Icons';

const OdooPricingCallout = ({ className = '' }) => (
  <div className={`odoo-pricing-callout ${className}`.trim()}>
    <p className="odoo-pricing-callout-text">{odooPricing.note}</p>
    <a
      href={odooPricing.url}
      target="_blank"
      rel="noopener noreferrer"
      className="odoo-pricing-callout-link"
    >
      View Odoo official pricing <ArrowRightIcon className="w-4 h-4" />
    </a>
  </div>
);

export default OdooPricingCallout;
