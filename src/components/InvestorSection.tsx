import { useEffect, useRef, useState } from "react";

const bullets = [
  "Mobile-first architecture optimized for 2G/3G networks",
  "Revenue model: transaction fees on Paystack payments",
  "Expansion roadmap: vendor loans, B2B bulk orders, delivery logistics",
];

const InvestorSection = () => {
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
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-primary to-[hsl(250,70%,50%)]">
      <div className={`container mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Africa's informal economy is a $2.5 trillion opportunity.
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-[640px]">
            Over 40 million micro-vendors across Sub-Saharan Africa operate without any digital infrastructure. CartY brings them a full commerce stack — inventory, payments, and storefronts — in a single Android app, built to work on low-end devices and intermittent networks.
          </p>

          <ul className="space-y-4 mb-12">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/80" />
                <span className="text-white/90 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="mailto:hello@carty.app"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors"
          >
            Interested in CartY? Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
