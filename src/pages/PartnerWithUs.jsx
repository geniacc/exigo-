import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Activity, CheckCircle2, Send, Terminal, Mail, Phone, Building, Globe, Factory, ChevronRight } from 'lucide-react';
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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        countryCode: '+91',
        phoneNumber: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const baseUrl = import.meta.env.BASE_URL || '/';

    const nodeConfig = {
        urja: {
            title: "Urja Mobility",
            tagline: "Energy-as-a-Service Hub",
            accent: "from-blue-500 to-indigo-600",
            glowColor: "rgba(37, 99, 235, 0.15)",
            metricLabel: "Target Fleet Size Deployed",
            unit: "EV Batteries",
            multiplier: 120000,
            desc: "Chemistry-agnostic closed-loop asset recovery managing LFP (Lithium Iron Phosphate), NMC (Nickel Manganese Cobalt), LCO, and LTO tracking parameters via pure hydrometallurgical validation methods.",
            logo: "logo02.png"
        },
        qwiksell: {
            title: "QwikSELL Pipeline",
            tagline: "Device Liquidation Channel",
            accent: "from-cyan-500 to-blue-600",
            glowColor: "rgba(35, 179, 200, 0.15)",
            metricLabel: "Target Asset Liquidation Value",
            unit: "INR Evaluated",
            multiplier: 15000,
            desc: "Unlock maximum hardware capital reclamation using automated 50+ parameter real-time AI pricing diagnostic software suites.",
            logo: "logo04.png"
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email || !formData.phoneNumber) return;

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
            className="min-h-screen relative overflow-hidden bg-slate-50 pb-24"
        >
            {/* FIXED HERO BACKDROP LAYER: Clean padding bounds stop the overlap seen in image_bc7320.jpg */}
            <section className="relative min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-24 pb-32">
                <div className="absolute inset-0 z-0 opacity-40 select-none">
                    <img
                        src={`${baseUrl === '/' ? '' : baseUrl}contact_us_fold1_card.png`}
                        alt="Corporate Handshake Infrastructure Background"
                        className="w-full h-full object-cover scale-105 filter blur-[1px]"
                    />
                </div>
                {/* Subtle light overlay to bridge into the clean theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-50 z-10" />

                <div className="max-w-7xl mx-auto px-6 text-center z-20 relative space-y-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-black uppercase tracking-widest mb-2 shadow-2xl"
                    >
                        <ShieldCheck className="w-4 h-4 text-cyan-400" /> Institutional Gateway Portal
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[1.1] max-w-5xl mx-auto text-white drop-shadow-2xl">
                        Collaborate with us to build a better <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                            future for the next generation
                        </span>
                    </h1>
                </div>
            </section>

            {/* CORE CONTROL HUB MATRIX LAYOUT */}
            <div className="max-w-7xl mx-auto px-6 relative z-20 mt-[-60px]">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: ASYMMETRIC CONTROL PANEL & MATRIX PREVIEW */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-slate-200 shadow-xl rounded-[2.5rem] p-8 space-y-8">

                            {/* INTERACTIVE NODE SELECTOR TRACK */}
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                                    <div>
                                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">1. Select Integration Node</h2>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Ecosystem Deployment Layer</p>
                                    </div>
                                    <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase self-start sm:self-center">
                                        Active Session Link
                                    </span>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { id: 'urja', label: 'Urja Mobility', icon: <Zap className="w-4 h-4" />, desc: "Energy-as-a-Service infrastructure mapping" },
                                        { id: 'qwiksell', label: 'QwikSELL', icon: <Activity className="w-4 h-4" />, desc: "Device liquidation value discovery pipelines" }
                                    ].map((node) => (
                                        <button
                                            key={node.id}
                                            type="button"
                                            onClick={() => setSelectedNode(node.id)}
                                            className={`p-5 rounded-2xl border-2 text-left flex gap-4 transition-all relative group h-24 items-center ${selectedNode === node.id
                                                ? 'border-blue-600 bg-blue-50/30 shadow-sm'
                                                : 'border-slate-200 bg-white hover:border-slate-300'
                                                }`}
                                        >
                                            <div className={`p-3 rounded-xl border transition-colors ${selectedNode === node.id
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'bg-slate-50 text-slate-500 border-slate-200'}`}
                                            >
                                                {node.icon}
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none">{node.label}</div>
                                                <div className="text-[11px] text-slate-400 font-semibold leading-tight">{node.desc}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* SIMULATION QUANTITY MATRIX RANGE SELECTOR */}
                            <div className="space-y-4 border-t border-slate-100 pt-6">
                                <div>
                                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">2. Adjust Deployment Matrix Scale</h2>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">{nodeConfig[selectedNode].metricLabel}</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                                    <div className="relative flex items-center">
                                        <input
                                            type="range" min="10" max="500" step="10"
                                            value={scaleValue}
                                            onChange={(e) => setScaleValue(Number(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-mono font-black text-slate-900">
                                        <span className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg text-blue-600 shadow-sm">
                                            {scaleValue} {nodeConfig[selectedNode].unit}
                                        </span>
                                        <span className="text-slate-400 uppercase text-[10px]">Max Simulation Bound: 500</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* PREVIEW TERMINAL HOUSING VIEWPORT */}
                        <motion.div layout>
                            <InteractiveCard className="!bg-slate-950 border-none shadow-2xl relative overflow-hidden text-white p-8 rounded-[2.5rem]">
                                <div
                                    className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-500 blur-3xl"
                                    style={{ backgroundColor: nodeConfig[selectedNode].glowColor }}
                                />

                                <div className="text-xs font-mono text-cyan-400 flex items-center gap-2 mb-6 font-black tracking-widest border-b border-slate-800 pb-3">
                                    <Terminal className="w-4 h-4 animate-pulse" /> TARGET INFRASTRUCTURE MATRIX PREVIEW
                                </div>

                                <div className="grid sm:grid-cols-12 gap-8 items-center relative z-10">
                                    <div className="sm:col-span-7 space-y-4">
                                        <div>
                                            <span className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-500 block leading-none">Estimated Asset Pipeline Impact</span>
                                            <motion.div
                                                key={calculatedImpact} initial={{ scale: 0.97, opacity: 0.8 }} animate={{ scale: 1, opacity: 1 }}
                                                className="text-3xl font-black text-white tracking-tight mt-1.5"
                                            >
                                                {calculatedImpact}
                                            </motion.div>
                                        </div>

                                        <div className="min-h-[72px]">
                                            <AnimatePresence mode="wait">
                                                <motion.p
                                                    key={selectedNode} variants={textFadeVariants} initial="hidden" animate="visible" exit="exit"
                                                    className="text-xs text-slate-300 font-medium leading-relaxed font-sans"
                                                >
                                                    {nodeConfig[selectedNode].desc}
                                                </motion.p>
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-5 space-y-4">
                                        <div className="w-full h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-md overflow-hidden group">
                                            <AnimatePresence mode="wait">
                                                <motion.img
                                                    key={selectedNode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                                    src={`${baseUrl === '/' ? '' : baseUrl}${nodeConfig[selectedNode].logo}`} alt="Subsidiary Logo Token"
                                                    className="w-full h-full object-contain filter drop-shadow-md"
                                                />
                                            </AnimatePresence>
                                        </div>
                                        <div className="bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-slate-800/80 space-y-2 font-mono text-[11px]">
                                            <div className="flex justify-between items-center"><span className="text-slate-400">Node Target:</span><span className="text-cyan-400 font-black uppercase">{selectedNode}</span></div>
                                            <div className="flex justify-between items-center"><span className="text-slate-400">Metric Index:</span><span className="text-white font-black">{scaleValue} Units</span></div>
                                            <div className="flex justify-between items-center"><span className="text-slate-400">B2B Core API:</span><span className="text-emerald-400 font-bold">READY / V3.01</span></div>
                                        </div>
                                    </div>
                                </div>
                            </InteractiveCard>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: PAYLOAD INGESTION INPUT PANEL (CONTACT FORM) */}
                    <div className="lg:col-span-5">
                        <AnimatePresence mode="wait">
                            {!formSubmitted ? (
                                <motion.div key="form-entry" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <div className="bg-white border border-slate-200 shadow-xl rounded-[2.5rem] p-8 space-y-6">
                                        <div>
                                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">3. Get in touch</h2>
                                            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mt-1">Secure communication handshake</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">First name *</label>
                                                    <input
                                                        type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 text-xs font-bold bg-slate-50/50 text-slate-900 transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Last name *</label>
                                                    <input
                                                        type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 text-xs font-bold bg-slate-50/50 text-slate-900 transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-12 gap-4">
                                                <div className="col-span-4 space-y-1.5">
                                                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Code</label>
                                                    <input
                                                        type="text" name="countryCode" required value={formData.countryCode} onChange={handleInputChange}
                                                        className="w-full px-3 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 text-xs font-mono font-black text-center bg-slate-50/50 text-slate-900 transition-colors"
                                                    />
                                                </div>
                                                <div className="col-span-8 space-y-1.5">
                                                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Phone Number *</label>
                                                    <input
                                                        type="tel" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 text-xs font-bold bg-slate-50/50 text-slate-900 transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Email *</label>
                                                <input
                                                    type="email" name="email" required value={formData.email} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 text-xs font-bold bg-slate-50/50 text-slate-900 transition-colors"
                                                    placeholder="officer@company.com"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Message</label>
                                                <textarea
                                                    name="message" rows="3" value={formData.message} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 text-xs font-bold bg-slate-50/50 text-slate-900 transition-colors resize-none"
                                                    placeholder="Outline operational scope directives..."
                                                />
                                            </div>

                                            <button
                                                type="submit" disabled={isSubmitting || !formData.firstName || !formData.email || !formData.phoneNumber}
                                                className="w-full mt-2 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-widest rounded-xl shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-40 text-xs"
                                            >
                                                {isSubmitting ? (
                                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <span className="flex items-center gap-1.5">Send Details <Send className="w-3.5 h-3.5" /></span>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="form-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
                                    <div className="bg-slate-950 text-white border-none shadow-2xl text-center py-12 px-6 rounded-[2.5rem]">
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </motion.div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-white">Handshake Payload Logged</h3>
                                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">Transmission Successful</p>
                                        <div className="bg-slate-900 p-5 rounded-xl text-left border border-slate-800 max-w-sm mx-auto font-mono text-xs leading-relaxed text-slate-300">
                                            <span className="text-emerald-400 font-bold">✓</span> Handshake payload parsed cleanly.<br />
                                            <span className="text-emerald-400 font-bold">✓</span> Dispatched to <span className="text-white">partners@exigocleantech.com</span>.<br /><br />
                                            Our deployment architects will schedule an ingestion framework synchronization sync within 24 operational hours.
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>

                {/* GEOGRAPHIC INFRASTRUCTURE FOOTPRINT CARD MATRIX */}
                <footer className="mt-20 border-t border-slate-200/60 pt-16 space-y-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        <a href="mailto:info@exigorecycling.com" className="p-5 bg-white border border-slate-200 rounded-2xl flex items-center gap-4 shadow-sm hover:border-blue-400 transition-colors group">
                            <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100"><Mail className="w-5 h-5" /></div>
                            <div>
                                <div className="text-[10px] font-mono font-black uppercase text-slate-400 leading-none">Global Mailing Node</div>
                                <div className="text-sm font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors mt-1">info@exigorecycling.com</div>
                            </div>
                        </a>
                        <a href="tel:+919599218908" className="p-5 bg-white border border-slate-200 rounded-2xl flex items-center gap-4 shadow-sm hover:border-blue-400 transition-colors group">
                            <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100"><Phone className="w-5 h-5" /></div>
                            <div>
                                <div className="text-[10px] font-mono font-black uppercase text-slate-400 leading-none">Direct Desk Line</div>
                                <div className="text-sm font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors mt-1">+91 95992 18908</div>
                            </div>
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { type: "Corporate Office", info: "Office no. 003, Ground Floor, Time Tower, M.G.Road, Gurugram - 122002", icon: <Building className="w-4 h-4 text-blue-600" />, accent: "hover:border-blue-400" },
                            { type: "Registered Office", info: "F-36, First Floor, East of Kailash, New Delhi, India – 110065", icon: <Globe className="w-4 h-4 text-purple-600" />, accent: "hover:border-purple-400" },
                            { type: "Our Plant", info: "BARSAT ROAD, VILLAGE BARSAT NEAR VICTOR SCHOOL KARNAL HARYANA-132001", icon: <Factory className="w-4 h-4 text-emerald-600" />, accent: "hover:border-emerald-400" }
                        ].map((loc, index) => (
                            <div key={index} className={`p-6 bg-white border border-slate-200 rounded-[2rem] flex flex-col justify-between shadow-sm transition-colors duration-300 min-h-[150px] ${loc.accent}`}>
                                <div className="w-8 h-8 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center">
                                    {loc.icon}
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{loc.type}</h4>
                                    <p className="text-xs font-bold text-slate-800 tracking-tight leading-relaxed">{loc.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </footer>

            </div>
        </motion.div>
    );
}