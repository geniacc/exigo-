import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Laptop, Tablet, TrendingUp, Cpu, BarChart3, ChevronRight, CheckCircle2, Sliders, ShieldCheck } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const popIn = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function QwikSell() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const [activeStep, setActiveStep] = useState(0);

  // Interactive Simulator States
  const [simDevice, setSimDevice] = useState('mobile');
  const [simCondition, setSimCondition] = useState('good');

  const marketData = [
    { label: 'Smartphones', value: 65, percentage: "65%", color: 'bg-[#4f2876]', text: 'text-[#4f2876]', volume: '32.5M Units' },
    { label: 'Laptops', value: 20, percentage: "20%", color: 'bg-[#39aad6]', text: 'text-[#39aad6]', volume: '10.0M Units' },
    { label: 'Tablets', value: 10, percentage: "10%", color: 'bg-[#983d97]', text: 'text-[#983d97]', volume: '5.0M Units' },
    { label: 'Others', value: 5, percentage: "5%", color: 'bg-[#23b3c8]', text: 'text-[#23b3c8]', volume: '2.5M Units' }
  ];

  const pipelineSteps = [
    { name: 'DIAGNOSE', detail: "Automated analysis of 50+ localized functional parameters." },
    { name: 'PRICE', detail: "AI pricing engine calculates optimal asset evaluation real-time." },
    { name: 'BUYBACK', detail: "Instant digital payouts directly locked over UPI networks." },
    { name: 'LIQUIDATION', detail: "Programmatic B2B marketplace distribution routing clears inventory." }
  ];

  // Simulator Logic Pricing Matrix
  const pricingMatrix = {
    mobile: { excellent: 8000, good: 6500, fair: 5000 },
    laptop: { excellent: 20000, good: 15000, fair: 10000 }
  };

  const currentSimPrice = pricingMatrix[simDevice][simCondition].toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-24 sm:pt-32 pb-24 relative overflow-hidden bg-slate-50 text-[#424143]"
    >
      {/* Heavy Diagonal Slice Background Preserved */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600 to-purple-800 transform origin-bottom-right -skew-x-12 translate-x-32 -z-10 opacity-10" />

      {/* Main Structural Layout Wrapper with mobile padding optimization */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* BRAND HEADER LAYOUT WITH ENLARGED LOGO */}
        <header className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 border-b border-slate-200 pb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#4f2876] border border-purple-200 text-[10px] sm:text-xs font-black uppercase tracking-widest">
              <TrendingUp className="w-3.5 h-3.5" /> Re-Commerce Solution Matrix
            </motion.div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight uppercase leading-none">
              QwikSELL
            </motion.h1>
            <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-xl sm:text-2xl lg:text-3xl font-black text-[#4f2876] tracking-tight uppercase">
              Device Re-Commerce
            </motion.h2>
          </div>

          {/* MASSIVE ENLARGED FLOATING LOGO SHIELD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="shrink-0 flex items-center justify-start md:justify-center relative"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute inset-[-8px] rounded-[2.5rem] border-2 border-dashed border-purple-300 opacity-60 hidden sm:block" />
            <div className="w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52 bg-white rounded-[2rem] border-2 border-slate-200 p-4 sm:p-6 shadow-2xl flex items-center justify-center group relative overflow-hidden cursor-pointer">
              <motion.div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={`${baseUrl === '/' ? '' : baseUrl}logo04.png`} alt="QwikSell Logo" className="w-full h-full object-contain filter drop-shadow-md transition-all duration-500 group-hover:scale-110" />
            </div>
          </motion.div>
        </header>

        {/* WORKFLOW PIPELINE INTERACTIVE ENGINE */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 sm:mb-16 space-y-6">
          <InteractiveCard className="!bg-white border-slate-200 shadow-xl overflow-hidden py-8 px-4 sm:p-10">
            {/* RESOLVED BOX OVERLAP ON MOBILE: Converted grid to flex-column stacking on mobile viewports */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative">
              {pipelineSteps.map((step, i) => (
                <motion.button
                  key={step.name} type="button" onClick={() => setActiveStep(i)} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}
                  className={`p-4 sm:p-5 rounded-2xl flex items-center justify-between transition-all border text-left ${activeStep === i ? 'bg-gradient-to-r from-[#4f2876] to-[#983d97] text-white border-none shadow-lg' : 'bg-slate-50 border-slate-200 text-slate-900 hover:border-purple-400 hover:bg-purple-50/20'}`}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className={`w-7 h-7 rounded-xl text-xs font-mono font-black flex items-center justify-center shrink-0 ${activeStep === i ? 'bg-white/20 text-white' : 'bg-[#4f2876] text-white'}`}>0{i + 1}</span>
                    <span className="text-xs sm:text-sm lg:text-sm font-black tracking-tight uppercase truncate">{step.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 hidden lg:block ${activeStep === i ? 'text-white' : 'text-slate-400'}`} />
                </motion.button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 min-h-[60px] bg-slate-50/80 p-4 rounded-xl border border-slate-200/60">
              <AnimatePresence mode="wait">
                <motion.div key={activeStep} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-black text-[#4f2876] uppercase tracking-wider mb-0.5">Pipeline Parameter Matrix Tracked</div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600">{pipelineSteps[activeStep].detail}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* DATA METRICS STRATEGIC GRID */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

          {/* LEFT COLUMN: FIXED MARKET COMPOSITION DATA CARD */}
          <motion.div variants={popIn} className="lg:col-span-6 flex">
            <InteractiveCard className="!bg-white border-2 border-slate-200 shadow-xl p-6 sm:p-8 flex flex-col justify-between w-full">
              <div className="text-left">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#4f2876] uppercase tracking-tight">Market Composition</h3>
                  <BarChart3 className="w-5 h-5 text-slate-400" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6sm:mb-8">Pre-owned Device Market Share Volume Index</p>

                <div className="space-y-5 sm:space-y-6 mb-8">
                  {marketData.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] sm:text-xs font-black uppercase">
                        <span className="text-slate-700 tracking-tight">{item.label}</span>
                        <span className={`${item.text} font-mono`}>{item.percentage} <span className="text-slate-400 font-normal">({item.volume})</span></span>
                      </div>
                      <div className="w-full h-2.5 sm:h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.percentage }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aggregated Institutional Highlights Banner */}
              <div className="grid grid-cols-2 gap-4 border-t-2 border-slate-100 pt-6 mt-4 text-center sm:text-left">
                <div>
                  <div className="text-[9px] sm:text-[10px] font-black text-blue-500 uppercase tracking-widest mb-0.5">Total Annual Volume</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none">50M Units</div>
                </div>
                <div className="border-l-2 border-slate-100 pl-4 sm:pl-6">
                  <div className="text-[9px] sm:text-[10px] font-black text-blue-500 uppercase tracking-widest mb-0.5">Market Value TAM</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none">$5 Billion</div>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE SIMULATION & PROP TECH MODULES */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 flex flex-col justify-between">

            {/* INTERACTIVE DEVICE VALUATION SIMULATOR */}
            <motion.div variants={popIn}>
              <InteractiveCard className="!bg-white border-2 border-slate-200 shadow-xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Sliders className="w-24 h-24 text-slate-900" /></div>

                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-black text-[#4f2876] uppercase tracking-tight mb-1">Average Selling Price ASP</h3>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-6">Real-Time Asset Yield Simulation Engine</p>
                </div>

                <div className="space-y-4">
                  {/* Selector Group One: Device Target */}
                  <div className="flex gap-2 items-center text-left">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest w-14 sm:w-16 shrink-0">Hardware:</span>
                    <div className="flex gap-1.5">
                      {['mobile', 'laptop'].map((dev) => (
                        <button
                          key={dev} type="button" onClick={() => setSimDevice(dev)}
                          className={`px-2.5 py-1 text-[10px] sm:text-xs font-black uppercase rounded-lg border-2 tracking-wider transition-all ${simDevice === dev ? 'border-[#4f2876] bg-purple-50 text-[#4f2876]' : 'border-slate-200 bg-white text-slate-500'}`}
                        >
                          {dev}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selector Group Two: Device Grading Condition */}
                  <div className="flex gap-2 items-center text-left">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest w-14 sm:w-16 shrink-0">Condition:</span>
                    <div className="flex gap-1.5">
                      {['excellent', 'good', 'fair'].map((cond) => (
                        <button
                          key={cond} type="button" onClick={() => setSimCondition(cond)}
                          className={`px-2.5 py-1 text-[10px] sm:text-xs font-black uppercase rounded-lg border-2 tracking-wider transition-all ${simCondition === cond ? 'border-[#23b3c8] bg-cyan-50 text-[#23b3c8]' : 'border-slate-200 bg-white text-slate-500'}`}
                        >
                          {cond}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Pricing Result Window Box */}
                  <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row gap-3 sm:items-center justify-between border-b-4 border-[#23b3c8] shadow-inner text-left">
                    <div>
                      <div className="text-[8px] sm:text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-none mb-1">Estimated Reclamation Pricing ASP</div>
                      <div className="text-[10px] sm:text-xs font-black text-cyan-400 uppercase tracking-wider">{simDevice} // Grade: {simCondition}</div>
                    </div>
                    <motion.div
                      key={currentSimPrice} initial={{ scale: 0.9, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }}
                      className="text-xl sm:text-2xl font-mono font-black tracking-tight"
                    >
                      {currentSimPrice}
                    </motion.div>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>

            {/* PROP TECH MODULES */}
            <motion.div variants={popIn} className="flex-grow flex">
              <InteractiveCard className="!bg-slate-900 border-none shadow-2xl p-6 sm:p-8 text-white w-full flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-cyan-400 font-black tracking-widest uppercase mb-2">
                    <Cpu className="w-4 h-4 animate-pulse" /> Proprietary Architecture Suite
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-5 sm:mb-6">Core Operational Assets</h3>

                  <div className="space-y-3">
                    {[
                      { title: "DIAGNOSTIC SOFTWARE", desc: "Automated verification pipelines analyzing 50+ component parameters seamlessly." },
                      { title: "AI PRICING MATRIX", desc: "Real-time pricing valuation metrics adjusted automatically based on current demand indexes." }
                    ].map((tech, i) => (
                      <motion.div
                        key={i} whileHover={{ x: 6 }}
                        className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 hover:border-[#23b3c8] transition-colors cursor-pointer"
                      >
                        <div className="text-[10px] sm:text-xs font-black text-white uppercase tracking-wider mb-1">{tech.title}</div>
                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-relaxed">{tech.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}