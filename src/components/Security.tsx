
import React from 'react';
import { Shield, Lock, Eye, FileCheck, Key, Zap } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Military-Grade Encryption',
      description: 'AES-256 encryption protects all your data and private keys with bank-level security.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description: 'We never store your private keys or personal data. Everything stays on your device.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'Built-in VPN and ad blocking ensure your browsing stays private and secure.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: FileCheck,
      title: 'Smart Contract Audits',
      description: 'All interactions are verified through audited smart contracts for maximum safety.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Key,
      title: 'Hardware Wallet Support',
      description: 'Native integration with Ledger, Trezor, and other major hardware wallets.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Real-time Threat Detection',
      description: 'AI-powered protection against phishing, malware, and malicious dApps.',
      color: 'from-rose-400 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <AnimatedBackground variant="waves" />
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Security
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> First</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Your assets and privacy are our top priority. Deepbook is built with enterprise-grade security from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-blue-700/30 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/40 hover:border-cyan-300/60 transition-all duration-500 hover:scale-105 shadow-lg shadow-cyan-500/10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-cyan-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security Stats */}
        <div className="bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-blue-700/30 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400/40 shadow-lg shadow-cyan-500/10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                0
              </div>
              <div className="text-cyan-100">Security Breaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-cyan-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                $1B+
              </div>
              <div className="text-cyan-100">Assets Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-cyan-100">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
