
import React from 'react';
import { Shield, Zap, Globe, Lock, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from './AnimatedBackground';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Advanced encryption and security protocols protect your crypto assets and private keys.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with instant DeFi transactions and real-time market data.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Web3 Native',
      description: 'Built from the ground up for the decentralized web with native dApp support.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your browsing data stays private with built-in VPN and tracking protection.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Advanced portfolio tracking and market analysis tools built right in.',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join millions of crypto enthusiasts in the fastest-growing Web3 community.',
      gradient: 'from-rose-400 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <AnimatedBackground variant="particles" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Deepbook</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Experience the next generation of crypto browsing with features designed for the modern DeFi trader and Web3 enthusiast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group bg-gradient-to-br transition-all duration-500 hover:scale-105 backdrop-blur-sm shadow-lg shadow-cyan-500/10">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-cyan-100 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
