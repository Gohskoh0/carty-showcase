import { Link2, Share2, CreditCard, BarChart3, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Link2,
    title: "Product Links",
    description: "Beautiful product pages with images, pricing, and descriptions — created in under 60 seconds.",
  },
  {
    icon: Share2,
    title: "Share Anywhere",
    description: "Drop your link in WhatsApp statuses, Instagram bios, DMs, or any platform. One tap to buy.",
  },
  {
    icon: CreditCard,
    title: "Instant Payments",
    description: "Money goes straight to your account. No middlemen, no delays, no hidden fees.",
  },
  {
    icon: BarChart3,
    title: "Sales Dashboard",
    description: "Track orders, views, and revenue at a glance. Know what's selling and what's not.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed for sellers who run everything from their phone. Works perfectly on any device.",
  },
  {
    icon: Zap,
    title: "Zero Setup",
    description: "No website, no coding, no complexity. Sign up and start selling in minutes.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don't.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl bg-card p-7 card-elevated border border-border hover:border-primary/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:hero-gradient group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
