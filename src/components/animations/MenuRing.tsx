"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const CARDS = [
  { id: 1, name: "Kobe Beef Tartare", price: "$48", img: "https://placehold.co/400x300/222222/gold?text=Tartare" },
  { id: 2, name: "Black Tiger Prawn", price: "$56", img: "https://placehold.co/400x300/222222/gold?text=Prawn" },
  { id: 3, name: "Filet Mignon", price: "$75", img: "https://placehold.co/400x300/222222/gold?text=Mignon" },
  { id: 4, name: "Truffle Risotto", price: "$42", img: "https://placehold.co/400x300/222222/gold?text=Risotto" },
  { id: 5, name: "Gold Leaf Caviar", price: "$120", img: "https://placehold.co/400x300/222222/gold?text=Caviar" },
  { id: 6, name: "Wagyu Tomahawk", price: "$150", img: "https://placehold.co/400x300/222222/gold?text=Tomahawk" },
];

export default function MenuRing() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the drag X position
  const x = useMotionValue(0);
  
  // We want continuous rotation, so we map a large range of x to a large range of degrees.
  // 1 pixel of drag = 0.5 degrees rotation. Negative drag means positive rotation so it follows the finger.
  const rotateYRaw = useTransform(x, [-1000, 1000], [-500, 500]);
  
  // Add a spring to smooth out the dragging and provide momentum
  const rotateY = useSpring(rotateYRaw, { stiffness: 100, damping: 20, mass: 0.5 });

  return (
    <div 
      className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] mx-auto z-10 overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ perspective: 1200 }}
      ref={containerRef}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }} // Effectively infinite dragging
          dragElastic={0} // No rubber banding, just raw linear drag
          dragMomentum={true}
          style={{
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {CARDS.map((card, i) => {
            const angle = (360 / CARDS.length) * i;
            // The translateZ value dictates the radius of our 3D ring.
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 200 : 320; 

            return (
              <div
                key={card.id}
                className="absolute w-48 md:w-64 h-64 md:h-80 rounded-2xl flex flex-col overflow-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  // Simulated glassmorphism without backdrop-blur to prevent Safari crashing
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 20px 40px rgba(0,0,0,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  // Backface visibility is crucial for performance and look
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="h-32 md:h-40 w-full relative bg-black/50">
                   <img src={card.img} alt={card.name} className="w-full h-full object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col justify-end relative z-10 bg-gradient-to-t from-[#111] to-[#111]/80">
                  <div className="text-xs text-gold-primary font-bold tracking-widest mb-1">0{i + 1}</div>
                  <h3 className="text-base md:text-lg font-display font-bold text-white mb-1 leading-tight">{card.name}</h3>
                  <div className="text-sm text-text-muted font-display font-bold">{card.price}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative gradient overlays to blend the edges into the background */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-base to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-base to-transparent pointer-events-none" />
    </div>
  );
}
