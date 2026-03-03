import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, MapPin, Zap } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "500+",
    label: "Active Vendors",
    detail: "Growing 30% month-over-month",
  },
  {
    icon: TrendingUp,
    value: "₦12M+",
    label: "Processed Monthly",
    detail: "Transaction volume across all vendors",
  },
  {
    icon: MapPin,
    value: "3",
    label: "Countries",
    detail: "Nigeria, Ghana, Kenya — expanding fast",
  },
  {
    icon: Zap,
    value: "<2s",
    label: "Load Time",
    detail: "Optimized for low-end devices & 2G",
  },
];

const TractionSection = () => {
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
    <section ref={ref} className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center">Traction</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 tracking-tight">
            Numbers that speak for themselves
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-lg mx-auto">
            CartY is already making an impact across Africa's informal economy.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="rounded-2xl bg-navy-surface border border-white/5 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {m.value}
                </p>
                <p className="text-sm font-semibold text-white/80 mb-2">{m.label}</p>
                <p className="text-xs text-white/40">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;
