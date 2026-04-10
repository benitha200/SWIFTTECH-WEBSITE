import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detection for shape shift
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detection for visibility (show/hide on scroll)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      className={`fixed z-50 transition-all duration-500 nav-island ${
        scrolled ? "nav-island-active glass py-3 shadow-2xl" : "w-full bg-transparent py-5"
      } ${
        visible ? "top-0 opacity-100" : "-top-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className={`mx-auto px-6 flex justify-between items-center ${scrolled ? "w-full" : "max-w-7xl"}`}>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white group">
            <span className="text-brand-secondary group-hover:text-brand-primary transition-colors">Swift</span>Tech
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`text-sm font-medium transition-all nav-link-underline hover:text-brand-primary ${
                location.pathname === link.to ? "text-brand-primary" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-primary/40 transform hover:-translate-y-1 active:scale-95 animate-pulse-glow"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none hover:bg-white/10 rounded-full transition-colors"
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
      <div className={`md:hidden absolute left-0 right-0 glass transition-all duration-500 overflow-hidden ${
        menuOpen ? "max-h-[35rem] opacity-100 border-b border-white/10" : "max-h-0 opacity-0"
      }`} 
      style={{ top: scrolled ? '100%' : '100%', marginTop: scrolled ? '0.5rem' : '0' }}>
        <div className="px-8 py-10 flex flex-col space-y-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`text-2xl font-bold transition-all ${
                location.pathname === link.to ? "text-brand-primary translate-x-2" : "text-white hover:translate-x-2"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-brand-primary text-white py-4 rounded-2xl text-center font-bold text-lg shadow-xl"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;