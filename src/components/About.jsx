import React from 'react';
import { Sparkles, Award, Compass, HeartHandshake, BookOpen, Quote } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function About({ data, activeTheme, profileImage }) {
  const { personalInfo } = data;
  const isPink = activeTheme === 'pink';

  return (
    <section 
      id="about" 
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        isPink 
          ? 'bg-gradient-to-b from-white via-pink-50/50 to-white' 
          : 'bg-gradient-to-b from-white via-softblue/30 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            {isPink ? (
              <span className="text-pink-700 bg-pink-100 px-3 py-1 rounded-full flex items-center space-x-1">
                <LilyIcon className="w-3.5 h-3.5 text-pink-600 inline" />
                <span>Personal Story</span>
              </span>
            ) : (
              <span className="text-royal bg-softblue px-3 py-1 rounded-full flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 inline" />
                <span>Introduction</span>
              </span>
            )}
          </div>

          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            isPink ? 'text-pink-950' : 'text-navy'
          }`}>
            ABOUT ME
          </h2>
          <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
            isPink ? 'bg-pink-500' : 'bg-royal'
          }`} />
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Visual Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative ring */}
              <div className={`absolute -inset-3 rounded-3xl opacity-30 blur-xl ${
                isPink ? 'bg-pink-300' : 'bg-royal/30'
              }`} />

              <div className={`relative rounded-3xl p-6 bg-white border shadow-soft ${
                isPink ? 'border-pink-100' : 'border-slate-100'
              }`}>
                {/* Visual Avatar or Photo Preview */}
                <div className={`aspect-[4/5] rounded-2xl overflow-hidden relative flex items-center justify-center ${
                  isPink 
                    ? 'bg-gradient-to-tr from-pink-200 via-rose-100 to-pink-50 text-pink-800' 
                    : 'bg-gradient-to-tr from-navy to-royal text-white'
                }`}>
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Anisa Anwar" 
                      className="w-full h-full object-cover object-[center_32%]"
                    />
                  ) : (
                    <div className="text-center p-6 flex flex-col items-center">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center font-serif text-3xl font-bold border-2 mb-4 ${
                        isPink 
                          ? 'border-pink-300 bg-white/70 text-pink-700 shadow-inner' 
                          : 'border-white/30 bg-white/10 text-white'
                      }`}>
                        AA
                      </div>
                      <h3 className={`font-serif text-xl font-bold ${isPink ? 'text-pink-900' : 'text-white'}`}>
                        Anisa Anwar
                      </h3>
                      <p className={`text-xs mt-1 ${isPink ? 'text-pink-700' : 'text-white/80'}`}>
                        Universitas Lancang Kuning
                      </p>
                      
                      {isPink && (
                        <div className="mt-4 flex items-center space-x-1 text-pink-600 text-xs">
                          <LilyIcon className="w-5 h-5 text-pink-600" />
                          <span>Lily Blossom Motif</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Corner Quote Icon */}
                  <div className={`absolute top-4 right-4 p-2 rounded-xl backdrop-blur-md shadow ${
                    isPink ? 'bg-white/80 text-pink-600' : 'bg-white/20 text-white'
                  }`}>
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Sub-card Stats / Highlights */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className={`p-3 rounded-xl border ${
                    isPink ? 'border-pink-100 bg-pink-50/50' : 'border-slate-100 bg-slate-50'
                  }`}>
                    <span className={`block font-serif text-lg font-bold ${isPink ? 'text-pink-800' : 'text-navy'}`}>
                      Pekanbaru
                    </span>
                    <span className="text-[11px] text-slate-500">Lokasi / Domisili</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${
                    isPink ? 'border-pink-100 bg-pink-50/50' : 'border-slate-100 bg-slate-50'
                  }`}>
                    <span className={`block font-serif text-lg font-bold ${isPink ? 'text-pink-800' : 'text-navy'}`}>
                      Mahasiswa
                    </span>
                    <span className="text-[11px] text-slate-500">Status Akademik</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className={`border-l-4 pl-4 py-1 ${isPink ? 'border-pink-500' : 'border-royal'}`}>
              <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${
                isPink ? 'text-pink-900' : 'text-navy'
              }`}>
                Dedikasi Kreatif & Semangat Bertumbuh
              </h3>
              <p className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-medium">
                Profil & Perjalanan Anisa Anwar
              </p>
            </div>

            {/* Editorial Description Paragraphs (strictly from user instructions) */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {personalInfo.aboutDescription.map((para, index) => (
                <p key={index} className="transition-colors">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Pillar Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                isPink 
                  ? 'border-pink-100 bg-white hover:border-pink-300' 
                  : 'border-slate-100 bg-white hover:border-royal/30'
              }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  isPink ? 'bg-pink-100 text-pink-600' : 'bg-softblue text-royal'
                }`}>
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Kreativitas Visual</h4>
                <p className="text-[12px] text-slate-500 mt-1">Desain grafis, fotografi, dan penyuntingan visual berkualitas.</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                isPink 
                  ? 'border-pink-100 bg-white hover:border-pink-300' 
                  : 'border-slate-100 bg-white hover:border-royal/30'
              }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  isPink ? 'bg-pink-100 text-pink-600' : 'bg-softblue text-royal'
                }`}>
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Komunikasi & MC</h4>
                <p className="text-[12px] text-slate-500 mt-1">Public speaking, koordinasi acara, dan interaksi audiens aktif.</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                isPink 
                  ? 'border-pink-100 bg-white hover:border-pink-300' 
                  : 'border-slate-100 bg-white hover:border-royal/30'
              }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  isPink ? 'bg-pink-100 text-pink-600' : 'bg-softblue text-royal'
                }`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Organisasi</h4>
                <p className="text-[12px] text-slate-500 mt-1">Kolaborasi tim, inisiatif, dan manajemen waktu yang terencana.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
