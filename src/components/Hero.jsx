import React, { useRef } from 'react';
import { Sparkles, ArrowRight, FileDown, Upload, Camera, CheckCircle2 } from 'lucide-react';
import { LilyIcon, LilyBouquet } from './LilyFlowerSvg';

export default function Hero({ data, activeTheme, onOpenCvModal, profileImage, onImageUpload }) {
  const { personalInfo } = data;
  const isPink = activeTheme === 'pink';
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden transition-colors duration-500 ${
        isPink 
          ? 'bg-gradient-to-b from-pink-50 via-white to-pink-50/40' 
          : 'bg-gradient-to-b from-offwhite via-white to-softblue/20'
      }`}
    >
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isPink ? (
          <>
            {/* Pink Lily ambient circles & flowers */}
            <div className="absolute top-10 right-10 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl -z-10 animate-pulse-subtle" />
            <div className="absolute -bottom-10 left-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute top-24 right-1/4 opacity-15 transform rotate-12 -z-10">
              <LilyIcon className="w-64 h-64 text-pink-400" />
            </div>
            <div className="absolute bottom-16 left-8 opacity-10 transform -rotate-45 -z-10">
              <LilyIcon className="w-48 h-48 text-rose-500" />
            </div>
          </>
        ) : (
          <>
            {/* Elegant Modern Blue ambient gradients */}
            <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] bg-softblue/60 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -left-20 w-80 h-80 bg-royal/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-skyblue/10 rounded-full blur-2xl -z-10" />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge: Creative Digital Enthusiast */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs transition-all duration-300 transform hover:scale-102">
              <div className={`w-2 h-2 rounded-full animate-ping ${
                isPink ? 'bg-pink-500' : 'bg-royal'
              }`} />
              {isPink ? (
                <div className="flex items-center space-x-1.5 text-pink-700 bg-pink-100/70 px-3 py-1 rounded-full border border-pink-200">
                  <LilyIcon className="w-3.5 h-3.5 text-pink-600" />
                  <span>{personalInfo.badge}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1.5 text-navy bg-softblue/70 px-3 py-1 rounded-full border border-blue-200">
                  <Sparkles className="w-3.5 h-3.5 text-royal" />
                  <span>{personalInfo.badge}</span>
                </div>
              )}
            </div>

            {/* Name */}
            <div>
              <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                isPink ? 'text-pink-950' : 'text-navy'
              }`}>
                {personalInfo.fullName}
              </h1>
              
              {/* Headline */}
              <p className={`mt-3 font-serif italic text-lg sm:text-xl lg:text-2xl font-medium ${
                isPink ? 'text-pink-700' : 'text-royal'
              }`}>
                "{personalInfo.headline}"
              </p>
            </div>

            {/* Subheadline */}
            <div className={`inline-block text-sm sm:text-base font-semibold px-3 py-1 rounded-md ${
              isPink ? 'bg-pink-100/60 text-pink-800' : 'bg-slate-100 text-slate-800'
            }`}>
              {personalInfo.subheadline}
            </div>

            {/* Description */}
            <p className="text-slate-600 sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#about"
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0 ${
                  isPink 
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-pink-300/50 hover:shadow-xl' 
                    : 'bg-royal hover:bg-royal-hover text-white hover:shadow-blue-300/50 hover:shadow-xl'
                }`}
              >
                <span>Explore My Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                  isPink 
                    ? 'border-pink-300 text-pink-800 bg-white/80 hover:bg-pink-50 hover:border-pink-400' 
                    : 'border-navy text-navy bg-white/80 hover:bg-softblue/30 hover:border-royal hover:text-royal'
                }`}
              >
                <FileDown className="w-4 h-4" />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 grid grid-cols-3 gap-2 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className={`block font-serif text-xl sm:text-2xl font-bold ${isPink ? 'text-pink-700' : 'text-navy'}`}>
                  Unilak
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">Universitas</span>
              </div>
              <div className="text-center lg:text-left">
                <span className={`block font-serif text-xl sm:text-2xl font-bold ${isPink ? 'text-pink-700' : 'text-navy'}`}>
                  Creative
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">Content & Visual</span>
              </div>
              <div className="text-center lg:text-left">
                <span className={`block font-serif text-xl sm:text-2xl font-bold ${isPink ? 'text-pink-700' : 'text-navy'}`}>
                  Public
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider">Speaking / MC</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait Photo & Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow & Gradient Backdrop */}
              <div className={`absolute -inset-2 sm:-inset-4 rounded-3xl blur-2xl opacity-60 transition-colors duration-500 ${
                isPink 
                  ? 'bg-gradient-to-tr from-pink-300 via-rose-300 to-pink-200' 
                  : 'bg-gradient-to-tr from-navy/30 via-royal/30 to-skyblue/40'
              }`} />

              {/* Portrait Card */}
              <div className={`relative rounded-3xl p-3 sm:p-4 bg-white/95 backdrop-blur-md border shadow-2xl transition-all duration-300 ${
                isPink ? 'border-pink-100 shadow-pink-200/40' : 'border-slate-100 shadow-slate-300/40'
              }`}>
                
                {/* Image Container (Portrait Ratio 3:4) */}
                <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden flex flex-col items-center justify-center ${
                  isPink 
                    ? 'bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200' 
                    : 'bg-gradient-to-b from-navy via-navy-light to-royal'
                }`}>
                  
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Anisa Anwar" 
                      className="w-full h-full object-cover object-[center_32%] transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    /* Elegant Professional Portrait Placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-between p-6 text-center text-white relative">
                      
                      {/* Lily or Star watermark in backdrop */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        {isPink ? (
                          <LilyIcon className="w-48 h-48 text-pink-900" />
                        ) : (
                          <div className="w-48 h-48 rounded-full border-8 border-white/20" />
                        )}
                      </div>

                      {/* Top tag */}
                      <div className="z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-medium tracking-wide">
                        <CheckCircle2 className="w-3.5 h-3.5 text-skyblue" />
                        <span>Official Portfolio Profile</span>
                      </div>

                      {/* Middle Avatar Silhouette & Initials */}
                      <div className="z-10 flex flex-col items-center my-auto">
                        <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 flex items-center justify-center shadow-xl backdrop-blur-sm ${
                          isPink 
                            ? 'border-white/60 bg-pink-500/30' 
                            : 'border-white/40 bg-white/10'
                        }`}>
                          <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow">
                            AA
                          </span>
                        </div>
                        <span className="mt-3 font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                          ANISA ANWAR
                        </span>
                        <span className="text-xs text-white/80 mt-1 max-w-[200px]">
                          Mahasiswa Universitas Lancang Kuning
                        </span>
                      </div>

                      {/* Bottom Profile upload option for user convenience */}
                      <div className="z-10 w-full pt-2">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full py-2.5 px-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-medium flex items-center justify-center space-x-2 transition-all border border-white/25"
                          title="Klik untuk memasukkan foto profil asli Anda jika diinginkan"
                        >
                          <Camera className="w-4 h-4" />
                          <span>Ganti / Unggah Foto Profil</span>
                        </button>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-xl p-3 backdrop-blur-md border flex items-center space-x-3 shadow-lg ${
                    isPink 
                      ? 'bg-white/90 border-pink-100 text-pink-900' 
                      : 'bg-navy/90 border-white/10 text-white'
                  }`}>
                    <div className={`p-2 rounded-lg ${
                      isPink ? 'bg-pink-100 text-pink-600' : 'bg-royal text-white'
                    }`}>
                      {isPink ? <LilyIcon className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate">Anisa Anwar</p>
                      <p className={`text-[10px] truncate ${isPink ? 'text-pink-600' : 'text-slate-300'}`}>
                        Creative Digital & Content Lead
                      </p>
                    </div>
                  </div>

                </div>

                {/* Card Sub-caption */}
                <div className="mt-3 px-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span>Ready for Collaboration</span>
                  </span>
                  <span>Pekanbaru, Riau</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
