
import React from 'react';
import { CheckCircle, Circle, Clock, Zap } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      title: 'Deepbook V2.0 Launch',
      description: 'Enhanced UI/UX, improved performance, and new security features.',
      features: ['New Dashboard', 'Enhanced Security', 'Mobile Optimization']
    },
    {
      quarter: 'Q2 2024',
      status: 'completed',
      title: 'DeFi Integration Expansion',
      description: 'Added support for 50+ new DeFi protocols and yield farming.',
      features: ['Yield Farming', '50+ New Protocols', 'Cross-chain Swaps']
    },
    {
      quarter: 'Q3 2024',
      status: 'in-progress',
      title: 'AI-Powered Trading Assistant',
      description: 'Introducing AI-driven market analysis and trading recommendations.',
      features: ['AI Market Analysis', 'Smart Alerts', 'Portfolio Optimization']
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      title: 'Social Trading Platform',
      description: 'Connect with other traders, share strategies, and copy successful trades.',
      features: ['Social Features', 'Copy Trading', 'Strategy Marketplace']
    },
    {
      quarter: 'Q1 2025',
      status: 'planned',
      title: 'Mobile App Release',
      description: 'Native mobile applications for iOS and Android with full feature parity.',
      features: ['iOS App', 'Android App', 'Biometric Security']
    },
    {
      quarter: 'Q2 2025',
      status: 'planned',
      title: 'Institutional Features',
      description: 'Advanced tools and features designed for institutional investors.',
      features: ['Institutional Dashboard', 'Advanced Analytics', 'White-label Solutions']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-400" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-yellow-400" />;
      default:
        return <Circle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-400 to-emerald-500';
      case 'in-progress':
        return 'from-yellow-400 to-orange-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what we've accomplished and what's coming next. We're constantly innovating to bring you the best Web3 experience.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500 hidden lg:block"></div>

          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-900 rounded-full border-4 border-cyan-400 items-center justify-center z-10">
                  {getStatusIcon(item.status)}
                </div>

                {/* Content Card */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getStatusColor(item.status)} text-white text-sm font-semibold`}>
                        {item.quarter}
                      </div>
                      <div className="lg:hidden">
                        {getStatusIcon(item.status)}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full border border-cyan-400/30">
            <Zap className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Stay updated with our progress</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
