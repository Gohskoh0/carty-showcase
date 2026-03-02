import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl hero-gradient p-12 md:p-16 lg:p-20 overflow-hidden"
        >
          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsla(0,0%,100%,0.12),transparent_50%)]" />

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight mb-4">
              Ready to start selling?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Join thousands of sellers who turned their social media into a revenue machine with CartY.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold text-base px-8 h-13 gap-2 shadow-lg">
              <a href={APK_URL} download>
                Download CartY <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
