import React from 'react';

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Background Layer */}
      <div className="absolute inset-0 bg-[#020617]"></div>

      {/* Mesh Gradients - Improved Visibility */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-primary/20 rounded-full blur-[120px] animate-float-slow opacity-60"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-brand-secondary/20 rounded-full blur-[120px] animate-float-slow opacity-60" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[100px] animate-float-slow opacity-40" style={{ animationDelay: '-4s' }}></div>

      {/* Floating Circles (NEW) */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute rounded-full border border-white/10 animate-float-slow opacity-20"
          style={{
            width: `${Math.random() * 150 + 100}px`,
            height: `${Math.random() * 150 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 12 + 15}s`,
            animationDelay: `${Math.random() * -10}s`,
            background: `radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
      ))}

      {/* Floating Squares - Improved */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`sq-${i}`}
          className="bg-square animate-float-slow hidden md:block"
          style={{
            width: `${Math.random() * 80 + 40}px`,
            height: `${Math.random() * 80 + 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * -20}s`,
            opacity: 0.15 + Math.random() * 0.1,
            borderRadius: '20%',
            transform: `rotate(${Math.random() * 45}deg)`,
          }}
        />
      ))}

      {/* Floating Dots - Multi-colored */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="bg-dot animate-drift"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 3}px`,
            height: `${Math.random() * 5 + 3}px`,
            animationDuration: `${Math.random() * 15 + 15}s`,
            animationDelay: `${Math.random() * -30}s`,
            opacity: 0.4 + Math.random() * 0.3,
            backgroundColor: i % 4 === 0 ? '#38bdf8' : i % 4 === 1 ? '#0ea5e9' : i % 4 === 2 ? '#f59e0b' : 'white',
          }}
        />
      ))}

      {/* Glassmorphic Overlay for blending */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]"></div>
    </div>
  );
};

export default AmbientBackground;
