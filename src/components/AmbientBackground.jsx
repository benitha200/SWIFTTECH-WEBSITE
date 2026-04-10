import React from 'react';

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-brand-accent/5 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '-4s' }}></div>

      {/* Floating Squares */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`sq-${i}`}
          className="bg-square animate-float-slow hidden md:block"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * -20}s`,
            opacity: 0.1 + Math.random() * 0.1,
            borderRadius: '15%',
          }}
        />
      ))}

      {/* Floating Dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="bg-dot animate-drift"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDuration: `${Math.random() * 15 + 15}s`,
            animationDelay: `${Math.random() * -30}s`,
            opacity: 0.2 + Math.random() * 0.3,
            backgroundColor: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#0ea5e9' : 'white',
          }}
        />
      ))}

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-150"></div>
    </div>
  );
};

export default AmbientBackground;
