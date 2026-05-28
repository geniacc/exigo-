import React from 'react';
import { motion } from 'framer-motion';

export default function FloatContainer({ children, className = '', delay = 0, duration = 4 }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: ['-12px', '12px', '-12px'],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}
