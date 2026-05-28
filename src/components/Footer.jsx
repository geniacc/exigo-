import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, MessageSquare, ArrowRight, Cpu, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } }
};

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden z-10 text-slate-300 border-t border-slate-900 shadow-[0_-15px_40px_rgba(0,0,0,0.5)]">

      {/* Animated Electric Laser Top Border Fluid Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#23b3c8] to-transparent"
        />
      </div>

      {/* Corporate Identity Palette Color Spill Ambient Blobs */}
      <div className="absolute bottom-[-100px] left-1/4 w-[600px] h-[250px] bg-[#4f2876]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[-50px] right-1/4 w-[400px] h-[180px] bg-[#23b3c8]/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Presentation Layout Anchor */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group inline-flex">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-xl transition-all duration-300"
              >
                <img src={`${baseUrl === '/' ? '' : baseUrl}logo01.png`} alt="EXIGO Hub Logo" className="w-full h-full object-contain" />
              </motion.div>
              <div>
                <span className="font-black text-2xl text-white tracking-tighter block leading-none">EXIGO</span>
                <span className="text-[9px] font-black text-[#23b3c8] tracking-widest uppercase mt-1 block">Cleantech System</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-medium">
              A unified product life cycle management technology platform structuring high-yield, software-managed asset ecosystem parameters.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Globe className="w-4 h-4" />, href: "#", activeColor: "hover:bg-[#23b3c8] hover:shadow-[#23b3c8]/30 hover:border-[#23b3c8] hover:text-white" },
                { icon: <MessageSquare className="w-4 h-4" />, href: "#", activeColor: "hover:bg-[#39aad6] hover:shadow-[#39aad6]/30 hover:border-[#39aad6] hover:text-white" }
              ].map((social, idx) => (
                <motion.a
                  key={idx} href={social.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all ${social.activeColor}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Clean Sub-Network Grid Array: Digi2L fully cleared */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h4 className="text-[#23b3c8] font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Subsidiary Network
            </h4>
            <ul className="space-y-4">
              {[
                { path: "/urja", label: "Urja Mobility" },
                { path: "/qwiksell", label: "QwikSELL Pipeline" }
              ].map((node) => (
                <li key={node.path}>
                  <Link to={node.path} className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <motion.span className="inline-block" whileHover={{ x: 3 }}>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#23b3c8]" />
                    </motion.span>
                    {node.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Secure Administrative Contact Coordinates */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-[#23b3c8] font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Operational Handshake
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#23b3c8] shrink-0 mt-0.5" />
                <span>UTC Digital Tech Pvt Ltd.<br />Corporate Headquarters</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#23b3c8] shrink-0" />
                <a href="mailto:partners@exigocleantech.com" className="hover:text-white transition-colors">partners@exigocleantech.com</a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* System Clock & Validation Tracking Footer Ledger */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500"
        >
          <div className="flex gap-4 sm:gap-6">
            <span>© 2026 UTC Digital Tech Pvt Ltd.</span>
            <span className="hidden sm:inline">All cryptographic asset boundaries logged.</span>
          </div>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-[#23b3c8]">
              <div className="w-2 h-2 rounded-full bg-[#23b3c8] animate-pulse shadow-[0_0_8px_#23b3c8]" />
              Ecosystem Engine Online
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}