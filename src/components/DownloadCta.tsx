import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

const APK_URL = "https://github.com/Gohskoh0/CartY/releases/latest/download/CartY.apk";

const DownloadCta = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className={`container mx-auto px-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-8">
          Download CartY today — it's free.
        </h2>
        <a
          href={APK_URL}
          download
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
        >
          <Download className="h-5 w-5" />
          Download APK
        </a>
        <p className="mt-5 text-sm text-muted-foreground">
          Android 8.0+ required · APK direct download · 84 MB
        </p>
      </div>
    </section>
  );
};

export default DownloadCta;
