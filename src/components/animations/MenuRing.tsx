"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const CARDS = [
  { id: 1, name: "Kobe Beef Tartare", price: "$48", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", color: "cyan" },
  { id: 2, name: "Black Tiger Prawn", price: "$56", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop", color: "purple" },
  { id: 3, name: "Filet Mignon", price: "$75", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop", color: "pink" },
  { id: 4, name: "Truffle Risotto", price: "$42", img: "https://images.unsplash.com/photo-1633964913295-ceb43826e7cf?w=400&h=300&fit=crop", color: "cyan" },
  { id: 5, name: "Gold Leaf Caviar", price: "$120", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", color: "purple" },
  { id: 6, name: "Wagyu Tomahawk", price: "$150", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop", color: "pink" },
];

export default function MenuRing() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const rotateYRaw = useTransform(x, [-1000, 1000], [-360, 360]);
  const rotateY = useSpring(rotateYRaw, { stiffness: 60, damping: 20, mass: 1 });

  return (
    <div 
      className="relative w-full max-w-[1400px] aspect-[4/3] md:aspect-[21/9] mx-auto z-10 overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center mt-10 md:mt-0"
      style={{ perspective: 1200 }}
      ref={containerRef}
    >
      {/* Glowing 3D Orbit Ring (Floor) */}
      <div 
        className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full border-2 border-white/5 shadow-[0_0_120px_rgba(0,255,255,0.15)] pointer-events-none" 
        style={{ 
          transform: 'rotateX(75deg)',
          background: 'radial-gradient(circle, transparent 40%, rgba(0,255,255,0.02) 100%)'
        }} 
      />

      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateX(-5deg)' }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }}
          dragElastic={0}
          dragMomentum={true}
          style={{
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {CARDS.map((card, i) => {
            const angle = (360 / CARDS.length) * i;
            // Tighter radius on mobile to fit, wide and cinematic on desktop
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 220 : 450; 

            // Cyberpunk/Neon Glowing Colors from the Concept Image
            const glowColor = card.color === "cyan" ? "rgba(0, 229, 255, 0.6)" : 
                              card.color === "purple" ? "rgba(186, 104, 200, 0.6)" : "rgba(255, 128, 171, 0.6)";
            
            const borderColor = card.color === "cyan" ? "rgba(0, 229, 255, 0.2)" : 
                                card.color === "purple" ? "rgba(186, 104, 200, 0.2)" : "rgba(255, 128, 171, 0.2)";

            return (
              <div
                key={card.id}
                className="absolute w-[200px] md:w-[280px] rounded-[2rem] flex flex-col overflow-hidden group transition-all duration-300"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  background: 'linear-gradient(180deg, rgba(20,20,25,0.9) 0%, rgba(10,10,12,0.95) 100%)',
                  boxShadow: `0 0 60px ${glowColor.replace('0.6', '0.1')}, inset 0 1px 1px rgba(255,255,255,0.1)`,
                  border: `1px solid ${borderColor}`,
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Glowing Top Edge */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity" 
                  style={{ background: `linear-gradient(90deg, transparent, ${glowColor.replace('0.6', '1')}, transparent)` }} 
                />

                <div className="h-[180px] md:h-[220px] w-full relative p-6 flex flex-col items-center justify-center">
                   {/* Background Glow behind the plate */}
                   <div 
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full blur-[40px] opacity-30" 
                     style={{ background: glowColor }}
                   />
                   
                   {/* The Plate / Dish Image */}
                   <div 
                     className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 z-10 transition-transform duration-500 group-hover:scale-110" 
                     style={{ 
                       borderColor: glowColor.replace('0.6', '0.4'), 
                       boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${glowColor.replace('0.6', '0.2')}` 
                     }}
                   >
                     <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                     {/* Glass reflection on plate */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                   </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-end relative z-10 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent">
                  <div className="text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] mb-3" style={{ color: glowColor.replace('0.6', '1') }}>
                    0{i + 1} // Signature
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 leading-tight tracking-wide">{card.name}</h3>
                  <div className="flex items-end justify-between mt-4">
                    <div className="text-xs text-text-muted font-light uppercase tracking-widest">Gastronomy</div>
                    <div className="text-xl md:text-2xl font-display font-bold text-white">{card.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Heavy vignette to blend the 3D edges into the void */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-bg-base via-bg-base/80 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-bg-base via-bg-base/80 to-transparent pointer-events-none" />
    </div>
  );
}
