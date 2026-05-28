import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedGraph({ data, type = 'bar', color = '#6366f1', height = 200 }) {
  const maxVal = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full relative flex items-end justify-between gap-2" style={{ height }}>
      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
        <div className="w-full h-px bg-slate-900" />
        <div className="w-full h-px bg-slate-900" />
        <div className="w-full h-px bg-slate-900" />
        <div className="w-full h-px bg-slate-900" />
      </div>

      {data.map((item, index) => {
        const heightPercent = (item.value / maxVal) * 100;
        return (
          <div key={index} className="flex-1 flex flex-col items-center justify-end relative group">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: `${heightPercent}%`, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, type: 'spring', stiffness: 50 }}
              className="w-full rounded-t-lg relative z-10 overflow-hidden"
              style={{ backgroundColor: color }}
            >
              {/* Glass overlay for 3d effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/30" />
            </motion.div>
            
            {/* Tooltip on hover */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}: {item.displayValue || item.value}
            </div>

            <div className="mt-3 text-xs font-semibold text-slate-500">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}
