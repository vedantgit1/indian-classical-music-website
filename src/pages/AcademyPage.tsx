import React from 'react';
import { CheckCircle, GraduationCap, Award } from 'lucide-react';

export const AcademyPage: React.FC = () => {
  return (
    <div>
      <section className="hero-wrapper" style={{ minHeight: '60vh' }}>
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/6439848/pexels-photo-6439848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Master Class Academy"
          />
          <div className="hero-gradient" />
        </div>
        <div className="container hero-content">
          <span className="subtitle">Discipleship & Pedagogy</span>
          <h1 className="section-title">SANGEET <span>GURUKUL ACADEMY</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Intensive resident masterclasses and 1-on-1 discipleship under eminent Gharana maestros.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <GraduationCap size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vocal Khayal Mastery</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Focusing on microtonal Intonation (Shruti), Bandish composition, and intensive Raga expansion algorithms.
              </p>
            </div>

            <div className="card">
              <Award size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Instrumental Sitar & Sarod</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Stroke mechanics, Meend pitch-bending dexterity, and complex rhythm calculations (Layakari).
              </p>
            </div>

            <div className="card">
              <CheckCircle size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tabla & Rhythmology</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Deep cadence training in traditional Farrukhabad and Punjab gharana compositions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
