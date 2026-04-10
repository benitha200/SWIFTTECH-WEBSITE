import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

// Images (Relative Imports)
import webDevImg from '../assets/web_dev.png';
import mobileAppImg from '../assets/mobile_app.png';
import whatsappImg from '../assets/whatsapp.png';

const Services = () => {
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      subtitle: "Scalable. Secure. Stunning.",
      desc: "We build websites that don't just look great - they perform. From complex enterprise systems to elegant portfolio sites, our web solutions are designed to scale with your business and convert your visitors into loyal customers.",
      features: ["React & Next.js Expertise", "E-commerce Integration", "API Development", "Performance Optimization"],
      img: webDevImg,
      color: "brand-primary"
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      subtitle: "Native Experiences. Global Reach.",
      desc: "Our mobile development team creates high-performance iOS and Android applications that provide seamless user experiences. We handle everything from initial design to App Store submission.",
      features: ["Native iOS & Android", "Cross-platform (React Native)", "Offline Functionality", "Push Notifications"],
      img: mobileAppImg,
      color: "brand-secondary"
    },
    {
      id: "whatsapp",
      title: "WhatsApp Automation",
      subtitle: "Connect Instantly. Scale Effortlessly.",
      desc: "Transform your customer engagement with our intelligent WhatsApp automation solutions. We help you build workflows that handle inquiries, bookings, and broadcasts 24/7.",
      features: ["Bulk Messaging API", "Custom Chatbots", "Payment Integration", "Analytics Dashboard"],
      img: whatsappImg,
      color: "brand-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white pt-24">
      <NavBar />

      {/* Header Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We combine strategic thinking with technical excellence to deliver digital products that move the needle.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="pb-24">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            className={`py-24 px-6 overflow-hidden ${index % 2 === 1 ? 'bg-[#020617]/40 backdrop-blur-sm' : ''}`}
          >
            <div className={`max-w-7xl mx-auto flex flex-col md:items-center gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              {/* Content */}
              <div className="flex-1 space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">{service.subtitle}</span>
                  <h2 className="text-4xl md:text-5xl font-bold">{service.title}</h2>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-primary/20"
                  >
                    Discuss this service
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-brand-primary/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative glass-card rounded-[2rem] overflow-hidden aspect-[4/3] animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold">Have a specific need?</h2>
          <p className="text-2xl text-gray-400 font-light">
            We love tackling unique challenges. If you have a custom project in mind, let's talk about how we can build it together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-dark px-12 py-6 rounded-full text-xl font-bold hover:bg-brand-secondary hover:text-white transition-all shadow-2xl"
          >
            Schedule a Strategy Call
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

export default Services;