import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Early Users" },
  { value: "3 Countries", label: "Supported" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.8★", label: "App Rating" },
];

const SocialProofBar = () => {
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
    <section ref={ref} className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-0 md:divide-x md:divide-border transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-8 md:px-12">
              <span className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Sora', sans-serif" }}>
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
