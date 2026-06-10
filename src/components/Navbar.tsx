import { Download, ShoppingCart } from "lucide-react";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/70 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between px-6 py-3.5">
        <a href="/" className="flex items-center gap-2" aria-label="CartY home">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[hsl(250,70%,55%)] text-primary-foreground font-bold text-sm shadow-lg shadow-primary/30" style={{ fontFamily: "'Sora', sans-serif" }}>
            C
          </span>
          <span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            CartY
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <a
          href={APK_URL}
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-primary/25"
        >
          <Download className="h-4 w-4" />
          Download APK
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
