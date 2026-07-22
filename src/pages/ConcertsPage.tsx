import React from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

export const ConcertsPage: React.FC = () => {
  const concerts = [
    {
      title: 'Midnight Recital: Raga Malkauns',
      artist: 'Ustad Pandit Vinayat Khan & Ensemble',
      venue: 'Heritage Sanctuary Hall, New Delhi',
      date: 'OCTOBER 28, 2025',
      time: '11:00 PM - 02:00 AM',
      img: 'https://images.pexels.com/photos/3084033/pexels-photo-3084033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      title: 'Dusk Baithak: Sitar & Surbahar Dialogues',
      artist: 'Vidushi Malini Sen',
      venue: 'Palacio de Residency, Goa',
      date: 'NOVEMBER 14, 2025',
      time: '06:30 PM - 09:30 PM',
      img: 'https://images.pexels.com/photos/18851187/pexels-photo-18851187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];

  return (
    <div>
      <section className="hero-wrapper" style={{ minHeight: '60vh' }}>
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/3084033/pexels-photo-3084033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Concert Hall Atmosphere"
          />
          <div className="hero-gradient" />
        </div>
        <div className="container hero-content">
          <span className="subtitle">Live Acoustic Experiences</span>
          <h1 className="section-title">PATRON RECITAL <span>CALENDAR</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Unamplified and purely acoustic recitals designed for intimate resonance and rare artistic depth.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {concerts.map((concert, idx) => (
              <div key={idx} className="card grid-2" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '320px' }}>
                  <img src={concert.img} alt={concert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifycontent: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-accent)', fontSize: '0.85rem' }}>
                    {concert.date}
                  </span>
                  <h3 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{concert.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>{concert.artist}</p>
                  
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={16} style={{ color: 'var(--primary)' }} /> {concert.venue}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={16} style={{ color: 'var(--primary)' }} /> {concert.time}
                    </span>
                  </div>

                  <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    <Ticket size={16} /> Request Invitation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
