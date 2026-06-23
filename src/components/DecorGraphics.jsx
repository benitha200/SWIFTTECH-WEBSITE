import React from 'react';

const DEFAULT_CHIPS = ['ERP', 'API', 'Cloud'];

/**
 * Compass / radar motif — reusable in hero and sections.
 * @param {'top-right'|'top-left'|'bottom-right'|'bottom-left'} placement
 * @param {'sm'|'md'|'lg'} size
 * @param {'dark'|'light'} theme — matches section background
 * @param {string[]|false} chips — up to 3 labels; false hides chips
 */
export const CompassDecor = ({
  placement = 'top-right',
  size = 'md',
  theme = 'dark',
  chips = DEFAULT_CHIPS,
  className = '',
  rotate = true,
}) => {
  const uid = React.useId().replace(/:/g, '');
  const lineGradId = `compassGrad-${uid}`;
  const chipList = chips === false ? [] : (chips || DEFAULT_CHIPS).slice(0, 3);

  return (
    <div
      className={`compass-decor compass-decor--${placement} compass-decor--${size} compass-decor--${theme} pointer-events-none ${className}`.trim()}
      aria-hidden
    >
      <svg
        className={`compass-decor-svg ${rotate ? 'compass-decor-svg--rotate' : ''}`}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="120" className="compass-ring" />
        <circle cx="200" cy="200" r="80" className="compass-ring compass-ring--delay" />
        <circle cx="200" cy="200" r="160" className="compass-ring compass-ring--outer" />
        <circle
          cx="320"
          cy="120"
          r="8"
          className="compass-node compass-node--cyan"
        />
        <circle
          cx="90"
          cy="280"
          r="6"
          className="compass-node compass-node--violet compass-node--delay"
        />
        <circle cx="300" cy="300" r="5" className="compass-node compass-node--teal" />
        <circle
          cx="140"
          cy="100"
          r="4"
          className="compass-node compass-node--blue compass-node--delay"
        />
        <path
          d="M200 200 L320 120 M200 200 L90 280 M200 200 L300 300 M200 200 L140 100"
          stroke={`url(#${lineGradId})`}
          strokeWidth="1"
          strokeDasharray="6 4"
          className="compass-connect"
        />
        <defs>
          <linearGradient id={lineGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      {chipList.map((label, i) => (
        <div key={label} className={`compass-chip compass-chip--${i + 1}`}>
          {label}
        </div>
      ))}
    </div>
  );
};

/** Hero — large compass, top-right, default chips */
export const HeroDecor = (props) => (
  <CompassDecor placement="top-right" size="lg" theme="dark" chips={DEFAULT_CHIPS} {...props} />
);

export const SectionWave = () => (
  <div className="section-wave" aria-hidden>
    <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-12">
      <path
        d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,30 1440,24 L1440,48 L0,48 Z"
        fill="currentColor"
        className="text-[#0f1629]"
      />
    </svg>
  </div>
);

export const IconBurst = ({ className = '' }) => (
  <svg
    className={`icon-burst ${className}`}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden
  >
    <rect x="8" y="8" width="14" height="14" rx="3" stroke="#0ea5e9" strokeWidth="2" className="burst-box" />
    <rect x="26" y="26" width="14" height="14" rx="3" stroke="#06b6d4" strokeWidth="2" className="burst-box burst-box--2" />
    <path d="M22 15 L26 26" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 2" />
  </svg>
);

export const NavLogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="nav-logo-mark" aria-hidden>
    <rect x="2" y="2" width="24" height="24" rx="6" fill="url(#navLogoGrad)" />
    <path d="M9 14h10M14 9v10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="navLogoGrad" x1="2" y1="2" x2="26" y2="26">
        <stop stopColor="#0ea5e9" />
        <stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
  </svg>
);
