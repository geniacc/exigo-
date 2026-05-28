import React, { useEffect } from 'react';
// Swapped BrowserRouter to HashRouter to fix GitHub Pages server-side 404 crashes
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import UrjaMobility from './pages/UrjaMobility';
import QwikSell from './pages/QwikSell';
import PartnerWithUs from './pages/PartnerWithUs'; 

// Handles inner routing mechanics safely under the HashRouter context instance
function AppContent() {
  const location = useLocation();

  // Scroll smoothly to top on every individual sub-route transition
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
            <Route path="/" element={<Home />} />
            <Route path="/urja" element={<UrjaMobility />} />
            <Route path="/qwiksell" element={<QwikSell />} />
            <Route path="/contact" element={<PartnerWithUs />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

// Master layout entry wrapper explicitly initializing the client HashRouter tracker pipeline
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}