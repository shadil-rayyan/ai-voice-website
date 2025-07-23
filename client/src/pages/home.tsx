import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import VideoDemo from "@/components/video-demo";
import MarketOpportunity from "@/components/market-opportunity";
import CompetitiveComparison from "@/components/competitive-comparison";
import Testimonials from "@/components/testimonials";
import TechStack from "@/components/tech-stack";
import LeadCapture from "@/components/lead-capture";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-kerala-navy text-kerala-light font-sans antialiased">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <VideoDemo />
      <MarketOpportunity />
      <CompetitiveComparison />
      <Testimonials />
      <TechStack />
      <LeadCapture />
      <Footer />
    </div>
  );
}
