
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'DeFi Trader',
      image: 'AC',
      rating: 5,
      text: 'Deepbook has completely transformed how I interact with DeFi protocols. The speed and security are unmatched.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Sarah Kim',
      role: 'Crypto Investor',
      image: 'SK',
      rating: 5,
      text: 'Finally, a browser that understands crypto users. The built-in portfolio tracking is a game-changer.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Web3 Developer',
      image: 'MR',
      rating: 5,
      text: 'As a developer, I appreciate the seamless dApp integration and the robust security features.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Emma Thompson',
      role: 'NFT Collector',
      image: 'ET',
      rating: 5,
      text: 'The NFT marketplace integration is phenomenal. I can browse and trade without switching platforms.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'David Park',
      role: 'Blockchain Analyst',
      image: 'DP',
      rating: 5,
      text: 'The real-time analytics and market data features have made my research so much more efficient.',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Lisa Wang',
      role: 'Crypto Journalist',
      image: 'LW',
      rating: 5,
      text: 'Deepbook makes covering the crypto space easier with its comprehensive tools and fast performance.',
      gradient: 'from-rose-400 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Users Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their crypto experience with Deepbook.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-cyan-400 mb-4 opacity-60" />
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold">{testimonial.image}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
