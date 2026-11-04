import React, { useState, useEffect } from 'react';
import { Award, Plus, Calendar, Building, Image as ImageIcon, X, Trash2, CheckCircle2 } from 'lucide-react';
import { LilyIcon } from './LilyFlowerSvg';

export default function Certificates({ activeTheme }) {
  const isPink = activeTheme === 'pink';

  // State for certificates stored locally
  const [certificates, setCertificates] = useState(() => {
    try {
      const saved = localStorage.getItem('anisa_certificates');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    year: '',
    imageUrl: '',
    category: 'Sertifikat Kompetensi'
  });

  useEffect(() => {
    try {
      localStorage.setItem('anisa_certificates', JSON.stringify(certificates));
    } catch (e) {
      console.error(e);
    }
  }, [certificates]);

  const handleAddCertificate = (e) => {
    e.preventDefault();
    if (!newCert.title || !newCert.issuer) return;

    const certItem = {
      id: 'cert-' + Date.now(),
      ...newCert
    };

    setCertificates([certItem, ...certificates]);
    setNewCert({
      title: '',
      issuer: '',
      year: '',
      imageUrl: '',
      category: 'Sertifikat Kompetensi'
    });
    setIsModalOpen(false);
  };

  const handleImageFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewCert(prev => ({ ...prev, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteCert = (id) => {
    setCertificates(certificates.filter(c => c.id !== id));
  };

  return (
    <section 
      id="certificates" 
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        isPink ? 'bg-pink-50/20' : 'bg-offwhite'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className={`w-3.5 h-3.5 ${isPink ? 'text-pink-600' : 'text-royal'}`} />
            <span className={isPink ? 'text-pink-700' : 'text-royal'}>Credentials & Honors</span>
          </div>

          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            isPink ? 'text-pink-950' : 'text-navy'
          }`}>
            CERTIFICATES & ACHIEVEMENTS
          </h2>
          <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
            isPink ? 'bg-pink-500' : 'bg-royal'
          }`} />
          <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Dokumentasi sertifikat pelatihan, kepanitiaan, organisasi, kompetensi, serta pencapaian prestasi.
          </p>
        </div>

        {/* Certificate Cards or Empty State */}
        {certificates.length === 0 ? (
          /* Elegant Empty State */
          <div className={`max-w-2xl mx-auto rounded-3xl p-10 sm:p-14 text-center bg-white border shadow-soft ${
            isPink ? 'border-pink-100' : 'border-slate-100'
          }`}>
            <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
              isPink 
                ? 'bg-pink-50 text-pink-500 border border-pink-100' 
                : 'bg-softblue/60 text-royal border border-blue-100'
            }`}>
              {isPink ? (
                <LilyIcon className="w-10 h-10 text-pink-500" />
              ) : (
                <Award className="w-10 h-10 text-royal" />
              )}
            </div>

            <h3 className={`font-serif text-xl sm:text-2xl font-bold ${
              isPink ? 'text-pink-950' : 'text-navy'
            }`}>
              Certificates and achievements will be updated soon.
            </h3>
            
            <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Bagian ini disiapkan khusus untuk menampilkan sertifikat resmi Anisa Anwar. Anda dapat menambahkan sertifikat baru kapan saja melalui tombol di bawah.
            </p>

            {/* Interactive Add Certificate Button */}
            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
                  isPink 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 hover:shadow-pink-200 hover:shadow-lg' 
                    : 'bg-royal hover:bg-royal-hover hover:shadow-blue-200 hover:shadow-lg'
                }`}
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Sertifikat / Prestasi Baru</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Top Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs sm:text-sm font-semibold text-slate-600">
                Menampilkan {certificates.length} sertifikat tersimpan
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-sm transition-all ${
                  isPink ? 'bg-pink-600 hover:bg-pink-700' : 'bg-royal hover:bg-royal-hover'
                }`}
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Sertifikat</span>
              </button>
            </div>

            {/* Grid of added certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className={`rounded-2xl p-5 bg-white border transition-all duration-300 hover:shadow-soft-hover relative group flex flex-col justify-between ${
                    isPink ? 'border-pink-100' : 'border-slate-100'
                  }`}
                >
                  <div>
                    {/* Certificate Image or Placeholder */}
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-4 flex items-center justify-center relative">
                      {cert.imageUrl ? (
                        <img 
                          src={cert.imageUrl} 
                          alt={cert.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-slate-400 flex flex-col items-center">
                          <Award className="w-8 h-8 mb-1" />
                          <span className="text-[10px]">Preview Dokumen</span>
                        </div>
                      )}
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 backdrop-blur-sm text-slate-700">
                        {cert.year || 'Tahun N/A'}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-royal">
                      {cert.category}
                    </span>
                    <h4 className={`font-serif text-lg font-bold mt-1 ${isPink ? 'text-pink-950' : 'text-navy'}`}>
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 flex items-center space-x-1">
                      <Building className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-600 font-medium flex items-center space-x-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Tervalidasi</span>
                    </span>
                    <button
                      onClick={() => handleDeleteCert(cert.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      title="Hapus sertifikat"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Add Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className={`font-serif text-2xl font-bold mb-2 ${isPink ? 'text-pink-900' : 'text-navy'}`}>
              Tambah Sertifikat / Prestasi
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Masukkan informasi sertifikat resmi Anda. Data akan langsung diperbarui di halaman dan CV.
            </p>

            <form onSubmit={handleAddCertificate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori
                </label>
                <select
                  value={newCert.category}
                  onChange={(e) => setNewCert({ ...newCert, category: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal"
                >
                  <option>Sertifikat Pelatihan</option>
                  <option>Sertifikat Organisasi</option>
                  <option>Sertifikat Kepanitiaan</option>
                  <option>Sertifikat Kompetensi</option>
                  <option>Prestasi & Penghargaan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Sertifikat / Penghargaan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pelatihan Desain Grafis Digital"
                  value={newCert.title}
                  onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Penyelenggara / Institusi *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Kementerian Kominfo / Universitas"
                  value={newCert.issuer}
                  onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tahun Perolehan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 2025"
                  value={newCert.year}
                  onChange={(e) => setNewCert({ ...newCert, year: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Unggah Gambar / Dokumen Sertifikat (Opsional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFile}
                  className="w-full text-xs file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-softblue file:text-royal hover:file:bg-blue-100"
                />
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold text-white shadow-sm ${
                    isPink ? 'bg-pink-600 hover:bg-pink-700' : 'bg-royal hover:bg-royal-hover'
                  }`}
                >
                  Simpan Sertifikat
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </section>
  );
}
