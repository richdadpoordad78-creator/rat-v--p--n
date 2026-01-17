import React, { useState } from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { OS_CARDS } from '../constants';
import {
  ShieldCheck,
  QrCode,
  FileText,
  ShieldAlert,
  X
} from 'lucide-react';

const DownloadPage = ({ lang, theme }: { lang: Language; theme: string }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  const [isGenerating, setIsGenerating] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const QR_IMAGE_URL =
    'https://github.com/richdadpoordad78-creator/rat-vpn-images/blob/main/WhatsApp%20Image%202026-01-17%20at%2010.19.09%20PM.jpeg?raw=true';

  // ✅ FIXED DOWNLOAD (keeps .conf exactly)
  const triggerDownload = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch('components/RealAmericanTechnology.conf');
      const text = await response.text();

      const blob = new Blob([text], {
        type: 'application/octet-stream'
      });

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'RealAmericanTechnology.conf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Config download failed:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-4 animate-in fade-in">
      {/* STEP 1 */}
      <div className="mb-32">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`text-4xl font-black italic border-b-4 ${
                isDark ? 'border-white' : 'border-black'
              }`}
            >
              01
            </span>
            <h1 className="text-3xl font-black uppercase tracking-tight">
              {t.download.step1Title}
            </h1>
          </div>
          <p className="text-lg opacity-60 font-medium">
            {t.download.step1Sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border-2 border-current">
          {OS_CARDS.map((os) => (
            <a
              key={os.id}
              href={os.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              <div className="mb-6 scale-125">{os.icon}</div>
              <span className="font-black text-xs uppercase tracking-widest">
                {os.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* STEP 2 */}
      <div
        className={`p-8 md:p-16 border-2 ${
          isDark ? 'border-white/20' : 'border-black'
        }`}
      >
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`text-4xl font-black italic border-b-4 ${
                isDark ? 'border-white' : 'border-black'
              }`}
            >
              02
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight">
              {t.download.step2Title}
            </h2>
          </div>
          <p className="text-lg opacity-60 font-medium">
            {t.download.step2Sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* DOWNLOAD CARD */}
          <div
            className={`p-8 border-2 ${
              isDark
                ? 'border-white'
                : 'border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]'
            }`}
          >
            <div className="space-y-8">
              <div
                className={`flex gap-4 p-4 border-2 ${
                  isDark
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-black'
                }`}
              >
                <ShieldAlert size={20} />
                <p className="text-[10px] font-bold uppercase tracking-wider">
                  {t.download.securityText}
                </p>
              </div>

              <button
                onClick={triggerDownload}
                disabled={isGenerating}
                className={`w-full py-5 font-black text-xs uppercase tracking-[0.2em] border-2 flex items-center justify-center gap-2 active:scale-95 transition-all ${
                  isDark
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-black hover:bg-white hover:text-black'
                }`}
              >
                {isGenerating ? (
                  <span className="animate-pulse italic">
                    LOCATING FILE...
                  </span>
                ) : (
                  <>
                    <FileText size={18} />
                    {t.download.requestConfig}
                  </>
                )}
              </button>

              <button
                onClick={() => setShowQr(true)}
                className="w-full py-5 font-black text-xs uppercase tracking-[0.2em] border-2 border-current flex items-center justify-center gap-2 hover:bg-current hover:text-white dark:hover:text-black"
              >
                <QrCode size={18} />
                VIEW QR CODE
              </button>
            </div>
          </div>

          {/* GUIDE */}
          <div className="space-y-10">
            <h3 className="text-2xl font-black uppercase italic flex items-center gap-4">
              <ShieldCheck size={28} />
              Setup Info
            </h3>

            {[
              'Install official WireGuard app first.',
              'Click ADD inside the app.',
              'Import file or scan QR code.',
              'Connection secured.'
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div
                  className={`w-10 h-10 border-2 border-current flex items-center justify-center font-black italic ${
                    isDark ? 'bg-white text-black' : 'bg-black text-white'
                  }`}
                >
                  {i + 1}
                </div>
                <p className="text-sm font-medium uppercase opacity-70">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QR MODAL */}
      {showQr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div
            className={`relative max-w-sm w-full p-8 border-4 ${
              isDark ? 'bg-black border-white' : 'bg-white border-black'
            }`}
          >
            <button
              onClick={() => setShowQr(false)}
              className="absolute -top-12 right-0 text-white font-black text-xs flex gap-2"
            >
              CLOSE <X size={20} />
            </button>

            <img
              src={QR_IMAGE_URL}
              alt="WireGuard QR"
              className="w-full aspect-square object-contain border-2 border-black bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadPage;
