import { ShoppingCart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3.5">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient transition-transform group-hover:scale-105">
            <ShoppingCart className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">CartY</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">How it Works</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Testimonials</a>
        </div>

        <Button asChild size="sm" className="hero-gradient border-0 font-semibold shadow-md hover:shadow-lg transition-shadow gap-1.5">
          <a href={APK_URL} download>
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
