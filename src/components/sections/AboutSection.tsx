import React from "react";
import FadeIn from "../animations/FadeIn";

const team = [
  {
    name: "Huzaifa Siddiqui",
    role: "Founder & Technical Director",
    description: "Specializing in high-performance UI/UX, Huzaifa leads the development of Oasis Lounge's lightning-fast menu engines.",
    image: "/images/team/huzaifa.webp",
    imageClassName: "object-center scale-100 group-hover:scale-110"
  },
  {
    name: "Owais Siddiqui",
    role: "Co-Founder & Head of Infrastructure",
    description: "Owais manages cloud operations and technical deployments, ensuring 99.9% uptime for our hospitality clients.",
    image: "/images/team/owais.webp",
    // Anchoring to bottom and scaling up to remove the floating gap beneath his torso
    imageClassName: "object-bottom scale-[1.15] translate-y-2 group-hover:scale-[1.25]"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            The <span className="text-gradient-gold">Engineers</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Built by developers obsessed with speed, conversion, and premium hospitality experiences.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {team.map((member, idx) => (
            <FadeIn key={member.name} delay={idx * 0.2} className="glass p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="group w-40 h-40 rounded-full overflow-hidden border-4 border-gold-primary/20 mb-6 bg-black/50">
                {/* Using a regular img for placeholder since Next/Image requires remote patterns configured */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${member.imageClassName || ''}`} 
                />
              </div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold-primary/20 bg-gold-primary/10 text-[10px] font-bold tracking-widest uppercase text-gold-light mb-4">
                {member.role}
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                {member.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">
                {member.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
