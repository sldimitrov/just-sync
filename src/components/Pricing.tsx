
import { Check, Calendar, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const consultationOptions = [
  {
    name: "Free Initial Consultation",
    icon: <MessageSquare className="h-10 w-10 text-brand-500 mb-4" />,
    description: "Let's discuss your project needs with no obligation",
    features: [
      "30-minute video call",
      "Basic requirements gathering",
      "Preliminary recommendations",
      "General cost estimation",
      "No commitment required"
    ],
    cta: "Schedule a Call",
    ctaLink: "#contact"
  },
  {
    name: "Project Discovery Session",
    icon: <Calendar className="h-10 w-10 text-brand-500 mb-4" />,
    description: "A deep dive into your project requirements and goals",
    features: [
      "60-minute detailed consultation",
      "Comprehensive needs analysis",
      "Project scope definition",
      "Technology recommendations",
      "Timeline planning",
      "Custom quote preparation"
    ],
    recommended: true,
    cta: "Book Discovery Session",
    ctaLink: "#contact"
  },
  {
    name: "Custom Solution",
    icon: <Phone className="h-10 w-10 text-brand-500 mb-4" />,
    description: "For complex projects requiring specialized expertise",
    features: [
      "Customized engagement",
      "Dedicated project manager",
      "Specialized technical expertise",
      "Enterprise-level solutions",
      "Ongoing support options",
      "Tailored to your specific needs"
    ],
    cta: "Contact Us",
    ctaLink: "#contact"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Let's Discuss Your Project</h2>
        <p className="section-subtitle">
          Every project is unique. We offer personalized consultations to understand your needs and provide tailored solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {consultationOptions.map((option, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden border transition-all duration-300 ${
                option.recommended 
                  ? "border-brand-300 shadow-lg shadow-brand-100/50 scale-105 z-10" 
                  : "border-gray-200 hover:border-brand-200 hover:shadow-md"
              }`}
            >
              {option.recommended && (
                <div className="absolute top-0 inset-x-0 bg-brand-500 text-white text-xs font-medium text-center py-1">
                  RECOMMENDED
                </div>
              )}
              
              <div className={`p-6 ${option.recommended ? "pt-8" : ""}`}>
                <div className="flex justify-center">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-center">{option.name}</h3>
                <p className="text-muted-foreground mb-6 text-center">{option.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={option.ctaLink}>
                  <Button 
                    className={`w-full ${
                      option.recommended ? "bg-brand-500 hover:bg-brand-600" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {option.cta}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold font-display mb-3">Need a personalized approach?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is ready to discuss your unique requirements and create a custom solution that perfectly fits your needs and budget.
          </p>
          <a href="#contact">
            <Button size="lg" variant="outline" className="px-8">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
