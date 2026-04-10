import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-2xl shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white group">
            <span className="text-brand-secondary group-hover:text-white transition-colors">Swift</span>Tech
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`text-sm font-medium transition-all nav-link-underline hover:text-brand-secondary ${
                location.pathname === link.to ? "text-brand-secondary" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-primary/20 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden absolute w-full glass transition-all duration-300 overflow-hidden ${
        menuOpen ? "max-h-96 border-b" : "max-h-0"
      }`}>
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`text-lg font-medium ${
                location.pathname === link.to ? "text-brand-secondary" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;