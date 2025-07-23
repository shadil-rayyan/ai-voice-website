import { Mic, Zap, Shield } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="features" className="py-20 bg-kerala-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-kerala-light mb-6">
            Customer Service Is <span className="text-kerala-gold">Broken</span>
          </h2>
          <p className="text-xl text-kerala-light/80 max-w-3xl mx-auto">
            Traditional call centers struggle with high costs, language barriers, and inconsistent quality. 
            Kerala businesses deserve better.
          </p>
        </div>
        
        {/* Problem Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">₹2.5L</div>
            <div className="text-kerala-light/80">Monthly cost per agent</div>
          </div>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">8 min</div>
            <div className="text-kerala-light/80">Average wait time</div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">42%</div>
            <div className="text-kerala-light/80">Customer satisfaction</div>
          </div>
        </div>
        
        {/* Solution */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-kerala-light mb-6">
            Our <span className="text-kerala-mint">AI Solution</span>
          </h2>
          <p className="text-xl text-kerala-light/80 max-w-3xl mx-auto">
            VoiceKerala AI provides intelligent, multilingual voice assistants that understand 
            Malayalam, Tamil, Telugu, Hindi, and English with native-level fluency.
          </p>
        </div>
        
        {/* Solution Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-kerala-teal/20 border border-kerala-mint/30 rounded-xl p-8 text-center group hover:bg-kerala-teal/30 transition-colors">
            <div className="w-16 h-16 bg-kerala-mint/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kerala-mint/30 transition-colors">
              <Mic className="w-8 h-8 text-kerala-mint" />
            </div>
            <h3 className="text-xl font-semibold text-kerala-light mb-4">Natural Language Processing</h3>
            <p className="text-kerala-light/70">Advanced AI understands context, emotions, and cultural nuances in multiple Indian languages.</p>
          </div>
          
          <div className="bg-kerala-teal/20 border border-kerala-mint/30 rounded-xl p-8 text-center group hover:bg-kerala-teal/30 transition-colors">
            <div className="w-16 h-16 bg-kerala-mint/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kerala-mint/30 transition-colors">
              <Zap className="w-8 h-8 text-kerala-mint" />
            </div>
            <h3 className="text-xl font-semibold text-kerala-light mb-4">Lightning Fast Response</h3>
            <p className="text-kerala-light/70">Sub-second response times with 24/7 availability and zero wait times for customers.</p>
          </div>
          
          <div className="bg-kerala-teal/20 border border-kerala-mint/30 rounded-xl p-8 text-center group hover:bg-kerala-teal/30 transition-colors">
            <div className="w-16 h-16 bg-kerala-mint/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kerala-mint/30 transition-colors">
              <Shield className="w-8 h-8 text-kerala-mint" />
            </div>
            <h3 className="text-xl font-semibold text-kerala-light mb-4">Enterprise Security</h3>
            <p className="text-kerala-light/70">Bank-grade encryption and compliance with Indian data protection regulations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
