import React from 'react';

const iconClass = 'w-6 h-6';

export const OdooIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h7" />
    <rect x="14" y="10" width="6" height="8" rx="1" strokeLinecap="round" />
    <path strokeLinecap="round" d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
  </svg>
);

export const CodeIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const ConsultingIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6M5 19h14M12 3v4" />
    <circle cx="12" cy="7" r="2" />
  </svg>
);

export const IntegrationIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const CloudIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h1a5 5 0 019.9 1.5A3.5 3.5 0 0119.5 19H6a3 3 0 01-3-3v-.5" />
  </svg>
);

export const SupportIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const CheckIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const ArrowRightIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export const serviceIconMap = {
  odoo: OdooIcon,
  software: CodeIcon,
  consulting: ConsultingIcon,
  integration: IntegrationIcon,
  cloud: CloudIcon,
  support: SupportIcon,
};
