
import React from 'react';
import { Shield, Lock, Scale, AlertCircle } from 'lucide-react';

const Legal = ({ lang, theme }: { lang: string, theme: string }) => {
  const isDark = theme === 'dark';
  return (
    <div className="max-w-4xl mx-auto py-24 px-4 animate-in fade-in">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter leading-none">LEGAL & TRUST</h1>
        <p className="text-xl opacity-60 font-medium">Transparency is the foundation of our security architecture.</p>
      </div>
      
      <div className="space-y-20">
        <section className="relative">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 border-2 border-current flex items-center justify-center">
              <Lock size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Privacy Policy</h2>
          </div>
          <div className="prose prose-2xl prose-slate dark:prose-invert max-w-none space-y-8 font-medium">
            <p className="text-2xl font-black italic border-l-8 border-current pl-8 mb-12">
              "WE DO NOT COLLECT DATA. IF WE DO NOT HAVE IT, WE CANNOT LOSE IT."
            </p>
            <p className="opacity-70">To ensure absolute privacy, our infrastructure follows a strict no-logs policy:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {['NO BROWSING HISTORY', 'NO DNS QUERIES', 'NO SOURCE IPS', 'NO SESSION LOGS'].map((txt) => (
                <li key={txt} className="p-6 border-2 border-current font-black text-xs uppercase tracking-[0.2em] flex items-center gap-4">
                  <div className="w-2 h-2 bg-current"></div>
                  {txt}
                </li>
              ))}
            </ul>
            <p className="opacity-70">Technical metrics are stored in memory only and contain zero user-identifiable metadata.</p>
          </div>
        </section>

        <section className="border-t-2 border-current pt-20">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 border-2 border-current flex items-center justify-center">
              <Scale size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Terms of Service</h2>
          </div>
          <div className="space-y-8 opacity-70 font-medium">
            <p>Access is provided freely under these terms:</p>
            <div className="grid md:grid-cols-2 gap-0 border-2 border-current">
              <div className="p-10 border-b md:border-b-0 md:border-r border-current">
                <h4 className="font-black text-lg uppercase tracking-widest mb-4 italic">Acceptable Use</h4>
                <p className="text-sm leading-relaxed">Personal security and information access only. Share the bandwidth, do not abuse the gateway.</p>
              </div>
              <div className={`p-10 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <h4 className="font-black text-lg uppercase tracking-widest mb-4 italic">Prohibited</h4>
                <p className="text-sm leading-relaxed">Spam, botnets, and illegal exploitation. We maintain the right to revoke access to abusive configurations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`p-10 border-4 border-current ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <div className="flex items-center gap-4 mb-6">
            <AlertCircle size={28} strokeWidth={3} />
            <h2 className="text-2xl font-black uppercase italic tracking-tight leading-none">DISCLAIMER</h2>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest leading-loose opacity-90 italic">
            VPN TECHNOLOGY IS A TOOL FOR PRIVACY, NOT A GUARANTEE OF ANONYMITY. ALWAYS USE SECONDARY ENCRYPTION FOR SENSITIVE COMMUNICATIONS. SERVICE PROVIDED "AS IS" WITHOUT WARRANTY.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
