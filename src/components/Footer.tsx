const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>CartY</span>
            <p className="text-sm text-white/40 mt-1">Commerce for everyone.</p>
          </div>
          <div className="flex gap-8 text-sm text-white/50">
            <a href="https://github.com/Gohskoh0/CartY" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk" download className="hover:text-white transition-colors">Download</a>
            <a href="mailto:hello@carty.app" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">© 2025 CartY. Built with ❤️ for African vendors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
