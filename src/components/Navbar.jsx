import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links for easier updates
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="bg-sky-950 shadow-md fixed w-full z-10 border-b border-sky-800/30">
      <div className="w-full mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-white tracking-tight">SwiftTech</span>
          <button
            className="md:hidden bg-sky-600 text-white p-2 rounded-md hover:bg-sky-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`text-white font-medium hover:text-sky-400 transition-colors ${link.to === currentPage ? "text-sky-400" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 py-2 bg-sky-950 border border-sky-800/50 rounded-md shadow-lg">
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={`text-white hover:text-sky-400 transition-colors py-2 ${link.to === currentPage ? "text-sky-400 font-medium" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;