
import React from 'react';
import { MOCK_ANNOUNCEMENTS } from '../constants';
import { ShieldAlert, Info, AlertTriangle, MessageSquare, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

const Announcements = ({ lang, theme }: { lang: Language, theme: string }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  return (
    <div className="max-w-4xl mx-auto py-20 px-4 animate-in fade-in">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter leading-none">{t.nav.announcements}</h1>
        <p className="text-xl opacity-60 font-medium">Real-time network intelligence and emergency status updates.</p>
      </div>

      <div className="space-y-0 border-2 border-current divide-y-2 divide-current">
        {MOCK_ANNOUNCEMENTS.map((post) => (
          <div key={post.id} className="p-10 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className={`w-14 h-14 border-2 border-current flex items-center justify-center ${post.type === 'urgent' ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : ''}`}>
                  {post.type === 'urgent' ? <AlertTriangle size={24} strokeWidth={3} /> : 
                   post.type === 'warning' ? <ShieldAlert size={24} strokeWidth={2} /> : <Info size={24} strokeWidth={2} />}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 border border-current ${post.type === 'urgent' ? 'opacity-100' : 'opacity-40'}`}>{post.type}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{post.date}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">{post.title}</h3>
                <p className="text-base leading-relaxed opacity-70 font-medium">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-20 p-10 border-4 border-current flex flex-col md:flex-row items-center justify-between gap-10 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="flex items-center gap-6">
          <MessageSquare size={40} strokeWidth={2.5} className="flex-shrink-0" />
          <div>
            <h4 className="text-2xl font-black uppercase italic tracking-tight mb-2">TELEGRAM FEED</h4>
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Instant alerts for when seconds matter.</p>
          </div>
        </div>
        <a 
          href="https://t.me/+UA0_GTieAEIzYzk1" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`px-10 py-5 font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3 ${isDark ? 'bg-black text-white hover:translate-x-2' : 'bg-white text-black hover:translate-x-2'}`}
        >
          Join Channel
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default Announcements;
