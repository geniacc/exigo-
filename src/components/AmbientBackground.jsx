import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">

            {/* 1. Technical Blueprint Grid Overlay (Using Brand Dark Grey #424143) */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #424143 1px, transparent 1px), 
            linear-gradient(to bottom, #424143 1px, transparent 1px)
          `,
                    backgroundSize: '5rem 5rem'
                }}
            />

            {/* 2. Top-Left Primary Orb: Core Deep Purple (#4f2876) */}
            <motion.div
                animate={{
                    scale: [1, 1.12, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#4f2876]/10 mix-blend-multiply blur-[130px]"
            />

            {/* 3. Bottom-Right Secondary Orb: Slate Blue (#39aad6) */}
            <motion.div
                animate={{
                    scale: [1, 1.18, 1],
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute bottom-[-15%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#39aad6]/10 mix-blend-screen blur-[120px]"
            />

            {/* 4. Center Drifting Aurora Highlight: Electric Cyan (#23b3c8) */}
            <motion.div
                animate={{
                    x: ['-5vw', '10vw', '-5vw'],
                    y: ['-3vh', '6vh', '-3vh'],
                    scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[#23b3c8]/6 blur-[100px]"
            />

            {/* 5. Matte Frost Glass Protector Film */}
            {/* This layer blends the moving colors seamlessly so they don't break page contrast */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
        </div>
    );
}