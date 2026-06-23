import React from 'react';
import { CompassDecor } from './DecorGraphics';

/**
 * section-light — white / enterprise
 * section-muted — soft blue-gray band
 * section-dark — navy accent band
 * section-hero — hero with optional image
 *
 * Children are wrapped in .site-container unless noContainer.
 * decor — optional compass motif: { placement, size, theme, chips }
 */
export const Section = ({
  variant = 'light',
  className = '',
  children,
  id,
  narrow = false,
  noContainer = false,
  decor,
}) => {
  const variants = {
    light: 'section-light',
    muted: 'section-muted',
    dark: 'section-dark',
    hero: 'section-hero',
  };

  const containerClass = narrow ? 'site-container site-container--narrow' : 'site-container';
  const decorTheme = decor?.theme ?? 'dark';

  return (
    <section
      id={id}
      className={`${variants[variant] || variants.light} ${decor ? 'section-has-decor' : ''} ${className}`}
    >
      {decor && (
        <CompassDecor
          placement={decor.placement ?? 'top-right'}
          size={decor.size ?? 'md'}
          theme={decorTheme}
          chips={decor.chips}
          rotate={decor.rotate !== false}
          className={decor.hiddenBelow ? 'hidden lg:block' : ''}
        />
      )}
      {noContainer ? (
        <div className="section-content relative z-10">{children}</div>
      ) : (
        <div className={`${containerClass} section-content relative z-10`}>{children}</div>
      )}
    </section>
  );
};

export default Section;
