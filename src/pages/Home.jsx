import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, BarChart3, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatContainer from '../components/FloatContainer';
import InteractiveCard from '../components/InteractiveCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const chaoticDrift = (xValues, yValues, duration, delay = 0) => ({
  animate: {
    x: xValues,
    y: yValues,
    rotate: [0, 6, -4, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay: delay
    }
  }
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Safely references Vite's base environment string ('/exigo-/') dynamically
  const baseUrl = import.meta.env.BASE_URL;

  const heroPhrases = [
    { prefix: "Powering", highlight: "The Circular Economy" },
    { prefix: "Architecting", highlight: "Tech Lifecycles" },
    { prefix: "Accelerating", highlight: "eMobility Growth" },
    { prefix: "Monetizing", highlight: "Pre-Owned Assets" }
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const cyclePhrase = () => setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
        <motion.div
          animate={{ y: [0, 60] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 h-[200%]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(126, 34, 206, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(37, 99, 235, 0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div style={{ y: yOrb }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 w-full relative">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-purple-200 text-purple-700 text-sm font-black uppercase tracking-widest mb-8 shadow-lg shadow-purple-500/10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Ecosystem Platform Online
            </motion.div>

            <div className="mb-6 cursor-pointer select-none group" onClick={cyclePhrase} onMouseEnter={cyclePhrase}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6 uppercase"
                >
                  {heroPhrases[phraseIndex].prefix}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-700">
                    {heroPhrases[phraseIndex].highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p variants={fadeInUp} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              A Product life cycle management technology platform architecting sustainable, high-yield ecosystems across India.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="bg-gradient-to-r from-purple-700 to-blue-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-purple-600/30 transition-all active:scale-95 inline-flex items-center gap-2 group">
                Access Investor Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Chaotic Drift Container Field */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="relative lg:h-[650px] flex items-center justify-center select-none"
          >
            <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">

              {/* NODE 01: Urja Mobility */}
              <motion.div
                variants={chaoticDrift([0, 15, -10, 0], [0, -20, 8, 0], 7.5, 0)}
                animate="animate"
                whileHover={{ scale: 1.1, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-[-30px] left-[-30px] z-20"
              >
                <Link to="/urja" className="block w-20 h-20 bg-white border-2 border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-2.5 flex items-center justify-center hover:border-[#39aad6] transition-colors duration-300 cursor-pointer bg-white">
                  <img src={`${baseUrl}logo02.png`} alt="Urja Node" className="w-full h-full object-contain" />
                </Link>
              </motion.div>

              {/* NODE 02: Digi2L Platform */}
              <motion.div
                variants={chaoticDrift([0, -15, 12, 0], [0, -25, 10, 0], 8.5, 0.4)}
                animate="animate"
                whileHover={{ scale: 1.1, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-[-40px] right-[-20px] z-20"
              >
                <Link to="/digi2l" className="block w-20 h-20 bg-white border-2 border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-2.5 flex items-center justify-center hover:border-[#983d97] transition-colors duration-300 cursor-pointer bg-white">
                  <img src={`${baseUrl}logo03.png`} alt="Digi2L Node" className="w-full h-full object-contain" />
                </Link>
              </motion.div>

              {/* NODE 03: QwikSELL Pipeline */}
              <motion.div
                variants={chaoticDrift([0, -10, 20, 0], [0, 25, -15, 0], 8, 0.2)}
                animate="animate"
                whileHover={{ scale: 1.1, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-[-45px] right-[40px] z-20"
              >
                <Link to="/qwiksell" className="block w-20 h-20 bg-white border-2 border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-2.5 flex items-center justify-center hover:border-[#23b3c8] transition-colors duration-300 cursor-pointer bg-white">
                  <img src={`${baseUrl}logo04.png`} alt="QwikSell Node" className="w-full h-full object-contain" />
                </Link>
              </motion.div>

              {/* CORE MASTER EMBLEM */}
              <FloatContainer
                duration={6}
                className="relative z-10 w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white/90 backdrop-blur-xl shadow-2xl border-4 border-white flex items-center justify-center p-10 group"
              >
                <motion.div
                  animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                  className="absolute inset-[-6px] rounded-full border border-dashed border-purple-400/40 opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 to-blue-50/30 rounded-full" />
                <img
                  src={`${baseUrl}logo01.png`} alt="EXIGO Nucleus"
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-102 transition-transform duration-300"
                />
              </FloatContainer>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Modules */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <InteractiveCard className="!bg-white border-slate-200 shadow-xl">
            <div className="text-xs font-black text-red-500 uppercase tracking-widest mb-3">The Macro Threat</div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Linear Resource Attrition</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Billions of dollars are lost annually to inefficient hardware lifecycles. Electronic waste and intense upfront CAPEX overhead barriers for EV infrastructure are bottlenecking global sustainability and corporate profit margins.</p>
          </InteractiveCard>
          <InteractiveCard className="!bg-white border-slate-200 shadow-xl">
            <div className="text-xs font-black text-purple-600 uppercase tracking-widest mb-3">The Platform Architecture</div>
            <h3 className="text-2xl font-black text-purple-700 uppercase tracking-tight mb-4">Tech-Enabled Asset Management</h3>
            <p className="text-slate-600 font-medium leading-relaxed">EXIGO Cleantech orchestrates a massive, interconnected network. We transform physical liabilities into high-yield, software-managed assets across EV batteries, smart consumer appliances, and digital gadgets.</p>
          </InteractiveCard>
        </div>
      </section>

      {/* Traction Metrics Dashboard */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-white mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="mb-10 text-center md:text-left">
            <div className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-2">Verified Institutional Growth Matrix</div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Ecosystem Financial Yield</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center md:text-left">
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20"><BarChart3 className="w-5 h-5" /></div>
              <div className="text-4xl font-black tracking-tight text-white">$23.3B+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mt-1">Aggregated Sector TAM</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">Combining Indian EV eMobility markets ($18.3B) alongside high-velocity pre-owned electronics liquidation channels ($5B).</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20"><Layers className="w-5 h-5" /></div>
              <div className="text-4xl font-black tracking-tight text-white">₹80 Cr+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mt-1">Assets Under Management</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">Secured via high-retention (96%) BaaS leasing deployment infrastructures, backed by updated robust 60-month warranty matrices.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20"><ShieldCheck className="w-5 h-5" /></div>
              <div className="text-4xl font-black tracking-tight text-white">₹16.5 Cr</div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mt-1">Appliance Exchange ARR</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">Captured programmatically via a unified plug-and-play API engine expansion layer across 75,000+ active users in 25 cities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiary Cards Operations Array */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-purple-900 uppercase tracking-tight mb-4">The EXIGO Subsidiary Operations</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest">Deep-dive into our specialized infrastructure frameworks.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { to: "/urja", title: "Urja Mobility", logo: "logo02.png", desc: "Energy-as-a-Service Hub. Managing $18.3B TAM via a scalable Battery-as-a-Service architecture.", color: "from-blue-600 to-purple-600", mt: "mt-0" },
            { to: "/digi2l", title: "Digi2L", logo: "logo03.png", desc: "Circular Appliance Exchange. B2B portal driving 9X YoY growth in the refrigerator secondary market.", color: "from-purple-600 to-purple-800", mt: "md:mt-12" },
            { to: "/qwiksell", title: "QwikSELL", logo: "logo04.png", desc: "Device Liquidation Pipeline. Unlocking maximum value across the $5B pre-owned electronics sector.", color: "from-purple-800 to-blue-900", mt: "md:mt-24" }
          ].map((card, i) => (
            <Link key={i} to={card.to} className={`block ${card.mt}`}>
              <InteractiveCard className="h-full group !bg-white border-slate-200 overflow-hidden relative flex flex-col justify-between p-6">
                <motion.div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.color} origin-left`} initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} />
                <div>
                  <div className="w-full h-24 border border-slate-200/60 rounded-2xl flex items-center justify-center p-4 mb-6 shadow-sm overflow-hidden relative group-hover:border-purple-300 transition-colors bg-white">
                    <img src={`${baseUrl}${card.logo}`} alt={`${card.title} Corporate Identity`} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight flex items-center gap-2 group-hover:text-purple-700 transition-colors">
                    {card.title} <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm">{card.desc}</p>
                </div>
              </InteractiveCard>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}