import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROISimulator() {
    const [fleetSize, setFleetSize] = useState(10);
    const [batteryType, setBatteryType] = useState(105); // 105Ah or 232Ah

    // Standardizing 60 months (5 years) for the warranty lifecycle calculation
    const traditionalCost = fleetSize * (batteryType === 105 ? 80000 : 150000);
    const baasSecurityDeposit = fleetSize * (batteryType === 105 ? 15000 : 25000);

    return (
        <div className="bg-slate-900 rounded-3xl p-8 border border-indigo-500/30 shadow-2xl shadow-indigo-900/50 text-white mt-8">
            <h3 className="text-2xl font-bold mb-6 text-indigo-400">TCO & Fleet ROI Simulator</h3>

            <div className="mb-8">
                <label className="block text-sm text-slate-400 mb-2">Fleet Size: {fleetSize} Vehicles</label>
                <input
                    type="range" min="1" max="100" value={fleetSize}
                    onChange={(e) => setFleetSize(Number(e.target.value))}
                    className="w-full accent-indigo-500"
                />
            </div>

            <div className="flex gap-4 mb-8">
                <button
                    onClick={() => setBatteryType(105)}
                    className={`flex-1 py-2 rounded-lg border ${batteryType === 105 ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                >
                    105Ah Model
                </button>
                <button
                    onClick={() => setBatteryType(232)}
                    className={`flex-1 py-2 rounded-lg border ${batteryType === 232 ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                >
                    232Ah Model
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                <div>
                    <div className="text-sm text-slate-400 mb-1">Traditional Upfront CapEx</div>
                    <div className="text-3xl font-bold text-red-400">₹{(traditionalCost / 100000).toFixed(2)}L</div>
                </div>
                <div>
                    <div className="text-sm text-indigo-300 mb-1">Urja BaaS Deposit (60-Month Coverage)</div>
                    <motion.div
                        key={baasSecurityDeposit}
                        initial={{ scale: 1.2, color: '#fff' }}
                        animate={{ scale: 1, color: '#34d399' }}
                        className="text-3xl font-bold text-emerald-400"
                    >
                        ₹{(baasSecurityDeposit / 100000).toFixed(2)}L
                    </motion.div>
                </div>
            </div>
        </div>
    );
}