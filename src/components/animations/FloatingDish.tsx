"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Zap } from "lucide-react";

export default function FloatingDish() {
  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto z-10 flex items-center justify-center mt-20 md:mt-0">
      
      {/* Background Concentric Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[120%] h-[120%] rounded-full border border-white/5" />
        <div className="absolute w-[95%] h-[95%] rounded-full border border-white/10" />
        <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-white/20" />
      </div>

      {/* Floating Assembly */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-64 h-64 md:w-[340px] md:h-[340px]"
      >
        {/* Main Dish Image */}
        <div className="w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative bg-[#111]">
          <img 
            src="https://images.unsplash.com/photo-1544025162-8366fd06ac9a?q=80&w=800&h=800&fit=crop" 
            alt="Premium Ribs" 
            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
          />
          {/* Inner Vignette / Gloss */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
        </div>

        {/* Top Right Badge: Popular Wagyu */}
        <div className="absolute -top-4 -right-12 md:-right-24 glass rounded-full p-2 pr-6 flex items-center gap-3 border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <Star className="w-4 h-4 text-gold-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-text-muted font-bold tracking-widest uppercase">Popular</span>
            <span className="text-sm text-white font-display font-bold">Wagyu Steak</span>
          </div>
        </div>

        {/* Bottom Left Badge: Price / Order */}
        <div className="absolute -bottom-6 -left-12 md:-left-20 glass rounded-full px-6 py-4 flex items-center gap-4 border border-white/10 shadow-2xl backdrop-blur-md">
          <span className="text-gold-primary font-display font-bold text-lg">$45.00</span>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-white font-bold tracking-wide">Order Now</span>
            <Zap className="w-4 h-4 text-gold-primary" />
          </div>
        </div>

      </motion.div>
    </div>
  );
}
