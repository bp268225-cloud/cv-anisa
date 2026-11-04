import React, { useRef, useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Award, 
  Palette,
  Flower2,
  FileCheck
} from 'lucide-react';
import { LilyIcon, LilyBouquet } from './LilyFlowerSvg';

export default function CvModal({ isOpen, onClose, data, profileImage, defaultTheme = 'blue' }) {
  const [cvTheme, setCvTheme] = useState(defaultTheme);
  const [isGenerating, setIsGenerating] = useState(false);
  const cvPrintRef = useRef(null);

  if (!isOpen) return null;

  const isPink = cvTheme === 'pink';
  const { personalInfo, education, experiences, organizations, skills } = data;

  // Retrieve any certificates stored locally
  let storedCerts = [];
  try {
    const raw = localStorage.getItem('anisa_certificates');
    if (raw) storedCerts = JSON.parse(raw);
  } catch (e) {
    storedCerts = [];
  }

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    const element = cvPrintRef.current;
    
    try {
      // Dynamic import of html2pdf.js
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default || html2pdfModule;

      const opt = {
        margin: [5, 5, 5, 5],
        filename: `CV_ANISA_ANWAR_${isPink ? 'LILY_THEME' : 'MODERN_BLUE'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          letterRendering: true,
          logging: false 
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
      setIsGenerating(false);
    } catch (err) {
      console.warn("html2pdf fallback to native print:", err);
      setIsGenerating(false);
      // Fallback: trigger print
      window.print();
    }
  };

  const handleDirectPrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-navy/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[96vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy flex items-center space-x-2">
              <FileCheck className="w-5 h-5 text-royal" />
              <span>Digital CV Preview & PDF Generator</span>
            </h3>
            <p className="text-xs text-slate-500">
              Format Standar A4 • Siap untuk Melamar Pekerjaan, Magang, & Portofolio
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme switcher for CV */}
            <div className="flex items-center bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setCvTheme('blue')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  !isPink ? 'bg-navy text-white shadow-xs' : 'text-slate-600 hover:text-navy'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Blue</span>
              </button>
              <button
                onClick={() => setCvTheme('pink')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  isPink ? 'bg-pink-600 text-white shadow-xs' : 'text-slate-600 hover:text-pink-600'
                }`}
              >
                <Flower2 className="w-3.5 h-3.5" />
                <span>Bunga Lily</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable A4 Document Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100/80 flex justify-center">
          
          {/* Printable A4 Container */}
          <div 
            id="cv-printable-area"
            ref={cvPrintRef} 
            className={`w-full max-w-[210mm] min-h-[297mm] p-8 sm:p-10 bg-white shadow-xl rounded-xl transition-all duration-300 relative text-darktext flex flex-col justify-between ${
              isPink ? 'border-t-8 border-pink-600' : 'border-t-8 border-navy'
            }`}
            style={{ boxSizing: 'border-box' }}
          >
            {/* Background watermark if pink lily */}
            {isPink && (
              <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
                <LilyIcon className="w-36 h-36 text-pink-700" />
              </div>
            )}

            <div>
              {/* CV Top Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-200">
                <div className="text-center sm:text-left flex-1">
                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <h1 className={`font-serif text-3xl font-extrabold tracking-wide ${
                      isPink ? 'text-pink-950' : 'text-navy'
                    }`}>
                      {personalInfo.fullName}
                    </h1>
                    {isPink && <LilyIcon className="w-6 h-6 text-pink-600" />}
                  </div>

                  <p className={`font-serif italic text-sm font-semibold mt-1 ${
                    isPink ? 'text-pink-700' : 'text-royal'
                  }`}>
                    {personalInfo.subheadline}
                  </p>

                  <p className="text-xs text-slate-600 mt-2 max-w-xl leading-relaxed">
                    Mahasiswa Universitas Lancang Kuning Pekanbaru yang berdedikasi tinggi dalam kreativitas digital, fotografi, konten visual, serta berpengalaman dalam kepemimpinan organisasi dan Master of Ceremony.
                  </p>

                  {/* Contact Meta Info */}
                  <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-slate-600">
                    <span className="flex items-center space-x-1">
                      <Mail className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <span>{personalInfo.email}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Phone className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <span>{personalInfo.whatsapp}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <span>{personalInfo.location}</span>
                    </span>
                  </div>
                </div>

                {/* Portrait Thumbnail */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 p-1 ${
                    isPink ? 'border-pink-300 bg-pink-50' : 'border-royal/30 bg-softblue/30'
                  }`}>
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Anisa Anwar" 
                        className="w-full h-full object-cover object-[center_32%] rounded-lg"
                      />
                    ) : (
                      <div className={`w-full h-full rounded-lg flex flex-col items-center justify-center text-center p-1 ${
                        isPink ? 'bg-pink-100 text-pink-700' : 'bg-navy text-white'
                      }`}>
                        <span className="font-serif text-2xl font-bold">AA</span>
                        <span className="text-[9px] mt-1 uppercase font-semibold">Anisa Anwar</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* CV Body Grid */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Left Column (Main Experience & Education) */}
                <div className="md:col-span-7 space-y-6">
                  
                  {/* Professional Experience Section */}
                  <div>
                    <div className="flex items-center space-x-2 pb-1 mb-3 border-b-2 border-slate-200">
                      <Briefcase className={`w-4 h-4 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <h2 className={`font-serif text-sm font-bold tracking-wider uppercase ${
                        isPink ? 'text-pink-900' : 'text-navy'
                      }`}>
                        Pengalaman Profesional
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {experiences.map(exp => (
                        <div key={exp.id} className="relative pl-3 border-l-2 border-slate-200">
                          <div className="flex items-baseline justify-between">
                            <h3 className={`text-xs font-bold ${isPink ? 'text-pink-950' : 'text-navy'}`}>
                              {exp.role}
                            </h3>
                            <span className="text-[10px] text-slate-500 font-medium">
                              {exp.period}
                            </span>
                          </div>
                          <p className={`text-[11px] font-semibold ${isPink ? 'text-pink-600' : 'text-royal'}`}>
                            {exp.company}
                          </p>
                          <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education Section */}
                  <div>
                    <div className="flex items-center space-x-2 pb-1 mb-3 border-b-2 border-slate-200">
                      <GraduationCap className={`w-4 h-4 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <h2 className={`font-serif text-sm font-bold tracking-wider uppercase ${
                        isPink ? 'text-pink-900' : 'text-navy'
                      }`}>
                        Riwayat Pendidikan
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {education.map(edu => (
                        <div key={edu.id} className="relative pl-3 border-l-2 border-slate-200">
                          <div className="flex items-baseline justify-between">
                            <h3 className={`text-xs font-bold ${isPink ? 'text-pink-950' : 'text-navy'}`}>
                              {edu.institution}
                            </h3>
                            <span className="text-[10px] text-slate-500">
                              Status: {edu.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            Jenjang: {edu.level}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Organization Section */}
                  <div>
                    <div className="flex items-center space-x-2 pb-1 mb-3 border-b-2 border-slate-200">
                      <Users className={`w-4 h-4 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <h2 className={`font-serif text-sm font-bold tracking-wider uppercase ${
                        isPink ? 'text-pink-900' : 'text-navy'
                      }`}>
                        Pengalaman Organisasi
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {organizations.map(org => (
                        <div key={org.id} className="relative pl-3 border-l-2 border-slate-200">
                          <div className="flex items-baseline justify-between">
                            <h3 className={`text-xs font-bold ${isPink ? 'text-pink-950' : 'text-navy'}`}>
                              {org.name}
                            </h3>
                            <span className="text-[10px] font-semibold text-slate-500">
                              {org.period}
                            </span>
                          </div>
                          <p className={`text-[10px] font-medium ${isPink ? 'text-pink-600' : 'text-royal'}`}>
                            Posisi: {org.role} • {org.type}
                          </p>
                          <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                            {org.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column (Skills & Meta) */}
                <div className="md:col-span-5 space-y-6">
                  
                  {/* Technical Skills */}
                  <div>
                    <div className="flex items-center space-x-2 pb-1 mb-3 border-b-2 border-slate-200">
                      <Palette className={`w-4 h-4 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <h2 className={`font-serif text-sm font-bold tracking-wider uppercase ${
                        isPink ? 'text-pink-900' : 'text-navy'
                      }`}>
                        Keahlian Teknis
                      </h2>
                    </div>

                    <div className="space-y-2">
                      {skills.technical.map(t => (
                        <div key={t.name} className={`p-2.5 rounded-lg border ${
                          isPink ? 'border-pink-100 bg-pink-50/40' : 'border-slate-100 bg-slate-50'
                        }`}>
                          <p className="text-xs font-bold text-darktext">{t.name}</p>
                          <p className="text-[10px] text-slate-500">{t.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <div className="flex items-center space-x-2 pb-1 mb-3 border-b-2 border-slate-200">
                      <Sparkles className={`w-4 h-4 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <h2 className={`font-serif text-sm font-bold tracking-wider uppercase ${
                        isPink ? 'text-pink-900' : 'text-navy'
                      }`}>
                        Soft Skills
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skills.soft.map(s => (
                        <span 
                          key={s.name}
                          className={`text-[11px] px-2.5 py-1 rounded-md font-medium border ${
                            isPink 
                              ? 'border-pink-200 bg-pink-50 text-pink-800' 
                              : 'border-blue-100 bg-softblue/50 text-navy'
                          }`}
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificates / Achievements */}
                  <div>
                    <div className="flex items-center space-x-2 pb-1 mb-3 border-b-2 border-slate-200">
                      <Award className={`w-4 h-4 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
                      <h2 className={`font-serif text-sm font-bold tracking-wider uppercase ${
                        isPink ? 'text-pink-900' : 'text-navy'
                      }`}>
                        Sertifikat & Prestasi
                      </h2>
                    </div>

                    {storedCerts.length > 0 ? (
                      <div className="space-y-2">
                        {storedCerts.map(c => (
                          <div key={c.id} className="text-xs">
                            <p className="font-bold text-darktext">{c.title}</p>
                            <p className="text-[10px] text-slate-500">{c.issuer} {c.year ? `(${c.year})` : ''}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[11px] italic text-slate-500">
                        Certificates and achievements will be updated soon.
                      </p>
                    )}
                  </div>

                  {/* Verification Note */}
                  <div className={`p-3 rounded-xl border text-[10px] text-slate-500 ${
                    isPink ? 'border-pink-100 bg-pink-50/30' : 'border-slate-100 bg-slate-50'
                  }`}>
                    <p className="font-semibold text-slate-700">Digital CV Autentik</p>
                    <p className="mt-0.5">Informasi dalam kurikulum vitae ini sesuai dengan data resmi Anisa Anwar.</p>
                  </div>

                </div>

              </div>
            </div>

            {/* CV Footer */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
              <span>{personalInfo.copyright}</span>
              <span>Anisa Anwar • Personal Portfolio & Digital CV</span>
            </div>

          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            <span>Tema aktif: </span>
            <strong className="text-slate-800">{isPink ? 'Thema Pink Bunga Lily' : 'Modern Royal Blue'}</strong>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleDirectPrint}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Print Langsung</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold text-white shadow-md flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 ${
                isPink 
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 hover:shadow-pink-200 hover:shadow-lg' 
                  : 'bg-royal hover:bg-royal-hover hover:shadow-blue-200 hover:shadow-lg'
              } ${isGenerating ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Menyiapkan PDF...' : 'Download File PDF (A4)'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
