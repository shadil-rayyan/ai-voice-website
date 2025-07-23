import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: 'VoiceKerala AI has transformed our customer service. The Malayalam support is incredible!',
      malayalam: 'ഞങ്ങളുടെ കസ്റ്റമർ സർവീസ് VoiceKerala AI മാറ്റിമറിച്ചു. മലയാളം സപ്പോർട്ട് അവിശ്വസനീയമാണ്!',
      author: 'Priya Nair',
      position: 'Customer Service Director',
      company: 'Kerala Tourism Board',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
    },
    {
      quote: 'Our call volumes reduced by 70% while customer satisfaction increased. Amazing technology!',
      malayalam: 'ഞങ്ങളുടെ കോൾ വോള്യം 70% കുറഞ്ഞു, അതേസമയം കസ്റ്റമർ സംതൃപ്തി വർദ്ധിച്ചു. അതിശയകരമായ സാങ്കേതികവിദ്യ!',
      author: 'Rajesh Kumar',
      position: 'Operations Manager',
      company: 'Malabar Gold & Diamonds',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
    },
    {
      quote: 'The cultural understanding of our customers is remarkable. It feels like talking to a local.',
      malayalam: 'ഞങ്ങളുടെ ഉപഭോക്താക്കളുടെ സാംസ്കാരിക ധാരണ ശ്രദ്ധേയമാണ്. ഒരു പ്രാദേശിക വ്യക്തിയുമായി സംസാരിക്കുന്നതുപോലെ തോന്നുന്നു.',
      author: 'Dr. Meera Menon',
      position: 'Chief Technology Officer',
      company: 'Kochi Metro Rail',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-kerala-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-kerala-light mb-6">
            What Our <span className="text-kerala-mint">Customers Say</span>
          </h2>
          <p className="text-xl text-kerala-light/80 max-w-3xl mx-auto">
            Trusted by leading Kerala businesses for exceptional customer experiences.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-kerala-teal/20 border border-kerala-mint/20 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <img 
              src={testimonials[currentIndex].image} 
              alt={`${testimonials[currentIndex].author} - ${testimonials[currentIndex].position}`} 
              className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-kerala-mint"
            />
            
            {/* English Quote */}
            <blockquote className="text-xl lg:text-2xl text-kerala-light font-medium mb-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            {/* Malayalam Quote */}
            <blockquote className="text-lg text-kerala-mint/80 mb-6 font-serif">
              "{testimonials[currentIndex].malayalam}"
            </blockquote>
            
            {/* Author Info */}
            <div className="text-kerala-light">
              <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
              <div className="text-kerala-light/70">{testimonials[currentIndex].position}</div>
              <div className="text-kerala-mint font-medium">{testimonials[currentIndex].company}</div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)} 
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-kerala-gold' : 'bg-kerala-light/30'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-kerala-teal/30 hover:bg-kerala-teal/50 rounded-full flex items-center justify-center text-kerala-light transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-kerala-teal/30 hover:bg-kerala-teal/50 rounded-full flex items-center justify-center text-kerala-light transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Customer Logos */}
        <div className="mt-16">
          <p className="text-center text-kerala-light/60 mb-8">Trusted by leading Kerala businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-kerala-light font-semibold">Kerala Tourism</div>
            <div className="text-kerala-light font-semibold">Malabar Gold</div>
            <div className="text-kerala-light font-semibold">Kochi Metro</div>
            <div className="text-kerala-light font-semibold">Federal Bank</div>
            <div className="text-kerala-light font-semibold">Lulu Group</div>
          </div>
        </div>
      </div>
    </section>
  );
}
