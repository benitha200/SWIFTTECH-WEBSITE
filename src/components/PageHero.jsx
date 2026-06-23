import React from 'react';

const PageHero = ({ badge, title, highlight, description, image, children }) => {
  if (image) {
    return (
      <section className="page-hero-banner pt-4 pb-2">
        <img src={image} alt="" aria-hidden="true" />
        <div className="page-hero-content site-container py-16 md:py-20 w-full">
          {badge && <span className="section-label block mb-4">{badge}</span>}
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-4xl">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
          {description && (
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{description}</p>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="section-hero pt-4 pb-12">
      <div className="site-container text-center">
        {badge && <span className="section-label block mb-4">{badge}</span>}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
