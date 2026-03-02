import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const stats = [
  { value: "10K+", label: "Active sellers" },
  { value: "<60s", label: "To create a product" },
  { value: "₦0", label: "Setup cost" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-16">
      {/* Subtle background elements */}
      <div className="absolute top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now available — APK download
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Turn your WhatsApp
            <br className="hidden sm:block" />
            {" "}& Instagram into a{" "}
            <span className="text-gradient">storefront</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            Create a product link in seconds. Share it with customers.
            Get paid instantly. No website, no code, no hassle.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <Button asChild size="lg" className="hero-gradient border-0 font-semibold shadow-lg hover:shadow-xl transition-all text-base px-8 h-13 gap-2.5">
              <a href={APK_URL} download>
                <Download className="h-4 w-4" /> Download CartY — Free
              </a>
            </Button>
            <p className="text-xs text-muted-foreground self-center">Android APK · 12MB · No sign-up required</p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-8 sm:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-foreground metric-number">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
