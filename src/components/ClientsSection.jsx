import React from 'react';
import { clients, clientsSection } from '../data/content';

const initials = (name) =>
  name
    .split(/\s+/)
    .filter((w) => w.length > 1 && !/^(ltd|co|inc|llc)$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() || name.slice(0, 2).toUpperCase();

const ClientsSection = ({ className = '' }) => (
  <section className={`clients-section ${className}`.trim()} aria-labelledby="clients-section-title">
    <div className="clients-section-header readable-wide">
      <p className="section-label mb-2">{clientsSection.label}</p>
      <h2 id="clients-section-title" className="section-title mb-4">
        {clientsSection.title}
      </h2>
      <p className="readable-muted">{clientsSection.description}</p>
    </div>

    <ul className="clients-grid">
      {clients.map((client) => (
        <li
          key={client.name}
          className={`client-card${client.featured ? ' client-card--featured' : ''}`}
        >
          <div className="client-card-mark" aria-hidden="true">
            {initials(client.name)}
          </div>
          <div className="client-card-body">
            <h3 className="client-card-name">{client.name}</h3>
            <p className="client-card-sector">{client.sector}</p>
            {client.work && <p className="client-card-work">{client.work}</p>}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ClientsSection;
