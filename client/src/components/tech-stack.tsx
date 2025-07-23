export default function TechStack() {
  return (
    <section className="py-20 bg-kerala-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Built with <span className="text-kerala-gold">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our platform leverages the latest in AI, machine learning, and cloud technologies 
            to deliver unparalleled voice experiences.
          </p>
        </div>
        
        {/* Tech Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI & ML */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">AI & Machine Learning</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-white font-medium">TensorFlow</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-white font-medium">PyTorch</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-white font-medium">Hugging Face</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-white font-medium">BERT</div>
              </div>
            </div>
          </div>
          
          {/* Voice & Audio */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Voice & Audio Processing</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎤</div>
                <div className="text-white font-medium">Whisper ASR</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔊</div>
                <div className="text-white font-medium">WaveNet</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🌊</div>
                <div className="text-white font-medium">WebRTC</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎵</div>
                <div className="text-white font-medium">Mel-GAN</div>
              </div>
            </div>
          </div>
          
          {/* Infrastructure */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Cloud & Infrastructure</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">☁️</div>
                <div className="text-white font-medium">AWS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🐳</div>
                <div className="text-white font-medium">Docker</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-white font-medium">Kubernetes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔗</div>
                <div className="text-white font-medium">GraphQL</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-kerala-gold mb-2">99.9%</div>
            <div className="text-white/80">Uptime SLA</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-kerala-gold mb-2">&lt;200ms</div>
            <div className="text-white/80">Response Time</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-kerala-gold mb-2">ISO 27001</div>
            <div className="text-white/80">Security Certified</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-kerala-gold mb-2">GDPR</div>
            <div className="text-white/80">Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
