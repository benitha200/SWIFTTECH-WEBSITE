import React from 'react';

const BentoGallery = ({ items }) => (
  <div className="bento-gallery">
    {items.map((item, i) => (
      <figure
        key={item.alt}
        className={`bento-item bento-item--${i + 1} img-frame rounded-2xl overflow-hidden`}
      >
        <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
        {item.caption && (
          <figcaption className="bento-caption">{item.caption}</figcaption>
        )}
      </figure>
    ))}
  </div>
);

export default BentoGallery;
