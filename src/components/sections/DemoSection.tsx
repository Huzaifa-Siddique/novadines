import React from "react";
import FadeIn from "../animations/FadeIn";

export default function DemoSection() {
  return (
    <section id="demo" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Experience the <span className="text-gradient-gold">Speed</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Interact with a live Novadines build. Scan the QR code or use the emulator below.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <FadeIn delay={0.2} className="relative w-full max-w-[320px] aspect-[9/19] glass rounded-[3rem] p-3 shadow-2xl flex-shrink-0">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black relative border border-white/10">
              <iframe 
                src="https://oasislounge.vercel.app/" 
                className="w-full h-full border-0 absolute inset-0 z-10"
                title="Oasis Lounge Demo"
                loading="lazy"
              />
            </div>
            {/* iPhone Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20" />
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col items-center text-center max-w-sm">
            <div className="w-48 h-48 bg-white rounded-2xl p-3 mb-6 shadow-2xl border border-white/10">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://oasislounge.vercel.app/&margin=0" 
                alt="QR Code to Oasis Lounge Demo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-2">Scan to Test</h3>
            <p className="text-text-muted text-sm mb-8">
              Open your camera and scan the code to instantly experience the seamless mobile UI. No downloads required.
            </p>
            <a
              href="https://wa.me/923363118022?text=Hi%20Novadines,%20I%20just%20tried%20the%20live%20demo.%20I%20want%20this%20for%20my%20venue."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gold-primary/20 bg-gold-primary hover:bg-gold-light hover:-translate-y-0.5 active:scale-95 transition-all text-black text-xs font-bold tracking-widest uppercase shadow-lg shadow-gold-primary/20 w-full"
            >
              Get This For My Restaurant
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
