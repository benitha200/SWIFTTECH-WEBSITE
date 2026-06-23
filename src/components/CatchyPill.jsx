import React from 'react';

const CatchyPill = ({ children, variant = 'default' }) => (
  <span className={`catchy-pill catchy-pill--${variant}`}>{children}</span>
);

export default CatchyPill;
