import React from 'react';
import { 
  Sparkles, 
  Video, 
  Palette, 
  Image as ImageIcon, 
  Mic, 
  MessageSquare, 
  Users, 
  Lightbulb, 
  Compass, 
  Clock, 
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Skills({ data, activeTheme }) {
  const { skills } = data;
  const isPink = activeTheme === 'pink';

  const getSoftSkillIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'public speaking':
        return <Mic className="w-5 h-5" />;
      case 'communication':
        return <MessageSquare className="w-5 h-5" />;
      case 'teamwork':
        return <Users className="w-5 h-5" />;
      case 'creativity':
        return <Lightbulb className="w-5 h-5" />;
      case 'leadership':
        return <Compass className="w-5 h-5" />;
      case 'time management':
        return <Clock className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getTechSkillIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'capcut':
        return <Video className="w-7 h-7" />;
      case 'canva':
        return <Palette className="w-7 h-7" />;
      case 'adobe photoshop':
        return <ImageIcon className="w-7 h-7" />;
      default:
        return <Wrench className="w-7 h-7" />;
    }
  };

  return (
    <section 
      id="skills" 
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        isPink ? 'bg-white' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
            <span className={isPink ? 'text-pink-700' : 'text-royal'}>Competencies & Talents</span>
          </div>

          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            isPink ? 'text-pink-950' : 'text-navy'
          }`}>
            MY CREATIVE SKILLS
          </h2>
          <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
            isPink ? 'bg-pink-500' : 'bg-royal'
          }`} />
          <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Kombinasi keahlian teknis dalam perangkat lunak kreatif dan kompetensi interpersonal yang kuat.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          
          {/* CATEGORY 1: TECHNICAL SKILLS */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className={`p-2 rounded-lg ${
                isPink ? 'bg-pink-100 text-pink-600' : 'bg-softblue text-royal'
              }`}>
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-serif text-2xl font-bold ${isPink ? 'text-pink-900' : 'text-navy'}`}>
                  Technical Skills
                </h3>
                <p className="text-xs text-slate-500">
                  Perangkat lunak & alat kreatif untuk produksi konten dan desain
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.technical.map((tech) => (
                <div
                  key={tech.name}
                  className={`group rounded-2xl p-6 bg-white border transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 flex items-start space-x-4 ${
                    isPink 
                      ? 'border-pink-100 hover:border-pink-300 shadow-lily-soft' 
                      : 'border-slate-100 hover:border-royal/30 shadow-soft'
                  }`}
                >
                  {/* Tool Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                    isPink 
                      ? 'bg-gradient-to-br from-pink-50 to-pink-100 text-pink-600 group-hover:from-pink-500 group-hover:to-rose-600 group-hover:text-white' 
                      : 'bg-gradient-to-br from-softblue/60 to-softblue text-royal group-hover:from-navy group-hover:to-royal group-hover:text-white'
                  }`}>
                    {getTechSkillIcon(tech.name)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      {tech.category}
                    </span>
                    <h4 className={`font-serif text-lg font-bold truncate ${
                      isPink ? 'text-pink-950' : 'text-navy'
                    }`}>
                      {tech.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 leading-snug">
                      {tech.sublabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY 2: SOFT SKILLS */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className={`p-2 rounded-lg ${
                isPink ? 'bg-pink-100 text-pink-600' : 'bg-softblue text-royal'
              }`}>
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-serif text-2xl font-bold ${isPink ? 'text-pink-900' : 'text-navy'}`}>
                  Soft Skills
                </h3>
                <p className="text-xs text-slate-500">
                  Karakter interpersonal, kepemimpinan, dan komunikasi profesional
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.soft.map((soft) => (
                <div
                  key={soft.name}
                  className={`group rounded-2xl p-6 bg-white border transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 ${
                    isPink 
                      ? 'border-pink-100 hover:border-pink-300 shadow-lily-soft' 
                      : 'border-slate-100 hover:border-royal/30 shadow-soft'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isPink 
                        ? 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white' 
                        : 'bg-slate-50 text-royal group-hover:bg-royal group-hover:text-white'
                    }`}>
                      {getSoftSkillIcon(soft.name)}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                        {soft.category}
                      </span>
                      <h4 className={`font-serif text-base font-bold ${
                        isPink ? 'text-pink-950' : 'text-navy'
                      }`}>
                        {soft.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {soft.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
