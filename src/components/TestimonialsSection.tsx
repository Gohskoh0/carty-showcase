import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amina Bello",
    role: "Fashion Vendor, Lagos",
    quote: "I used to lose track of orders in my DMs. With CartY, every sale is organized and I get paid instantly. My revenue went up 40% in two months.",
    rating: 5,
  },
  {
    name: "Kwame Asante",
    role: "Electronics Seller, Accra",
    quote: "No more manual stock counting. CartY alerts me when items are running low. I just focus on selling now.",
    rating: 5,
  },
  {
    name: "Fatima Musa",
    role: "Food Vendor, Abuja",
    quote: "I share my CartY store link on WhatsApp status every morning. Customers order directly — no more back-and-forth messages.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
            Vendors love CartY
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
            Real stories from real vendors across Africa who transformed their businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="relative rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-card-foreground/80 leading-relaxed mb-6 text-sm">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold text-card-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
