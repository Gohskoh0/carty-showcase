import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";

const problems = [
  "Expensive POS machines and card terminals",
  "No digital storefront without technical skills",
  "Cash-only sales limit growth",
];

const solutions = [
  "Free mobile app that IS your POS",
  "Instant shareable storefront link (no website needed)",
  "Integrated Paystack payments, accept cards + mobile money",
];

const ProblemSolution = () => {
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
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className={`container mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center">Why CartY?</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 tracking-tight">
          Built for the market others ignore
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
          {/* Problems */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">The Problem</h3>
            <ul className="space-y-5">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3.5 w-3.5 text-destructive" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">CartY fixes this</h3>
            <ul className="space-y-5">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
