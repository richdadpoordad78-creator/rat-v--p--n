
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations } from './translations';
import { Language } from './types';
import { Menu, X, Globe, Moon, Sun, Heart, Info, Download, MessageCircle, ShieldAlert } from 'lucide-react';

// Components
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import DownloadPage from './pages/Download';
import Announcements from './pages/Announcements';
import Support from './pages/Support';
import Solidarity from './pages/Solidarity';
import Legal from './pages/Legal';

// Fix: Update setTheme and theme parameter types to be more specific ('light' | 'dark') instead of 'string'
const Header = ({ lang, setLang, theme, setTheme }: { lang: Language, setLang: (l: Language) => void, theme: 'light' | 'dark', setTheme: (t: 'light' | 'dark') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];
  const location = useLocation();

  const toggleLang = () => {
    const next = lang === 'en' ? 'fa' : 'en';
    setLang(next);
  };

  const navLinks = [
    { path: '/', label: t.nav.home, icon: <Info size={18} /> },
    { path: '/download', label: t.nav.download, icon: <Download size={18} /> },
    { path: '/announcements', label: t.nav.announcements, icon: <ShieldAlert size={18} /> },
    { path: '/support', label: t.nav.support, icon: <MessageCircle size={18} /> },
    { path: '/solidarity', label: t.nav.solidarity, icon: <Heart size={18} /> },
  ];

  const isDark = theme === 'dark';

  return (
    <nav className={`sticky top-0 z-50 transition-all border-b ${isDark ? 'bg-black border-white/20 text-white' : 'bg-white border-black text-black'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className={`w-8 h-8 flex items-center justify-center font-bold text-lg border-2 ${isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'}`}>A</div>
            <span className="text-xl font-black uppercase tracking-tighter italic">Azad VPN</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-xs uppercase font-bold tracking-widest transition-all hover:opacity-100 ${location.pathname === link.path ? 'opacity-100 underline decoration-2 underline-offset-8' : 'opacity-60'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 rtl:space-x-reverse border-l rtl:border-r pl-6 rtl:pr-6 border-current opacity-60">
               <button onClick={toggleLang} className="hover:opacity-100 transition-all flex items-center gap-1">
                <Globe size={16} />
                <span className="text-[10px] uppercase font-black">{lang}</span>
              </button>
              <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="hover:opacity-100 transition-all">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 border-2 border-transparent active:border-current transition-all">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className={`md:hidden absolute top-[65px] left-0 right-0 border-b z-50 p-6 space-y-4 animate-in fade-in slide-in-from-top-4 ${isDark ? 'bg-black border-white/20' : 'bg-white border-black'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-4 rtl:space-x-reverse p-4 border-2 border-transparent hover:border-current text-sm font-bold uppercase tracking-wider"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
          <div className="pt-4 border-t border-current/10 flex justify-between px-2">
             <button onClick={() => {setTheme(isDark ? 'light' : 'dark'); setIsOpen(false);}} className="flex items-center gap-2 py-2 text-xs font-bold uppercase tracking-widest">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
            <button onClick={() => {toggleLang(); setIsOpen(false);}} className="flex items-center gap-2 py-2 text-xs font-bold uppercase tracking-widest">
              <Globe size={16} />
              <span>{lang === 'en' ? 'FA' : 'EN'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Fix: Update theme parameter type to be more specific ('light' | 'dark')
const Footer = ({ lang, theme }: { lang: Language, theme: 'light' | 'dark' }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';
  return (
    <footer className={`py-16 px-4 border-t ${isDark ? 'bg-black border-white/10 text-white' : 'bg-white border-black text-black'}`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h3 className="font-black text-2xl mb-6 tracking-tighter uppercase italic">Azad VPN</h3>
          <p className="text-sm leading-relaxed opacity-60 max-w-md">
            Azad means Free. We provide secure WireGuard configurations for anyone who needs to stay connected. No trackers, no data, no logs. Human rights through code.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 opacity-40">{t.nav.support}</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/support" className="hover:underline underline-offset-4">FAQ</Link></li>
            <li><Link to="/announcements" className="hover:underline underline-offset-4">Updates</Link></li>
            <li><a href="https://t.me/+UA0_GTieAEIzYzk1" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Telegram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 opacity-40">{t.nav.legal}</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/legal" className="hover:underline underline-offset-4">Privacy</Link></li>
            <li><Link to="/legal" className="hover:underline underline-offset-4">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-current/10 text-[10px] font-bold uppercase tracking-widest opacity-40 text-center">
        &copy; {new Date().getFullYear()} Azad VPN Project. Built for Digital Freedom by <a href="https://realamericantechnologies.com/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2">Real American Technologies</a>.
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fa');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.className = 'bg-black text-white transition-colors duration-300';
    } else {
      document.body.className = 'bg-white text-black transition-colors duration-300';
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        {isLoading && <LoadingScreen />}
        
        <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} theme={theme} />} />
            <Route path="/download" element={<DownloadPage lang={lang} theme={theme} />} />
            <Route path="/announcements" element={<Announcements lang={lang} theme={theme} />} />
            <Route path="/support" element={<Support lang={lang} theme={theme} />} />
            <Route path="/solidarity" element={<Solidarity lang={lang} theme={theme} />} />
            <Route path="/legal" element={<Legal lang={lang} theme={theme} />} />
          </Routes>
        </main>
        <Footer lang={lang} theme={theme} />
      </div>
    </Router>
  );
};

export default App;
