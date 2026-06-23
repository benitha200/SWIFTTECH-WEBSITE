import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/swifttech_logo.png';
import { brand } from '../data/content';

const Logo = ({ className = '', to = '/', onClick, invert = false }) => (
  <Link
    to={to}
    className={`brand-logo ${invert ? 'brand-logo--invert' : ''} ${className}`.trim()}
    onClick={onClick}
    aria-label={`${brand.name} home`}
  >
    <img
      src={logoImg}
      alt={`${brand.legalName} (${brand.searchName}) — ${brand.searchNameRegional}, IT company in Rwanda`}
      className="brand-logo-img"
      width={320}
      height={96}
    />
  </Link>
);

export default Logo;
