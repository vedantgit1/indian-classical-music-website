import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disc, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Heritage', path: '/tradition' },
    { label: 'Performances', path: '/concerts' },
    { label: 'Archives', path: '/archives' },
    { label: 'Academy', path: '/academy' },
    { label: 'Patronage', path: '/patronage' },
  ];

  return (
    <header className="navbar-sticky">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Disc size={28} style={{ color: '#D4AF37' }} />
          <span className="nav-logo-title">Sangeet Parampara</span>
        </Link>

        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
