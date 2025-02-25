import React from 'react';
import { Link } from 'react-router-dom';
import hero from './../assets/1.jpg'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b w-full from-sky-950 to-indigo-950">
      {/* Header - Fixed for better navigation */}
      <header className="bg-sky-950/95 backdrop-blur-sm shadow-md fixed w-full z-10 border-b border-sky-800/30">
        <div className="w-full mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-white tracking-tight">SwiftTech</span>
            <button className="md:hidden bg-sky-600 text-white p-2 rounded-md hover:bg-sky-700 transition-colors">
              Menu
            </button>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white font-medium hover:text-sky-400 transition-colors">Home</Link>
            <Link to="/about" className="text-white font-medium hover:text-sky-400 transition-colors">About</Link>
            <Link to="/services" className="text-white font-medium hover:text-sky-400 transition-colors">Services</Link>
            <Link to="/portfolio" className="text-white font-medium hover:text-sky-400 transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-white font-medium hover:text-sky-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Full Screen with Gradient Overlay */}
      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/80 to-indigo-950/80"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${hero})` }}></div>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Transforming Ideas into <span className="text-sky-400 block sm:inline">Digital Reality</span>
          </h1>
          <p className="text-lg sm:text-xl text-sky-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating stunning web and mobile applications that drive results and delight users. Our expert team brings your vision to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/services"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/25 font-medium text-lg"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-sky-400 px-8 py-4 rounded-lg hover:bg-sky-400/10 transition-all shadow-lg font-medium text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section - With Card Style */}
      <section className="bg-sky-900/30 py-20 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <p className="text-5xl font-bold text-sky-400 mb-2">100+</p>
              <p className="text-sky-100 font-medium">Projects Completed</p>
            </div>
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <p className="text-5xl font-bold text-sky-400 mb-2">50+</p>
              <p className="text-sky-100 font-medium">Happy Clients</p>
            </div>
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <p className="text-5xl font-bold text-sky-400 mb-2">5+</p>
              <p className="text-sky-100 font-medium">Years Experience</p>
            </div>
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <p className="text-5xl font-bold text-sky-400 mb-2">24/7</p>
              <p className="text-sky-100 font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Features Section - With Improved Cards */}
      <section className="w-full mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Our Services</h2>
        <p className="text-sky-200 text-center max-w-3xl mx-auto mb-16">Delivering exceptional digital solutions tailored to your business needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30 hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-sky-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl text-white">🌐</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Web Development</h3>
            <p className="text-sky-200 mb-6">
              Custom websites built to engage your audience and grow your business.
            </p>
            <ul className="text-sky-200 space-y-2 mb-6">
              <li className="flex items-center"><span className="text-sky-400 mr-2">✓</span> Responsive design</li>
              <li className="flex items-center"><span className="text-sky-400 mr-2">✓</span> E-commerce solutions</li>
              <li className="flex items-center"><span className="text-sky-400 mr-2">✓</span> Content management systems</li>
              <li className="flex items-center"><span className="text-sky-400 mr-2">✓</span> SEO optimization</li>
            </ul>
            <Link to="/services/web" className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30 hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-sky-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl text-white">📱</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Mobile Apps</h3>
            <p className="text-sky-200 mb-6">
              Seamless mobile experiences for iOS and Android that keep users coming back.
            </p>
            <ul className="text-sky-200 space-y-2 mb-6">
              <li className="flex items-center"><span className="text-indigo-400 mr-2">✓</span> Native iOS development</li>
              <li className="flex items-center"><span className="text-indigo-400 mr-2">✓</span> Native Android development</li>
              <li className="flex items-center"><span className="text-indigo-400 mr-2">✓</span> Cross-platform solutions</li>
              <li className="flex items-center"><span className="text-indigo-400 mr-2">✓</span> App store optimization</li>
            </ul>
            <Link to="/services/mobile" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30 hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl text-white">💬</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">WhatsApp Messaging</h3>
            <p className="text-sky-200 mb-6">
              Reach your audience instantly with personalized bulk messaging solutions.
            </p>
            <ul className="text-sky-200 space-y-2 mb-6">
              <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span> Automated campaigns</li>
              <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span> Personalized messages</li>
              <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span> Analytics and reporting</li>
              <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span> API integration</li>
            </ul>
            <Link to="/services/whatsapp" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

  {/* How We Work Section - With Modern Process Steps */}
  <section className="bg-gradient-to-b from-indigo-950 to-sky-950 py-24 border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Our Process</h2>
          <p className="text-sky-200 text-center max-w-3xl mx-auto mb-16">A proven methodology for delivering exceptional results</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-sky-600/30">1</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-sky-200">We learn about your business goals and requirements</p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-sky-600 to-transparent -z-10"></div>
            </div>
            <div className="text-center relative">
              <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-indigo-600/30">2</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Planning</h3>
              <p className="text-sky-200">We create a detailed roadmap for your project</p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-600 to-transparent -z-10"></div>
            </div>
            <div className="text-center relative">
              <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-cyan-600/30">3</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Development</h3>
              <p className="text-sky-200">Our experts build your solution with quality code</p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-600 to-transparent -z-10"></div>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-teal-600/30">4</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Launch</h3>
              <p className="text-sky-200">We deploy your project and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - With Improved Cards */}
      <section className="w-full mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">What Our Clients Say</h2>
        <p className="text-sky-200 text-center max-w-3xl mx-auto mb-16">Don't take our word for it - hear from our satisfied clients</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">JS</div>
              <div>
                <h4 className="font-semibold text-white text-lg">John Smith</h4>
                <p className="text-sky-300 text-sm">CEO, Tech Solutions</p>
              </div>
            </div>
            <div className="text-3xl text-sky-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">SwiftTech transformed our online presence. The new website has increased our leads by 45% in just three months!</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">SJ</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Sarah Johnson</h4>
                <p className="text-sky-300 text-sm">Marketing Director, Retail Brand</p>
              </div>
            </div>
            <div className="text-3xl text-indigo-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">The WhatsApp messaging solution has revolutionized how we communicate with customers. Response rates are up by 80%.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">MC</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Michael Chen</h4>
                <p className="text-sky-300 text-sm">Founder, Startup Inc.</p>
              </div>
            </div>
            <div className="text-3xl text-cyan-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">From concept to launch, the mobile app development process was smooth and professional. Highly recommended!</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section - With Improved Cards */}
      <section className="bg-gradient-to-b from-sky-950 to-indigo-950 py-24 border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Featured Projects</h2>
          <p className="text-sky-200 text-center max-w-3xl mx-auto mb-16">Explore our recent work and success stories</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-sky-500/10 transition-all duration-300 border border-sky-800/30 hover:transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-sky-600 to-indigo-600 flex items-center justify-center">
                <span className="text-4xl">🛒</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-sky-400 transition-colors">E-commerce Platform</h3>
                <p className="text-sky-200 mb-4">A full-featured online store with custom payment integration.</p>
                <Link to="/portfolio/ecommerce" className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center">
                  View Case Study <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-sky-800/30 hover:transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-4xl">🏥</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-indigo-400 transition-colors">Healthcare App</h3>
                <p className="text-sky-200 mb-4">Mobile application for patient management and telemedicine.</p>
                <Link to="/portfolio/healthcare" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center">
                  View Case Study <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-sky-800/30 hover:transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-cyan-400 transition-colors">Marketing Campaign</h3>
                <p className="text-sky-200 mb-4">WhatsApp messaging campaign that increased engagement by 65%.</p>
                <Link to="/portfolio/marketing" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center">
                  View Case Study <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg transition-colors border border-sky-400/30 shadow-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - With Modern Accordion Style */}
      <section className="w-full mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-sky-200 text-center max-w-3xl mx-auto mb-16">Find answers to common questions about our services</p>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sky-800/30">
            <h3 className="text-xl font-semibold text-white mb-3">How long does it take to complete a project?</h3>
            <p className="text-sky-200">Our project timelines vary based on scope and complexity. Typically, a website takes 4-8 weeks, while mobile apps may take 8-12 weeks to develop.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sky-800/30">
            <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing maintenance?</h3>
            <p className="text-sky-200">Yes, we offer maintenance packages to keep your digital products up-to-date, secure, and performing optimally.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sky-800/30">
            <h3 className="text-xl font-semibold text-white mb-3">How much does a typical project cost?</h3>
            <p className="text-sky-200">Each project is unique. We provide custom quotes based on your specific requirements. Contact us for a free consultation and estimate.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sky-800/30">
            <h3 className="text-xl font-semibold text-white mb-3">What technologies do you work with?</h3>
            <p className="text-sky-200">We're proficient in a wide range of technologies including React, React Native, Node.js, PHP, WordPress, and many more, choosing the best fit for your project.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section - With Modern Design */}
      <section className="bg-gradient-to-r from-sky-900 to-indigo-900 py-20 border-y border-sky-800/30">
        <div className="w-full mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-sky-200 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for the latest industry insights, technology updates, and company news.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row">
            <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 mb-3 sm:mb-0 sm:mr-3 rounded-lg border border-sky-700 bg-sky-900/50 text-white placeholder-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <button className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition-colors shadow-lg shadow-sky-600/20 font-medium">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="bg-gradient-to-br from-sky-950 to-indigo-950 py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div className="w-full mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Ready to Elevate Your Business?</h2>
          <p className="text-xl text-sky-200 mb-10 max-w-3xl mx-auto">
            Let's work together to create something extraordinary. Our team is ready to bring your vision to life with cutting-edge technology and expert design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-sky-500 hover:to-indigo-500 transition-all shadow-lg shadow-sky-600/20 font-medium text-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-sky-400 text-white px-8 py-4 rounded-lg hover:bg-sky-900/30 transition-colors font-medium text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information - With Improved Cards */}
      <section className="bg-sky-900/30 py-20 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-sky-800/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-sky-700/30">
              <div className="bg-gradient-to-r from-sky-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Our Location</h3>
              <p className="text-sky-200">Kigali, Rwanda<br />Kicukiro, Gikondo KST 344 St</p>
            </div>
            <div className="bg-sky-800/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-sky-700/30">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Phone</h3>
              <p className="text-sky-200">+250 78528 3918</p>
            </div>
            <div className="bg-sky-800/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-sky-700/30">
              <div className="bg-gradient-to-r from-cyan-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Email</h3>
              <p className="text-sky-200">info@swifttech.co.rw</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-sky-950 to-indigo-950 text-white py-16 border-t border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">SwiftTech</h3>
              <p className="text-sky-300 mb-6">Transforming ideas into digital reality since 2018.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-sky-950 w-10 h-10 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-900 hover:text-white transition-colors">FB</a>
                <a href="#" className="bg-sky-950 w-10 h-10 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-900 hover:text-white transition-colors">TW</a>
                <a href="#" className="bg-sky-950 w-10 h-10 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-900 hover:text-white transition-colors">IG</a>
                <a href="#" className="bg-sky-950 w-10 h-10 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-900 hover:text-white transition-colors">LI</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services/web" className="text-gray-400 hover:text-white">Web Development</Link></li>
                <li><Link to="/services/mobile" className="text-gray-400 hover:text-white">Mobile Apps</Link></li>
                <li><Link to="/services/whatsapp" className="text-gray-400 hover:text-white">WhatsApp Messaging</Link></li>
                <li><Link to="/services/ui-design" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/team" className="text-gray-400 hover:text-white">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} SwiftTech Company Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;