const steps = [
  {
    number: "01",
    title: "Create your product",
    description: "Add photos, set a price, and write a description. It takes less than a minute.",
  },
  {
    number: "02",
    title: "Share the link",
    description: "Copy your unique product link and paste it in your WhatsApp status, Instagram bio, or DMs.",
  },
  {
    number: "03",
    title: "Get paid",
    description: "Customers click, pay, and you get notified instantly. Money hits your account fast.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">How it works</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Three steps to your first sale
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <span className="text-6xl font-extrabold text-gradient">{step.number}</span>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
