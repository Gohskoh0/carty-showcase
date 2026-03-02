import { useEffect, useRef, useState } from "react";
import { Package, ShoppingCart, CreditCard, BarChart3, Bell, Globe } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Track stock levels in real time, get low-stock alerts.",
  },
  {
    icon: ShoppingCart,
    title: "Instant Storefront",
    description: "Share your unique store link on WhatsApp, Instagram, anywhere.",
  },
  {
    icon: CreditCard,
    title: "Paystack Payments",
    description: "Accept cards, bank transfers, and USSD from customers.",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "See your best products, daily revenue, and order trends.",
  },
  {
    icon: Bell,
    title: "Order Notifications",
    description: "Get instant alerts when customers place orders.",
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Sell in NGN, GHS, KES and more.",
  },
];

const FeaturesSection = () => {
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

  return (
    <section ref={ref} id="features" className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center">Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16 tracking-tight">
            Everything a vendor needs. Nothing they don't.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-navy-surface border border-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
