import { Link2, Share2, CreditCard, BarChart3, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Product Links",
    description: "Create beautiful product pages with images, descriptions and pricing in under 60 seconds.",
  },
  {
    icon: Share2,
    title: "Share Anywhere",
    description: "Share your product link on WhatsApp, Instagram, or any platform. One tap to buy.",
  },
  {
    icon: CreditCard,
    title: "Instant Payments",
    description: "Accept payments directly. Money goes straight to your account. No delays.",
  },
  {
    icon: BarChart3,
    title: "Sales Dashboard",
    description: "Track orders, views, and revenue. Know what's selling and what's not.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Built for sellers who run their business from their phone. Works perfectly on mobile.",
  },
  {
    icon: Zap,
    title: "No Setup Needed",
    description: "No website, no coding, no complexity. Sign up and start selling in minutes.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Features</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Everything you need to sell online
          </h2>
          <p className="text-lg text-muted-foreground">
            From creating product links to getting paid — CartY handles it all so you can focus on selling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-8 card-elevated border border-border"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl hero-gradient">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
