import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Free to use", carty: true, traditional: false, social: true },
  { feature: "Inventory management", carty: true, traditional: true, social: false },
  { feature: "Payment integration", carty: true, traditional: true, social: false },
  { feature: "Works offline", carty: true, traditional: false, social: false },
  { feature: "No laptop required", carty: true, traditional: false, social: true },
  { feature: "Shareable storefront", carty: true, traditional: true, social: false },
  { feature: "Sales analytics", carty: true, traditional: true, social: false },
  { feature: "Optimized for 2G/3G", carty: true, traditional: false, social: false },
];

const ComparisonSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const CellIcon = ({ val }: { val: boolean }) =>
    val ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
        <Check className="h-3.5 w-3.5 text-emerald-500" />
      </span>
    ) : (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10">
        <X className="h-3.5 w-3.5 text-destructive" />
      </span>
    );

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center">Comparison</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
            Why vendors choose CartY
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
            See how CartY stacks up against traditional POS systems and selling on social media.
          </p>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-4 font-semibold text-foreground">Feature</th>
                  <th className="py-4 px-4 font-bold text-primary text-center">CartY</th>
                  <th className="py-4 px-4 font-semibold text-muted-foreground text-center">Traditional POS</th>
                  <th className="py-4 pl-4 font-semibold text-muted-foreground text-center">Social Media</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 pr-4 text-foreground font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center"><CellIcon val={row.carty} /></td>
                    <td className="py-4 px-4 text-center"><CellIcon val={row.traditional} /></td>
                    <td className="py-4 pl-4 text-center"><CellIcon val={row.social} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
