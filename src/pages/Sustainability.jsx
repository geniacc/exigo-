import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Users, Award } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';

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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Crucial Fix: Ensuring the exact signature matching your App.jsx import statement perfectly
export default function Sustainability() {
    const baseUrl = import.meta.env.BASE_URL || '/';

    const collageImages = [
        "sustainability_fold2_card1.png",
        "sustainability_fold2_card2.png",
        "sustainability_fold2_card3.png",
        "sustainability_fold2_card4-2.png",
        "sustainability_fold2_card5-3.png",
        "sustainability_fold2_card6-2.png"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen bg-slate-50 relative overflow-hidden pb-24"
        >
            {/* FOLD 1: SUSTAINABILITY HERO SECTION */}
            <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-20">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                    <img
                        src={`${baseUrl}sustainablehero.png`}
                        alt="Sustainable Infrastructure Operations Backdrop"
                        className="w-full h-full object-cover select-none"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-900/60 to-slate-50 z-10" />

                <div className="max-w-7xl mx-auto px-6 text-center z-20 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-black uppercase tracking-tight max-w-4xl mx-auto leading-[1.1] text-white drop-shadow-2xl"
                    >
                        Building a sustainable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                            future
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* FOLD 2: MISSION MISSION STATEMENT & GRID COLLAGE */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative z-20 mt-[-80px]">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side: Statement Text panel */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/60 backdrop-blur-md border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-widest shadow-md">
                            <Leaf className="w-3.5 h-3.5 text-emerald-600" /> Operational Mandate
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                            Establishing carbon-efficient processes to fulfill Net-Zero Waste mission
                        </h2>

                        <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-base">
                            We aim to achieve circularity in the industrial supply chain by offering low-carbon value materials sourced from multiple waste streams and processed through carbon-neutral processes. Exigo is dedicated to optimizing its operations and contributing minimally to landfills.
                        </p>

                        <p className="text-slate-600 font-semibold leading-relaxed text-xs md:text-sm bg-emerald-50/60 border border-emerald-100 p-4 rounded-2xl">
                            Our R&D department is focused on developing solutions to achieve the “Waste-to-wealth mission”.
                        </p>
                    </motion.div>

                    {/* Right Side: Structural Responsive Collage Grid View */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                        {collageImages.map((imgName, index) => (
                            <div
                                key={index}
                                className="aspect-square bg-white rounded-2xl p-3 shadow-md border border-slate-200/60 flex items-center justify-center overflow-hidden hover:border-emerald-300 transition-colors group"
                            >
                                <img
                                    src={`${baseUrl === '/' ? '' : baseUrl}${imgName}`}
                                    alt="Industrial Circular Flow Processing Metric Collage Piece"
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FOLD 3: ESG PRINCIPLES CORE SUB-SECTIONS (ALTERNATING LAYOUTS) */}
            <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-xs font-black text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Compliance Architecture</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mt-4">Contributing to sustainable development with a strong ESG framework</h2>
                    <p className="text-slate-500 font-bold text-sm uppercase mt-2">Ensuring environment, social and governance from our people to processes, towards a better future</p>
                </div>

                <div className="space-y-24">
                    {/* PILLAR 01: ENVIRONMENTAL CONSCIOUSNESS */}
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="w-12 h-12 bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-2xl flex items-center justify-center shadow-md shadow-emerald-500/10">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Environmental consciousness</h3>
                            <div className="space-y-3">
                                {[
                                    "Our processes are sustainable with solutions to recycle battery and contribute towards circular economy",
                                    "Our recycling technology ensures that no landfill waste is produced",
                                    "We have built technology that enables us to generate energy from waste powering machinery at our facility"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-start text-xs md:text-sm text-slate-700 font-semibold leading-relaxed p-3 bg-white border border-slate-200 rounded-xl">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6 aspect-[4/3] bg-white border-2 border-slate-200 p-4 rounded-[2.5rem] shadow-xl flex items-center justify-center overflow-hidden">
                            <img src={`${baseUrl === '/' ? '' : baseUrl}sustainability_fold3_card1.png`} alt="Environmental Compliance Display representation" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* PILLAR 02: SOCIAL RESPONSIBILITY */}
                    <div className="grid lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
                        <div className="lg:col-span-6 lg:order-2 space-y-6">
                            <div className="w-12 h-12 bg-blue-100 border border-blue-200 text-blue-700 rounded-2xl flex items-center justify-center shadow-md shadow-blue-500/10">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Social Responsibility</h3>
                            <p className="text-slate-700 font-semibold leading-relaxed text-sm md:text-base bg-blue-50/40 border border-blue-100 p-4 rounded-2xl">
                                We take our responsibilities to our people, to society and to the environment seriously, and we align our activities with the relevant international standards.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Our first priority is the health and safety of our people and the broader communities.",
                                    "We also seek to uphold human rights and support the sustainable, long-term development of the local communities in which we operate."
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-start text-xs md:text-sm text-slate-700 font-semibold leading-relaxed p-3 bg-white border border-slate-200 rounded-xl">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6 lg:order-1 aspect-[4/3] bg-white border-2 border-slate-200 p-4 rounded-[2.5rem] shadow-xl flex items-center justify-center overflow-hidden">
                            <img src={`${baseUrl === '/' ? '' : baseUrl}sustainability_fold3_card2.png`} alt="Social Corporate Responsibility presentation Viewport" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* PILLAR 03: ETHICAL GOVERNANCE */}
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="w-12 h-12 bg-purple-100 border border-purple-200 text-purple-700 rounded-2xl flex items-center justify-center shadow-md shadow-purple-500/10">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Ethical Governance</h3>
                            <div className="space-y-3">
                                {[
                                    "State of the art facility with strict compliances in check",
                                    "Frequent audits to ensure the standardization of our processes",
                                    "Stable organizational structure with equality in board members"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-start text-xs md:text-sm text-slate-700 font-semibold leading-relaxed p-3 bg-white border border-slate-200 rounded-xl">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6 aspect-[4/3] bg-white border-2 border-slate-200 p-4 rounded-[2.5rem] shadow-xl flex items-center justify-center overflow-hidden">
                            <img src={`${baseUrl === '/' ? '' : baseUrl}sustainability_fold3_card3.png`} alt="Ethical Auditing System Flowchart Structure Map" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}