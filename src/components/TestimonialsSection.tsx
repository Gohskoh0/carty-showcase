import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amara O.",
    role: "Fashion · Instagram",
    quote: "I used to screenshot prices and chase payments all day. Now I just send a link and money comes in. CartY changed everything.",
    highlight: "CartY changed everything",
  },
  {
    name: "David K.",
    role: "Electronics · WhatsApp",
    quote: "Made my first sale within 30 minutes of signing up. The simplicity is unreal. My customers actually prefer this over my old process.",
    highlight: "first sale within 30 minutes",
  },
  {
    name: "Fatima B.",
    role: "Baked Goods · Instagram",
    quote: "My customers love how easy it is to order. I've tripled my weekly sales since I started using CartY. Best decision I made this year.",
    highlight: "tripled my weekly sales",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Testimonials</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Sellers love CartY
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-7 card-elevated border border-border flex flex-col"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="pt-5 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
