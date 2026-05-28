import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex items-center justify-center pt-20"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Partner With Us</h1>
        <p className="text-slate-600">Reach out to integrate with the EXIGO ecosystem.</p>
      </div>
    </motion.div>
  );
}
