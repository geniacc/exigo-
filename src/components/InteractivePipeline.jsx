import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, BarChart3, CreditCard, RotateCcw } from 'lucide-react';

export default function InteractivePipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'DIAGNOSE', icon: <Activity className="w-6 h-6" />, content: 'Automated testing of 50+ functional parameters (screen, battery, sensors) for precise health validation.', color: 'bg-purple-600' },
    { title: 'PRICE', icon: <BarChart3 className="w-6 h-6" />, content: 'Real-time valuation AI engine based on cosmetic condition & global market demand data streams.', color: 'bg-blue-600' },
    { title: 'BUYBACK', icon: <CreditCard className="w-6 h-6" />, content: 'Seamless doorstep logistics paired with instant digital payments upon quality control verification.', color: 'bg-purple-700' },
    { title: 'LIQUIDATION', icon: <RotateCcw className="w-6 h-6" />, content: 'Direct liquidation channel connecting sellers with certified refurbishers maximizing lifecycle ROI.', color: 'bg-blue-700' }
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative">
      <div className="flex flex-col md:flex-row justify-between mb-12 relative">

        {/* Animated Connecting Particle Line */}
        <div className="absolute top-8 left-8 right-8 h-1 bg-slate-100 hidden md:block z-0 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
        </div>

        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center flex-1 mb-6 md:mb-0 group cursor-pointer" onMouseEnter={() => setActiveStep(index)}>
            <motion.div
              animate={activeStep === index ? { scale: [1, 1.1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${activeStep === index
                  ? `${step.color} text-white scale-110 ring-4 ring-purple-100`
                  : 'bg-white text-slate-400 hover:bg-slate-50 border-2 border-slate-200'
                }`}
            >
              {step.icon}
            </motion.div>
            <div className={`mt-4 font-black text-sm uppercase tracking-widest transition-colors ${activeStep === index ? 'text-purple-700' : 'text-slate-400'}`}>
              {step.title}
            </div>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 p-6 md:p-8 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-6"
          >
            <div className={`w-14 h-14 rounded-2xl ${steps[activeStep].color} text-white flex flex-shrink-0 items-center justify-center shadow-lg`}>
              {steps[activeStep].icon}
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{steps[activeStep].title} PROCESS</h4>
              <p className="text-slate-600 font-medium leading-relaxed">{steps[activeStep].content}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}