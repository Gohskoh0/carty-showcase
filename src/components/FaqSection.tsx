import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Is CartY really free?",
    answer: "Yes. CartY is completely free to download and use. There are no monthly subscriptions, no hidden fees, and no premium tiers. We only earn a small transaction fee when you accept payments through Paystack.",
  },
  {
    question: "Do I need internet to use CartY?",
    answer: "CartY works offline for core functions like managing inventory and viewing orders. You'll need an internet connection only when processing payments or syncing your storefront.",
  },
  {
    question: "How do customers pay me?",
    answer: "CartY integrates with Paystack, so your customers can pay via debit/credit cards, bank transfers, USSD, and mobile money. Funds go directly to your bank account.",
  },
  {
    question: "What phones does CartY support?",
    answer: "CartY runs on any Android device running Android 8.0 (Oreo) or higher. It's optimized for low-end devices and works smoothly even on 2G/3G networks.",
  },
  {
    question: "Can I sell in my local currency?",
    answer: "Absolutely. CartY supports Nigerian Naira (NGN), Ghanaian Cedi (GHS), Kenyan Shilling (KES), and more currencies are being added regularly.",
  },
  {
    question: "Is my data safe?",
    answer: "Your data is encrypted and stored securely. We never share your business information with third parties. You own your data completely.",
  },
];

const FaqSection = () => {
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
    <section ref={ref} id="faq" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
            Got questions? We've got answers.
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
            Everything you need to know about CartY before you start selling.
          </p>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-background px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
