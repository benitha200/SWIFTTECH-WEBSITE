import React from 'react';

const AmbientBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ background: '#0a0e1a' }}>
    {/* Subtle dot grid */}
    <svg className="absolute inset-0 w-full h-full opacity-30" aria-hidden>
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="0.5" fill="rgba(14, 165, 233, 0.4)" />
        </pattern>
        <radialGradient id="gridFade" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="gridMask">
          <rect width="100%" height="100%" fill="url(#gridFade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
    </svg>

    {/* Fine line grid overlay */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden>
      <defs>
        <pattern id="lineGrid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="rgba(14, 165, 233, 1)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lineGrid)" />
    </svg>

    {/* Neon orbs with glow */}
    <div
      className="absolute w-[500px] h-[500px] rounded-full ambient-blob"
      style={{
        top: '-10%',
        right: '-5%',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.03) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full ambient-blob"
      style={{
        bottom: '-5%',
        left: '-5%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 70%)',
        filter: 'blur(40px)',
        animationDelay: '-8s',
      }}
    />
    <div
      className="absolute w-[300px] h-[300px] rounded-full ambient-blob"
      style={{
        top: '40%',
        left: '30%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
        filter: 'blur(50px)',
        animationDelay: '-4s',
      }}
    />

    {/* Orbiting ring */}
    <div
      className="absolute top-[20%] right-[15%] w-72 h-72 rounded-full ambient-orbit"
      style={{
        border: '1px solid rgba(14, 165, 233, 0.08)',
        boxShadow: '0 0 40px rgba(14, 165, 233, 0.03)',
      }}
    />

    {/* Pulsing accent point */}
    <div
      className="absolute bottom-[25%] left-[12%] w-40 h-40 rounded-full ambient-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }}
    />

    {/* Top edge glow line */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 0.15) 50%, transparent 100%)',
      }}
    />
  </div>
);

export default AmbientBackground;
