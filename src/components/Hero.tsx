
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-400 transform rotate-45 animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-float delay-500 opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-pink-400 transform rotate-12 animate-float delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-yellow-400 transform rotate-45 animate-float delay-1500 opacity-60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 mb-6">
              <span className="text-cyan-400 text-sm font-medium">🚀 Next-Gen Crypto Browser</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Browse the
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Future</span>
              <br />
              of Crypto
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience seamless DeFi browsing with Deepbook - the fastest, most secure crypto browser built for the decentralized web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={() => window.open('/search', '_blank')} className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
                {/* <Download className="mr-2 h-5 w-5" /> */}
                Browse Now
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-6 text-lg rounded-xl backdrop-blur-sm bg-white/5">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">DeFi Protocols</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Browser Mockup */}
          <div className="relative">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Browser Window */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4 border-b border-gray-600">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-600 rounded-lg px-4 py-2 flex items-center gap-3">
                    <img src="/lovable-uploads/32b93810-6223-4b36-aa9b-5da3e562b334.png" alt="Deepbook" className="w-6 h-6" />
                    <span className="text-gray-300 text-sm">deepbook.crypto/dashboard</span>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="p-6 h-96 bg-gradient-to-br from-slate-900 to-blue-900">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4 border border-cyan-500/30">
                      <div className="text-cyan-400 text-sm mb-1">Portfolio Value</div>
                      <div className="text-white text-2xl font-bold">$45,290</div>
                      <div className="text-green-400 text-xs">+12.5%</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                      <div className="text-purple-400 text-sm mb-1">Active Trades</div>
                      <div className="text-white text-2xl font-bold">8</div>
                      <div className="text-purple-400 text-xs">Live</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">DeFi Protocol {i}</div>
                            <div className="text-gray-400 text-xs">Connected</div>
                          </div>
                          <div className="text-green-400 text-sm">●</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements around browser */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-4 shadow-lg animate-bounce">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">₿</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-4 shadow-lg animate-bounce delay-500">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">Ξ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
