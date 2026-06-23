import React from 'react';

const GalleryStrip = ({ images: items, title, fullWidth = false }) => (
  <div className={`gallery-strip-wrap${fullWidth ? ' gallery-strip-wrap--full' : ''}`}>
    {title && (
      <p className={`section-label mb-4${fullWidth ? ' gallery-strip-title--full' : ''}`}>
        {title}
      </p>
    )}
    <div className={`gallery-strip${fullWidth ? ' gallery-strip--full' : ''}`}>
      {items.map((item) => (
        <figure
          key={item.alt}
          className="gallery-strip-item img-frame rounded-xl overflow-hidden shrink-0"
        >
          <img src={item.src} alt={item.alt} loading="lazy" />
          {item.caption && <span className="gallery-strip-label">{item.caption}</span>}
        </figure>
      ))}
    </div>
  </div>
);

export default GalleryStrip;
