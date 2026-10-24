import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Academics } from './pages/Academics';
import { Faculty } from './pages/Faculty';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Admissions } from './pages/Admissions';
import { StudentPortal } from './pages/StudentPortal';
import { ParentPortal } from './pages/ParentPortal';
import { AcademicCalendar } from './pages/AcademicCalendar';
import { FeeStructure } from './pages/FeeStructure';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AnnouncementTicker } from './components/AnnouncementTicker';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-gold-light selection:text-navy">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow flex flex-col">
          <AnnouncementTicker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

