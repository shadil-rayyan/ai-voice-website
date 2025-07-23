import { useState } from "react";
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    isInvestor: false,
    interestedIn: 'demo'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // TODO: Integrate with Getform.io or backend API
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Our team will get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      isInvestor: false,
      interestedIn: 'demo'
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-kerala-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-kerala-light mb-6">
              Ready to Transform Your <span className="text-kerala-gold">Customer Experience?</span>
            </h2>
            
            <p className="text-xl text-kerala-light/80 mb-8">
              Join the voice AI revolution. Get a personalized demo or discuss investment opportunities.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-kerala-mint/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-kerala-mint" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-kerala-light mb-1">Our Office</h3>
                  <p className="text-kerala-light/80">Infopark, Kochi, Kerala 682030, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-kerala-mint/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-kerala-mint" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-kerala-light mb-1">Email Us</h3>
                  <p className="text-kerala-light/80">hello@voicekerala.ai</p>
                  <p className="text-kerala-light/80">invest@voicekerala.ai</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-kerala-mint/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-kerala-mint" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-kerala-light mb-1">Call Us</h3>
                  <p className="text-kerala-light/80">+91 484 4567890</p>
                </div>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Kerala scenic view with palm trees and backwaters representing innovation in natural harmony" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          
          {/* Contact Form */}
          <div className="bg-kerala-teal/20 border border-kerala-mint/20 rounded-2xl p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-kerala-light mb-6">Get in Touch</h3>
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-kerala-light font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`bg-kerala-navy/50 border-kerala-mint/30 text-kerala-light placeholder-kerala-light/50 focus:border-kerala-mint ${errors.name ? 'border-red-400' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-kerala-light font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`bg-kerala-navy/50 border-kerala-mint/30 text-kerala-light placeholder-kerala-light/50 focus:border-kerala-mint ${errors.email ? 'border-red-400' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                {/* Company and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-kerala-light font-medium mb-2">Company *</label>
                    <Input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className={`bg-kerala-navy/50 border-kerala-mint/30 text-kerala-light placeholder-kerala-light/50 focus:border-kerala-mint ${errors.company ? 'border-red-400' : ''}`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-kerala-light font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-kerala-navy/50 border-kerala-mint/30 text-kerala-light placeholder-kerala-light/50 focus:border-kerala-mint"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                {/* Interest Selection */}
                <div>
                  <label className="block text-kerala-light font-medium mb-4">I'm interested in:</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { value: 'demo', label: 'Product Demo' },
                      { value: 'partnership', label: 'Partnership' },
                      { value: 'investment', label: 'Investment Opportunity' },
                      { value: 'integration', label: 'API Integration' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          value={option.value}
                          checked={formData.interestedIn === option.value}
                          onChange={(e) => setFormData({...formData, interestedIn: e.target.value})}
                          className="w-4 h-4 text-kerala-mint bg-kerala-navy border-kerala-mint/30 focus:ring-kerala-mint"
                        />
                        <span className="text-kerala-light">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Investor Checkbox */}
                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isInvestor}
                      onChange={(e) => setFormData({...formData, isInvestor: e.target.checked})}
                      className="w-5 h-5 text-kerala-gold bg-kerala-navy border-kerala-mint/30 rounded focus:ring-kerala-gold mt-0.5"
                    />
                    <span className="text-kerala-light">
                      I'm an investor interested in funding opportunities 
                      <span className="text-kerala-gold"> (Access to investor materials)</span>
                    </span>
                  </label>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-kerala-light font-medium mb-2">Message *</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className={`bg-kerala-navy/50 border-kerala-mint/30 text-kerala-light placeholder-kerala-light/50 focus:border-kerala-mint resize-none ${errors.message ? 'border-red-400' : ''}`}
                    placeholder="Tell us about your requirements or questions..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-kerala-gold text-kerala-navy font-semibold rounded-lg hover:bg-kerala-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-kerala-light mb-4">Thank You!</h3>
                <p className="text-kerala-light/80 mb-6">
                  Your message has been sent successfully. Our team will get back to you within 24 hours.
                </p>
                <Button
                  onClick={resetForm}
                  className="px-6 py-3 bg-kerala-mint text-kerala-navy font-medium rounded-lg hover:bg-kerala-mint/90 transition-colors"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
