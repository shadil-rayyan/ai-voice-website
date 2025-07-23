import { Play, CheckCircle } from "lucide-react";

export default function VideoDemo() {
  return (
    <section id="demo" className="py-20 bg-kerala-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            See VoiceKerala AI in <span className="text-kerala-gold">Action</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Watch how our AI transforms customer interactions with natural, 
            contextual conversations in multiple languages.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
              alt="Business meeting in India showcasing customer service transformation" 
              className="rounded-xl shadow-2xl w-full"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-kerala-gold/90 hover:bg-kerala-gold rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all">
                <Play className="w-8 h-8 text-kerala-navy ml-1" fill="currentColor" />
              </button>
            </div>
            
            {/* Demo Stats Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-lg font-bold">2.3s</div>
                  <div className="text-xs opacity-80">Response Time</div>
                </div>
                <div>
                  <div className="text-lg font-bold">Malayalam</div>
                  <div className="text-xs opacity-80">Language Detected</div>
                </div>
                <div>
                  <div className="text-lg font-bold">95%</div>
                  <div className="text-xs opacity-80">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-kerala-gold rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-kerala-navy" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-time Language Detection</h3>
                <p className="text-white/80">Automatically detects and responds in the customer's preferred language, including regional dialects.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-kerala-gold rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-kerala-navy" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Contextual Understanding</h3>
                <p className="text-white/80">AI understands complex queries, emotions, and business context for meaningful conversations.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-kerala-gold rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-kerala-navy" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Seamless Integration</h3>
                <p className="text-white/80">Connects with existing CRM, helpdesk, and business systems through robust APIs.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-kerala-gold rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-kerala-navy" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cultural Sensitivity</h3>
                <p className="text-white/80">Trained on Kerala's cultural context and business practices for authentic interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
