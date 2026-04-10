import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

import heroImg from '../assets/hero.png';
import webDevImg from '../assets/web_dev.png';
import mobileAppImg from '../assets/mobile_app.png';
import whatsappImg from '../assets/whatsapp.png';
import ecotrackImg from '../assets/ecotrack.png';
import mediswiftImg from '../assets/mediswift.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-1000"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-secondary text-sm font-semibold mb-8 animate-fade-in-up">
            #1 Web Development Agency in Rwanda
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight animate-fade-in-up animate-float" style={{ animationDelay: '0.1s' }}>
            We <span className="text-gradient">Build Websites</span> <br />
            that Scale Your Vision
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From sophisticated e-commerce platforms to high-performance enterprise applications, we transform your ideas into world-class digital realities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="bg-brand-primary hover:bg-brand-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-brand-primary/40 transform hover:-translate-y-2 active:scale-95 animate-pulse-glow"
            >
              Start a Project
            </Link>
            <Link
              to="/portfolio"
              className="glass text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all border border-white/20 backdrop-blur-xl hover:border-brand-primary/50"
            >
              View Our Work
            </Link>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: "Expertise", 
                desc: "Decades of combined experience in cutting-edge tech.",
                icon: "🚀"
              },
              { 
                title: "Tailored Solutions", 
                desc: "We don't do 'one size fits all.' Every project is custom.",
                icon: "🎯"
              },
              { 
                title: "Reliability", 
                desc: "99.9% uptime and dedicated 24/7 technical support.",
                icon: "🛡️"
              },
              { 
                title: "Speed", 
                desc: "Agile development that respects your deadlines and budget.",
                icon: "⚡"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-2xl animate-float h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
              <p className="text-gray-400 text-xl max-w-xl">Comprehensive digital services powered by innovation and design excellence.</p>
            </div>
            <Link to="/services" className="text-brand-secondary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              EXPLORE ALL SERVICES <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                img: webDevImg, 
                title: "Web Development", 
                desc: "Custom-built, high-performance websites optimized for conversion and speed." 
              },
              { 
                img: mobileAppImg, 
                title: "Mobile Apps", 
                desc: "Native and cross-platform mobile experiences that users love to use." 
              },
              { 
                img: whatsappImg, 
                title: "WhatsApp Automation", 
                desc: "Scale your customer service with powerful, automated messaging workflows." 
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group glass-card rounded-3xl overflow-hidden hover:z-10"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-6 font-light">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-brand-secondary hover:text-white transition-colors">
                    LEARN MORE <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Portfolio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Real applications we've built to solve real-world problems.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                img: ecotrackImg, 
                title: "EcoTrack", 
                category: "Enterprise Dashboard",
                desc: "A sustainability monitoring platform used by major corporations to track and reduce their carbon footprint in real-time." 
              },
              { 
                img: mediswiftImg, 
                title: "MediSwift", 
                category: "Mobile Health",
                desc: "Connecting rural clinics with specialists through a low-bandwidth, high-reliability telemedicine platform." 
              }
            ].map((item, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden glass-card">
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <span className="text-brand-secondary text-sm font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg mb-8">{item.desc}</p>
                  <Link to="/portfolio" className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold border border-white/10 transition-all">
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10 -z-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Whether you're a startup with a big idea or an established enterprise looking to modernize, 
            we have the expertise to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-primary hover:bg-brand-secondary text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl hover:shadow-brand-primary/50"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">SwiftTech</h3>
            <p className="text-gray-400 text-lg max-w-sm">
              Transforming ideas into digital reality. We build websites and applications that define the future of business.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase text-gray-500">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-secondary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase text-gray-500">Contact</h4>
            <p className="text-gray-300 mb-2">Kigali, Rwanda</p>
            <p className="text-gray-300 mb-4">info@swifttech.co.rw</p>
            <div className="space-y-4">
              <div className="pt-2">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Managing Director</p>
                <p className="text-lg font-bold text-white">Sam Ngoga</p>
                <p className="text-brand-secondary font-bold">+250 788 254 137</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-gray-500 text-center">
          <p>© {new Date().getFullYear()} SwiftTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;