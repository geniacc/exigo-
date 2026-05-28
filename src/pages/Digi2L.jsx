import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Network, Truck, Wallet } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';
import AnimatedHorizontalBar from '../components/AnimatedHorizontalBar';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Digi2L() {
  const baseUrl = import.meta.env.BASE_URL;
  // Configured to use exact corporate palette color hex values
  const revData = [
    { label: 'YEAR 01', value: 1.5, color: '#983d97' },
    { label: 'YEAR 02', value: 4.5, color: '#39aad6' },
    { label: 'CURRENT', value: 16.5, color: '#4f2876' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-50 text-[#424143]"
    >
      {/* Dynamic Background Mesh Grid using presentation color codes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-[#4f2876]/10 to-[#23b3c8]/5 rounded-bl-[300px] blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-[-10%] w-[40vw] h-[40vw] bg-[#39aad6]/5 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER BRANDING LAYER */}
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-6">
            <img src={`${baseUrl}logo03.png`} alt="Digi2L Sub-brand Logo" className="h-16 mx-auto object-contain drop-shadow-md" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4 uppercase leading-none"
          >
            Digital Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2876] to-[#39aad6] font-extrabold">for Used Appliance Exchange</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-slate-200 text-[#4f2876] text-xs font-black uppercase tracking-widest shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-[#23b3c8]" /> India's First Tech-Enabled Disposal Platform
          </motion.div>
        </header>

        {/* METRICS & SPECTRAL DATA SECTION */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="grid lg:grid-cols-12 gap-8 mb-16">

          {/* Revenue Trajectory Left Module */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <InteractiveCard className="!bg-white border-slate-200 shadow-xl h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#4f2876] uppercase tracking-tight mb-1">Revenue Growth Trajectory</h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Fiscal Year Performance Matrix</p>

                <div className="mb-10 px-2">
                  <AnimatedHorizontalBar data={revData} height="h-7" maxValue={20} />
                </div>
              </div>

              <div className="bg-slate-50 border-t-2 border-slate-100 p-5 rounded-2xl text-center">
                <div className="font-black text-xl text-[#39aad6] uppercase tracking-wider">
                  9X YOY GROWTH <span className="text-[#4f2876] font-black">(ARR: ₹16.5 CR)</span>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>

          {/* Interactive Market SVG Circle Right Module */}
          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <InteractiveCard className="!bg-white border-slate-200 shadow-xl flex flex-col justify-center items-center relative p-8 h-full">
              <div className="text-center mb-6">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Refrigerators Segment</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secondary Market Cap Valuation</p>
              </div>

              <div className="relative w-60 h-60 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                  <motion.circle
                    cx="50" cy="50" r="42" fill="none" stroke="#4f2876" strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="264" strokeDashoffset="264"
                    whileInView={{ strokeDashoffset: 264 - (264 * 0.35) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} className="text-5xl font-black text-[#4f2876] tracking-tighter">35%</motion.div>
                  <div className="text-[10px] font-black text-[#23b3c8] uppercase tracking-widest leading-tight mt-1">Secondary Market<br />Opportunity</div>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>
        </motion.div>

        {/* ECOSYSTEM CAPABILITIES CORE PANEL */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="space-y-12">
          <InteractiveCard className="!bg-white border-slate-200 shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-black text-[#4f2876] uppercase tracking-tight mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
              Platform Capabilities
              <div className="w-12 h-1 bg-[#23b3c8] rounded-full mx-auto mt-2" />
            </h2>

            {/* Connecting Grid Flow Nodes */}
            <div className="grid md:grid-cols-3 gap-6 mb-16 relative">
              <div className="absolute top-1/2 left-12 right-12 border-t-2 border-dashed border-slate-200 hidden md:block -z-10" />
              {[
                { title: "API-FIRST INTEGRATION", sub: "Plug-and-play programmatic operational engine scaled directly for global OEMs & high-volume e-commerce nodes.", icon: <Network className="w-5 h-5" />, accent: "border-[#4f2876] text-[#4f2876]" },
                { title: "DOORSTEP LOGISTICS", sub: "Streamlined resource retrieval chains across 25 industrial hubs inside India.", icon: <Truck className="w-5 h-5" />, accent: "border-[#39aad6] text-[#39aad6]" },
                { title: "INSTANT SETTLEMENT", sub: "Automated, programmatic digital payment settlement vectors triggered directly upon secure validation clearance.", icon: <Wallet className="w-5 h-5" />, accent: "border-[#983d97] text-[#983d97]" }
              ].map((item, i) => (
                <motion.div
                  key={i} variants={fadeInUp} whileHover={{ y: -6 }}
                  className="bg-white border-2 border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-md transition-all hover:border-[#23b3c8] h-52 relative"
                >
                  <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center mb-4 ${item.accent} bg-slate-50`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 mb-2 leading-tight uppercase tracking-tight">{item.title}</div>
                    <div className="text-xs text-slate-500 font-medium leading-relaxed">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cumulative Platform Traction Matrix */}
            <div className="border-t border-slate-100 pt-12 max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-8">

                {/* Active Users Block */}
                <motion.div whileHover={{ scale: 0.99 }} className="border-2 border-slate-200 rounded-2xl p-6 flex items-center justify-between bg-slate-50/50 hover:border-[#4f2876] transition-colors cursor-default">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#39aad6] mb-1">Ecosystem Scale</div>
                    <div className="text-3xl font-black text-slate-900">75,000+</div>
                    <p className="text-xs text-slate-500 font-medium mt-1">Verified Active End-Users</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#4f2876] font-black border border-purple-100">NodeA</div>
                </motion.div>

                {/* Retail Distribution Channels Block */}
                <motion.div whileHover={{ scale: 0.99 }} className="border-2 border-slate-200 rounded-2xl p-6 flex items-center justify-between bg-slate-50/50 hover:border-[#4f2876] transition-colors cursor-default">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#39aad6] mb-1">Coverage Multiplier</div>
                    <div className="text-3xl font-black text-slate-900">7,000+</div>
                    <p className="text-xs text-slate-500 font-medium mt-1">Retail Points Across 25 Cities</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-[#23b3c8] font-black border border-cyan-100">NodeB</div>
                </motion.div>

              </div>
            </div>
          </InteractiveCard>
        </motion.div>
      </div>
    </motion.div>
  );
}