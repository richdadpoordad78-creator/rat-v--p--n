
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Heart, Globe, Users, Shield } from 'lucide-react';

const Solidarity = ({ lang, theme }: { lang: Language, theme: string }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  return (
    <div className="animate-in fade-in duration-700">
      <section className={`py-32 px-4 text-center border-b-2 border-current ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="max-w-4xl mx-auto">
          <Heart className="mx-auto mb-10 animate-pulse" size={64} fill="currentColor" />
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic leading-none">{t.solidarity.title}</h1>
          <p className="text-xl md:text-3xl font-medium leading-relaxed opacity-80 mb-16 italic max-w-3xl mx-auto">
            "{t.solidarity.message}"
          </p>
          <div className={`inline-block border-4 border-current px-12 py-6`}>
            <span className="text-3xl md:text-5xl font-black tracking-[0.2em] uppercase">{t.solidarity.slogan}</span>
          </div>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tight">Our Core Principles</h2>
            <div className="space-y-12">
              {[
                { 
                  icon: <Globe />, 
                  title: 'Neutral & Non-Political', 
                  text: 'We do not represent any political party. We represent the fundamental right to information for all people, regardless of geography.' 
                },
                { 
                  icon: <Shield />, 
                  title: 'Open Source Roots', 
                  text: 'By using WireGuard, we rely on peer-reviewed technology that ensures transparency. No hidden backdoors, no closed-source secrets.' 
                },
                { 
                  icon: <Users />, 
                  title: 'Collective Action', 
                  text: 'This service is maintained by volunteers who believe a borderless internet is the key to a more dignified world.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className={`w-16 h-16 border-2 border-current flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors`}>
                    {/* Fix: cast element to React.ReactElement<any> to allow dynamic prop injection via cloneElement */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32, strokeWidth: 2.5 })}
                  </div>
                  <div>
                    <h3 className="font-black text-2xl mb-3 uppercase tracking-tight italic">{item.title}</h3>
                    <p className="text-base opacity-60 font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-4 border-2 border-current">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" 
              alt="Unity" 
              className="grayscale brightness-50 contrast-125 transition-all duration-700 hover:brightness-100 hover:contrast-100"
            />
            <div className="absolute inset-0 border-8 border-white/10 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solidarity;
