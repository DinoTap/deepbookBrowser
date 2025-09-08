
import React from 'react';
import { Search, Brain, Zap, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedBackground from './AnimatedBackground';

const AISearch = () => {
  const searchFeatures = [
    {
      icon: Brain,
      title: 'Smart Project Discovery',
      description: 'AI-powered analysis of thousands of crypto projects to find hidden gems and trending opportunities.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Market Sentiment Analysis',
      description: 'Real-time sentiment tracking across social media, news, and community discussions.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Star,
      title: 'Risk Assessment',
      description: 'Automated risk scoring based on tokenomics, team background, and project fundamentals.',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  const trendingProjects = [
    { name: 'SolanaAI', category: 'AI Infrastructure', score: 95, change: '+12%' },
    { name: 'CryptoGPT', category: 'AI Trading', score: 89, change: '+8%' },
    { name: 'DeepFi', category: 'DeFi AI', score: 92, change: '+15%' },
    { name: 'NeuralChain', category: 'AI Blockchain', score: 87, change: '+6%' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <AnimatedBackground variant="net" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Crypto Discovery</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Let our advanced AI help you discover the next big crypto projects before they go mainstream. Get insights that traditional research can't provide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Search Interface */}
          <div>
            <div className="bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-blue-700/30 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/40 shadow-lg shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Smart Search</h3>
              </div>
              
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search for AI + DeFi projects with high growth potential..."
                  className="w-full p-4 bg-cyan-600/20 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-200 focus:border-cyan-300 focus:outline-none backdrop-blur-sm"
                />
                <Button className="absolute right-2 top-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg">
                  <Brain className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm text-cyan-200 mb-3">Trending AI-powered searches:</div>
                {['AI trading bots with proven ROI', 'Emerging GameFi projects', 'Cross-chain AI protocols'].map((search, index) => (
                  <div key={index} className="flex items-center gap-2 text-cyan-300 cursor-pointer hover:text-cyan-200 transition-colors">
                    <Search className="h-4 w-4" />
                    <span className="text-sm">{search}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            {searchFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-to-br  transition-all duration-300 shadow-lg shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-cyan-100">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trending Projects */}
        <div className="bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-blue-700/30 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/40 shadow-lg shadow-cyan-500/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">AI-Recommended Projects</h3>
            <Button variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900">
              View All <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-600/30 to-blue-700/40 p-4 rounded-xl border border-cyan-400/30 hover:border-cyan-300/60 transition-all cursor-pointer shadow-lg shadow-cyan-500/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{project.name}</span>
                  <span className="text-green-400 text-sm font-medium">{project.change}</span>
                </div>
                <div className="text-cyan-200 text-sm mb-3">{project.category}</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-cyan-200">AI Score:</div>
                  <div className="text-cyan-300 font-bold">{project.score}/100</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISearch;
