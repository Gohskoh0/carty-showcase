import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Store } from "lucide-react";
import banner from "@/assets/shoppers-banner.jpg";

const stats = [
  { icon: Store, value: "500+", label: "Active vendors" },
  { icon: Users, value: "12k+", label: "Customers reached" },
  { icon: TrendingUp, value: "₦180M+", label: "Sales processed" },
];

const MarketplaceBanner = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="African market with vibrant stalls and shoppers browsing"
          width={1600}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />
      </div>

      <div className={`relative container mx-auto px-6 py-24 md:py-32 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Built for the streets</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            From the market stall to the smartphone.
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            We built CartY by walking through markets in Lagos, Accra and Nairobi — talking to the women and men who power Africa's informal economy. Every feature is shaped by their reality.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary mb-3">
                  <s.icon className="h-4 w-4" />
                </div>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{s.value}</p>
                <p className="text-xs text-white/55 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceBanner;
