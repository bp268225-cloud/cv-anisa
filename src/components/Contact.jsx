import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Contact({ data, activeTheme }) {
  const { personalInfo } = data;
  const isPink = activeTheme === 'pink';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWa, setCopiedWa] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedWa(true);
      setTimeout(() => setCopiedWa(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent("Halo Anisa Anwar, saya melihat portfolio Anda dan tertarik untuk berdiskusi lebih lanjut mengenai peluang kerja / kolaborasi.");
  const whatsappUrl = `https://wa.me/${personalInfo.whatsappClean}?text=${whatsappMessage}`;
  const mailtoUrl = `mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20-%20Anisa%20Anwar`;

  return (
    <section 
      id="contact" 
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${
        isPink 
          ? 'bg-gradient-to-br from-lily-900 via-rose-950 to-pink-950 text-white' 
          : 'bg-navy text-white'
      }`}
    >
      {/* Decorative background vectors */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {isPink ? (
          <>
            <div className="absolute top-10 right-10">
              <LilyIcon className="w-80 h-80 text-pink-300" />
            </div>
            <div className="absolute -bottom-10 -left-10">
              <LilyIcon className="w-96 h-96 text-rose-300" />
            </div>
          </>
        ) : (
          <>
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-royal/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-skyblue/30 blur-3xl" />
          </>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-white/10 backdrop-blur-md border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-skyblue" />
          <span>Get In Touch</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          LET'S CONNECT!
        </h2>
        <div className={`w-16 h-1 mx-auto rounded-full mb-8 ${isPink ? 'bg-pink-400' : 'bg-royal'}`} />

        {/* Core Sentence from prompt */}
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          "{personalInfo.contactMessage}"
        </p>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 text-left">
          
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isPink ? 'bg-pink-500/30 text-pink-200' : 'bg-royal text-white'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="text-xs text-slate-300 hover:text-white flex items-center space-x-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  title="Salin Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              <span className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Direct Email
              </span>
              <p className="font-serif text-lg font-bold text-white mt-1 break-all">
                {personalInfo.email}
              </p>
              <p className="text-xs text-slate-300 mt-2">
                Hubungi langsung melalui surat elektronik untuk diskusi profesional, undangan, dan proyek.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={mailtoUrl}
                className={`w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 transition-all ${
                  isPink 
                    ? 'bg-pink-600 hover:bg-pink-500 text-white shadow-lg' 
                    : 'bg-royal hover:bg-royal-hover text-white shadow-lg'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Send Me an Email</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.whatsapp, 'wa')}
                  className="text-xs text-slate-300 hover:text-white flex items-center space-x-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  title="Salin Nomor WhatsApp"
                >
                  {copiedWa ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedWa ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              <span className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                WhatsApp Messenger
              </span>
              <p className="font-serif text-lg font-bold text-white mt-1">
                {personalInfo.whatsapp}
              </p>
              <p className="text-xs text-slate-300 mt-2">
                Respon cepat untuk komunikasi santai maupun konfirmasi jadwal kegiatan dan kolaborasi.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Location & Status Info */}
        <div className="inline-flex items-center space-x-2 text-xs text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-skyblue" />
          <span>{personalInfo.location}</span>
          <span className="opacity-40">•</span>
          <span>Status: Terbuka untuk magang, kerja sama, & tawaran MC</span>
        </div>

      </div>
    </section>
  );
}
