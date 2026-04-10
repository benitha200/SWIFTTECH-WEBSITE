import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

import heroImg from '../assets/hero.png';

const About = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-24">
      <NavBar />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">Our Story</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Built on innovation, driven by a passion for excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold">Bridging the gap between <span className="text-gradient">Vision and Reality</span></h2>
              <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                <p>
                  Founded with a vision to transform the digital landscape of Rwanda and beyond, SwiftTech has grown into a premier technology partner for businesses looking to innovate.
                </p>
                <p>
                  We don't just write code; we solve problems. Our team of designers and engineers works at the intersection of creativity and technology to deliver products that matter.
                </p>
              </div>
              <div className="flex gap-12 pt-4">
                <div>
                  <div className="text-4xl font-bold text-brand-primary mb-2">100+</div>
                  <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Projects Built</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-primary mb-2">5+</div>
                  <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-4 bg-brand-primary/20 rounded-[2.5rem] blur-3xl opacity-50"></div>
              <div className="relative glass-card rounded-[2.5rem] overflow-hidden aspect-square">
                <img src={heroImg} alt="Our Workspace" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#020617]/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Always exploring what's next in tech.", icon: "💡" },
              { title: "Integrity", desc: "Building trust through transparency and quality.", icon: "🛡️" },
              { title: "Impact", desc: "Creating solutions that make a real difference.", icon: "🌍" }
            ].map((value, index) => (
              <div key={index} className="glass-card p-10 rounded-3xl text-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Join our journey</h2>
          <p className="text-xl text-gray-400">
            Whether you want to work with us or for us, we're always looking for great people.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-primary hover:bg-brand-secondary text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-gray-500">
        <p>© {new Date().getFullYear()} SwiftTech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;