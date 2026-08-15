"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-6 inset-x-0 z-[40] flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-5xl relative pointer-events-auto">
        <div className="w-full rounded-full glass">
          <div className="px-6 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center outline-none" onClick={closeMenu}>
              <span className="font-display font-bold text-lg md:text-xl tracking-widest text-text-primary uppercase">
                Novadines
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-xs font-bold tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors">Services</a>
              <a href="#demo" className="text-xs font-bold tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors">Demo</a>
              <a href="#about" className="text-xs font-bold tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors">Team</a>
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/923363118022?text=Hi%20Novadines,%20I%20want%20to%20turn%20my%20menu%20into%20a%20revenue%20engine.%20Can%20we%20discuss%20a%20build?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-gold-primary/20 bg-gold-primary hover:bg-gold-light hover:-translate-y-0.5 active:scale-95 transition-all text-black text-xs font-bold tracking-widest uppercase shadow-lg shadow-gold-primary/20"
              >
                Request a Build
              </a>
            </div>

            {/* Mobile Burger Icon */}
            <div className="flex md:hidden items-center">
              <button 
                onClick={toggleMenu}
                className="p-2 text-text-primary hover:text-gold-primary transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 glass rounded-3xl p-6 flex flex-col gap-6 md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-6">
                <a href="#services" onClick={closeMenu} className="text-sm font-bold tracking-widest uppercase text-text-primary hover:text-gold-primary transition-colors">Services</a>
                <a href="#demo" onClick={closeMenu} className="text-sm font-bold tracking-widest uppercase text-text-primary hover:text-gold-primary transition-colors">Demo</a>
                <a href="#about" onClick={closeMenu} className="text-sm font-bold tracking-widest uppercase text-text-primary hover:text-gold-primary transition-colors">Team</a>
              </nav>
              <a
                href="https://wa.me/923363118022?text=Hi%20Novadines,%20I%20want%20to%20turn%20my%20menu%20into%20a%20revenue%20engine.%20Can%20we%20discuss%20a%20build?"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full text-center py-4 rounded-full border border-gold-primary/20 bg-gold-primary hover:bg-gold-light active:scale-95 transition-all text-black text-sm font-bold tracking-widest uppercase shadow-lg shadow-gold-primary/20"
              >
                Request a Build
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
