import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, TrendingUp, Clock, Cpu, Wifi, Settings, RefreshCcw } from 'lucide-react';
import AnimatedHorizontalBar from '../components/AnimatedHorizontalBar';
import InteractiveCard from '../components/InteractiveCard';
import FloatContainer from '../components/FloatContainer';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const popIn = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function UrjaMobility() {
  const baseUrl = import.meta.env.BASE_URL;
  const revProfitData = [
    { label: 'FY23', value: 4, color: '#7e22ce', secondaryValue: 0.5, secondaryColor: '#3b82f6' },
    { label: 'FY24', value: 13, color: '#7e22ce', secondaryValue: 1.5, secondaryColor: '#3b82f6' },
    { label: 'FY25', value: 34, color: '#7e22ce', secondaryValue: 4, secondaryColor: '#3b82f6' },
    { label: 'FY26(E)', value: 48, color: '#7e22ce', secondaryValue: 6.38, secondaryColor: '#3b82f6' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-50">

      {/* Soft dynamic ambient orbs for flavor without a heavy solid color blocking shape */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[120px] -translate-y-1/3" />
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <header className="mb-24 grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Fixed High-Contrast Typography & Metrics */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-blue-500 animate-pulse" /> Battery-as-a-Service for eMobility
            </motion.div>

            {/* Swapped white text for deep, sharp Slate-900 */}
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-2 uppercase">
              URJA MOBILITY
            </motion.h1>

            {/* Added rich corporate purple to the subtitle */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-purple-700 text-sm font-black uppercase tracking-widest mb-10 block">
              An EXIGO Subsidiary Tech Integration
            </motion.p>

            {/* Premium high-contrast shadow card configuration for the layout metrics */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-8 bg-white border border-slate-200 p-6 rounded-3xl shadow-xl text-left relative overflow-hidden">
              <div className="relative z-10 w-full sm:w-1/2">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Addressable Market</div>
                <div className="text-4xl font-black text-slate-900">$18.3B</div>
                <div className="text-slate-500 text-sm mt-1 font-semibold">Indian EV Market by 2029</div>
              </div>
              <div className="hidden sm:block w-px bg-slate-200 relative z-10" />
              <div className="relative z-10 w-full sm:w-1/2">
                <div className="text-purple-600 text-xs font-bold uppercase tracking-widest mb-1">CAGR 2025-30</div>
                <div className="text-4xl font-black text-purple-700">40.7%</div>
                <div className="text-slate-500 text-sm mt-1 font-semibold">Projected Market Size</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Holographic Glass Shield Adjusted for light mode */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring" }} className="lg:col-span-5 relative flex items-center justify-center">
            <FloatContainer duration={5} className="relative z-10 w-full max-w-[340px] aspect-square group">

              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-[40px] group-hover:blur-[60px] transition-all duration-700" />

              <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)] rounded-[3rem] overflow-hidden flex items-center justify-center p-10">

                {/* Tech Scanner Line Layer */}
                <motion.div
                  animate={{ y: ["-150%", "250%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent -rotate-12 pointer-events-none"
                />

                <span className="absolute top-6 right-6 text-[10px] text-slate-300 font-mono font-bold hidden group-hover:block transition-all"></span>

                <img
                  src={`${baseUrl}logo02.png`}
                  alt="Urja Mobility Wing Asset"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(126,34,206,0.12)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FloatContainer>
          </motion.div>
        </header>

        {/* System Tractions & Ecosystem Dashboard Blocks */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-12 gap-8 mb-16 items-start">

          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={popIn}>
              <InteractiveCard>
                <h2 className="text-2xl font-black text-purple-700 uppercase tracking-tight mb-8">Revenue & Profit Growth</h2>
                <AnimatedHorizontalBar data={revProfitData} height="h-8" maxValue={55} />
              </InteractiveCard>
            </motion.div>

            <motion.div variants={popIn}>
              <InteractiveCard className="overflow-visible">
                <h3 className="text-2xl font-black text-purple-700 uppercase tracking-tight mb-12 text-center">BaaS Tech Ecosystem</h3>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 relative px-4">
                  <div className="absolute top-1/2 left-10 right-10 border-t-2 border-dashed border-blue-200 hidden sm:block -z-10" />
                  {[
                    { title: "SMART BATTERY", sub: "IoT Enabled", icon: <Cpu className="w-6 h-6" /> },
                    { title: "CONNECTIVITY", sub: "Real-time Data", icon: <Wifi className="w-6 h-6" /> },
                    { title: "PLATFORM", sub: "Analytics & Ops", icon: <Settings className="w-6 h-6" /> },
                    { title: "LIFECYCLE", sub: "Second Life", icon: <RefreshCcw className="w-6 h-6" /> }
                  ].map((node, i) => (
                    <motion.div key={i} whileHover={{ y: -10, scale: 1.1 }} className="flex flex-col items-center bg-white p-4 rounded-full shadow-lg border-2 border-purple-100 relative z-10 w-28 h-28 justify-center text-center cursor-pointer">
                      <div className="text-purple-600 mb-1">{node.icon}</div>
                      <div className="text-[10px] font-black text-slate-900 leading-tight">{node.title}</div>
                      <div className="text-[8px] font-bold uppercase text-slate-400">{node.sub}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-100 pt-8 mt-12 text-center">
                  {[
                    { title: "Assets Under Mgmt", val: "₹80 Cr+", sub: "Batteries Deployed: 7,000+" },
                    { title: "FY26 Target", val: "₹48 Cr+", sub: "Profit PBT: ₹6.38 Cr" },
                    { title: "Growth Rate", val: "300%", sub: "FY25-26 Surge" },
                    { title: "Op Excellence", val: "96%", sub: "Retention Rate" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{stat.title}</div>
                      <div className="text-xl font-black text-purple-900">{stat.val}</div>
                      <div className="text-[8px] font-bold uppercase text-slate-400">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={popIn}>
              <InteractiveCard>
                <h3 className="text-2xl font-black mb-8 text-purple-700 tracking-tight uppercase">Value Proposition</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "ZERO UPFRONT COST", desc: "Drivers pay only security deposit, removing capex barrier", icon: <Battery /> },
                    { title: "2x INCOME GROWTH", desc: "Drivers earn ₹1,500/day vs ₹700 previously", icon: <TrendingUp /> },
                    { title: "HIGHER UPTIME", desc: "28+ days/month operational vs industry avg 22", icon: <Clock /> }
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-purple-600">{item.icon}</div>
                      <div>
                        <div className="text-sm font-black uppercase text-slate-900">{item.title}</div>
                        <div className="text-xs font-medium text-slate-500">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>

            <motion.div variants={popIn} className="flex gap-4">
              <InteractiveCard className="flex-1 text-center !p-6 bg-gradient-to-b from-purple-50 to-white">
                <div className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">Battery Deployments</div>
                <div className="text-3xl font-black text-slate-900 my-2">+114%</div>
                <div className="text-[10px] font-bold text-slate-400">Target: 15,000</div>
              </InteractiveCard>
              <InteractiveCard className="flex-1 text-center !p-6 bg-gradient-to-b from-blue-50 to-white">
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Geo Expansion</div>
                <div className="text-3xl font-black text-slate-900 my-2">15+ Cities</div>
                <div className="text-[10px] font-bold text-slate-400">Tier 1, 2 & 3</div>
              </InteractiveCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}