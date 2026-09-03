import React from "react";
import FadeIn from "../animations/FadeIn";

export default function ServicesSection() {
  const tiers = [
    {
      name: "The Complete Revenue Engine",
      description: "A premium, interactive ordering system that bypasses delivery apps.",
      features: [
        "Custom Brand Matched UI",
        "High Resolution Photographic Layout",
        "Arabic/English One Tap Toggle",
        "Managed Cloud Hosting & Custom Domain",
        "WhatsApp Cart Direct Ordering",
        "Dine In (Table No.) & Zero-Commission Pickup Modes",
        "Direct Local Delivery (Custom Radius)",
        "Zero App Downloads Required"
      ],
      highlight: true
    },
    {
      name: "The AR Experience",
      description: "Photorealistic 3D rendering of dishes.",
      badge: "Coming Soon",
      features: ["WebAR Integration", "3D Model Creation", "Interactive Viewer"],
      disabled: true
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Engineered for <span className="text-gradient-gold">Growth</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {tiers.map((tier, idx) => (
            <FadeIn key={tier.name} delay={idx * 0.2} className={`glass p-8 rounded-3xl flex flex-col h-full ${tier.highlight ? 'border-gold-primary/50 shadow-lg shadow-gold-primary/10 relative transform md:-translate-y-4' : ''} ${tier.disabled ? 'opacity-60 grayscale' : ''}`}>
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-primary text-black px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  Core Offering
                </div>
              )}
              <h3 className="text-2xl font-display font-bold text-text-primary mb-2">{tier.name}</h3>
              <p className="text-text-muted text-sm mb-6">{tier.description}</p>
              {tier.badge && (
                <div className="text-xl font-bold text-gold-light mb-8 font-display">{tier.badge}</div>
              )}
              
              <ul className={`space-y-4 flex-1 ${!tier.badge ? 'mt-4' : ''} mb-8`}>
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
