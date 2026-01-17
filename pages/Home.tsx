
import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { Language } from '../types';
import { ShieldCheck, Zap, Lock, ArrowRight, Download, Settings } from 'lucide-react';

const Home = ({ lang, theme }: { lang: Language, theme: string }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className={`py-24 md:py-32 px-4 border-b ${isDark ? 'bg-black border-white/20' : 'bg-white border-black'}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`inline-block px-3 py-1 mb-8 text-[10px] font-black uppercase tracking-[0.3em] border-2 ${isDark ? 'border-white text-white' : 'border-black text-black'}`}>
            {lang === 'en' ? 'Digital Rights' : 'حقوق دیجیتال'}
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
            {t.home.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-70 leading-relaxed font-medium">
            {t.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/download" 
              className={`px-10 py-5 font-black text-sm uppercase tracking-widest border-2 transition-all active:scale-95 flex items-center justify-center gap-2 ${isDark ? 'bg-white text-black border-white hover:bg-black hover:text-white' : 'bg-black text-white border-black hover:bg-white hover:text-black'}`}
            >
              <Download size={18} />
              {t.home.ctaDownload}
            </Link>
            <Link 
              to="/download" 
              className={`px-10 py-5 font-black text-sm uppercase tracking-widest border-2 transition-all active:scale-95 flex items-center justify-center gap-2 ${isDark ? 'bg-black text-white border-white hover:bg-white hover:text-black' : 'bg-white text-black border-black hover:bg-black hover:text-white'}`}
            >
              <Settings size={18} />
              {t.home.ctaConfig}
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className={`py-24 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0 border-2 border-current">
            <div className="p-10 border-b md:border-b-0 md:border-r border-current group hover:bg-black hover:text-white transition-colors duration-300 dark:hover:bg-white dark:hover:text-black">
              <div className="mb-10">
                <Zap size={32} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight italic">Why WireGuard?</h3>
              <p className="text-sm leading-relaxed opacity-70 font-medium">
                {t.home.whyWireGuard}
              </p>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-current group hover:bg-black hover:text-white transition-colors duration-300 dark:hover:bg-white dark:hover:text-black">
              <div className="mb-10">
                <ShieldCheck size={32} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight italic">{t.home.privacyTitle}</h3>
              <p className="text-sm leading-relaxed opacity-70 font-medium">
                {t.home.privacyText}
              </p>
            </div>
            <div className="p-10 group hover:bg-black hover:text-white transition-colors duration-300 dark:hover:bg-white dark:hover:text-black">
              <div className="mb-10">
                <Lock size={32} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight italic">No Tracking</h3>
              <p className="text-sm leading-relaxed opacity-70 font-medium">
                We believe in true privacy. Our servers do not track source IPs, traffic destination, or packet contents. Zero storage, zero trace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solidarity Inverted Section */}
      <section className={`py-24 px-4 border-y ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase italic">
            {lang === 'fa' ? 'ما در کنار شما هستیم' : 'WE STAND WITH YOU'}
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-80 leading-relaxed font-medium">
            {lang === 'fa' ? 'دسترسی آزاد به اطلاعات حق هر انسانی است. پروژه آزاد وی‌پی‌ان با هدف تامین اتصال پایدار برای مردم ایران ایجاد شده است.' : 'Open access to information is a human right. Azad VPN is dedicated to providing stable connections for the people of Iran.'}
          </p>
          <Link to="/solidarity" className={`inline-flex items-center gap-3 font-black text-xs uppercase tracking-widest pb-2 border-b-4 ${isDark ? 'border-black' : 'border-white'} hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform`}>
            {lang === 'fa' ? 'درباره پروژه ما' : 'DISCOVER OUR MISSION'}
            <ArrowRight size={20} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
