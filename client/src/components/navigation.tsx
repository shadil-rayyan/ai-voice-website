import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kerala-navy/95 backdrop-blur-sm border-b border-kerala-teal/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 text-xl font-serif font-bold text-kerala-mint">
              <svg className="w-8 h-8 text-kerala-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
              VoiceKerala AI
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-kerala-light hover:text-kerala-mint transition-colors">Features</a>
            <a href="#demo" className="text-kerala-light hover:text-kerala-mint transition-colors">Demo</a>
            <a href="#market" className="text-kerala-light hover:text-kerala-mint transition-colors">Market</a>
            <a href="#testimonials" className="text-kerala-light hover:text-kerala-mint transition-colors">Testimonials</a>
            <a href="#contact" className="text-kerala-light hover:text-kerala-mint transition-colors">Contact</a>
          </div>
          
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-kerala-gold text-kerala-navy font-medium rounded-lg hover:bg-kerala-gold/90 transition-colors">
              Book Demo
            </button>
            <button className="px-4 py-2 border border-kerala-mint text-kerala-mint hover:bg-kerala-mint hover:text-kerala-navy transition-colors rounded-lg">
              Investor Deck
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-kerala-light hover:text-kerala-mint" 
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-kerala-teal/20">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-kerala-light hover:text-kerala-mint transition-colors">Features</a>
              <a href="#demo" className="text-kerala-light hover:text-kerala-mint transition-colors">Demo</a>
              <a href="#market" className="text-kerala-light hover:text-kerala-mint transition-colors">Market</a>
              <a href="#testimonials" className="text-kerala-light hover:text-kerala-mint transition-colors">Testimonials</a>
              <a href="#contact" className="text-kerala-light hover:text-kerala-mint transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-4 py-2 bg-kerala-gold text-kerala-navy font-medium rounded-lg hover:bg-kerala-gold/90 transition-colors">
                  Book Demo
                </button>
                <button className="px-4 py-2 border border-kerala-mint text-kerala-mint hover:bg-kerala-mint hover:text-kerala-navy transition-colors rounded-lg">
                  Investor Deck
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
