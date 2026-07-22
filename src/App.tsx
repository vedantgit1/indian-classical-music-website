import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TraditionPage } from './pages/TraditionPage';
import { ConcertsPage } from './pages/ConcertsPage';
import { ArchivesPage } from './pages/ArchivesPage';
import { AcademyPage } from './pages/AcademyPage';
import { PatronagePage } from './pages/PatronagePage';

export const App: React.FC = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tradition" element={<TraditionPage />} />
            <Route path="/concerts" element={<ConcertsPage />} />
            <Route path="/archives" element={<ArchivesPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/patronage" element={<PatronagePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
