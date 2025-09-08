
import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'net' | 'particles' | 'waves' | 'geometric';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = 'net', className = '' }) => {
  const renderVariant = () => {
    switch (variant) {
      case 'net':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated dots */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#gradient)" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        );
      
      case 'particles':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-float"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${6 + Math.random() * 6}s`
                }}
              />
            ))}
          </div>
        );
      
      case 'waves':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                <path
                  d="M0,300 C200,250 400,350 600,300 C800,250 1000,350 1200,300 L1200,600 L0,600 Z"
                  fill="url(#waveGradient)"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        );
      
      case 'geometric':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-yellow-400/20 animate-float"
                style={{
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`pointer-events-none ${className}`}>
      {renderVariant()}
    </div>
  );
};

export default AnimatedBackground;
