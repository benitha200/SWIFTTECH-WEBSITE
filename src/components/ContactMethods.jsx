import React from 'react';
import { brand } from '../data/content';

const ContactMethods = () => {
  const phoneHref = `tel:${brand.phone.replace(/\s/g, '')}`;
  const mailHref = `mailto:${brand.email}?subject=${encodeURIComponent('Project enquiry – Swittech')}`;

  const items = [
    {
      label: 'Phone',
      value: brand.phone,
      href: phoneHref,
      hint: `Ask for ${brand.contactPerson}`,
    },
    {
      label: 'Email',
      value: brand.email,
      href: mailHref,
      hint: brand.responseTime,
    },
    {
      label: 'Office hours',
      value: brand.contactHours,
      hint: 'East Africa Time',
    },
    {
      label: 'Visit',
      value: brand.address,
      hint: brand.addressDetail,
    },
  ];

  return (
    <ul className="contact-methods">
      {items.map((item) => (
        <li key={item.label} className="contact-method">
          <span className="contact-method-label">{item.label}</span>
          {item.href ? (
            <a href={item.href} className="contact-method-value contact-method-link">
              {item.value}
            </a>
          ) : (
            <span className="contact-method-value">{item.value}</span>
          )}
          {item.hint && <span className="contact-method-hint">{item.hint}</span>}
        </li>
      ))}
    </ul>
  );
};

export default ContactMethods;
