import React from 'react';
import { Users, Calendar, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Organization({ data, activeTheme }) {
  const { organizations } = data;
  const isPink = activeTheme === 'pink';

  return (
    <section 
      id="organization" 
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        isPink ? 'bg-pink-50/20' : 'bg-offwhite'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Users className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
            <span className={isPink ? 'text-pink-700' : 'text-royal'}>Leadership & Teamwork</span>
          </div>

          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            isPink ? 'text-pink-950' : 'text-navy'
          }`}>
            ORGANIZATION & LEADERSHIP
          </h2>
          <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
            isPink ? 'bg-pink-500' : 'bg-royal'
          }`} />
          <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Rekam jejak keaktifan berorganisasi, melatih kepemimpinan, komunikasi publik, dan sinergi dalam tim.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {organizations.map((org, index) => {
            return (
              <div 
                key={org.id}
                className={`relative rounded-2xl p-7 bg-white border transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 flex flex-col justify-between ${
                  isPink 
                    ? 'border-pink-100 hover:border-pink-300 shadow-lily-soft' 
                    : 'border-slate-100 hover:border-royal/30 shadow-soft'
                }`}
              >
                {/* Number / Order Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    isPink 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'bg-softblue text-navy'
                  }`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{org.period}</span>
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isPink ? 'text-pink-600 bg-pink-50' : 'text-royal bg-slate-50'
                  }`}>
                    {org.role}
                  </span>
                </div>

                {/* Organization Name */}
                <div className="flex-1">
                  <h3 className={`font-serif text-xl font-bold leading-snug mb-1 ${
                    isPink ? 'text-pink-950' : 'text-navy'
                  }`}>
                    {org.name}
                  </h3>

                  <div className="flex items-center space-x-1 text-xs text-slate-400 mb-3">
                    <Shield className="w-3.5 h-3.5" />
                    <span>{org.type}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {org.description}
                  </p>
                </div>

                {/* Bottom Core Attribute */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500 flex items-center space-x-1">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isPink ? 'text-pink-500' : 'text-royal'}`} />
                    <span>Kerja Sama Tim</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Posisi: Anggota</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
