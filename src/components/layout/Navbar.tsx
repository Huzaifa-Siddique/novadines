import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-6 inset-x-0 z-[40] flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-5xl rounded-full glass pointer-events-auto">
        <div className="px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center outline-none">
            <span className="font-display font-bold text-lg md:text-xl tracking-widest text-text-primary uppercase">
              Novadines
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-xs font-bold tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors">Services</a>
            <a href="#demo" className="text-xs font-bold tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors">Demo</a>
            <a href="#about" className="text-xs font-bold tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors">Team</a>
          </nav>
          <div className="flex items-center">
            <a
              href="https://wa.me/923363118022?text=Hi%20Novadines,%20I%20want%20to%20turn%20my%20menu%20into%20a%20revenue%20engine.%20Can%20we%20discuss%20a%20build?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-gold-primary/20 bg-gold-primary hover:bg-gold-light hover:-translate-y-0.5 active:scale-95 transition-all text-black text-xs font-bold tracking-widest uppercase shadow-lg shadow-gold-primary/20"
            >
              Request a Build
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
