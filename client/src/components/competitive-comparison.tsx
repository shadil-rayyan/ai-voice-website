import { CheckCircle, X, Minus, Star } from "lucide-react";

export default function CompetitiveComparison() {
  return (
    <section className="py-20 bg-kerala-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Why Choose <span className="text-kerala-gold">VoiceKerala AI</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            See how we compare against traditional solutions and international competitors.
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-kerala-gold font-semibold">VoiceKerala AI</th>
                  <th className="px-6 py-4 text-center text-white/70 font-semibold">Traditional Call Centers</th>
                  <th className="px-6 py-4 text-center text-white/70 font-semibold">International AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Malayalam Support</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Minus className="w-6 h-6 text-yellow-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-6 h-6 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">24/7 Availability</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-6 h-6 text-red-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Cost per Call</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">₹2</td>
                  <td className="px-6 py-4 text-center text-red-400 font-semibold">₹45</td>
                  <td className="px-6 py-4 text-center text-yellow-400 font-semibold">₹15</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Cultural Context</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Minus className="w-6 h-6 text-yellow-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-6 h-6 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Data Residency</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">India</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">India</td>
                  <td className="px-6 py-4 text-center text-red-400 font-semibold">Global</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Key Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-kerala-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-kerala-navy" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">95% Cost Reduction</h3>
            <p className="text-white/80">Dramatically reduce operational costs compared to traditional call centers.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-kerala-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-kerala-navy" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Native Language AI</h3>
            <p className="text-white/80">First AI platform built specifically for Malayalam and South Indian languages.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-kerala-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-kerala-navy" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cultural Intelligence</h3>
            <p className="text-white/80">Understands Kerala's business culture, festivals, and customer preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
