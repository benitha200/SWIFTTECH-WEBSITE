import React from 'react';

const ImageFrame = ({
  src,
  alt,
  className = '',
  aspect = 'aspect-[4/3]',
  rounded = 'rounded-2xl',
  label,
}) => (
  <figure className={`img-frame ${rounded} overflow-hidden ${className}`}>
    <div className={`relative ${aspect} bg-[#141b2d]`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        loading="lazy"
      />
      {label && (
        <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-slate-900/70 to-transparent text-white text-xs font-medium">
          {label}
        </figcaption>
      )}
    </div>
  </figure>
);

export default ImageFrame;
