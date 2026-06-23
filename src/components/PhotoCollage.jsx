import React from 'react';

const PhotoCollage = ({ main, secondary, mainAlt, secondaryAlt }) => (
  <div className="photo-collage">
    <div className="photo-collage-main img-frame rounded-2xl overflow-hidden">
      <img src={main} alt={mainAlt} className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover" />
    </div>
    {secondary && (
      <div className="photo-collage-secondary img-frame rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <img src={secondary} alt={secondaryAlt || ''} className="w-full aspect-[4/3] object-cover" />
      </div>
    )}
  </div>
);

export default PhotoCollage;
