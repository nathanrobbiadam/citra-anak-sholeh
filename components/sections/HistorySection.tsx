"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="history-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* [TODO: Ganti dengan gambar/foto historis yayasan yang sebenarnya] */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-brand-lg">
              <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
                <span className="text-primary-300 font-medium">
                  [Placeholder Foto Gedung/Kegiatan]
                </span>
              </div>
            </div>
            
            {/* Overlay Stat Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-brand-md border border-neutral-100 max-w-xs">
              <div className="text-4xl font-display font-bold text-primary-700 mb-1">
                2020
              </div>
              <p className="text-sm text-neutral-600 font-medium leading-relaxed">
                Tahun berdirinya Citra Anak Sholeh dengan tekad membangun generasi Qur&apos;ani.
              </p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="ornament-divider mb-6 max-w-xs">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest px-2">
                Sejarah Kami
              </span>
            </div>
            <h2
              id="history-heading"
              className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6"
            >
              Langkah Awal Sebuah Perjalanan Mulia
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
              {/* [TODO: Ganti dengan narasi sejarah asli dari client] */}
              <p>
                Yayasan Citra Anak Sholeh didirikan atas dasar keprihatinan
                terhadap kurangnya akses pendidikan agama yang komprehensif bagi
                anak-anak di era modern, khususnya bagi mereka yang berasal dari
                keluarga prasejahtera.
              </p>
              <p>
                Bermula dari sebuah kelompok belajar tahfidz kecil di garasi
                rumah pada tahun 2020, perlahan dukungan dari masyarakat dan para
                donatur terus mengalir. Hal ini menginspirasi kami untuk
                meresmikan yayasan agar dapat memberikan manfaat yang lebih luas.
              </p>
            </div>

            {/* Key Milestones */}
            <ul className="space-y-3">
              {[
                "Mendapat izin resmi Kemenkumham (2021)",
                "Membangun gedung belajar mandiri (2022)",
                "Meluluskan 100+ hafidz cilik (2024)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-gold-500 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
