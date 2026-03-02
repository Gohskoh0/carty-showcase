import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create your product",
    description: "Add photos, set your price, write a quick description. Done in under a minute.",
  },
  {
    number: "02",
    title: "Share the link",
    description: "Paste it in your WhatsApp status, Instagram bio, or send directly to customers.",
  },
  {
    number: "03",
    title: "Get paid instantly",
    description: "Customers click, pay, and you get notified. Money hits your account fast.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">How it works</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Three steps to your first sale
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <span className="text-7xl font-bold text-primary/10 metric-number leading-none block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
