import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll to dynamically adjust the glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically close the mobile menu when changing pages
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Overview' },
    { path: '/urja', label: 'Urja Mobility' },
    { path: '/digi2l', label: 'Digi2L' },
    { path: '/qwiksell', label: 'QwikSELL' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-purple-100 shadow-lg shadow-purple-900/5 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Animated Brand Logo */}
        <NavLink to="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-12 h-12 rounded-2xl bg-white flex items-center justify-center overflow-hidden p-1.5 shadow-xl shadow-purple-900/10 group-hover:shadow-purple-600/30 transition-all duration-500">
            {/* Spinning dashed ring on hover */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-[-2px] rounded-2xl border border-dashed border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-[8px] text-slate-400 font-bold hidden">1_2.jpeg</span>
            <img src="/logo01.png" alt="EXIGO Logo" className="w-full h-full object-contain relative z-10 mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
          </div>
          <span className="font-black text-2xl tracking-tight text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-blue-600 transition-all duration-300">
            EXIGO
          </span>
        </NavLink>

        {/* Desktop Interactive Pill Navigation */}
        <div className="hidden md:flex items-center bg-white/50 backdrop-blur-md border border-slate-200 p-1.5 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `relative px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors ${isActive ? 'text-white' : 'text-slate-600 hover:text-purple-700'}`}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full z-0 shadow-md shadow-purple-500/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Animated Gradient CTA Button */}
        <NavLink to="/contact" className="hidden md:flex group relative overflow-hidden rounded-full shadow-lg shadow-purple-500/20 active:scale-95 transition-all">
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(90deg,#7e22ce,#2563eb,#7e22ce)] bg-[length:200%_200%]"
          />
          <div className="relative flex items-center gap-2 px-6 py-2.5 text-white text-sm font-black uppercase tracking-widest">
            Partner With Us
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 p-2.5 text-slate-900 bg-white rounded-xl shadow-md border border-slate-100 active:scale-95 transition-transform"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Animated Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-purple-100 shadow-2xl rounded-3xl p-4 flex flex-col gap-3 md:hidden origin-top"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `p-4 rounded-2xl text-lg font-black tracking-tight transition-colors ${isActive ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-500/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="w-full h-px bg-slate-100 my-2" />
            <NavLink to="/contact" className="p-4 rounded-2xl text-lg font-black tracking-tight bg-slate-900 text-white flex items-center justify-between active:scale-95 transition-transform">
              Partner With Us
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </div>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}