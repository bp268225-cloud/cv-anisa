import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles, Moon, Sun, Flower2 } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Navbar({ activeTheme, onToggleTheme, onOpenCvModal, profileImage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Organization', href: '#organization' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPink = activeTheme === 'pink';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isPink 
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-pink-100 py-3' 
            : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="group flex items-center space-x-2 text-decoration-none focus:outline-none"
          >
            <div className={`w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border ${
              isPink 
                ? 'border-pink-300 bg-pink-100 shadow-lily-soft' 
                : 'border-royal/30 bg-softblue shadow-soft'
            }`}>
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Anisa Anwar" 
                  className="w-full h-full object-cover object-[center_28%]"
                />
              ) : isPink ? (
                <LilyIcon className="w-5 h-5 text-pink-600" />
              ) : (
                <span className="font-serif font-bold text-lg leading-none tracking-tight text-navy">A</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-wider leading-none ${
                isPink ? 'text-pink-900' : 'text-navy'
              }`}>
                ANISA ANWAR
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-medium mt-0.5 ${
                isPink ? 'text-pink-600' : 'text-royal'
              }`}>
                {isPink ? 'Lily Edition' : 'Digital Portfolio'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? isPink 
                        ? 'bg-pink-100 text-pink-700 font-semibold shadow-xs' 
                        : 'bg-softblue text-navy font-semibold shadow-xs'
                      : isPink 
                        ? 'text-slate-600 hover:text-pink-700 hover:bg-pink-50' 
                        : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Toggle & CV Download */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              title={isPink ? "Ganti ke Tema Modern Blue" : "Ganti ke Tema Pink Bunga Lily"}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                isPink 
                  ? 'border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100' 
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-softblue/50 hover:text-navy'
              }`}
            >
              {isPink ? (
                <>
                  <Flower2 className="w-3.5 h-3.5 text-pink-500 animate-spin-slow" />
                  <span>Thema Bunga Lily</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-royal" />
                  <span>Modern Blue</span>
                </>
              )}
            </button>

            {/* Download CV CTA */}
            <button
              onClick={onOpenCvModal}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isPink 
                  ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:shadow-pink-200 hover:shadow-lg' 
                  : 'bg-royal hover:bg-royal-hover hover:shadow-blue-200 hover:shadow-lg'
              }`}
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Quick Theme Toggle for Mobile */}
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border text-xs ${
                isPink ? 'border-pink-200 text-pink-600 bg-pink-50' : 'border-slate-200 text-navy bg-slate-50'
              }`}
              title="Ganti Tema"
            >
              {isPink ? <Flower2 className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isPink ? 'text-pink-900 hover:bg-pink-50' : 'text-navy hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-1 animate-fade-in ${
          isPink ? 'bg-white/98 border-pink-100' : 'bg-white/98 border-slate-100'
        }`}>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? isPink 
                      ? 'bg-pink-50 text-pink-700 font-semibold' 
                      : 'bg-softblue text-navy font-semibold'
                    : isPink 
                      ? 'text-slate-600 hover:text-pink-700 hover:bg-pink-50/50' 
                      : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                onToggleTheme();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700"
            >
              {isPink ? (
                <>
                  <Flower2 className="w-4 h-4 text-pink-500" />
                  <span>Ganti ke Tema Modern Blue</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-royal" />
                  <span>Ganti ke Tema Pink Bunga Lily</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onOpenCvModal();
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-semibold text-white shadow-sm ${
                isPink ? 'bg-pink-600 hover:bg-pink-700' : 'bg-royal hover:bg-royal-hover'
              }`}
            >
              <FileDown className="w-4 h-4" />
              <span>Download My CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
