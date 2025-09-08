
import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const Stats = () => {
  const stats = [
    { value: '$2.5B+', label: 'Total Volume Traded', gradient: 'from-cyan-400 to-blue-500' },
    { value: '150+', label: 'Supported Protocols', gradient: 'from-purple-400 to-pink-500' },
    { value: '200+', label: 'Active Users', gradient: 'from-green-400 to-emerald-500' },
    { value: '99.9%', label: 'Uptime Guarantee', gradient: 'from-yellow-400 to-orange-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
      <AnimatedBackground variant="net" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
