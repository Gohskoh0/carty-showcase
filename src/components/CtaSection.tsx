import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl hero-gradient p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">
              Start selling today
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Join thousands of sellers who use CartY to turn their social media followers into paying customers.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8 h-13 gap-2 shadow-lg">
              <a href={APK_URL} download>
                Download CartY <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
