import React from 'react';
import { motion } from 'framer-motion';

export const TraditionPage: React.FC = () => {
  const eras = [
    {
      era: '13th Century',
      title: 'The Foundation of Microtonal Ragas',
      desc: 'The codification of Shruti systems and Dhrupad form in temple sanctuaries, establishing deep acoustic principles governed by diurnal rhythms.',
    },
    {
      era: '16th Century',
      title: 'Mughal Court Renaissance & Khayal',
      desc: 'Synthesis of Persian acoustic aesthetics with indigenous Vedic systems, yielding the expressive freedom of Khayal and instrumental improvisations.',
    },
    {
      era: '19th Century',
      title: 'Emergence of Iconic Gharana Lineages',
      desc: 'Formalization of distinct stylistic schools: Maihar, Gwalior, Agra, Kirana, and Imdadkhani, each guarding proprietary composition systems.',
    },
    {
      era: 'Present Day',
      title: 'Global Preservation & Digital Master Audio',
      desc: 'Archiving master performances for eternity while providing sanctuary for unamplified baithaks and immersive discipleship.',
    },
  ];

  return (
    <div>
      <section className="hero-wrapper" style={{ minHeight: '60vh' }}>
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/14477056/pexels-photo-14477056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Ancient Music Manuscript"
          />
          <div className="hero-gradient" />
        </div>
        <div className="container hero-content">
          <span className="subtitle">Heritage & Lineage</span>
          <h1 className="section-title">THE EIGHT CENTURY <span>ACOUSTIC SANCTUARY</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            An unbroken lineage of oral wisdom, sacred geometry in rhythm, and profound ragas that map the human soul.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <span className="subtitle" style={{ textAlign: 'center' }}>Chronicles of Sound</span>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            Evolution of the <span>Sacred Tradition</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {eras.map((item, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{ position: 'relative' }}
              >
                <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-accent)', fontSize: '0.9rem' }}>
                  {item.era}
                </span>
                <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0 1rem 0' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
