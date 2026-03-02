import { Download, Github } from "lucide-react";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-navy overflow-hidden">
      {/* Grid + gradient mesh background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20 pb-24">
        <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight max-w-4xl mx-auto">
          Run Your Store from Your Phone.
        </h1>

        <p className="animate-fade-up-delay-1 mt-6 text-base sm:text-lg text-white/50 max-w-[560px] mx-auto leading-relaxed">
          CartY is the all-in-one mobile commerce platform built for African vendors. Manage inventory, accept payments, and grow your business — no laptop needed.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APK_URL}
            download
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            <Download className="h-5 w-5" />
            Download for Android
          </a>
          <a
            href="https://github.com/Gohskoh0/CartY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/5 hover:border-white/30"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        </div>

        <p className="animate-fade-up-delay-3 mt-8 text-sm text-white/35">
          Free to download · No subscription · Works offline
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
