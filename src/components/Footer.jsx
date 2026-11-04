import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Footer({ data, activeTheme }) {
  const { personalInfo } = data;
  const isPink = activeTheme === 'pink';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${
      isPink 
        ? 'bg-pink-950/95 border-pink-900/60 text-pink-100' 
        : 'bg-navy-dark border-white/10 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                {personalInfo.fullName}
              </span>
              {isPink && <LilyIcon className="w-5 h-5 text-pink-400" />}
            </div>
            <p className="font-serif italic text-sm text-slate-400 mt-1">
              "{personalInfo.tagline}"
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#organization" className="hover:text-white transition-colors">Organization</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-full border transition-all duration-300 transform hover:-translate-y-1 ${
                isPink 
                  ? 'bg-pink-900/80 border-pink-700 text-pink-300 hover:bg-pink-800 hover:text-white shadow-lg' 
                  : 'bg-white/10 border-white/20 text-white hover:bg-royal hover:border-royal shadow-lg'
              }`}
              title="Kembali ke Atas"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center">
          <p>{personalInfo.copyright}</p>
          <p className="flex items-center space-x-1">
            <span>Designed with elegance for professional branding</span>
            {isPink && <span className="text-pink-400 ml-1">✿ Lily Flower Edition</span>}
          </p>
        </div>

      </div>
    </footer>
  );
}
