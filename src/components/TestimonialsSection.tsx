import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amara O.",
    role: "Fashion Seller, Instagram",
    quote: "CartY changed everything for me. I used to screenshot prices and chase payments. Now I just send a link!",
  },
  {
    name: "David K.",
    role: "Electronics, WhatsApp",
    quote: "I made my first sale within 30 minutes of signing up. The simplicity is unreal.",
  },
  {
    name: "Fatima B.",
    role: "Baked Goods, Instagram",
    quote: "My customers love how easy it is to order. I've tripled my weekly sales since using CartY.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Loved by sellers everywhere
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card p-8 card-elevated border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
