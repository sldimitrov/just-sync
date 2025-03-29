
import { useEffect, useState } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, FashionHub",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Working with WebCraft Pro was an excellent experience from start to finish. They took the time to understand our brand and delivered a website that perfectly captures our vision. Our online sales have increased by 40% since launch!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "As a photographer, I needed a portfolio that would showcase my work beautifully. The team delivered exactly what I wanted - an elegant, responsive site that has helped me attract new clients. I couldn't be happier!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Founder, TechStart",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "The landing page WebCraft Pro created for our product launch exceeded all expectations. It's not just beautiful - it converts visitors into customers. Their attention to detail and focus on user experience is outstanding.",
    rating: 5
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "I was worried about the cost and complexity of getting a professional website, but WebCraft Pro made the process simple and affordable. My new business site looks amazing and has already brought in new customers.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextTestimonial();
    }
    
    if (touchStart - touchEnd < -75) {
      prevTestimonial();
    }
  };
  
  return (
    <section id="testimonials" className="py-20 bg-brand-50">
      <div className="container-section">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear what our clients have to say about working with us.
        </p>
        
        <div 
          className="mt-12 relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Quote className="absolute text-brand-200 h-16 w-16 -top-8 -left-4 opacity-50" />
              
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 relative z-10">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-brand-50">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                    
                    <p className="text-lg text-gray-700 italic mb-4">
                      "{testimonials[activeIndex].content}"
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-lg font-display">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-brand-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <Button 
                size="icon" 
                variant="outline" 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
