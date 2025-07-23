import { Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-kerala-navy border-t border-kerala-teal/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 text-2xl font-serif font-bold text-kerala-mint mb-6">
              <svg className="w-8 h-8 text-kerala-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
              VoiceKerala AI
            </a>
            
            <p className="text-kerala-light/80 mb-6 leading-relaxed">
              Revolutionizing customer service with AI-powered voice technology. 
              Born in Kerala, built for the world. Experience the future of 
              multilingual customer interactions.
            </p>
            
            {/* Malayalam Tagline */}
            <p className="text-kerala-mint font-serif text-lg mb-6">
              "സാങ്കേതികവിദ്യയിലൂടെ കേരളത്തിന്റെ ശബ്ദം ലോകത്തിലേക്ക്"
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-kerala-teal/20 hover:bg-kerala-teal/40 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-kerala-mint" />
              </a>
              <a href="#" className="w-10 h-10 bg-kerala-teal/20 hover:bg-kerala-teal/40 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-kerala-mint" />
              </a>
              <a href="#" className="w-10 h-10 bg-kerala-teal/20 hover:bg-kerala-teal/40 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5 text-kerala-mint" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-kerala-light mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Features</a></li>
              <li><a href="#demo" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Demo</a></li>
              <li><a href="#market" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Market</a></li>
              <li><a href="#testimonials" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-kerala-light mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Developer Guide</a></li>
              <li><a href="#" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Blog</a></li>
              <li><a href="#" className="text-kerala-light/70 hover:text-kerala-mint transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-kerala-teal/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-kerala-light/60 mb-4 md:mb-0">
            <span>&copy; {new Date().getFullYear()} VoiceKerala AI. All rights reserved.</span>
          </div>
          
          <div className="flex space-x-6 text-kerala-light/60">
            <a href="#" className="hover:text-kerala-mint transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-kerala-mint transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-kerala-mint transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
