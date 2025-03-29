
import { useState } from "react";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioItems = [
  {
    id: 1,
    title: "Creative Agency Website",
    category: "business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Modern website for a creative marketing agency with portfolio and service showcase.",
    link: "#"
  },
  {
    id: 2,
    title: "E-Commerce Fashion Store",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Fully functional fashion store with product filtering and secure checkout.",
    link: "#"
  },
  {
    id: 3,
    title: "Photographer Portfolio",
    category: "portfolio",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Elegant portfolio website for a professional photographer with gallery features.",
    link: "#"
  },
  {
    id: 4,
    title: "Tech Startup Landing Page",
    category: "business",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "High-converting landing page designed for a tech startup's product launch.",
    link: "#"
  },
  {
    id: 5,
    title: "Personal Blog",
    category: "personal",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Personal blog with a clean, minimalist design and content management system.",
    link: "#"
  },
  {
    id: 6,
    title: "Fitness Equipment Store",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "E-commerce platform selling fitness equipment with detailed product pages.",
    link: "#"
  }
];

const Portfolio = () => {
  const categories = ["all", "business", "ecommerce", "portfolio", "personal"];
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Take a look at some of our recent projects and see the quality of our work.
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveFilter(category)}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeFilter} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-on-scroll"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg font-display">{item.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{item.description}</p>
                      <a 
                        href={item.link} 
                        className="inline-flex items-center mt-3 text-xs text-white/90 hover:text-white"
                      >
                        View Project <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold font-display">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 capitalize">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="flex items-center gap-2">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
