import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-glass-border mt-32 relative z-[1]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-display font-bold text-xl tracking-widest text-text-primary uppercase">
            Novadines
          </span>
          <p className="text-text-muted text-sm max-w-sm">
            High-performance direct ordering systems that recover your 30% margins.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <a
            href="https://wa.me/923363118022?text=Hi%20Novadines,%20I%20want%20to%20turn%20my%20menu%20into%20a%20revenue%20engine.%20Can%20we%20discuss%20a%20build?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gold-primary/20 bg-gold-primary hover:bg-gold-light hover:-translate-y-0.5 active:scale-95 transition-all text-black text-sm font-bold tracking-widest uppercase shadow-lg shadow-gold-primary/20"
          >
            Start Your Build
          </a>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Novadines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
