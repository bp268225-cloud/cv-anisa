import React, { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Organization from './components/Organization';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import { Flower2, Sparkles, FileDown } from 'lucide-react';
import { LilyIcon } from './components/LilyFlowerSvg';

export default function App() {
  // Theme state: defaults to 'pink' (thema ping bunga lily as requested at the end of prompt) while easily toggling to 'blue'
  const [activeTheme, setActiveTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('anisa_theme');
      return saved ? saved : 'pink'; // default to pink lily as requested!
    } catch {
      return 'pink';
    }
  });

  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(() => {
    try {
      return cvData.personalInfo.avatarUrl || '/profile.jpg';
    } catch {
      return '/profile.jpg';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('anisa_theme', activeTheme);
    } catch (e) {
      console.error(e);
    }
  }, [activeTheme]);

  const handleToggleTheme = () => {
    setActiveTheme(prev => prev === 'blue' ? 'pink' : 'blue');
  };

  const handleProfileImageUpload = (imgBase64) => {
    setProfileImage(imgBase64);
    try {
      localStorage.setItem('anisa_profile_img', imgBase64);
    } catch (e) {
      console.error(e);
    }
  };

  const isPink = activeTheme === 'pink';

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 ${
      isPink ? 'theme-pink bg-[#FFFDFD] text-slate-800' : 'theme-blue bg-offwhite text-darktext'
    }`}>
      
      {/* Top Navbar */}
      <Navbar 
        activeTheme={activeTheme} 
        onToggleTheme={handleToggleTheme}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        profileImage={profileImage}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          data={cvData} 
          activeTheme={activeTheme}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          profileImage={profileImage}
          onImageUpload={handleProfileImageUpload}
        />

        {/* About Me Section */}
        <About 
          data={cvData} 
          activeTheme={activeTheme} 
          profileImage={profileImage}
        />

        {/* Education Section */}
        <Education 
          data={cvData} 
          activeTheme={activeTheme} 
        />

        {/* Professional Experience Section */}
        <Experience 
          data={cvData} 
          activeTheme={activeTheme} 
        />

        {/* Organization & Leadership Section */}
        <Organization 
          data={cvData} 
          activeTheme={activeTheme} 
        />

        {/* Creative Skills Section */}
        <Skills 
          data={cvData} 
          activeTheme={activeTheme} 
        />

        {/* Certificates & Achievements Section */}
        <Certificates 
          activeTheme={activeTheme} 
        />

        {/* Contact Section */}
        <Contact 
          data={cvData} 
          activeTheme={activeTheme} 
        />
      </main>

      {/* Footer */}
      <Footer 
        data={cvData} 
        activeTheme={activeTheme} 
      />

      {/* CV PDF & Print Modal */}
      <CvModal 
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        data={cvData}
        profileImage={profileImage}
        defaultTheme={activeTheme}
      />

      {/* Floating Theme Pill at bottom left */}
      <aside 
        aria-label="Pengaturan Tema"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-105"
      >
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          Tema:
        </span>
        <button
          onClick={handleToggleTheme}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
            isPink 
              ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' 
              : 'bg-softblue text-navy hover:bg-blue-100'
          }`}
          title="Klik untuk beralih antara Tema Biru Modern & Pink Bunga Lily"
        >
          {isPink ? (
            <>
              <LilyIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>Pink Bunga Lily</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-royal" />
              <span>Modern Royal Blue</span>
            </>
          )}
        </button>
      </aside>

      {/* Floating Download CV Quick Trigger on mobile & tablet */}
      <aside 
        aria-label="Aksi Cepat Unduh CV"
        className="fixed bottom-6 right-6 z-40 sm:hidden"
      >
        <button
          onClick={() => setIsCvModalOpen(true)}
          className={`p-3.5 rounded-full text-white shadow-xl flex items-center justify-center transition-transform active:scale-95 ${
            isPink ? 'bg-pink-600' : 'bg-royal'
          }`}
          aria-label="Download CV"
        >
          <FileDown className="w-5 h-5" />
        </button>
      </aside>

    </div>
  );
}
