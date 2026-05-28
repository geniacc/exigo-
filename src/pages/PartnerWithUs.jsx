import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, RefreshCw, Activity, CheckCircle2, Send, Terminal, PieChart } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';

const textFadeVariants = {
    hidden: { opacity: 0, x: -15, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: 15, filter: "blur(4px)", transition: { duration: 0.2, ease: "easeIn" } }
};

export default function PartnerWithUs() {
    const [selectedNode, setSelectedNode] = useState('urja');
    const [scaleValue, setScaleValue] = useState(50);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const nodeConfig = {
        urja: {
            title: "Urja Mobility",
            tagline: "Energy-as-a-Service Hub",
            accent: "#39aad6",
            metricLabel: "Target Fleet Size Deployed",
            unit: "EV Batteries",
            multiplier: 120000,
            desc: "Deploy smart, IoT-enabled lithium power packs under high-retention BaaS infrastructure leasing models backed by 60-month corporate warranties.",
            logo: "/logo02.png"
        },
        digi2l: {
            title: "Digi2L Platform",
            tagline: "Circular Appliance Exchange",
            accent: "#983d97",
            metricLabel: "Projected Annual Exchange Volume",
            unit: "Units Restructured",
            multiplier: 2200,
            desc: "Plug into India's premier tech-enabled appliance trade-in matrix via plug-and-play APIs, capturing a massive 35% secondary market growth opportunity.",
            logo: "/logo03.png"
        },
        qwiksell: {
            title: "QwikSELL Pipeline",
            tagline: "Device Liquidation Channel",
            accent: "#23b3c8",
            metricLabel: "Target Asset Liquidation Value",
            unit: "INR Evaluated",
            multiplier: 15000,
            desc: "Unlock maximum hardware capital reclamation using automated 50+ parameter real-time AI pricing diagnostic software suites.",
            logo: "/logo01.png"
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.company) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormSubmitted(true);
        }, 1500);
    };

    const calculatedImpact = (scaleValue * nodeConfig[selectedNode].multiplier).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-100"
        >
            {/* Background Palette Ambient Blobs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4f2876]/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#23b3c8]/5 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER BLOCK */}
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-slate-300 text-[#4f2876] text-xs font-black uppercase tracking-widest mb-6 shadow-md">
                        <ShieldCheck className="w-4 h-4 text-[#23b3c8]" /> Institutional Gateway Portal
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4 uppercase">
                        Partner With <span className="text-[#4f2876]">EXIGO</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-800 font-bold leading-relaxed">
                        Integrate your enterprise fleet, industrial network channels, or OEM pipelines directly into India's most advanced circular economy tech infrastructure.
                    </p>
                </header>

                {/* CORE WORKFLOW SYSTEM GRID */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: LIVE PARAMETER CALCULATOR & NODE PICKER */}
                    <div className="lg:col-span-7 space-y-8">
                        <InteractiveCard className="!bg-white border-2 border-slate-300 shadow-xl">
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">1. Select Integration Node</h2>
                            <p className="text-sm font-black text-[#4f2876] uppercase tracking-wider mb-6">Choose the ecosystem layer you intend to build upon</p>

                            <div className="grid sm:grid-cols-3 gap-4 mb-8">
                                {[
                                    { id: 'urja', label: 'Urja Mobility', icon: <Zap className="w-5 h-5" />, color: 'group-hover:text-[#39aad6]' },
                                    { id: 'digi2l', label: 'Digi2L Platform', icon: <RefreshCw className="w-5 h-5" />, color: 'group-hover:text-[#983d97]' },
                                    { id: 'qwiksell', label: 'QwikSELL', icon: <Activity className="w-5 h-5" />, color: 'group-hover:text-[#23b3c8]' }
                                ].map((node) => (
                                    <button
                                        key={node.id}
                                        type="button"
                                        onClick={() => setSelectedNode(node.id)}
                                        className={`p-5 rounded-2xl border-4 text-left flex flex-col justify-between h-36 transition-all relative group ${selectedNode === node.id
                                                ? 'border-[#4f2876] bg-purple-100/40 shadow-inner scale-[0.98]'
                                                : 'border-slate-300 bg-white hover:border-slate-400'
                                            }`}
                                    >
                                        <div className={`p-2.5 rounded-xl transition-colors ${selectedNode === node.id ? 'bg-[#4f2876] text-white' : 'bg-slate-200 text-slate-900'} ${node.color}`}>
                                            {node.icon}
                                        </div>
                                        <div>
                                            <div className="text-base font-black text-slate-900 uppercase tracking-tight leading-none">{node.label}</div>
                                            <div className="text-[11px] text-slate-700 font-extrabold uppercase tracking-wider mt-1">Configure Layer</div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* DYNAMIC METRIC SLIDER ENGINE */}
                            <div className="border-t-2 border-slate-200 pt-8">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">2. Adjust Deployment Matrix Scale</h2>
                                <p className="text-sm font-black text-slate-700 uppercase tracking-wider mb-6">{nodeConfig[selectedNode].metricLabel}</p>

                                <div className="space-y-4 px-2">
                                    <input
                                        type="range" min="10" max="500" step="10"
                                        value={scaleValue}
                                        onChange={(e) => setScaleValue(Number(e.target.value))}
                                        className="w-full h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#4f2876]"
                                    />
                                    <div className="flex justify-between items-center text-base font-black text-slate-900">
                                        <span className="font-mono bg-slate-200 px-4 py-1.5 rounded-md border-2 border-slate-400 text-lg">{scaleValue} {nodeConfig[selectedNode].unit}</span>
                                        <span className="text-slate-700 font-extrabold text-xs uppercase tracking-widest">Max Simulation Bound: 500</span>
                                    </div>
                                </div>
                            </div>
                        </InteractiveCard>

                        {/* LIVE DATA SIMULATION DISPLAY PANEL */}
                        <motion.div layout>
                            <InteractiveCard className="!bg-slate-900 border-none shadow-2xl relative overflow-hidden text-white p-8">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                                <div className="text-xs font-mono text-cyan-400 flex items-center gap-2 mb-6 font-black tracking-widest relative z-10">
                                    <Terminal className="w-4 h-4 animate-pulse" /> TARGET INFRASTRUCTURE MATRIX PREVIEW
                                </div>

                                <div className="grid sm:grid-cols-12 gap-8 items-center relative z-10">

                                    {/* Left Parameter Calculations Area */}
                                    <div className="sm:col-span-7 space-y-4">
                                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 block leading-none">Estimated Asset Pipeline Impact</span>

                                        <motion.div
                                            key={calculatedImpact}
                                            initial={{ scale: 0.95, opacity: 0.7 }} animate={{ scale: 1, opacity: 1 }}
                                            className="text-3xl lg:text-4xl font-black text-white tracking-tight"
                                        >
                                            {calculatedImpact}
                                        </motion.div>

                                        {/* Animated Description Block */}
                                        <div className="min-h-[60px]">
                                            <AnimatePresence mode="wait">
                                                <motion.p
                                                    key={selectedNode}
                                                    variants={textFadeVariants} initial="hidden" animate="visible" exit="exit"
                                                    className="text-xs text-slate-200 font-semibold leading-relaxed"
                                                >
                                                    {nodeConfig[selectedNode].desc}
                                                </motion.p>
                                            </AnimatePresence>
                                        </div>

                                        {/* Interactive 35% Market Callout for Digi2L Node Layer */}
                                        {selectedNode === 'digi2l' && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                                className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 p-3 rounded-xl mt-2 text-xs font-bold text-purple-200 shadow-inner"
                                            >
                                                <PieChart className="w-4 h-4 text-purple-300 shrink-0" />
                                                <span>35% Market Opportunity Under Management</span>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Right Node Dynamic Data Metrics Shell & Logo Token Anchor */}
                                    <div className="sm:col-span-5 flex flex-col gap-4">
                                        {/* Centered Transparent Subsidiary Asset Box */}
                                        <div className="w-full h-24 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center p-4 shadow-xl backdrop-blur-md overflow-hidden relative group">
                                            <AnimatePresence mode="wait">
                                                <motion.img
                                                    key={selectedNode}
                                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                                    src={nodeConfig[selectedNode].logo}
                                                    alt="Sub-brand Integration Logo Asset"
                                                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </AnimatePresence>
                                        </div>

                                        {/* Diagnostic Matrix Stats */}
                                        <div className="bg-slate-950 p-5 rounded-xl border-2 border-slate-800 space-y-3 text-xs font-mono">
                                            <div className="flex justify-between items-center"><span className="text-slate-400 font-bold">Node Target:</span><span className="text-[#23b3c8] font-black uppercase">{selectedNode}</span></div>
                                            <div className="flex justify-between items-center"><span className="text-slate-400 font-bold">Metric Index:</span><span className="text-white font-black">{scaleValue} Units</span></div>
                                            <div className="flex justify-between items-center"><span className="text-slate-400 font-bold">B2B Core API:</span><span className="text-emerald-400 font-bold">READY / V3.01</span></div>
                                        </div>
                                    </div>

                                </div>
                            </InteractiveCard>
                        </motion.div>
                    </div>

                    {/* RIGHT: DATA INTAKE LEAD SECURE PIPELINE FORM */}
                    <div className="lg:col-span-5">
                        <AnimatePresence mode="wait">
                            {!formSubmitted ? (
                                <motion.div
                                    key="form-entry"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                >
                                    <InteractiveCard className="!bg-white border-2 border-slate-300 shadow-xl">
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">3. Payload Ingestion</h2>
                                            <p className="text-xs font-black text-[#4f2876] uppercase tracking-widest mt-1">Secure operational connection handshake</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">Corporate Officer Name *</label>
                                                <input
                                                    type="text" required name="name" value={formData.name} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-[#4f2876] font-bold text-sm transition-colors text-slate-900 bg-slate-50"
                                                    placeholder="e.g. Anagh Singh"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">Secure Business Email *</label>
                                                <input
                                                    type="email" required name="email" value={formData.email} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-[#4f2876] font-bold text-sm transition-colors text-slate-900 bg-slate-50"
                                                    placeholder="officer@company.com"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">Corporate Entity Organization *</label>
                                                <input
                                                    type="text" required name="company" value={formData.company} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-[#4f2876] font-bold text-sm transition-colors text-slate-900 bg-slate-50"
                                                    placeholder="e.g. UTC Digital Tech"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 mb-2">Integration Directives / Message</label>
                                                <textarea
                                                    rows="3" name="message" value={formData.message} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-[#4f2876] font-bold text-sm transition-colors text-slate-900 bg-slate-50 resize-none"
                                                    placeholder="Outline specific asset parameters or timeframe directives..."
                                                />
                                            </div>

                                            <button
                                                type="submit" disabled={isSubmitting || !formData.name || !formData.email || !formData.company}
                                                className="w-full mt-2 py-4 bg-gradient-to-r from-[#4f2876] to-[#39aad6] text-white font-black uppercase tracking-widest rounded-xl shadow-lg hover:shadow-purple-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-40 text-sm"
                                            >
                                                {isSubmitting ? (
                                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <span className="flex items-center gap-2 text-white">Transmit Ingestion Payload <Send className="w-4 h-4 text-white" /></span>
                                                )}
                                            </button>
                                        </form>
                                    </InteractiveCard>
                                </motion.div>
                            ) : (
                                <motion.div key="form-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
                                    <InteractiveCard className="bg-slate-900 text-white border-none shadow-2xl text-center py-12">
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </motion.div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-white">Handshake Payload Logged</h3>
                                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">Transmission Successful</p>
                                        <div className="bg-slate-950 p-5 rounded-xl text-left border border-slate-800 max-w-sm mx-auto font-mono text-xs leading-relaxed text-slate-300">
                                            <span className="text-emerald-400 font-bold">✓</span> Handshake payload parsed successfully.<br />
                                            <span className="text-emerald-400 font-bold">✓</span> Dispatched parameters to <span className="text-white">partners@exigocleantech.com</span>.<br /><br />
                                            Our deployment architects will schedule an ingestion handshake framework sync within 24 operational hours.
                                        </div>
                                    </InteractiveCard>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}