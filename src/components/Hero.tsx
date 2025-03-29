
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-accent/20 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-brand-100 text-brand-700">
                Professional Web Design & Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4">
                Crafting Digital <span className="text-brand-500">Experiences</span> That Make an Impact
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                We create stunning, responsive websites tailored to your unique needs. From personal sites to e-commerce platforms, we bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="text-base bg-brand-500 hover:bg-brand-600 text-white px-6 h-12">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-base px-6 h-12">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Web Development" 
                className="w-full h-auto rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-800/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium">Modern & responsive designs for every screen size</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg transform rotate-3 animate-pulse">
              <div className="w-16 h-6 bg-brand-200 rounded-md"></div>
              <div className="w-12 h-3 bg-gray-200 rounded-md mt-2"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg transform -rotate-3">
              <div className="w-14 h-14 bg-accent/30 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
