
import React from 'react';
import { Bot, Target, BarChart3, Shield, Zap, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from './AnimatedBackground';

const AITrading = () => {
  const tradingFeatures = [
    {
      icon: Bot,
      title: 'Smart Trading Bots',
      description: 'AI-powered bots that execute trades based on market analysis and your risk preferences.',
      stats: '89% Win Rate',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Target,
      title: 'Precision Entry/Exit',
      description: 'Machine learning algorithms identify optimal entry and exit points for maximum profit.',
      stats: '24/7 Monitoring',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Optimization',
      description: 'Dynamic rebalancing and diversification strategies powered by advanced AI models.',
      stats: '+127% Avg Returns',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  const aiMetrics = [
    { label: 'Total Trades Executed', value: '2.4M+', icon: Zap },
    { label: 'Average Profit Margin', value: '34.7%', icon: Trophy },
    { label: 'Risk-Adjusted Returns', value: '8.9x', icon: Shield },
    { label: 'Active AI Strategies', value: '150+', icon: Bot }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <AnimatedBackground variant="geometric" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Trading
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Intelligence</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate your crypto trading and maximize your returns with data-driven strategies.
          </p>
        </div>

        {/* AI Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-blue-700/30 rounded-xl backdrop-blur-sm border border-cyan-400/40 hover:border-cyan-300/60 transition-all duration-300 shadow-lg shadow-cyan-500/10">
                <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-cyan-200 text-sm">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trading Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tradingFeatures.map((feature, index) => {
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
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-cyan-400/20 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-400/30">
                    {feature.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Trading Interface Preview */}
        <div className="bg-gradient-to-br  p-8 rounded-2xl backdrop-blur-sm border  shadow-lg shadow-cyan-500/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Advanced AI Dashboard</h3>
            <p className="text-cyan-100">Monitor your AI trading strategies in real-time with comprehensive analytics</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-700/40 p-6 rounded-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Strategy Alpha</span>
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">+42.7%</div>
              <div className="text-cyan-200 text-sm">30-day performance</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-700/40 p-6 rounded-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">DeFi Arbitrage</span>
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">+28.3%</div>
              <div className="text-cyan-200 text-sm">30-day performance</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-700/40 p-6 rounded-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Trend Following</span>
              </div>
              <div className="text-2xl font-bold text-purple-400 mb-2">+35.1%</div>
              <div className="text-cyan-200 text-sm">30-day performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrading;
