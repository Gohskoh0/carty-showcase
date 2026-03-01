import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <span className="h-2 w-2 rounded-full hero-gradient" />
              Now available — Download the APK
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-foreground">
              Sell on
              <span className="text-gradient"> WhatsApp </span>
              &
              <span className="text-gradient"> Instagram</span>
              <br />like a pro
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Create product links in seconds, share them with your customers, and get paid instantly. No website needed.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="hero-gradient border-0 font-semibold shadow-lg text-base px-8 h-13 gap-2">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold text-base px-8 h-13 gap-2 border-border bg-card hover:bg-secondary">
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-card hero-gradient" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">10,000+ sellers</p>
                <p className="text-xs text-muted-foreground">already using CartY</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center" style={{ animationDelay: '0.3s' }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 hero-gradient rounded-3xl blur-2xl opacity-20 scale-95" />
              <img
                src={heroMockup}
                alt="CartY app showing product listing interface"
                className="relative w-72 md:w-80 rounded-3xl glow-box"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
