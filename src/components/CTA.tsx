
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Revolutionize</span>
            <br />
            Your Crypto Journey?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join millions of traders who've already upgraded to the future of crypto browsing. Download Deepbook today and experience Web3 like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button onClick={() => window.open('/search', '_blank')} className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
              {/* <Download className="mr-3 h-6 w-6" /> */}
            Browse Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-12 py-8 text-xl rounded-2xl backdrop-blur-sm bg-white/5">
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>No Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Instant Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
