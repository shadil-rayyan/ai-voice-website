import { Play, Video, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-kerala-gradient-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-kerala-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-kerala-mint rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-kerala-gold rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-kerala-light">Kerala's Voice</span>
              <span className="text-kerala-gold block">AI Revolution</span>
            </h1>
            
            <p className="text-xl text-kerala-light/80 mb-8 leading-relaxed">
              Transforming customer service with cutting-edge AI voice technology. 
              Built in Kerala, designed for the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="px-8 py-4 bg-kerala-gold text-kerala-navy font-semibold rounded-lg hover:bg-kerala-gold/90 transition-all transform hover:scale-105 shadow-lg">
                <span className="flex items-center justify-center">
                  <Video className="w-5 h-5 mr-2" />
                  Book Live Demo
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-kerala-mint text-kerala-mint hover:bg-kerala-mint hover:text-kerala-navy transition-all rounded-lg font-semibold">
                <span className="flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Investor Deck
                </span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-kerala-gold">98%</div>
                <div className="text-sm text-kerala-light/60">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-kerala-gold">75%</div>
                <div className="text-sm text-kerala-light/60">Cost Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-kerala-gold">12+</div>
                <div className="text-sm text-kerala-light/60">Languages</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Kerala backwaters landscape representing natural beauty and innovation" 
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg border border-kerala-mint/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
