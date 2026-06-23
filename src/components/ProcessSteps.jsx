import React from 'react';

const ProcessSteps = ({ steps, compact = false }) => (
  <ol className={compact ? 'space-y-8' : 'grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6'}>
    {steps.map((item, i) => (
      <li
        key={item.step}
        className={compact ? 'flex gap-6' : 'relative lg:pt-4 glass-card p-6'}
      >
        {!compact && i < steps.length - 1 && (
          <span
            className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-white/10"
            aria-hidden
          />
        )}
        <div className={compact ? 'shrink-0' : ''}>
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-sm">
            {item.step}
          </span>
        </div>
        <div className={compact ? 'min-w-0' : 'mt-4 lg:mt-6'}>
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <h3 className="font-bold text-slate-100">{item.title}</h3>
            <span className="text-xs font-medium text-brand-primary uppercase tracking-wide">
              {item.duration}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default ProcessSteps;
