
import { Code, Layout, ShoppingCart, User, FileText, BarChart } from "lucide-react";

const services = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Business Websites",
    description: "Professional websites that establish credibility and drive conversions for your business."
  },
  {
    icon: <User className="h-8 w-8" />,
    title: "Personal Websites",
    description: "Creative, personal sites that showcase your individual brand and online presence."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Portfolio Sites",
    description: "Stunning portfolios that highlight your work, skills, and achievements to potential clients."
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "E-Commerce Stores",
    description: "Powerful online stores with seamless checkouts and complete inventory management."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into loyal customers."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom Web Apps",
    description: "Tailor-made web applications built to solve your unique business challenges."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer a complete range of web design and development services to bring your digital vision to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-brand-200 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-3 mb-4 inline-flex items-center justify-center rounded-full bg-brand-100 text-brand-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
