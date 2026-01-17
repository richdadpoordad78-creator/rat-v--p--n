
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Cinematic Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* The "Blood" Heartbeat - Dual Pulse System */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Slow Breath */}
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-red-950/20 blur-[150px] animate-pulse" />
        {/* Sharp Heartbeat */}
        <div className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-red-600/10 blur-[80px] animate-heartbeat" />
      </div>

      {/* Rising Embers & Ash */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-orange-500/60 rounded-full animate-ember"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              bottom: '-5%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 4 + 's',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Slogan Container */}
      <div className="relative text-center px-4 z-20">
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-tight select-none flex flex-col items-center">
          <span className="block text-transparent bg-clip-text bg-gradient-to-t from-red-600 via-orange-500 to-white animate-visceral-fire">
            زن
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-t from-red-600 via-orange-400 to-white animate-visceral-fire [animation-delay:0.2s]">
            زندگی
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-t from-red-700 via-orange-500 to-white animate-visceral-fire [animation-delay:0.4s]">
            آزادی
          </span>
        </h1>
        
        {/* Subtle English Subtitle - The Hope */}
        <div className="mt-16 relative">
            <div className="absolute inset-0 blur-lg bg-white/20 animate-pulse"></div>
            <div className="relative text-[10px] md:text-sm font-black uppercase tracking-[0.8em] text-white/60 animate-glow-text">
                Woman Life Freedom
            </div>
        </div>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          10% { transform: scale(1.1); opacity: 0.3; }
          20% { transform: scale(1.05); opacity: 0.2; }
          30% { transform: scale(1.2); opacity: 0.4; }
        }
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes visceral-fire {
          0%, 100% { 
            background-position: 50% 0%; 
            filter: brightness(1) contrast(1.2);
            transform: scale(1) translateY(0);
            text-shadow: 0 0 10px rgba(255,0,0,0.2);
          }
          25% {
            transform: scale(1.02) skewX(-1deg);
          }
          50% { 
            background-position: 50% 100%; 
            filter: brightness(1.4) contrast(1.5) blur(0.5px);
            transform: scale(1.05) translateY(-5px);
            text-shadow: 0 0 30px rgba(255,69,0,0.8), 0 0 60px rgba(255,0,0,0.4);
          }
          75% {
            transform: scale(1.02) skewX(1deg);
          }
        }
        .animate-visceral-fire {
          background-size: 100% 200%;
          animation: visceral-fire 2.5s ease-in-out infinite;
        }

        @keyframes ember {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-110vh) translateX(30px); opacity: 0; }
        }
        .animate-ember {
          animation: ember linear infinite;
        }

        @keyframes glow-text {
          0%, 100% { opacity: 0.4; letter-spacing: 0.8em; }
          50% { opacity: 1; letter-spacing: 0.9em; filter: drop-shadow(0 0 10px white); }
        }
        .animate-glow-text {
          animation: glow-text 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
