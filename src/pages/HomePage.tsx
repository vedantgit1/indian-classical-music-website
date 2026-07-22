import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight, ShieldCheck, Award, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/6439848/pexels-photo-6439848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Indian Classical Sitar Recital"
          />
          <div className="hero-gradient" />
        </div>

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="subtitle">The Apex Sanctuary of Classical Resonance</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)' }}>
              ECHOES OF THE <span>SACRED UNIVERSE</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '620px', marginBottom: '2.5rem', fontWeight: 300 }}>
              Experience unfiltered microtonal purity, ancient Ragas, and pristine lineage acoustic recitals preserved through generations of legendary Gurus.
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/concerts" className="btn btn-primary">
                Reserve Recital Seats <ArrowRight size={16} />
              </Link>
              <Link to="/archives" className="btn btn-outline">
                Explore Archives
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audio Visualizer Experience Strip */}
      <section style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)} aria-label="Toggle Preview Sound">
              {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '3px' }} />}
            </button>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Featured Master Tape
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>Raga Darbari Kanada — Alap (1968 Archives)</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="audio-visualizer">
              {[40, 70, 30, 90, 60, 100, 45, 80, 20, 75, 95, 50].map((h, i) => (
                <div
                  key={i}
                  className="vis-bar"
                  style={{
                    height: isPlaying ? `${h}%` : '20%',
                    animationPlayState: isPlaying ? 'running' : 'paused',
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-accent)' }}>
              24-bit / 192kHz Analog Restoration
            </span>
          </div>
        </div>
      </section>

      {/* Heritage Pillar Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="subtitle">Unbroken Lineage</span>
              <h2 className="section-title">
                Preserving Microtonal <span>Authenticity</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Indian classical music is not merely performed; it is invoked. Guided by pristine oral traditions (Gharanas) spanning over eight centuries, Sangeet Parampara acts as the guardian of uncompromised tonal integrity.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                From rare Shruti nuances to monumental night-long baithaks, we cultivate intimate acoustic environments where master artists and true connoisseurs commune.
              </p>
              <Link to="/tradition" className="btn btn-outline">
                Discover Our Lineage Tradition
              </Link>
            </motion.div>

            <motion.div
              className="img-frame"
              style={{ height: '480px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/15937060/pexels-photo-15937060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Master Tabla Performer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curated Offerings Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="subtitle">High Cultural Arts</span>
            <h2 className="section-title">
              The Realm of <span>Excellence</span>
            </h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <Radio size={32} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Rare Master Tape Archives</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Access digitized original recordings from private family archives, remastered for master quality audio preservation.
              </p>
              <Link to="/archives" className="btn-text">Explore Archives &rarr;</Link>
            </div>

            <div className="card">
              <Award size={32} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sangeet Academy Discipleship</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Rigorous traditional Guru-Shishya parampara education for advanced scholars, vocalists, and instrumentalists.
              </p>
              <Link to="/academy" className="btn-text">Audition Process &rarr;</Link>
            </div>

            <div className="card">
              <ShieldCheck size={32} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Patron-Class Baithaks</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Unamplified, intimate heritage salon recitals reserved exclusively for members of our global Cultural Guild.
              </p>
              <Link to="/concerts" className="btn-text">Concert Series &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Bleed Call to Action */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/11822308/pexels-photo-11822308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Classical Performance Hall"
          />
          <div className="hero-gradient" />
        </div>

        <div className="container-narrow" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="subtitle">Cultural Legacy Patronage</span>
          <h2 className="section-title" style={{ fontSize: ' clamp(2rem, 5vw, 3.5rem)' }}>
            BECOME A BENEFACTOR OF THE <span>ACOUSTIC ARTS</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            Your sponsorship directly provides fellowships for prodigies, funds rare master tape restoration, and sustains heritage baithak traditions.
          </p>
          <Link to="/patronage" className="btn btn-primary">
            Join The Guild of Patrons
          </Link>
        </div>
      </section>
    </div>
  );
};
