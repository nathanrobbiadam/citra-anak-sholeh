import React from "react";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { type Program } from "@/types/program";
import { PROGRAM_STATUS_LABEL, PROGRAM_STATUS_COLOR } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ProgramDetailHero({ program }: { program: Program }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-900 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-700/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/program"
          className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-8 text-sm font-semibold transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Kembali ke Daftar Program
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
                  PROGRAM_STATUS_COLOR[program.status]
                )}
              >
                {program.status === "berjalan" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse-slow" />
                )}
                {PROGRAM_STATUS_LABEL[program.status]}
              </span>
              {program.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 uppercase tracking-wider">
                  {program.category}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {program.title}
            </h1>
            <p className="text-primary-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {program.shortDescription}
            </p>

            <div className="flex items-center gap-4">
              {/* Jika program berjalan/akan datang, tampilkan tombol pendaftaran */}
              {(program.status === "berjalan" || program.status === "akan-datang") && program.registrationUrl && (
                <a
                  href={program.registrationUrl}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-gold-500 text-primary-900 font-bold rounded-xl hover:bg-gold-400 active:bg-gold-600 transition-all duration-200 shadow-gold-sm hover:shadow-md"
                >
                  Daftar Sekarang
                </a>
              )}
              
              {/* <button className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-200 border border-white/20" aria-label="Bagikan program ini">
                <Share2 className="w-5 h-5" aria-hidden="true" />
              </button> */}
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-brand-lg border border-primary-700/50">
            {/* [TODO: Gunakan next/image jika gambar tersedia] */}
            <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
              <span className="text-primary-300 font-medium">
                [Placeholder Gambar Cover Program]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
