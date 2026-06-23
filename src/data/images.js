import heroImg from '../assets/hero.png';
import teamImg from '../assets/1.jpg';
import webDevImg from '../assets/web_dev.png';
import mobileAppImg from '../assets/mobile_app.png';
import whatsappImg from '../assets/whatsapp.png';
import ecotrackImg from '../assets/ecotrack.png';
import mediswiftImg from '../assets/mediswift.png';

export const images = {
  hero: heroImg,
  team: teamImg,
  odoo: webDevImg,
  software: mobileAppImg,
  consulting: heroImg,
  integration: whatsappImg,
  cloud: webDevImg,
  support: mediswiftImg,
  caseStudies: [ecotrackImg, mediswiftImg, webDevImg],
};

export const serviceImages = {
  odoo: webDevImg,
  software: mobileAppImg,
  consulting: heroImg,
  integration: whatsappImg,
  cloud: webDevImg,
  support: mediswiftImg,
};

/** Bento mosaic — home / about */
export const workGallery = [
  { src: ecotrackImg, alt: 'Enterprise dashboard project', caption: 'Enterprise platform' },
  { src: mediswiftImg, alt: 'Healthcare application', caption: 'Healthcare tech' },
  { src: mobileAppImg, alt: 'Mobile application development', caption: 'Mobile apps' },
  { src: teamImg, alt: 'Swittech team at work', caption: 'Our team' },
];

/** Horizontal strip — services / portfolio teaser */
export const projectStrip = [
  { src: webDevImg, alt: 'Web development', caption: 'Web & ERP' },
  { src: ecotrackImg, alt: 'EcoTrack project', caption: 'Analytics' },
  { src: mediswiftImg, alt: 'MediSwift project', caption: 'Health' },
  { src: whatsappImg, alt: 'Integration workflows', caption: 'Integrations' },
  { src: mobileAppImg, alt: 'Mobile solutions', caption: 'Mobile' },
];
