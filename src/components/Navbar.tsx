import { Download } from "lucide-react";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          CartY
        </a>

        <a
          href={APK_URL}
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          Download APK
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
