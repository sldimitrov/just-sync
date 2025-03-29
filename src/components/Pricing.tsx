
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Basic",
    price: 999,
    description: "Perfect for personal websites and simple portfolios",
    features: [
      "Responsive design",
      "5 pages",
      "Contact form",
      "SEO optimization",
      "Social media integration",
      "1 month of support"
    ],
    recommended: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: 1999,
    description: "Ideal for businesses and professional portfolios",
    features: [
      "Everything in Basic",
      "Up to 10 pages",
      "Custom animations",
      "Blog integration",
      "Premium design",
      "3 months of support",
      "Content management system"
    ],
    recommended: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    price: null,
    description: "Complete solutions for e-commerce and complex websites",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "E-commerce capabilities",
      "Advanced analytics",
      "Custom functionality",
      "Priority support",
      "SEO & marketing strategy"
    ],
    recommended: false,
    cta: "Contact Us"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-subtitle">
          Transparent pricing with no hidden fees. Choose the plan that works best for your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden border transition-all duration-300 ${
                plan.recommended 
                  ? "border-brand-300 shadow-lg shadow-brand-100/50 scale-105 z-10" 
                  : "border-gray-200 hover:border-brand-200 hover:shadow-md"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 inset-x-0 bg-brand-500 text-white text-xs font-medium text-center py-1">
                  RECOMMENDED
                </div>
              )}
              
              <div className={`p-6 ${plan.recommended ? "pt-8" : ""}`}>
                <h3 className="text-xl font-bold font-display mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-1">one-time</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold">Custom Quote</div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.recommended ? "bg-brand-500 hover:bg-brand-600" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold font-display mb-3">Need something specific?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer custom solutions tailored to your unique requirements. Contact us to discuss your project needs and get a personalized quote.
          </p>
          <Button size="lg" variant="outline" className="px-8">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
