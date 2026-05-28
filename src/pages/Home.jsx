import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ExternalLink, BarChart3, ShieldCheck, Layers,
  AlertTriangle, Network, Activity, Cpu, Trash2, BatteryCharging,
  GitCommit, ChevronRight, RefreshCw, Leaf, Globe, Atom, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatContainer from '../components/FloatContainer';
import InteractiveCard from '../components/InteractiveCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const chaoticDrift = (xValues, yValues, duration, delay = 0) => ({
  animate: {
    x: xValues,
    y: yValues,
    rotate: [0, 4, -3, 0],
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
  const baseUrl = import.meta.env.BASE_URL || '/';

  const heroPhrases = [
    { prefix: "Powering", highlight: "The Circular Economy" },
    { prefix: "Architecting", highlight: "Tech Lifecycles" },
    { prefix: "Accelerating", highlight: "eMobility Growth" },
    { prefix: "Monetizing", highlight: "Pre-Owned Assets" }
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const cyclePhrase = () => setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);

  // Core Selector Active States
  const [activeDiagnosticNode, setActiveDiagnosticNode] = useState('threat');
  const [activePipelineStep, setActivePipelineStep] = useState(0);
  const [activePillarTab, setActivePillarTab] = useState('closed-loop');

  const processingStages = [
    { name: "Battery discharging", label: "01", icon: <BatteryCharging className="w-5 h-5 text-blue-600" />, desc: "Complete electrical stabilization and safe remnant energy draining profiles." },
    { name: "Battery dismantling", label: "02", icon: <Cpu className="w-5 h-5 text-indigo-600" />, desc: "Automated extraction of housing shells, mechanical pack separation, and wiring arrays." },
    { name: "Advanced mechanical and hydrometallurgical process", label: "03", icon: <Layers className="w-5 h-5 text-cyan-600" />, desc: "Precision crushing fields separating high-yield compounds from structural materials." },
    { name: "Black Mass leaching", label: "04", icon: <Activity className="w-5 h-5 text-purple-600" />, desc: "Targeted chemical dissolution isolation optimizing metallic element suspension grids." },
    { name: "Metal extraction", label: "05", icon: <RefreshCw className="w-5 h-5 text-blue-500" />, desc: "Advanced hydrometallurgical refining capturing individual element salts cleanly." },
    { name: "Material recovery", label: "06", icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, desc: "Final crystallization yielding exceptional battery-grade secondary raw materials." }
  ];

  // Core Pillars Data Array
  const sustainabilityPillars = {
    'closed-loop': {
      title: "Closed loop recycling",
      desc: "Accelerating full-value vertical loop execution. We coordinate advanced extraction systems ensuring secondary raw materials flow natively back into cell production manufacturing lines with zero reliance on raw mining sectors.",
      metric: "100% Traceable Loop"
    },
    'resource-recovery': {
      title: "Resource recovery",
      desc: "Maximizing the lifecycle value of raw mineral stocks. Our automated recovery systems pull vital chemical profiles completely intact from end-of-life battery cells to re-power upcoming industrial storage systems.",
      metric: "Comprehensive Mineral Extraction"
    },
    'high-yield': {
      title: "High-yield technology",
      desc: "Engineered for maximum element throughput. Our proprietary processing architectures hit industry-leading purification indexes, turning hazardous waste packages into ultra-pure, commercial-ready metal elements cleanly.",
      metric: "Up to 96% Recovery Rates"
    },
    'cathode-to-cathode': {
      title: "Cathode to cathode",
      desc: "Direct chemical pathway regeneration. The high-purity metal salts isolated through our advanced hydrometallurgical arrays are structurally certified and fully optimized to synthesize fresh cathode-active material instantly.",
      metric: "Battery-Grade Certification"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* BACKGROUND MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
        <motion.div
          animate={{ y: [0, 60] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 h-[200%]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 select-none">
          <img
            src={`${baseUrl === '/' ? '' : baseUrl}hero.png`}
            alt="Core Background Mesh"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-50 z-10" />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div style={{ y: yOrb }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-20 w-full relative pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-black uppercase tracking-widest mb-8 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Ecosystem Platform Online
            </motion.div>

            <div className="mb-6 cursor-pointer select-none group" onClick={cyclePhrase} onMouseEnter={cyclePhrase}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6 uppercase"
                >
                  {heroPhrases[phraseIndex].prefix}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 transition-all duration-700">
                    {heroPhrases[phraseIndex].highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p variants={fadeInUp} className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl font-medium">
              A Product life cycle management technology platform architecting sustainable, high-yield ecosystems across India.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-95 inline-flex items-center gap-2 group">
                Access Investor Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Network Node Field */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="relative lg:h-[650px] flex items-center justify-center select-none"
          >
            <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
              <motion.div variants={chaoticDrift([0, 12, -8, 0], [0, -15, 6, 0], 7.5, 0)} animate="animate" className="absolute top-[-20px] left-[-20px] z-20">
                <Link to="/urja" className="block w-20 h-20 bg-white border-2 border-slate-200 shadow-2xl rounded-2xl p-2.5 flex items-center justify-center hover:border-blue-500 transition-colors bg-white">
                  <img src={`${baseUrl === '/' ? '' : baseUrl}logo02.png`} alt="Urja Node" className="w-full h-full object-contain" />
                </Link>
              </motion.div>

              <motion.div variants={chaoticDrift([0, -8, 15, 0], [0, 18, -12, 0], 8, 0.2)} animate="animate" className="absolute bottom-[-30px] right-[30px] z-20">
                <Link to="/qwiksell" className="block w-20 h-20 bg-white border-2 border-slate-200 shadow-2xl rounded-2xl p-2.5 flex items-center justify-center hover:border-cyan-500 transition-colors bg-white">
                  <img src={`${baseUrl === '/' ? '' : baseUrl}logo04.png`} alt="QwikSell Node" className="w-full h-full object-contain" />
                </Link>
              </motion.div>

              <FloatContainer duration={6} className="relative z-10 w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white/95 backdrop-blur-xl shadow-2xl border-4 border-white flex items-center justify-center p-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-cyan-50/40 rounded-full" />
                <img src={`${baseUrl === '/' ? '' : baseUrl}logo01.png`} alt="EXIGO Nucleus" className="w-full h-full object-contain relative z-10 drop-shadow-xl" />
              </FloatContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW INTEGRATED SECTION: SUSTAINABLE RECYCLING METRICS DIAGRAM BLOCK */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Indigenous Refining Framework
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                Providing end-to-end sustainable battery recycling solutions
              </h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Through our indigenous technology, we recycle batteries of various types of different chemical compositions, driving mineral purity boundaries while securing critical raw components for downstream industries.
              </p>

              {/* Tab Selector Links List Matrix */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {Object.keys(sustainabilityPillars).map((key) => (
                  <button
                    key={key} type="button" onClick={() => setActivePillarTab(key)}
                    className={`p-3 rounded-xl border text-left text-xs font-black uppercase tracking-tight transition-all ${activePillarTab === key
                      ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/10'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-700'}`}
                  >
                    {sustainabilityPillars[key].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dynamic Interactive Diagram Layout Pane */}
            <div className="lg:col-span-7 grid md:grid-cols-12 gap-6 items-center">
              {/* Asset Token Frame Holder */}
              <div className="md:col-span-5 aspect-square bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={`${baseUrl === '/' ? '' : baseUrl}AboutExigoRecycling.png`}
                  alt="Indigenous Technology Extraction Matrix Framework Icon"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Specification Visual Display Viewport Terminal */}
              <div className="md:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-white min-h-[220px] flex flex-col justify-between font-mono text-xs">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillarTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}
                    className="space-y-4 font-sans"
                  >
                    <span className="text-[10px] font-mono text-cyan-400 font-black uppercase tracking-widest block border-b border-slate-800 pb-2">
                      System Module Data Field
                    </span>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">
                      {sustainabilityPillars[activePillarTab].title}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed">
                      {sustainabilityPillars[activePillarTab].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="border-t border-slate-800/80 pt-3 flex justify-between items-center text-[10px] text-emerald-400 font-sans font-black uppercase tracking-wider mt-4">
                  <span>Parameter Log:</span>
                  <AnimatePresence mode="wait">
                    <motion.span key={activePillarTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-right">
                      {sustainabilityPillars[activePillarTab].metric}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DIAGRAM PANEL 1: THE MACRO THREAT VS THE PLATFORM ARCHITECTURE */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Ecosystem Operational Vector
              </span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                Ecosystem Disruption Matrix
              </h2>
              <p className="text-sm text-slate-500 font-medium">
                Toggle the operational phases to view how EXIGO Cleantech mitigates structural systemic friction across manufacturing cycles.
              </p>

              <div className="flex flex-col gap-3 pt-4">
                <button
                  type="button" onClick={() => setActiveDiagnosticNode('threat')}
                  className={`p-5 rounded-2xl border-2 text-left flex items-center gap-4 transition-all ${activeDiagnosticNode === 'threat'
                    ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'}`}
                >
                  <div className={`p-3 rounded-xl ${activeDiagnosticNode === 'threat' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 uppercase tracking-tight">The Macro Threat</div>
                    <div className="text-xs text-slate-400 font-bold uppercase mt-0.5">Linear Resource Attrition</div>
                  </div>
                </button>

                <button
                  type="button" onClick={() => setActiveDiagnosticNode('architecture')}
                  className={`p-5 rounded-2xl border-2 text-left flex items-center gap-4 transition-all ${activeDiagnosticNode === 'architecture'
                    ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'}`}
                >
                  <div className={`p-3 rounded-xl ${activeDiagnosticNode === 'architecture' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 uppercase tracking-tight">The Platform Architecture</div>
                    <div className="text-xs text-slate-400 font-bold uppercase mt-0.5">Tech-Enabled Asset Management</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 border-2 border-slate-200/60 rounded-[2rem] p-8 min-h-[340px] flex flex-col justify-between relative shadow-inner">
                <AnimatePresence mode="wait">
                  {activeDiagnosticNode === 'threat' ? (
                    <motion.div
                      key="threat-pane" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-6"
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center border border-red-200"><Trash2 className="w-5 h-5" /></div>
                        <span className="font-mono text-xs font-black text-red-500 bg-red-50 border border-red-200/60 px-2.5 py-1 rounded-md">DIAGNOSTIC CRITICAL</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Systemic Value Depletion</h3>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                        Billions of dollars are lost annually to inefficient hardware lifecycles. Electronic waste and intense upfront CAPEX overhead barriers for EV infrastructure are bottlenecking global sustainability and corporate profit margins.
                      </p>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden"><div className="h-full w-4/5 bg-red-500 animate-pulse" /></div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arch-pane" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-6"
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center border border-blue-200"><Cpu className="w-5 h-5" /></div>
                        <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-md">NETWORK OPERATIONAL</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Interconnected closed loops</h3>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                        EXIGO Cleantech orchestrates a massive, interconnected network. We transform physical liabilities into high-yield, software-managed assets across EV batteries and digital gadgets.
                      </p>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden"><div className="h-full w-full bg-blue-600" /></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="border-t border-slate-200/80 pt-4 flex justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  <span>Audit Source: EXIGO Core</span>
                  <span>Data Stream: Active Handshake</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGRAM PANEL 2: INTERACTIVE PIPELINE DIAGRAM TREE FLOW */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Raw Material Reclamation Pipeline
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mt-4">
            Reintroducing critical materials into the global supply chain
          </h2>
          <p className="text-sm text-slate-500 font-bold uppercase tracking-wide mt-2">
            Advanced mechanical and hydrometallurgical process implementation enabling demanufacturing from waste batteries to battery-grade material
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-2 relative">
            <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-slate-200 z-0" />

            {processingStages.map((stage, idx) => (
              <button
                key={idx} type="button" onClick={() => setActivePipelineStep(idx)}
                className={`w-full p-4 rounded-xl text-left flex items-center gap-4 relative z-10 transition-all border ${idx === activePipelineStep
                  ? 'border-blue-600 bg-white shadow-md translate-x-1'
                  : 'border-transparent hover:bg-white/60 text-slate-600'}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-black border transition-colors ${idx === activePipelineStep
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 text-slate-400 border-slate-200'}`}>
                  {stage.label}
                </div>
                <span className="text-xs font-black uppercase tracking-tight leading-none pt-0.5">{stage.name}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-[2.5rem] p-6 md:p-8 shadow-xl relative min-h-[280px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {processingStages[activePipelineStep].icon}
                </div>
                <span className="font-mono text-xs font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">STAGE PROJECTION</span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-black text-blue-600 uppercase tracking-widest leading-none">Pipeline Directive</span>
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={activePipelineStep} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                    className="text-xl font-black text-slate-900 uppercase tracking-tight"
                  >
                    {processingStages[activePipelineStep].name}
                  </motion.h3>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activePipelineStep} initial={{ opacity: 0, filter: "blur(2px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(2px)" }} transition={{ duration: 0.3 }}
                    className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed pt-1"
                  >
                    {processingStages[activePipelineStep].desc}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex justify-between items-center mt-6">
              <div className="flex gap-1">
                {processingStages.map((_, dotIdx) => (
                  <div key={dotIdx} className={`h-1.5 rounded-full transition-all ${dotIdx === activePipelineStep ? 'w-4 bg-blue-600' : 'w-1.5 bg-slate-200'}`} />
                ))}
              </div>
              <button
                type="button" onClick={() => setActivePipelineStep((p) => (p + 1) % processingStages.length)}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono font-black uppercase text-blue-600 hover:text-blue-700 transition-colors"
              >
                Next Step <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGRAM PANEL 3: ENVIRONMENTAL HANDSHAKE MODULE */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" /> Environmental Sustainability Handshake
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                Progressing towards reduced carbon emissions with our sustainable recycling initiatives
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                By isolating elements carefully without the extreme operational expenditures or pollution benchmarks of physical ore mining fields, we are proudly and actively contributing directly to the comprehensive global **Net Zero Waste mission**.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-4 py-2.5 rounded-xl shadow-sm">
                  <Globe className="w-4 h-4 text-emerald-600 animate-pulse" /> Low-Carbon Recovery Yields Enabled
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 aspect-[4/3] bg-slate-50 border-2 border-slate-200 p-4 rounded-[2.5rem] flex items-center justify-center overflow-hidden relative group shadow-inner">
              <img
                src={`${baseUrl === '/' ? '' : baseUrl}homepage_fold7.png`}
                alt="Sustainable Carbon Emission Framework Dashboard Representation Graphic"
                className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE INDUSTRIAL PLATFORM METRICS */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-white mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="mb-10 text-center md:text-left">
            <div className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2">Verified Industrial Infrastructure Matrix</div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Ecosystem Processing Yield</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-center md:text-left">
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20"><BarChart3 className="w-5 h-5" /></div>
              <div className="text-4xl font-black tracking-tight text-white">10,000+ Tons</div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mt-1">Annual Processing Capacity</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">Foremost among regional electronic and lithium-ion battery raw material recovery centers in India.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20"><Layers className="w-5 h-5" /></div>
              <div className="text-4xl font-black tracking-tight text-white">Upto 96%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mt-1">Resource Recovery Rate</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">Superior extraction technology delivering pure battery-grade cathode and anode active chemical elements.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20"><ShieldCheck className="w-5 h-5" /></div>
              <div className="text-4xl font-black tracking-tight text-white">3,60,000 sq ft</div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mt-1">Integrated Plant Scale</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">World-class zero-emission extraction facilities driven by advanced hydrometallurgical closed-loop recycling structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSIDIARY OPERATIONS SPLIT-DASHBOARD LAYOUT */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 border-t border-slate-200/60">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Corporate Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              The EXIGO Subsidiary Operations
            </h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Deep-dive into our specialized, software-driven infrastructure frameworks managing real-world assets.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
            {[
              {
                to: "/urja", title: "Urja Mobility", logo: "logo02.png", tagline: "Energy-as-a-Service Hub",
                desc: "Managing commercial scalability via an automated, highly responsive Battery-as-a-Service infrastructure network.",
                glow: "group-hover:border-blue-400 group-hover:shadow-blue-500/10",
                accentBg: "bg-blue-50 text-blue-600 border-blue-100", badge: "EaaS Platform Layer"
              },
              {
                to: "/qwiksell", title: "QwikSELL", logo: "logo04.png", tagline: "Device Liquidation Pipeline",
                desc: "Unlocking maximum value recovery channels across pre-owned consumer electronics with instant diagnostics.",
                glow: "group-hover:border-cyan-400 group-hover:shadow-cyan-500/10",
                accentBg: "bg-cyan-50 text-cyan-600 border-cyan-100", badge: "Liquidation Channel"
              }
            ].map((card, i) => (
              <Link key={i} to={card.to} className="block group">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`h-full bg-white border-2 border-slate-200/80 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm transition-all duration-300 relative overflow-hidden ${card.glow}`}
                >
                  <div className="space-y-6 w-full">
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 border border-slate-100 shadow-md rounded-2xl flex items-center justify-center p-2 bg-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img src={`${baseUrl === '/' ? '' : baseUrl}${card.logo}`} alt={`${card.title} Identity`} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <span className={`font-mono text-[10px] font-black border px-2.5 py-1 rounded-md uppercase tracking-wider ${card.accentBg}`}>
                        {card.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">{card.tagline}</div>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed pt-2">{card.desc}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6 mt-8 flex items-center justify-between text-xs font-mono font-black uppercase text-slate-400 group-hover:text-blue-600 transition-colors w-full">
                    <span>Initialize Pipeline</span>
                    <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center bg-slate-50 transition-all ${card.accentBg.split(' ')[0]} group-hover:border-transparent group-hover:scale-110`}>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}