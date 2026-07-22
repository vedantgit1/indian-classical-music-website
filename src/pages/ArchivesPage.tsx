import React from 'react';
import { Play, Volume2, Lock, Disc } from 'lucide-react';

export const ArchivesPage: React.FC = () => {
  const tracks = [
    { title: 'Raga Yaman — Complete Night Baithak', year: '1972 Master Recording', duration: '1h 42m', patronOnly: false },
    { title: 'Raga Bairagi — Morning Alap & Jor', year: '1965 Vintage Tape Restoration', duration: '54m', patronOnly: true },
    { title: 'Dhrupad Recital in Raga Malkauns', year: '1981 Unreleased Archives', duration: '1h 12m', patronOnly: true },
    { title: 'Surbahar Solo — Raga Marwa', year: '1978 Private Collection', duration: '48m', patronOnly: false },
  ];

  return (
    <div>
      <section className="hero-wrapper" style={{ minHeight: '60vh' }}>
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/18851187/pexels-photo-18851187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Tape Archive Preservation"
          />
          <div className="hero-gradient" />
        </div>
        <div className="container hero-content">
          <span className="subtitle">High-Resolution Sound Archives</span>
          <h1 className="section-title">UNLIMITED <span>MASTERTAPE VAULT</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Restored directly from rare 1/4-inch reel tapes using pristine analog signal chains.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {tracks.map((track, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <button className="play-btn" style={{ width: '42px', height: '42px' }}>
                    <Play size={18} style={{ marginLeft: '2px' }} />
                  </button>
                  <div>
                    <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>{track.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{track.year} &bull; {track.duration}</div>
                  </div>
                </div>

                <div>
                  {track.patronOnly ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.8rem', fontFamily: 'var(--font-accent)' }}>
                      <Lock size={14} /> Guild Member Vault
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <Volume2 size={14} /> Public Stream
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
