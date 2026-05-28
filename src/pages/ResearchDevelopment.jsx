import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, FlaskConical, Microscope, Database, Beaker, Layers, ChevronRight, Binary } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

// Crucial Fix: Ensuring the exact signature matching your App.jsx import row perfectly
export default function ResearchDevelopment() {
    const baseUrl = import.meta.env.BASE_URL || '/';

    // Fold 3 Elements: Automated In-House Sampling Slideshow Engine configuration
    const fold3Slides = ["rd_fold3_slide1.png", "technology_fold5_slide3.png", "rd_fold3_slide2.png", "technology_fold5_slide2.png"];
    const [currentFold3Index, setCurrentFold3Index] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFold3Index((prev) => (prev + 1) % fold3Slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [fold3Slides.length]);

    const researchAreas = [
        { title: "Data library generation to enable 'Know your material (KYM)'", icon: <Database className="w-5 h-5 text-purple-400" /> },
        { title: "SOP's for sampling batteries across various types of chemistries", icon: <Layers className="w-5 h-5 text-blue-400" /> },
        { title: "Nanomaterial synthesis to achieve 'Waste to Wealth mission'", icon: <FlaskConical className="w-5 h-5 text-cyan-400" /> },
        { title: "Process engineering to adapt to challenges from evolving battery compositions", icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
        { title: "Electrochemical metal recovery for energy storage applications", icon: <Beaker className="w-5 h-5 text-indigo-400" /> }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen bg-slate-50 relative overflow-hidden pb-24"
        >
            {/* FOLD 1: R&D HERO SECTION */}
            <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-20">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                    <img
                        src={`${baseUrl}rd_hero.png`}
                        alt="Research and Development Infrastructure Backdrop"
                        className="w-full h-full object-cover select-none"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-900/60 to-slate-50 z-10" />

                <div className="max-w-7xl mx-auto px-6 text-center z-20 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tight max-w-5xl mx-auto leading-[1.1] text-white drop-shadow-2xl"
                    >
                        Backed by strong scientific <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                            Research and Development
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* FOLD 2: CORE VISION & MISSION STRATEGIC SCOPE */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative z-20 mt-[-80px]">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Scientific Illustration Presentation Node Anchor */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 aspect-square bg-white rounded-[2.5rem] p-6 shadow-2xl border border-slate-200/60 flex items-center justify-center overflow-hidden group"
                    >
                        <img
                            src={`${baseUrl}rad-1-1.png`}
                            alt="Advanced Laboratory Analytics Representation"
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-103"
                        />
                    </motion.div>

                    {/* Core Areas Content Blocks Grid */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                        className="lg:col-span-7 space-y-6"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/60 backdrop-blur-md border border-indigo-200 text-indigo-800 text-xs font-black uppercase tracking-widest shadow-md">
                            <Microscope className="w-3.5 h-3.5 text-indigo-600" /> Laboratory Innovation Abstract
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                            Committed to innovation through futuristic technologies and team of experts
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-slate-700 font-medium leading-relaxed text-sm md:text-base">
                            Our young, energetic research and development team is committed to establish modern and efficient processing of waste batteries.
                        </motion.p>

                        <div className="w-full h-px bg-slate-200 my-4" />

                        <motion.h3 variants={fadeInUp} className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono">
                            Our major R&D areas are:
                        </motion.h3>

                        <div className="grid grid-cols-1 gap-3 pt-1">
                            {researchAreas.map((area, index) => (
                                <motion.div
                                    key={index} variants={fadeInUp}
                                    className="flex items-start gap-3 p-3 bg-white border border-slate-200 shadow-sm rounded-xl hover:border-indigo-300 transition-colors group"
                                >
                                    <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg shrink-0 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors">
                                        {area.icon}
                                    </div>
                                    <span className="text-xs md:text-sm font-black text-slate-800 uppercase tracking-tight leading-tight pt-1.5">
                                        {area.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOLD 3: IN-HOUSE SAMPLING SYSTEM DISCOVERY VIEWPORT */}
            <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 relative z-20">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Dynamic Interactive Description Text Column */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-black uppercase tracking-widest">
                            <Binary className="w-3.5 h-3.5" /> Authentication Systems
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                            Our reliable, in-house <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
                                Sampling Process
                            </span>
                        </h2>
                        <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-base">
                            Our in-house sampling processes enable batch-wise measurement of purity of the recovered Black Mass, thus establishing its authenticity and value.
                        </p>
                        <p className="text-slate-600 font-medium leading-relaxed text-xs md:text-sm bg-purple-50/50 border border-purple-100 p-4 rounded-2xl">
                            Our unique, global price discovery model further helps in discovering fair market pricing for trading of Black Mass, and committing to on-time payments with full disclosure and transparency.
                        </p>
                    </div>

                    {/* Dynamic Automatic Sampling Slideshow Viewport Panel */}
                    <div className="lg:col-span-6 aspect-[4/3] bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 p-6 flex items-center justify-center overflow-hidden relative group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentFold3Index}
                                initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                src={`${baseUrl === '/' ? '' : baseUrl}${fold3Slides[currentFold3Index]}`}
                                alt="Analytical Verification Testing Slide Frame Asset"
                                className="w-full h-full object-contain filter drop-shadow-xl"
                            />
                        </AnimatePresence>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                            {fold3Slides.map((_, dotIdx) => (
                                <button
                                    key={dotIdx} onClick={() => setCurrentFold3Index(dotIdx)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentFold3Index === dotIdx ? 'bg-white w-4' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOLD 4: PRODUCTIVE ASSOCIATIONS FRAMEWORK DIAGRAMS */}
            <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">Collaborative Integration</span>
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-4">Building productive associations towards the future of sustainable technology</h2>
                </div>

                {/* Association Architecture Vector Diagram Display Box */}
                <div className="max-w-4xl mx-auto bg-white border-2 border-slate-200 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden flex items-center justify-center group min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/20 to-purple-50/20 pointer-events-none" />
                    <img
                        src={`${baseUrl}technology_fold5_slide3.png`}
                        alt="Strategic Association and Sustainable Infrastructure Systems Diagram Flow"
                        className="w-full max-h-[350px] object-contain relative z-10 transition-transform duration-500 group-hover:scale-101"
                    />
                </div>
            </section>
        </motion.div>
    );
}