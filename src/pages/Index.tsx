import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InvestorSection from "@/components/InvestorSection";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSolution />
      <FeaturesSection />
      <HowItWorksSection />
      <InvestorSection />
      <DownloadCta />
      <Footer />
    </div>
  );
};

export default Index;
