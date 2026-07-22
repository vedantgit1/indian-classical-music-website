import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const PatronagePage: React.FC = () => {
  return (
    <div>
      <section className="hero-wrapper" style={{ minHeight: '60vh' }}>
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/11822308/pexels-photo-11822308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Patronage Sanctuary"
          />
          <div className="hero-gradient" />
        </div>
        <div className="container hero-content">
          <span className="subtitle">Philanthropy & Relations</span>
          <h1 className="section-title">PATRONAGE & <span>CONTACT</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Champion the classical acoustic arts and secure private salon recitals.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="subtitle">Inquiries</span>
              <h2 className="section-title">CONNECT WITH <span>THE GUILD</span></h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                To discuss private patron concert bookings, endowment fellowships, or archival donations, reach out directly to our cultural secretariat.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail style={{ color: 'var(--primary)' }} />
                  <span>patrons@sangeetparampara.org</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone style={{ color: 'var(--primary)' }} />
                  <span>+91 832 274 9081</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MapPin style={{ color: 'var(--primary)' }} />
                  <span>The Cultural Foundation Palace, Margao, Goa, India</span>
                </div>
              </div>
            </div>

            <div className="card">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="Lord / Lady / Dr. / Mr." />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="patron@domain.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" rows={4} placeholder="Your inquiry..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={16} /> Submit Private Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
