import React from 'react';
import { Link } from 'react-router-dom';
import { Disc, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Disc size={24} style={{ color: '#D4AF37' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FAEDD6', letterSpacing: '0.05em' }}>
                Sangeet Parampara
              </span>
            </div>
            <p>
              Preserving and elevating the sacred acoustic heritage of Indian Classical Music for discerning global connoisseurs and future maestros.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tradition">Gharana Heritage</Link></li>
              <li><Link to="/concerts">Concert Calendar</Link></li>
              <li><Link to="/archives">Sound Archives</Link></li>
              <li><Link to="/academy">Guru-Shishya Academy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Patronage</h4>
            <ul className="footer-links">
              <li><Link to="/patronage">Private Concerts</Link></li>
              <li><Link to="/patronage">Fellowships</Link></li>
              <li><Link to="/patronage">Corporate Cultural Guild</Link></li>
              <li><Link to="/patronage">Archival Preservation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Sanctuary</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              The Cultural Foundation Palace, Margao, Goa & New Delhi, India
            </p>
            <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontFamily: 'var(--font-accent)' }}>
              patrons@sangeetparampara.org
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Sangeet Parampara Trust. All Rights Reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Crafted with <Heart size={14} style={{ color: '#800020' }} /> for Timeless Heritage
          </div>
        </div>
      </div>
    </footer>
  );
};
