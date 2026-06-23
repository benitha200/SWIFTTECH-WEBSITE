import React from 'react';

const StatsBar = ({ stats, variant = 'light' }) => (
  <div
    className={
      variant === 'dark'
        ? 'bg-[#060a14] text-white py-12 border-y border-white/5'
        : 'border-y border-white/10 bg-[#0f1629]/60 backdrop-blur-sm py-12'
    }
  >
    <div className="site-container stats-row">
      {stats.map((item) => (
        <div key={item.label} className="stat-item">
          <p
            className={`text-3xl md:text-4xl font-bold tracking-tight ${
              variant === 'dark' ? 'text-white' : 'text-brand-primary'
            }`}
          >
            {item.value}
            {!item.noSuffix && !String(item.value).includes('+') && '+'}
          </p>
          <p
            className={`font-semibold mt-1 ${variant === 'dark' ? 'text-slate-200' : 'text-slate-100'}`}
          >
            {item.label}
          </p>
          {item.detail && (
            <p className={`text-sm mt-1 ${variant === 'dark' ? 'text-slate-400' : 'text-slate-400'}`}>
              {item.detail}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;
