import React, { useEffect } from 'react';
// Using HashRouter to ensure zero 404 deployment route breakages
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Core Application Component Views
import Home from './pages/Home';
import UrjaMobility from './pages/UrjaMobility';
import QwikSell from './pages/QwikSell';
import PartnerWithUs from './pages/PartnerWithUs';

// New Content Modules
import About from './pages/About';
import BatterySolutions from './pages/BatterySolutions';
import ResearchDevelopment from './pages/ResearchDevelopment';
import Sustainability from './pages/Sustainability'; // Loaded cleanly to prevent route mismatches

function AppContent() {
  const location = useLocation();

  // Scroll to view-top smoothly on any active path change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative w-full overflow-x-clip font-sans text-slate-900 bg-white selection:bg-indigo-200 selection:text-indigo-900 min-h-screen flex flex-col">
      <AmbientBackground />
      <Navbar />

      <main className="flex-grow z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Base Overview Route */}
            <Route path="/" element={<Home />} />

            {/* Operational Corporate Sub-Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/battery-solutions" element={<BatterySolutions />} />
            <Route path="/rd" element={<ResearchDevelopment />} />
            <Route path="/sustainability" element={<Sustainability />} />

            {/* Subsidiary Brand Track Routing Blocks */}
            <Route path="/urja" element={<UrjaMobility />} />
            <Route path="/qwiksell" element={<QwikSell />} />

            {/* B2B Capture System Handshake */}
            <Route path="/contact" element={<PartnerWithUs />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}