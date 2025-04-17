
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-brand-50">
      <div className="container-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's discuss how we can help bring your vision to life.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
              <h3 className="text-xl font-semibold font-display mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-100 rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@justsync.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      1234 Web Design Ave<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-medium mb-4">Office Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Monday - Friday:</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday:</div>
                  <div>10:00 AM - 3:00 PM</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-semibold font-display mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
