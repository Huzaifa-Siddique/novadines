import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DemoSection from "@/components/sections/DemoSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-x-clip">
      <Navbar />
      <div className="w-full">
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <DemoSection />
        <AboutSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
