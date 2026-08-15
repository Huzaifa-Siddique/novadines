import React from "react";
import FadeIn from "../animations/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden flex flex-col items-center text-center min-h-[90vh] justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <FadeIn delay={0.1} className="max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-text-primary tracking-tight leading-tight mb-6">
          Turn Your Digital Menu Into a <br className="hidden md:block" />
          <span className="text-gradient-gold">Revenue Engine</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 font-light">
          No app downloads. No 30% commissions. Just a high-end, lightning-fast digital experience that drives orders directly to your WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/923363118022?text=Hi%20Novadines,%20I%20want%20to%20turn%20my%20menu%20into%20a%20revenue%20engine.%20Can%20we%20discuss%20a%20build?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gold-primary hover:bg-gold-light transition-all text-black font-bold tracking-widest uppercase shadow-lg shadow-gold-primary/20 hover:-translate-y-1"
          >
            Request a Build
          </a>
          <a
            href="#demo"
            className="px-8 py-4 rounded-full glass text-text-primary hover:bg-white/5 transition-all font-bold tracking-widest uppercase"
          >
            View Live Demo
          </a>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.4} className="mt-20 relative w-full max-w-3xl aspect-[16/9] mx-auto z-10 rounded-2xl overflow-hidden glass p-2">
        <div className="w-full h-full bg-black/50 rounded-xl flex items-center justify-center border border-white/5">
          {/* Placeholder for Wagyu Steak / App Demo Image */}
          <div className="text-text-muted font-display tracking-widest uppercase">Premium Wagyu Visual Placeholder</div>
        </div>
      </FadeIn>
    </section>
  );
}
