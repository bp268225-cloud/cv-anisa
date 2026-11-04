import React from 'react';
import { Briefcase, Camera, Megaphone, Mic2, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Experience({ data, activeTheme }) {
  const { experiences } = data;
  const isPink = activeTheme === 'pink';

  // Map icons for experiences
  const getExperienceIcon = (role) => {
    if (role.toLowerCase().includes('editor') || role.toLowerCase().includes('photo')) {
      return <Camera className="w-6 h-6" />;
    }
    if (role.toLowerCase().includes('content')) {
      return <Megaphone className="w-6 h-6" />;
    }
    return <Mic2 className="w-6 h-6" />;
  };

  return (
    <section 
      id="experience" 
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        isPink ? 'bg-white' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Briefcase className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
            <span className={isPink ? 'text-pink-700' : 'text-royal'}>Career & Work Experience</span>
          </div>

          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            isPink ? 'text-pink-950' : 'text-navy'
          }`}>
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
            isPink ? 'bg-pink-500' : 'bg-royal'
          }`} />
          <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Pengalaman nyata dalam dunia profesional, industri visual, manajemen konten, dan pembawa acara.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            return (
              <div
                key={exp.id}
                className={`group relative rounded-2xl p-7 bg-white border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isPink 
                    ? 'border-pink-100 hover:border-pink-300 shadow-lily-soft hover:shadow-xl' 
                    : 'border-slate-100 hover:border-royal/30 shadow-soft hover:shadow-soft-hover'
                }`}
              >
                {/* Top Accent line */}
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-md transition-all duration-300 group-hover:h-1.5 ${
                  isPink 
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400' 
                    : 'bg-gradient-to-r from-navy to-royal'
                }`} />

                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                      isPink 
                        ? 'bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white' 
                        : 'bg-softblue text-royal group-hover:bg-royal group-hover:text-white'
                    }`}>
                      {getExperienceIcon(exp.role)}
                    </div>

                    <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                      isPink 
                        ? 'bg-pink-50 text-pink-700 border border-pink-100' 
                        : 'bg-slate-50 text-slate-600 border border-slate-100'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Position / Role */}
                  <h3 className={`font-serif text-xl font-bold group-hover:text-royal transition-colors ${
                    isPink ? 'text-pink-950 group-hover:text-pink-600' : 'text-navy group-hover:text-royal'
                  }`}>
                    {exp.role}
                  </h3>

                  {/* Place / Company */}
                  <div className="mt-2 flex items-center space-x-1.5 text-xs font-semibold text-slate-500">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.company}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Bottom Tags / Meta */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className={`inline-flex items-center space-x-1 font-medium ${
                    isPink ? 'text-pink-600' : 'text-royal'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Experience</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Pekanbaru</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
