import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail, MapPin, Globe, MessageSquare, ArrowRight, Cpu,
  ShieldCheck, ShieldAlert, Factory, Building, Terminal, Layers
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } }
};

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden z-10 text-slate-300 border-t border-slate-900 shadow-[0_-20px_50px_rgba(0,0,0,0.6)]">

      {/* BACKGROUND PARTICLE GRID ANIMATION LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            backgroundPosition: { repeat: Infinity, duration: 12, ease: "linear" },
            opacity: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
          className="absolute inset-0 h-[200%] w-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(35, 179, 200, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        {/* Soft color spill mesh to add cinematic depth */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#4f2876]/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-[400px] h-[250px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Animated Electric Laser Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900 z-10">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#23b3c8] to-transparent"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* MAIN INFRASTRUCTURE FOOTPRINT SPLIT LAYOUT TREE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 pb-12 border-b border-slate-900">

          {/* COLUMN 1: MASTER BRAND TOKENS (5 COLUMNS) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-44 h-16 rounded-2xl bg-white flex items-center justify-center p-3 shadow-2xl relative overflow-hidden group"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute inset-[-4px] rounded-2xl border border-dashed border-[#23b3c8]/40 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <img src={`${baseUrl === '/' ? '' : baseUrl}logo01.png`} alt="EXIGO Nucleus Logo" className="w-full h-full object-contain filter drop-shadow-sm" />
              </motion.div>
            </Link>

            <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
              A unified product life cycle management technology platform structuring high-yield, software-managed asset ecosystem parameters across global manufacturing loops.
            </p>

            <div className="flex gap-3">
              {[
                { icon: <Globe className="w-4 h-4" />, href: "#", color: "hover:bg-[#23b3c8] hover:shadow-[#23b3c8]/20" },
                { icon: <MessageSquare className="w-4 h-4" />, href: "#", color: "hover:bg-[#39aad6] hover:shadow-[#39aad6]/20" }
              ].map((social, idx) => (
                <motion.a
                  key={idx} href={social.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: SUBSIDIARY ECOSYSTEM DIRECTORY (2 COLUMNS) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <h4 className="text-[#23b3c8] font-black uppercase tracking-widest text-[10px] flex items-center gap-2 font-mono">
              <Cpu className="w-3.5 h-3.5" /> Subsidiaries
            </h4>
            <ul className="space-y-3">
              {[
                { path: "/urja", label: "Urja Mobility" },
                { path: "/qwiksell", label: "QwikSELL Pipeline" }
              ].map((node) => (
                <li key={node.path}>
                  <Link to={node.path} className="text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <motion.div className="flex items-center gap-1" whileHover={{ x: 3 }}>
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#23b3c8]" />
                      <span>{node.label}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: PLATFORM CAPABILITY VECTORS (2 COLUMNS) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <h4 className="text-[#23b3c8] font-black uppercase tracking-widest text-[10px] flex items-center gap-2 font-mono">
              <Layers className="w-3.5 h-3.5" /> Capabilities
            </h4>
            <ul className="space-y-3 text-xs font-bold text-slate-400">
              {[
                { path: "/about", label: "About Profile" },
                { path: "/battery-solutions", label: "Battery Solutions" },
                { path: "/sustainability", label: "Sustainability Hub" },
                { path: "/rd", label: "R&D Lab Operations" }
              ].map((link, lIdx) => (
                <li key={lIdx}>
                  <Link to={link.path} className="hover:text-white transition-colors flex items-center gap-1 group">
                    <motion.div className="flex items-center gap-1" whileHover={{ x: 3 }}>
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#23b3c8]" />
                      <span>{link.label}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: ADMINISTRATIVE & GEOGRAPHIC ENDPOINTS (4 COLUMNS) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4">
            <h4 className="text-[#23b3c8] font-black uppercase tracking-widest text-[10px] flex items-center gap-2 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> Operational Handshake
            </h4>
            <ul className="space-y-4 text-xs font-semibold text-slate-400">
              <li className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-[#23b3c8] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300 font-bold block uppercase font-mono text-[10px] mb-0.5">Corporate Headquarters</strong>
                  UTC Digital Tech Pvt Ltd.<br />Time Tower, M.G.Road, Gurugram
                </span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-[#23b3c8] shrink-0" />
                <span>
                  <strong className="text-slate-300 font-bold block uppercase font-mono text-[10px] mb-0.5">Secure Ingestion API</strong>
                  <a href="mailto:partners@exigocleantech.com" className="hover:text-white font-mono text-slate-400 transition-colors">partners@exigocleantech.com</a>
                </span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* BOTTOM ROW: GEOGRAPHICAL PRODUCTION MATRIX TRAIL */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 pt-4">
          {[
            { label: "Corporate Office", info: "Office 003, Ground Floor, Time Tower, Gurugram - 122002", icon: <Building className="w-4 h-4 text-blue-400" /> },
            { label: "Registered Office", info: "F-36, First Floor, East of Kailash, New Delhi - 110065", icon: <Globe className="w-4 h-4 text-purple-400" /> },
            { label: "Industrial Facility", info: "Barsat Road, Near Victor School, Karnal, Haryana - 132001", icon: <Factory className="w-4 h-4 text-emerald-400" /> }
          ].map((facet, fIdx) => (
            <motion.div
              key={fIdx} variants={itemVariants}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-900 flex items-start gap-3 hover:border-slate-800 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                {facet.icon}
              </div>
              <div>
                <span className="text-[9px] font-mono font-black uppercase text-slate-500 tracking-wider block leading-none mb-1">{facet.label}</span>
                <p className="text-[11px] font-medium leading-relaxed text-slate-400">{facet.info}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LEDGER FOOTER SIGNATURE ROW */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 font-sans"
        >
          <div className="flex gap-4 sm:gap-6 text-center sm:text-left">
            <span>© 2026 UTC Digital Tech Pvt Ltd.</span>
            <span className="hidden md:inline font-medium">All cryptographic asset boundaries logged via standard telemetry links.</span>
          </div>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-[#23b3c8] font-mono text-[11px]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#23b3c8] animate-pulse shadow-[0_0_8px_#23b3c8]" />
              Ecosystem Engine Online
            </span>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}