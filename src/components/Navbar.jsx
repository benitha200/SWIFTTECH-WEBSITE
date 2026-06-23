import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';
import { siteNav } from '../data/seo';

const navDescriptions = Object.fromEntries(siteNav.map((item) => [item.path, item.description]));
import Logo from './Logo';

const MOBILE_BP = 768;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BP : false
  );
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BP - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen && isMobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, isMobile]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav-header ${scrolled ? 'nav-header--scrolled' : ''}`}>
      <div className="site-container nav-inner">
        <Logo onClick={closeMenu} />

        {!isMobile && (
          <>
            <nav className="nav-desktop" aria-label="Main">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  title={navDescriptions[link.to]}
                  className={`nav-desktop-link ${
                    location.pathname === link.to ? 'nav-desktop-link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link to="/contact" className="btn-primary nav-cta shrink-0">
              Get a Quote
            </Link>
          </>
        )}

        {isMobile && (
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`nav-toggle-bars ${menuOpen ? 'is-open' : ''}`} />
          </button>
        )}
      </div>

      {isMobile && (
        <>
          <button
            type="button"
            className={`nav-backdrop ${menuOpen ? 'nav-backdrop--visible' : ''}`}
            aria-label="Close menu"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          />
          <nav
            className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}
            aria-label="Mobile"
            aria-hidden={!menuOpen}
          >
            <Logo className="nav-drawer-logo" onClick={closeMenu} />
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-drawer-link ${
                  location.pathname === link.to ? 'nav-drawer-link--active' : ''
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary nav-drawer-cta" onClick={closeMenu}>
              Get a Quote
            </Link>
          </nav>
        </>
      )}
    </header>
  );
};

export default NavBar;
