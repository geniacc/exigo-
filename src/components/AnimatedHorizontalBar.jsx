import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedHorizontalBar({ data, height = "h-6", maxValue }) {
    // If no maxValue is provided, calculate from the highest total in the dataset
    const max = maxValue || Math.max(...data.map(d => d.value + (d.secondaryValue || 0)));

    return (
        <div className="w-full space-y-4">
            {data.map((item, index) => {
                const primaryWidth = (item.value / max) * 100;
                const secondaryWidth = item.secondaryValue ? (item.secondaryValue / max) * 100 : 0;

                return (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group">
                        <div className="w-24 flex-shrink-0 text-sm font-bold text-slate-700 uppercase tracking-widest text-left sm:text-right">
                            {item.label}
                        </div>

                        <div className="flex-grow flex items-center h-full relative">
                            {/* Primary Bar (e.g., Revenue) */}
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: `${primaryWidth}%`, opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, delay: index * 0.15, type: 'spring', stiffness: 50 }}
                                className={`${height} relative z-10 flex items-center overflow-hidden shadow-md`}
                                style={{ backgroundColor: item.color || '#7e22ce' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20" />
                            </motion.div>

                            {/* Secondary Bar (e.g., Profit) */}
                            {item.secondaryValue && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: `${secondaryWidth}%`, opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1, delay: (index * 0.15) + 0.4, type: 'spring', stiffness: 50 }}
                                    className={`${height} relative z-0 flex items-center overflow-hidden shadow-md -ml-1`}
                                    style={{ backgroundColor: item.secondaryColor || '#3b82f6' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20" />
                                </motion.div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}