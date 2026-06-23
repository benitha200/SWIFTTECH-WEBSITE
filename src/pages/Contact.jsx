import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import ContactMethods from '../components/ContactMethods';
import OdooPricingCallout from '../components/OdooPricingCallout';
import Section from '../components/Section';
import { CheckIcon, ArrowRightIcon } from '../components/Icons';
import { brand, contactPage, contactReasons, faqs } from '../data/content';
import { images } from '../data/images';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema, FAQSchema } from '../components/StructuredData';
import { pageSEO } from '../data/seo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'odoo',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus({ submitted: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'odoo',
        message: '',
      });
    } else {
      setFormStatus({ submitted: false, error: true });
    }
  };

  return (
    <div className="min-h-screen page-main">
      <SEOHead {...pageSEO['/contact']} path="/contact" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <NavBar />

      <Section
        variant="hero"
        className="section-y pb-4"
        decor={{ placement: 'top-right', size: 'md', chips: ['Call', 'Email', 'Quote'], hiddenBelow: true }}
      >
        <p className="section-label mb-3">{contactPage.title}</p>
        <h1 className="section-title max-w-4xl mb-4">
          {contactPage.headline}{' '}
          <span className="text-highlight">{contactPage.highlight}</span>
        </h1>
        <p className="readable-lead max-w-3xl">{contactPage.subtext}</p>
      </Section>

      <Section variant="muted" className="section-y pt-0">
        <div className="contact-layout">
          <div className="contact-sidebar">
            <ContactMethods />
            <div className="contact-reasons">
              <h3 className="contact-reasons-title">What you get</h3>
              <ul className="space-y-3">
                {contactReasons.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <OdooPricingCallout />
          </div>

          <div className="contact-form-panel">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">{contactPage.formTitle}</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">{contactPage.formIntro}</p>

            {formStatus.submitted && (
              <div
                className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-sm"
                role="status"
              >
                Thank you. <strong>{brand.contactPerson}</strong> or a senior consultant will
                reach out {brand.responseTime}.
              </div>
            )}
            {formStatus.error && (
              <div
                className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                role="alert"
              >
                Please complete all required fields (name, email, and message).
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="contact-label">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="contact-label">
                    Work email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="contact-label">
                    Phone <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    autoComplete="tel"
                    placeholder="+250 ..."
                  />
                </div>
                <div>
                  <label htmlFor="company" className="contact-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="contact-label">
                  What do you need help with?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="odoo">Odoo implementation & customization</option>
                  <option value="software">Software development</option>
                  <option value="consulting">IT consulting</option>
                  <option value="integration">System integration</option>
                  <option value="cloud">Cloud solutions</option>
                  <option value="support">Maintenance & support</option>
                  <option value="other">Other / not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="contact-label">
                  Tell us about your project <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input-field resize-y min-h-[160px]"
                  placeholder="Users, modules, timeline, current tools (Excel, legacy ERP, etc.)—the more detail, the better we can help."
                  required
                />
              </div>

              <div className="contact-form-footer">
                <button type="submit" className="btn-primary">
                  Send message <ArrowRightIcon />
                </button>
                <p className="text-xs text-slate-400">
                  Prefer email?{' '}
                  <a href={`mailto:${brand.email}`} className="text-brand-primary font-medium hover:underline">
                    {brand.email}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <Section variant="light" className="section-y" narrow>
        <h2 className="section-title mb-8">Common questions</h2>
        <FAQ items={faqs.slice(0, 4)} />
      </Section>

      <CTASection
        title="Prefer to talk now?"
        description={`Call ${brand.phone} or email ${brand.email}. ${brand.contactPerson} is your main contact.`}
        primaryLabel={`Call ${brand.phone}`}
        primaryTo={`tel:${brand.phone.replace(/\s/g, '')}`}
        secondaryTo="/services"
        secondaryLabel="View our services"
        image={images.team}
      />

      <Footer />
    </div>
  );
};

export default Contact;
