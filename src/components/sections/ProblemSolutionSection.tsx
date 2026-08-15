import React from "react";
import FadeIn from "../animations/FadeIn";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            The Industry Standard is <span className="text-red-400">Broken</span>
          </h2>
          <p className="text-text-muted">Stop losing 30% of your revenue to delivery apps.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1} className="glass p-8 rounded-3xl border-red-500/20 bg-red-500/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary">The Old Way</h3>
            </div>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 shrink-0 text-red-500/50 mt-0.5" /> Clunky PDF menus that are hard to read on mobile.</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 shrink-0 text-red-500/50 mt-0.5" /> 30% commissions surrendered to delivery aggregators.</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 shrink-0 text-red-500/50 mt-0.5" /> High friction app downloads required for loyalty.</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 shrink-0 text-red-500/50 mt-0.5" /> Generic branding that hurts the premium feel of your venue.</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3} className="glass p-8 rounded-3xl border-gold-primary/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-gold-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary">The Novadines Way</h3>
            </div>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-gold-primary mt-0.5" /> Interactive, lightning-fast web menus.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-gold-primary mt-0.5" /> 0% commissions. Orders go straight to your WhatsApp.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-gold-primary mt-0.5" /> Instant access via QR code. Zero friction.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-gold-primary mt-0.5" /> Bespoke, high-end designs matching your exact aesthetic.</li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
