import React from "react";
import Link from "next/link";
import { CalendarDays, MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { type PortfolioItem } from "@/types/portfolio";
import { formatDate } from "@/lib/utils";

export default function PortfolioContent({ item }: { item: PortfolioItem }) {
  const renderDescription = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("- ")) {
        return (
          <li key={idx} className="flex items-start gap-3 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0 mt-2.5" aria-hidden="true" />
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
    <section className="py-16 md:py-24 bg-white" aria-labelledby="portfolio-content-heading">
      <h2 id="portfolio-content-heading" className="sr-only">
        Detail Kegiatan
      </h2>
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column: Full Description */}
          <div className="lg:col-span-2">
            <div className="prose prose-neutral prose-lg max-w-none text-neutral-600 leading-relaxed mb-12">
              {renderDescription(item.fullDescription)}
            </div>

            {/* Outcomes/Hasil Kegiatan */}
            {item.outcomes && item.outcomes.length > 0 && (
              <div className="mb-12 p-6 md:p-8 rounded-3xl bg-primary-50 border border-primary-100">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-6">
                  Capaian & Hasil Kegiatan
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {item.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-primary-900 font-medium">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Gallery Preview */}
            {item.gallery && item.gallery.length > 0 && (
              <div className="pt-10 border-t border-neutral-100">
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Galeri Dokumentasi
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {item.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 shadow-sm hover:shadow-md transition-shadow">
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
                Ringkasan Pelaksanaan
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                    <CalendarDays className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-900 mb-1">Tanggal</p>
                    <p className="text-neutral-600 text-sm">{formatDate(item.completedDate)}</p>
                  </div>
                </li>

                {item.location && (
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900 mb-1">Lokasi</p>
                      <p className="text-neutral-600 text-sm">{item.location}</p>
                    </div>
                  </li>
                )}

                {item.participants && (
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm shrink-0 text-primary-600">
                      <Users className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900 mb-1">Total Peserta/Penerima</p>
                      <p className="text-neutral-600 text-sm">{item.participants} Orang</p>
                    </div>
                  </li>
                )}
              </ul>

              {/* Link back to related program if any */}
              {item.relatedProgramSlug && (
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-xs text-neutral-500 mb-3">Bagian dari program:</p>
                  <Link
                    href={`/program/${item.relatedProgramSlug}`}
                    className="flex items-center justify-between w-full p-4 bg-white rounded-xl hover:shadow-brand-sm hover:border-primary-200 transition-all duration-200 border border-transparent group"
                  >
                    <span className="text-sm font-semibold text-primary-900">Lihat Program Terkait</span>
                    <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
