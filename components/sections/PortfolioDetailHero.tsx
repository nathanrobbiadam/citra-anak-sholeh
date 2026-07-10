import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { type PortfolioItem } from "@/types/portfolio";
import { formatDate } from "@/lib/utils";

export default function PortfolioDetailHero({ item }: { item: PortfolioItem }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-900 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-700/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-8 text-sm font-semibold transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Kembali ke Portofolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            {item.category && (
              <span className="inline-block px-3 py-1 mb-6 rounded-full text-xs font-semibold bg-white/10 text-gold-400 border border-white/20 uppercase tracking-wider">
                {item.category}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {item.title}
            </h1>
            <p className="text-primary-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {item.shortDescription}
            </p>
          </div>

          {/* Cover Image */}
          <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-brand-lg border border-primary-700/50">
            {/* [TODO: Gunakan next/image jika gambar tersedia] */}
            <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
              <span className="text-primary-300 font-medium">
                [Placeholder Gambar Cover Kegiatan]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
