import { Download, ShieldCheck, Star, Lock } from "lucide-react";
import vendorHero from "@/assets/vendor-hero.jpg";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-navy overflow-hidden">
      {/* Grid + gradient mesh background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 gradient-mesh" />

      {/* Soft glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/3 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Trusted by 500+ vendors across Africa
          </div>

          <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.05] tracking-tight">
            Run Your Store
            <br />
            <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
              from Your Phone.
            </span>
          </h1>

          <p className="animate-fade-up-delay-1 mt-6 text-base sm:text-lg text-white/55 max-w-[560px] mx-auto lg:mx-0 leading-relaxed">
            CartY is the all-in-one mobile commerce platform built for African vendors. Manage inventory, accept payments, and grow your business — no laptop needed.
          </p>

          <div className="animate-fade-up-delay-2 mt-10 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
            <a
              href={APK_URL}
              download
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6)]"
            >
              <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              Download for Android
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap items-center lg:justify-start justify-center gap-x-5 gap-y-2 text-xs text-white/45">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Verified APK
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-emerald-400" />
              Encrypted payments
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white/70">4.8</span>
              <span>(120+ reviews)</span>
            </span>
          </div>
        </div>

        {/* Right: vendor image */}
        <div className="animate-fade-up-delay-2 relative mx-auto lg:mx-0 w-full max-w-[520px]">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-fuchsia-500/10 to-transparent blur-2xl" />
          <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 ring-1 ring-white/5">
            <img
              src={vendorHero}
              alt="African vendor in Lagos using the CartY mobile commerce app to manage her store"
              width={1024}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-4 -left-4 sm:-left-8 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-xl border border-white/40 max-w-[210px]">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex -space-x-1.5">
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white" />
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white" />
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white" />
              </div>
              <span className="text-xs font-semibold text-foreground">Live now</span>
            </div>
            <p className="text-xs text-muted-foreground leading-snug">
              <span className="font-bold text-foreground">+₦2.4M</span> in sales processed today
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy" />
    </section>
  );
};

export default HeroSection;
