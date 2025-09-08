import React from 'react';
import { Shield, Users, Globe, Award, Monitor, Wallet, Network, Globe2, Code, Zap, Lock, Rocket } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, value: '2M+', label: 'Active Users' },
    { icon: Globe, value: '180+', label: 'Countries' },
    { icon: Shield, value: '99.99%', label: 'Security Score' },
    { icon: Award, value: '15+', label: 'Industry Awards' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Deepbook</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded in 2022 by a team of blockchain pioneers and security experts, Deepbook was born from a simple vision: to make Web3 accessible to everyone without compromising on security or performance.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We believe that the future of the internet is decentralized, and we're building the tools to make that future a reality. Our browser combines cutting-edge technology with intuitive design to create the ultimate Web3 experience.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                    <div className="text-gray-400 text-sm">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Crypto Browser Animation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              {/* Browser Window */}
              <div className="bg-gray-900 rounded-lg p-4 mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-300">
                    {/* deepbook:// */}
                  </div>
                  {/* <Wallet className="h-4 w-4 text-green-400 animate-pulse" /> */}
                </div>
                
                {/* Browser Content */}
                <div className="bg-gray-800 rounded-md p-4 h-40 relative overflow-hidden flex flex-col items-center justify-center">
                  {/* Deepbook Logo Centered */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <img
                      src="/icon.png"
                      alt="Deepbook Logo"
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 z-10">
                    Connect Wallet
                  </button>
                  
                  {/* Web3 Features Indicators */}
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    <Shield className="h-3 w-3 text-blue-400" />
                    <span className="text-xs text-blue-400">Secure</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Web3 Browser</h3>
                <p className="text-gray-400">Secure • Fast • Decentralized</p>
              </div>
            </div>
            
            {/* Floating blockchain elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
