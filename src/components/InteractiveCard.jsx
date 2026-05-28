import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function InteractiveCard({ children, className = '' }) {
  const ref = useRef(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the 3D tilt
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation angles (subtle tilt)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Mouse glow effect coordinates
  const glowX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const glowY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    // Set normalized tilt coordinates (-0.5 to 0.5)
    mouseX.set(localX / width - 0.5);
    mouseY.set(localY / height - 0.5);

    // Set glow coordinates
    glowX.set(localX);
    glowY.set(localY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative w-full rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden group ${className}`}
    >
      {/* Dynamic Cursor Light Tracking */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${glowX}px ${glowY}px, rgba(126, 34, 206, 0.08), transparent 80%)`,
        }}
      />

      {/* Elevate content off the card for parallax 3D depth */}
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10 p-8 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}