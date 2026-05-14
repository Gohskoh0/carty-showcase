import { Download, ShieldCheck, Star, Lock } from "lucide-react";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-navy overflow-hidden">
      {/* Grid + gradient mesh background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 gradient-mesh" />

      {/* Soft glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-28 pb-24">
        {/* Trust pill */}
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md mb-7">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Trusted by 500+ vendors across Africa
        </div>

        <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
          Run Your Store
          <br />
          <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
            from Your Phone.
          </span>
        </h1>

        <p className="animate-fade-up-delay-1 mt-6 text-base sm:text-lg text-white/55 max-w-[580px] mx-auto leading-relaxed">
          CartY is the all-in-one mobile commerce platform built for African vendors. Manage inventory, accept payments, and grow your business — no laptop needed.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APK_URL}
            download
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6)]"
          >
            <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            Download for Android
          </a>
        </div>

        <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/45">
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

        {/* Logo strip */}
        <div className="animate-fade-up-delay-4 mt-16 max-w-3xl mx-auto">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 mb-5">
            Powering vendors with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white/40">
            <span className="text-sm font-semibold tracking-tight">Paystack</span>
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="text-sm font-semibold tracking-tight">Flutterwave</span>
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="text-sm font-semibold tracking-tight">WhatsApp</span>
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="text-sm font-semibold tracking-tight">M-Pesa</span>
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="text-sm font-semibold tracking-tight">Android</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy" />
    </section>
  );
};

export default HeroSection;
