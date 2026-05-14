import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesSection from "@/components/FeaturesSection";
import MarketplaceBanner from "@/components/MarketplaceBanner";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TractionSection from "@/components/TractionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InvestorSection from "@/components/InvestorSection";
import FaqSection from "@/components/FaqSection";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSolution />
        <FeaturesSection />
        <MarketplaceBanner />
        <ComparisonSection />
        <HowItWorksSection />
        <TractionSection />
        <TestimonialsSection />
        <InvestorSection />
        <FaqSection />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
