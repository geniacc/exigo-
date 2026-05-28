import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import UrjaMobility from './pages/UrjaMobility';
import Digi2L from './pages/Digi2L';
import QwikSell from './pages/QwikSell';
import PartnerWithUs from './pages/PartnerWithUs'; // Imported the new dashboard page

// Inner component to handle routing logic and hooks safely inside the Router context
function AppContent() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    // Changed overflow-hidden to overflow-x-clip to prevent scrolling constraints on inner interactive cards
    <div className="relative w-full overflow-x-clip font-sans text-slate-900 bg-white selection:bg-indigo-200 selection:text-indigo-900 min-h-screen flex flex-col">
      <AmbientBackground />
      <Navbar />

      {/* Added z-10 to ensure content layers above the fixed ambient background */}
      <main className="flex-grow z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/urja" element={<UrjaMobility />} />
            <Route path="/digi2l" element={<Digi2L />} />
            <Route path="/qwiksell" element={<QwikSell />} />
            {/* Replaced old /contact route with the high-conversion dashboard */}
            <Route path="/contact" element={<PartnerWithUs />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

// Default export wraps the app in the required BrowserRouter
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}