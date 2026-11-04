import React from 'react';
import { GraduationCap, School, Calendar, CheckCircle2 } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Education({ data, activeTheme }) {
  const { education } = data;
  const isPink = activeTheme === 'pink';

  return (
    <section 
      id="education" 
      className={`py-20 lg:py-24 transition-colors duration-500 ${
        isPink ? 'bg-pink-50/30' : 'bg-offwhite'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <GraduationCap className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
            <span className={isPink ? 'text-pink-700' : 'text-royal'}>Academic Journey</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
            isPink ? 'text-pink-950' : 'text-navy'
          }`}>
            MY EDUCATION
          </h2>
          <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
            isPink ? 'bg-pink-500' : 'bg-royal'
          }`} />
          <p className="mt-4 text-xs sm:text-sm text-slate-500">
            Jejak pendidikan formal yang membentuk landasan pengetahuan, etika, dan dedikasi berkarya.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className={`absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 transform -translate-x-1/2 ${
            isPink 
              ? 'bg-gradient-to-b from-pink-300 via-pink-400 to-rose-300' 
              : 'bg-gradient-to-b from-royal via-skyblue to-softblue'
          }`} />

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md border-4 ${
                    isPink 
                      ? 'bg-pink-600 border-white text-white shadow-pink-200' 
                      : 'bg-royal border-white text-white shadow-blue-200'
                  }`}>
                    {index === 0 ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : (
                      <School className="w-4 h-4" />
                    )}
                  </div>

                  {/* Spacer for Desktop Grid Balance */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className={`p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-300 hover:shadow-soft-hover ${
                      isPink 
                        ? 'border-pink-100 hover:border-pink-300 shadow-sm' 
                        : 'border-slate-100 hover:border-royal/30 shadow-soft'
                    }`}>
                      
                      {/* Top status tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          item.current 
                            ? isPink 
                              ? 'bg-pink-100 text-pink-700' 
                              : 'bg-softblue text-navy'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Status: {item.status}</span>
                        </span>

                        <span className="text-[11px] font-medium tracking-wide uppercase text-slate-400">
                          {item.level}
                        </span>
                      </div>

                      {/* Institution Name */}
                      <h3 className={`font-serif text-xl sm:text-2xl font-bold leading-snug ${
                        isPink ? 'text-pink-900' : 'text-navy'
                      }`}>
                        {item.institution}
                      </h3>

                      {/* Jenjang info */}
                      <div className="mt-2 flex items-center text-xs font-medium text-slate-500">
                        <span className={`font-semibold mr-1.5 ${isPink ? 'text-pink-600' : 'text-royal'}`}>
                          Jenjang:
                        </span>
                        <span>{item.level}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
