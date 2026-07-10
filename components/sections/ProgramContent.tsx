import React from "react";
import { Clock, MapPin, Users, CalendarDays, CheckCircle2 } from "lucide-react";
import { type Program } from "@/types/program";
import { formatDate } from "@/lib/utils";

export default function ProgramContent({ program }: { program: Program }) {
  // Ubah markdown-like format ke HTML sederhana
  // (Idealnya gunakan library seperti react-markdown jika datanya dari CMS berupa MD)
  const renderDescription = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("- ")) {
        return (
          <li key={idx} className="flex items-start gap-3 mb-2">
            <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</span>
          </li>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={idx} className="font-bold text-primary-900 mt-6 mb-3">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.trim() === "") return <br key={idx} />;
      if (line.startsWith("[TODO:")) return <p key={idx} className="text-primary-500 italic text-sm my-2">{line}</p>;
      
      return <p key={idx} className="mb-4">{line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</p>;
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="program-content-heading">
      <h2 id="program-content-heading" className="sr-only">
        Detail Program
      </h2>
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column: Full Description */}
          <div className="lg:col-span-2">
            <div className="prose prose-neutral prose-lg max-w-none text-neutral-600 leading-relaxed">
              {renderDescription(program.fullDescription)}
            </div>
            
            {/* Gallery Preview (Optional) */}
            {program.gallery && program.gallery.length > 0 && (
              <div className="mt-12 pt-12 border-t border-neutral-100">
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Galeri Kegiatan
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {program.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 shadow-sm">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs">
                        [Foto {idx + 1}]
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-neutral-50 rounded-3xl p-6 md:p-8 shadow-brand-sm border border-neutral-100">
              <h3 className="text-lg font-display font-bold text-primary-900 mb-6 pb-4 border-b border-neutral-200">
                Informasi Program
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                    <CalendarDays className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-900 mb-1">Mulai</p>
                    <p className="text-neutral-600 text-sm">{formatDate(program.startDate)}</p>
                  </div>
                </li>
                
                {program.endDate && (
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900 mb-1">Berakhir</p>
                      <p className="text-neutral-600 text-sm">{formatDate(program.endDate)}</p>
                    </div>
                  </li>
                )}

                {program.location && (
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900 mb-1">Lokasi</p>
                      <p className="text-neutral-600 text-sm">{program.location}</p>
                    </div>
                  </li>
                )}

                {program.targetParticipants && (
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                      <Users className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900 mb-1">Sasaran Peserta</p>
                      <p className="text-neutral-600 text-sm">{program.targetParticipants}</p>
                    </div>
                  </li>
                )}
                
                {program.quota && (
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                      <span className="font-bold text-lg leading-none" aria-hidden="true">#</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900 mb-1">Kuota Tersedia</p>
                      <p className="text-neutral-600 text-sm">{program.quota} orang</p>
                    </div>
                  </li>
                )}
              </ul>
              
              {/* Jika program berjalan/akan datang, tampilkan tombol pendaftaran */}
              {(program.status === "berjalan" || program.status === "akan-datang") && program.registrationUrl && (
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <a
                    href={program.registrationUrl}
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-200 shadow-brand-sm"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
