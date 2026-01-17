
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, ChevronUp, MessageCircle, Mail, HelpCircle } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../types';

const AccordionItem: React.FC<{ q: string; a: string; isDark: boolean }> = ({ q, a, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 border-current last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left rtl:text-right font-black text-xl uppercase tracking-tight group"
      >
        <span className="group-hover:translate-x-2 transition-transform italic">{q}</span>
        {isOpen ? <ChevronUp size={24} strokeWidth={3} /> : <ChevronDown size={24} strokeWidth={3} />}
      </button>
      {isOpen && (
        <div className="pb-8 text-lg opacity-60 font-medium leading-relaxed animate-in fade-in slide-in-from-top-2">
          {a}
        </div>
      )}
    </div>
  );
};

const Support = ({ lang, theme }: { lang: Language, theme: string }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter leading-none">{t.nav.support}</h1>
        <p className="text-xl opacity-60 font-medium max-w-2xl">Documentation and technical assistance for a free internet.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border-2 border-current mb-24">
        {[
          { label: 'Live Chat', icon: <MessageCircle />, sub: '24/7 Telegram', link: 'https://t.me/+UA0_GTieAEIzYzk1' },
          { label: 'Email Help', icon: <Mail />, sub: '12h Response', link: '#' },
          { label: 'Technical Docs', icon: <HelpCircle />, sub: 'Self-help', link: '#' }
        ].map((item, i) => (
          <div key={i} className={`p-10 text-center border-b md:border-b-0 md:border-r last:border-0 border-current group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors`}>
            <div className="w-12 h-12 border-2 border-current flex items-center justify-center mx-auto mb-8">
              {/* Fix: cast element to React.ReactElement<any> to allow dynamic prop injection via cloneElement */}
              {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 2.5 })}
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-2">{item.label}</h3>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-6">{item.sub}</p>
            <a 
              href={item.link} 
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="inline-block pb-1 border-b-2 border-current text-xs font-black uppercase tracking-widest hover:translate-y-[-2px] transition-transform"
            >
              Get Help
            </a>
          </div>
        ))}
      </div>

      <div className="border-t-4 border-current pt-16">
        <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic tracking-tighter">COMMON PROBLEMS</h2>
        <div className="divide-y-2 divide-current">
          {FAQ_ITEMS.map((item, idx) => (
            <AccordionItem key={idx} q={item.q} a={item.a} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
