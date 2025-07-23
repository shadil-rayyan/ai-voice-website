import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function MarketOpportunity() {
  const [currentYear, setCurrentYear] = useState(2024);
  
  const marketData = {
    2024: { value: 2.1, growth: '+45%' },
    2025: { value: 3.8, growth: '+81%' },
    2026: { value: 6.2, growth: '+63%' },
    2027: { value: 9.8, growth: '+58%' },
    2028: { value: 14.5, growth: '+48%' }
  };

  return (
    <section id="market" className="py-20 bg-kerala-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-kerala-light mb-6">
            Massive Market <span className="text-kerala-gold">Opportunity</span>
          </h2>
          <p className="text-xl text-kerala-light/80 max-w-3xl mx-auto">
            The Indian voice AI market is experiencing unprecedented growth, 
            with Kerala positioned as a key technology hub.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Chart */}
          <div className="bg-kerala-teal/10 border border-kerala-mint/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-kerala-light mb-6 text-center">Indian Voice AI Market Size</h3>
            
            {/* Chart Visualization */}
            <div className="space-y-4 mb-6">
              {Object.entries(marketData).map(([year, data]) => (
                <div 
                  key={year}
                  className="flex items-center space-x-4 cursor-pointer" 
                  onClick={() => setCurrentYear(parseInt(year))}
                >
                  <div className="text-sm font-medium text-kerala-light/70 w-12">{year}</div>
                  <div className="flex-1">
                    <div className="bg-kerala-teal/20 rounded-full h-6 relative overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          currentYear == parseInt(year) ? 'bg-kerala-gold' : 'bg-kerala-mint'
                        }`}
                        style={{ width: `${(data.value / 14.5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-kerala-light w-16">₹{data.value}B</div>
                  <div className="text-xs text-kerala-mint w-12">{data.growth}</div>
                </div>
              ))}
            </div>
            
            {/* Current Year Display */}
            <div className="text-center p-4 bg-kerala-gold/10 rounded-lg border border-kerala-gold/20">
              <div className="text-3xl font-bold text-kerala-gold">₹{marketData[currentYear as keyof typeof marketData].value}B</div>
              <div className="text-kerala-light/80">Market Size in {currentYear}</div>
              <div className="text-kerala-mint text-sm mt-1">Growth: {marketData[currentYear as keyof typeof marketData].growth} YoY</div>
            </div>
          </div>
          
          {/* Market Insights */}
          <div className="space-y-8">
            <div className="bg-kerala-teal/10 border border-kerala-mint/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-kerala-light mb-4">Kerala's Advantage</h3>
              <ul className="space-y-3 text-kerala-light/80">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-kerala-mint mt-0.5 flex-shrink-0" />
                  <span>Highest IT literacy rate in India (92.28%)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-kerala-mint mt-0.5 flex-shrink-0" />
                  <span>Strong English and Malayalam language base</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-kerala-mint mt-0.5 flex-shrink-0" />
                  <span>Government support for digital initiatives</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-kerala-gold/10 border border-kerala-gold/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-kerala-light mb-4">Target Industries</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-kerala-gold">Banking</div>
                  <div className="text-sm text-kerala-light/70">₹85B Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-kerala-gold">E-commerce</div>
                  <div className="text-sm text-kerala-light/70">₹62B Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-kerala-gold">Tourism</div>
                  <div className="text-sm text-kerala-light/70">₹45B Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-kerala-gold">Healthcare</div>
                  <div className="text-sm text-kerala-light/70">₹38B Market</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
