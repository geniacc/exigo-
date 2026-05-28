import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, FlaskConical, Beaker, Layers, ChevronRight, ChevronLeft } from 'lucide-react';

const textFade = {
    hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 10, filter: "blur(4px)", transition: { duration: 0.2 } }
};

// Crucial Fix: Ensuring the exact signature matching your App.jsx import statement
export default function BatterySolutions() {
    const baseUrl = import.meta.env.BASE_URL || '/';

    // Fold 1 Elements: Dynamic Slideshow state configuration
    const fold1Slides = ["battery_solution_fold1_silde1.png", "battery_solution_fold1_silde3.png", "battery_solution_fold1_silde2.png"];
    const [currentFold1Index, setCurrentFold1Index] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFold1Index((prev) => (prev + 1) % fold1Slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [fold1Slides.length]);

    // Fold 2: Supported Battery Chemistry Configuration Data
    const chemistries = [
        { code: "LFP", name: "Lithium Iron Phosphate", color: "border-emerald-500/30 text-emerald-700 bg-emerald-50" },
        { code: "NMC", name: "Lithium Nickel Manganese Cobalt Oxide", color: "border-blue-500/30 text-blue-700 bg-blue-50" },
        { code: "LCO", name: "Lithium Cobalt Oxide", color: "border-purple-500/30 text-purple-700 bg-purple-50" },
        { code: "LTO", name: "Lithium Titanium Oxide", color: "border-cyan-500/30 text-cyan-700 bg-cyan-50" },
        { code: "ZMO", name: "Zinc Manganese oxide", color: "border-amber-500/30 text-amber-700 bg-amber-50" },
        { code: "NiMH", name: "Nickel Metal Hydride", color: "border-indigo-500/30 text-indigo-700 bg-indigo-50" }
    ];

    // Fold 3: Real-Time Material Yield Inspector Target Map Array
    const materialInspector = {
        graphite: {
            label: "Battery Grade Graphite",
            image: "battery_solution_fold3_slide1_battery_grade_graphite-desktop.png",
            chemical: "Graphite",
            stats: [
                { label: "Molecular weight", value: "12 g/mol" },
                { label: "Purity", value: ">98%" }
            ]
        },
        mhp: {
            label: "Mixed Hydroxide Precipitate (MHP)",
            image: "Nickel_MHP-removebg-preview.png",
            chemical: "Mixed Hydroxide Precipitate",
            stats: [
                { label: "Nickel Composition", value: "Ni>50%" },
                { label: "Purity", value: "95%" }
            ]
        },
        lithium: {
            label: "Lithium Carbonate",
            image: "battery_solution_fold3_slide2_lithium_carbonate-desktop.png",
            chemical: "Li2CO3",
            stats: [
                { label: "Molecular weight", value: "73.891 g/mol" },
                { label: "Purity", value: ">95%" }
            ]
        },
        nickel: {
            label: "Nickel Sulphate",
            image: "battery_solution_fold3_slide3_nickel_sulphate-desktop.png",
            chemical: "NiSO₄",
            stats: [
                { label: "Molecular weight", value: "154.75 g/mol" },
                { label: "Purity", value: ">95%" }
            ]
        },
        manganese: {
            label: "Manganese Oxide",
            image: "battery_solution_fold3_slide4_manganese_sulphate-desktop.png",
            chemical: "MnO2",
            stats: [
                { label: "Molecular weight", value: "86.94 g/mol" },
                { label: "Purity", value: ">95%" }
            ]
        },
        cobalt: {
            label: "Cobalt Sulphate",
            image: "battery_solution_fold3_slide5_cobalt_sulphate-desktop.png",
            chemical: "CoSO4",
            stats: [
                { label: "Molecular weight", value: "154.996 g/mol" },
                { label: "Purity", value: ">95%" }
            ]
        },
        graphene: {
            label: "Graphene",
            image: "battery_solution_fold3_slide8_graphene-desktop.png",
            chemical: "Graphene",
            stats: [
                { label: "Molecular weight", value: "12.01 g/mol" },
                { label: "Purity", value: ">98%" }
            ]
        },
        electrolyte: {
            label: "Electrolyte",
            image: "battery_solution_fold3_slide8_graphene-desktop.png",
            chemical: "Electrolyte",
            stats: [
                { label: "Property-1", value: "Electrolyte Component Formulation" }
            ]
        }
    };
    const [selectedMaterial, setSelectedMaterial] = useState('graphite');

    // Fold 4: Interactive Matrix Loop Step Indexes
    const testingParameters = [
        "Appearance", "Ash content", "Battery manufacturing", "BET surface area", "Cell manufacturing",
        "Chemical element", "Chemical name", "Conductivity", "Country of origin",
        "Cycle capacity retention @50%", "Rate capacity retention", "SEM images", "Specific discharge capacity", "Tap density"
    ];
    const [activeParamIndex, setActiveParamIndex] = useState(0);

    // Fold 5: Industries Structural Meta Track Loop Items Array
    const downstreamIndustries = [
        "Aerospace and space industry", "Air purification", "Automotive parts manufacturing", "Cell manufacturing",
        "Agriculture", "Alloy manufacturing", "Battery manufacturing", "Construction", "Ceramic manufacturing",
        "Foundry", "Gas turbine manufacturing", "Inks and pigment manufacturing", "Continuous casting", "Food processing",
        "Glass industry", "Incineration system manufacturing", "Lubricate manufacturing", "Medical devices (MRI machine)",
        "Pharmaceutical (Vitamin B12)", "Rechargeable batteries", "Machinery manufacturing", "Petroleum and gas industry",
        "Plating", "Steel manufacturing", "Toy industry", "Textile"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen bg-slate-50 relative pt-24 pb-20 overflow-hidden text-slate-900 font-sans"
        >
            {/* FOLD 1: INTERACTIVE HERO CONTAINER & MODULAR SLIDESHOW MATRIX */}
            <section className="max-w-7xl mx-auto px-6 py-12 relative z-10 border-b border-slate-200">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-black uppercase tracking-widest">
                            <FlaskConical className="w-3.5 h-3.5" /> Core Refining Technology Layer
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-none">
                            CELLS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                                We see value where others see waste
                            </span>
                        </h1>
                        <p className="text-slate-700 font-medium leading-relaxed text-base">
                            Battery metals from end-of-life batteries do not degrade when recycled, providing valuable sources that can be reused indefinitely. At Exigo, we recycle and re-manufacture from all different kinds of batteries through our in-house designed technology.
                        </p>
                    </div>

                    {/* Dynamic Hero Slideshow Window Viewport */}
                    <div className="lg:col-span-6 aspect-[4/3] bg-white rounded-[2.5rem] shadow-2xl border border-slate-200/80 p-6 flex items-center justify-center overflow-hidden relative group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentFold1Index}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                src={`${baseUrl === '/' ? '' : baseUrl}${fold1Slides[currentFold1Index]}`}
                                alt="Battery Processing Image Viewport"
                                className="w-full h-full object-contain filter drop-shadow-xl"
                            />
                        </AnimatePresence>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                            {fold1Slides.map((_, dotIndex) => (
                                <button
                                    key={dotIndex}
                                    onClick={() => setCurrentFold1Index(dotIndex)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentFold1Index === dotIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOLD 2: MULTI-CHEMISTRY PROCESSING MATRIX ROW BLOCK */}
            <section className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-200">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Chemical Versatility Matrix</span>
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-4">Undertaking recycling of different battery chemistries</h2>
                    <p className="text-slate-500 font-bold text-sm uppercase mt-2">Recovering battery-grade material by processing different chemical compositions through unique processes</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {chemistries.map((chem, i) => (
                        <motion.div
                            key={chem.code}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`p-6 rounded-2xl border-2 flex flex-col justify-between h-36 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow ${chem.color}`}
                        >
                            <div className="text-2xl font-black tracking-tight uppercase">{chem.code}</div>
                            <div className="text-xs font-black uppercase tracking-tight leading-snug">{chem.name}</div>
                            <div className="absolute top-[-10px] right-[-10px] opacity-10 font-black text-5xl select-none font-mono">{(i + 1).toString().padStart(2, '0')}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FOLD 3: STRATEGIC METAL VALUE EXTRACTION ENGINE INSPECTOR */}
            <section className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-200">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-black text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Refined Product Diagnostics</span>
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-4">Recovering valuable and strategic materials</h2>
                    <p className="text-slate-500 font-bold text-sm uppercase mt-2">Responsible processing of batteries to recover materials with the highest purity standards</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 flex flex-col gap-2">
                        {Object.keys(materialInspector).map((key) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setSelectedMaterial(key)}
                                className={`p-4 rounded-xl border text-left font-black text-xs uppercase tracking-wider transition-all flex items-center justify-between ${selectedMaterial === key
                                    ? 'border-purple-600 bg-purple-900 text-white shadow-md shadow-purple-900/20 translate-x-1'
                                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                                    }`}
                            >
                                <span>{materialInspector[key].label}</span>
                                <ChevronRight className={`w-4 h-4 transition-transform ${selectedMaterial === key ? 'rotate-90 text-white' : 'text-slate-400'}`} />
                            </button>
                        ))}
                    </div>

                    <div className="lg:col-span-8 bg-white rounded-3xl border-2 border-slate-200 p-6 md:p-8 shadow-xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-slate-50 to-transparent blur-3xl pointer-events-none" />

                        <div className="grid md:grid-cols-12 gap-8 items-center h-full">
                            <div className="grid-cols-1 md:col-span-6 h-64 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={selectedMaterial}
                                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
                                        src={`${baseUrl === '/' ? '' : baseUrl}${materialInspector[selectedMaterial].image}`}
                                        alt={`${materialInspector[selectedMaterial].chemical} Compound Spec`}
                                        className="w-full h-full object-contain filter drop-shadow-md"
                                    />
                                </AnimatePresence>
                            </div>

                            <div className="md:col-span-6 flex flex-col justify-center space-y-6">
                                <div>
                                    <div className="text-[10px] font-mono font-black text-purple-600 uppercase tracking-widest leading-none">Crystalline Compound Symbol</div>
                                    <AnimatePresence mode="wait">
                                        <motion.h3 key={selectedMaterial} variants={textFade} initial="hidden" animate="visible" exit="exit" className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-2">
                                            {materialInspector[selectedMaterial].chemical}
                                        </motion.h3>
                                    </AnimatePresence>
                                </div>

                                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs text-white">
                                    <AnimatePresence mode="wait">
                                        <motion.div key={selectedMaterial} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                                            {materialInspector[selectedMaterial].stats.map((stat, sIdx) => (
                                                <div key={sIdx} className="flex justify-between items-center border-b border-slate-800 pb-2 last:border-none last:pb-0">
                                                    <span className="text-slate-400 font-bold">{stat.label}:</span>
                                                    <span className="text-cyan-400 font-black">{stat.value}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                    <div className="flex justify-between items-center text-[10px] pt-1 text-emerald-400 border-t border-slate-800/60 font-sans font-bold uppercase">
                                        <span>Validation Status:</span>
                                        <span>BATTERY GRADE PASS / CERTIFIED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOLD 4: CLOSED-LOOP MATERIAL VALUATION LAB CORES SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-200">
                <div className="mb-12 max-w-4xl">
                    <span className="text-xs font-black text-purple-700 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Vertical Logistics Loop Integration</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mt-4">Battery to Battery - Closed loop recycling enabling procurement of battery grade materials</h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6 bg-white border-2 border-slate-200 p-6 md:p-8 rounded-[2.5rem] shadow-md space-y-6">
                        <div className="w-full h-44 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden p-2 flex items-center justify-center">
                            <img src={`${baseUrl === '/' ? '' : baseUrl}cathode-to-anode.png`} alt="Cathode and Anode Processing Diagram" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-purple-900 uppercase tracking-tight">Cathode and Anode Materials</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                                The salts we produce and recover are all eligible to be tested for cathode-active material. Anode-grade graphite is a by-product of our hydrometallurgical process with minor downstream processing. This can be tested for anode-active material and C-rates in battery applications.
                            </p>
                        </div>

                        <div className="border-t border-slate-200 pt-4 space-y-3">
                            <div className="flex justify-between items-center text-xs font-black uppercase text-slate-400">
                                <span>Diagnostic Test Parameters ({testingParameters.length})</span>
                                <div className="flex gap-1.5">
                                    <button type="button" onClick={() => setActiveParamIndex((p) => p === 0 ? testingParameters.length - 1 : p - 1)} className="p-1 border rounded bg-slate-50 hover:bg-slate-100 text-slate-700"><ChevronLeft className="w-3.5 h-3.5" /></button>
                                    <button type="button" onClick={() => setActiveParamIndex((p) => (p + 1) % testingParameters.length)} className="p-1 border rounded bg-slate-50 hover:bg-slate-100 text-slate-700"><ChevronRight className="w-3.5 h-3.5" /></button>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 min-h-[44px] flex items-center justify-between text-xs font-mono font-bold text-slate-800">
                                <span className="uppercase text-purple-700">Index ID_{activeParamIndex.toString().padStart(2, '0')}:</span>
                                <AnimatePresence mode="wait">
                                    <motion.span key={activeParamIndex} variants={textFade} initial="hidden" animate="visible" exit="exit" className="text-right text-slate-900 uppercase">
                                        {testingParameters[activeParamIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 bg-white border-2 border-slate-200 p-6 md:p-8 rounded-[2.5rem] shadow-md space-y-6">
                        <div className="w-full h-44 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden p-2 flex items-center justify-center">
                            <img src={`${baseUrl === '/' ? '' : baseUrl}slurry-making.png`} alt="Slurry Making Processing Technology" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-blue-900 uppercase tracking-tight">Slurry Making</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                                Our technology is built to tailor the slurry parameters (viscosity, solid/ liquid ratio, solvents/ aqueous/organic) suitable for direct cathode/anode applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            {[
                                { label: "Slurry Density", val: "g/cm3" },
                                { label: "Slurry Viscosity", val: "Pa.s" },
                                { label: "Slurry Solid Weight", val: "Percent (%)" },
                                { label: "Slurry Surface Tension", val: "mN/m" }
                            ].map((param, pIdx) => (
                                <div key={pIdx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between min-h-[64px]">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-tight leading-none">{param.label}</div>
                                    <div className="text-xs font-mono font-black text-blue-600 mt-2 flex items-center gap-1">
                                        <Beaker className="w-3 h-3 text-blue-400" /> Unit: {param.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOLD 5: INDUSTRIAL VALUE CHAIN DOWNSTREAM END-APPLICATION SLIDER TRACKER */}
            <section className="w-full pt-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
                    <span className="text-xs font-black text-cyan-600 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full">Cross-Sector Supply Matrix</span>
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-4">Supplementing the raw material needs of various industries</h2>
                </div>

                <div className="relative w-full flex overflow-x-hidden border-y border-slate-200 bg-white py-5 shadow-inner">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                    <motion.div
                        animate={{ x: [0, "-100%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        className="flex space-x-6 shrink-0 pr-6"
                    >
                        {downstreamIndustries.map((ind, index) => (
                            <div key={`track1-${index}`} className="px-5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-full font-black uppercase text-xs tracking-wider text-slate-700 whitespace-nowrap flex items-center gap-2 shadow-sm">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> {ind}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        animate={{ x: [0, "-100%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        className="flex space-x-6 shrink-0 pr-6"
                    >
                        {downstreamIndustries.map((ind, index) => (
                            <div key={`track2-${index}`} className="px-5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-full font-black uppercase text-xs tracking-wider text-slate-700 whitespace-nowrap flex items-center gap-2 shadow-sm">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> {ind}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}