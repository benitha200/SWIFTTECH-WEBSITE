import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

import ecotrackImg from '../assets/ecotrack.png';
import mediswiftImg from '../assets/mediswift.png';
import mobileAppImg from '../assets/mobile_app.png';
import webDevImg from '../assets/web_dev.png';
import whatsappImg from '../assets/whatsapp.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "EcoTrack",
      subtitle: "Enterprise Sustainability",
      category: "web",
      img: ecotrackImg,
      desc: "A real-time carbon footprint monitoring dashboard for multi-national corporations.",
      features: ["Real-time Analytics", "IoT Integration", "Automated Reporting"]
    },
    {
      id: 2,
      title: "MediSwift",
      subtitle: "Telemedicine Platform",
      category: "mobile",
      img: mediswiftImg,
      desc: "Bridging the gap between rural clinics and specialized medical professionals.",
      features: ["Video Consultation", "Low-bandwidth Optimization", "Patient Records"]
    },
    {
      id: 3,
      title: "QuickPay",
      subtitle: "FinTech Solution",
      category: "mobile",
      img: mobileAppImg,
      desc: "Simplifying contactless payments for retail businesses across East Africa.",
      features: ["Secure Transactions", "Merchant Dashboard", "QR Payments"]
    },
    {
      id: 4,
      title: "AgriConnect",
      subtitle: "Smart Farming",
      category: "web",
      img: webDevImg,
      desc: "Empowering farmers with data-driven insights and marketplace access.",
      features: ["Weather Forecasting", "Soil Health Monitoring", "Direct Marketplace"]
    },
    {
      id: 5,
      title: "SwiftReach",
      subtitle: "Marketing Automation",
      category: "automation",
      img: whatsappImg,
      desc: "A powerful WhatsApp marketing platform for large-scale customer engagement.",
      features: ["Campaign Scheduling", "Automated Chatbots", "Broadcasting API"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'automation', label: 'Automation' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-24">
      <NavBar />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">Our Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Real challenges solved with elegant code and intentional design.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all border ${
                  filter === cat.id 
                    ? 'bg-brand-primary border-brand-primary text-white shadow-lg' 
                    : 'bg-transparent border-white/10 text-gray-400 hover:border-brand-primary hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group glass-card rounded-[2.5rem] overflow-hidden animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${0.1 * (index + 3)}s` }}
              >
                <div className="aspect-video overflow-hidden relative animate-float" style={{ animationDelay: `${index * 0.25}s` }}>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="mb-6">
                    <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs mb-2 block">
                      {project.subtitle}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold border border-white/10 transition-all w-full md:w-auto">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Reprinted from Home for consistency) */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 italic text-gray-300">
            "SwiftTech didn't just build our app; they helped us redefine our digital strategy."
          </h2>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">EC</div>
            <p className="font-bold text-lg">Eric Carmichael</p>
            <p className="text-gray-500">CTO, EcoTrack Global</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to be our next success story?</h2>
          <p className="text-xl text-gray-400">
            Let's build something that makes an impact.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-primary hover:bg-brand-secondary text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500">
        <p>© {new Date().getFullYear()} SwiftTech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;