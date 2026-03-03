import { useEffect, useRef, useState } from "react";
import { Download, Camera, Share2 } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download the app",
    description: "Free from the button above, no Play Store needed. Install in under a minute.",
  },
  {
    icon: Camera,
    number: "02",
    title: "Add your products",
    description: "Upload photos, set prices, manage stock. Your store is ready in minutes.",
  },
  {
    icon: Share2,
    number: "03",
    title: "Share your store",
    description: "Send your unique link to customers via WhatsApp, Instagram, or anywhere and start selling.",
  },
];

const HowItWorksSection = () => {
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
    <section ref={ref} id="how-it-works" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center">How it works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-center mb-4">
            Up and running in 3 minutes
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
            No complex setup. No learning curve. Just download, add products, and sell.
          </p>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Dashed connector line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] border-t-2 border-dashed border-primary/20" />

            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative text-center"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative z-10 mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="block text-5xl font-bold text-primary/10 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-[280px] mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
