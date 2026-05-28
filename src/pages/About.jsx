import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Award, Milestone, Network, Leaf, Zap, Plus, Minus } from 'lucide-react';
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

export default function About() {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);

    const toggleMobileRow = (idx) => {
        setMobileExpandedIndex(mobileExpandedIndex === idx ? null : idx);
    };

    const differentiators = [
        {
            title: "Technological innovation & IP",
            desc: "Proprietary advanced chemical engineering extraction matrices optimized over a decade.",
            icon: <Cpu className="w-4 h-4 text-purple-600" />,
            bgShade: "bg-purple-50/70 border-purple-200/60 shadow-purple-500/5 hover:bg-white"
        },
        {
            title: "Highest-quality cathode & anode materials",
            desc: "Producing exceptional battery-grade secondary raw materials without mine overhead carbon loads.",
            icon: <Zap className="w-4 h-4 text-blue-600" />,
            bgShade: "bg-blue-50/70 border-blue-200/60 shadow-blue-500/5 hover:bg-white"
        },
        {
            title: "End-application know-how",
            desc: "Nuanced understanding of downstream cell manufacturer specifications and integration standards.",
            icon: <Milestone className="w-4 h-4 text-cyan-600" />,
            bgShade: "bg-cyan-50/70 border-cyan-200/60 shadow-cyan-500/5 hover:bg-white"
        },
        {
            title: "Ethical upstream & downstream practices",
            desc: "Transparent compliance pipelines tracking hazardous assets under clean audit frameworks.",
            icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
            bgShade: "bg-emerald-50/70 border-emerald-200/60 shadow-emerald-500/5 hover:bg-white"
        },
        {
            title: "Global production network",
            desc: "Positioned to coordinate cross-border resource lifecycle scaling systems efficiently.",
            icon: <Network className="w-4 h-4 text-indigo-600" />,
            bgShade: "bg-indigo-50/70 border-indigo-200/60 shadow-indigo-500/5 hover:bg-white"
        },
        {
            title: "Closed-loop approach",
            desc: "Accelerating full value chain circularity to capture target recovery yields cleanly.",
            icon: <Leaf className="w-4 h-4 text-teal-600" />,
            bgShade: "bg-teal-50/70 border-teal-200/60 shadow-teal-500/5 hover:bg-white"
        }
    ];

    // Explicit array partitioning for the dual horizontal row structures
    const firstRowDifferentiators = differentiators.slice(0, 3);
    const secondRowDifferentiators = differentiators.slice(3, 6);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen bg-slate-50 relative overflow-hidden pb-24 text-slate-900"
        >
            {/* MOVING PRISMATIC PASTEL BACKGROUND MESH SCENE */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
                <motion.div
                    animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-5%] left-[-5%] w-[55vw] h-[55vw] rounded-full bg-purple-100/50 blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, -40, 30, 0], y: [0, 20, -50, 0], scale: [1, 0.95, 1.05, 1] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[-5%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-blue-100/50 blur-[110px]"
                />
                <motion.div
                    animate={{ x: [-15, 25, 0, -15], y: [30, 0, -20, 30], scale: [0.95, 1.05, 1, 0.95] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[35%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-emerald-50/40 blur-[90px]"
                />
            </div>

            {/* SECTION 1: HERO CONTAINER BACKGROUND FIELD */}
            <section className="relative min-h-[50vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white shadow-xl shadow-slate-950/10">
                <div className="absolute inset-0 z-0 opacity-40 select-none">
                    <img
                        src={`${baseUrl}abouthero.png`}
                        alt="About Hero Image Vector Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-50 z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center z-20 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight max-w-4xl mx-auto leading-[1.2] text-white drop-shadow-2xl"
                    >
                        Increasing life with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                            limitless recycling
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* SECTION 2: CORPORATE STATEMENT PRESENTATION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-20 mt-[-60px] sm:mt-[-80px]">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Visual Identity Image Frame Token */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 aspect-square bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 shadow-xl border border-white/60 flex items-center justify-center overflow-hidden group"
                    >
                        <img
                            src={`${baseUrl}AboutExigoRecycling.png`}
                            alt="About Exigo Recycling Corporate Node Identity"
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                        />
                    </motion.div>

                    {/* Copy Description Panel */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                        className="lg:col-span-7 space-y-6 text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/60 backdrop-blur-md border border-purple-200 text-purple-800 text-xs font-black uppercase tracking-widest shadow-md shadow-purple-500/5">
                            <Award className="w-3.5 h-3.5 text-purple-600" /> Corporate Profile Abstract
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                            Exigo Recycling Pvt. Ltd.
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-slate-700 font-semibold leading-relaxed text-sm sm:text-base lg:text-lg">
                            Exigo Recycling Pvt. Ltd. is a secondary raw materials company specializing in producing low-carbon value materials. For over 10 years, we have actively worked towards developing a closed-loop resource recovery process of materials from end-of-life electronic waste.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm md:text-base">
                            Our sustainable recycling solution is instrumental in contributing to industrial product enhancement and the life cycle extension of natural resources. Our nuanced in-house designed technology empowers circularity in a product’s value chain and ensures net zero waste.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: STRATEGIC VISION & CORE DIFFERENTIATORS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-20">
                <div className="space-y-12">

                    {/* Top Row: Strategic Vision Left & Section Heading Right */}
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Sticky Vision Panel */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="rounded-[2.5rem] bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden text-left">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

                                <div className="w-full h-36 sm:h-40 border border-slate-800 rounded-2xl overflow-hidden mb-6 bg-slate-950 p-4 flex items-center justify-center">
                                    <img
                                        src={`${baseUrl}exigo-vision-1.png`}
                                        alt="Toward a sustainable future - The Exigo Vision"
                                        className="w-full h-full object-contain filter drop-shadow-md"
                                    />
                                </div>

                                <span className="text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest block mb-2">
                                    Strategic Intent Pipeline
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                                    Toward a sustainable future - The Exigo Vision
                                </h3>
                                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                                    Our vision is to decarbonise the battery supply chain by generating secondary raw materials for new batteries without the carbon overhead of mine production. We are expediting the closed-loop approach to enable the circularity of materials in the supply chain, through advanced recycling and recovery solutions.
                                </p>
                            </div>
                        </div>

                        {/* Right Side Section Main Heading Description */}
                        <div className="lg:col-span-7 space-y-4 pt-4 text-left">
                            <span className="text-xs font-black text-blue-700 uppercase tracking-widest bg-blue-100/60 border border-blue-200/60 px-3 py-1 rounded-full shadow-sm">
                                Competitive Advantages
                            </span>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                                Transforming the battery recycling industry with competitively differentiated features
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                                Our tailored features build scalable, high-yield commercial value loops that safely power next-generation industrial supply lines.
                            </p>
                        </div>
                    </div>

                    {/* DUAL-ROW HORIZONTAL MATRIX GRIDS */}
                    <div className="w-full pt-4">

                        {/* DESKTOP VIEW: Split exactly into two rows of 3 columns horizontally */}
                        <div className="hidden sm:flex flex-col gap-5">

                            {/* Row 1: First 3 Items horizontally */}
                            <div className="grid grid-cols-3 gap-5">
                                {firstRowDifferentiators.map((feat, index) => (
                                    <motion.div
                                        key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: index * 0.04 }}
                                    >
                                        <InteractiveCard className={`border-2 rounded-[2rem] h-full flex flex-col justify-between p-6 group transition-all duration-300 shadow-lg text-left ${feat.bgShade}`}>
                                            <div className="space-y-4">
                                                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-colors group-hover:scale-105 duration-300">
                                                    {feat.icon}
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                                                        {feat.title}
                                                    </h4>
                                                    <p className="text-[11px] text-slate-600 font-semibold leading-relaxed font-sans">
                                                        {feat.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </InteractiveCard>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Row 2: Next 3 Items horizontally */}
                            <div className="grid grid-cols-3 gap-5">
                                {secondRowDifferentiators.map((feat, index) => (
                                    <motion.div
                                        key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: (index + 3) * 0.04 }}
                                    >
                                        <InteractiveCard className={`border-2 rounded-[2rem] h-full flex flex-col justify-between p-6 group transition-all duration-300 shadow-lg text-left ${feat.bgShade}`}>
                                            <div className="space-y-4">
                                                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-colors group-hover:scale-105 duration-300">
                                                    {feat.icon}
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                                                        {feat.title}
                                                    </h4>
                                                    <p className="text-[11px] text-slate-600 font-semibold leading-relaxed font-sans">
                                                        {feat.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </InteractiveCard>
                                    </motion.div>
                                ))}
                            </div>

                        </div>

                        {/* MOBILE VIEW: Retains clean collapsible list tracks to prevent bounding breakage */}
                        <div className="block sm:hidden space-y-3">
                            {differentiators.map((feat, index) => {
                                const isExpanded = mobileExpandedIndex === index;
                                const activeShade = feat.bgShade.split(' ')[0];
                                const activeBorder = feat.bgShade.split(' ')[1];

                                return (
                                    <div
                                        key={index}
                                        className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${isExpanded ? `${activeShade} ${activeBorder} shadow-md` : 'border-slate-200/70 bg-white'}`}
                                    >
                                        <button
                                            type="button" onClick={() => toggleMobileRow(index)}
                                            className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
                                                    {feat.icon}
                                                </div>
                                                <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight leading-tight truncate">
                                                    {feat.title}
                                                </h4>
                                            </div>
                                            <div className="p-1 rounded-md text-slate-400 shrink-0 ml-2">
                                                {isExpanded ? <Minus className="w-3.5 h-3.5 text-indigo-600" /> : <Plus className="w-3.5 h-3.5" />}
                                            </div>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}
                                                >
                                                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 mt-1">
                                                        <p className="text-[11px] text-slate-600 font-semibold leading-relaxed font-sans pt-1">
                                                            {feat.desc}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </motion.div>
    );
}