"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-neutral-50" aria-labelledby="vision-mission-heading">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            id="vision-mission-heading"
            className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4"
          >
            Arah dan Tujuan
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12" ref={ref}>
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-brand-sm border border-primary-100 relative overflow-hidden group"
          >
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-100 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 mb-6">
                <Eye className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Visi Kami
              </h3>
              {/* [TODO: Ganti dengan Visi asli dari client] */}
              <p className="text-neutral-600 leading-relaxed text-lg font-medium">
                "Menjadi lembaga percontohan nasional dalam mendidik generasi
                muda yang unggul dalam hafalan Al-Qur'an, luhur dalam akhlak,
                dan peduli terhadap sesama."
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-900 rounded-3xl p-8 lg:p-12 shadow-brand-sm relative overflow-hidden"
          >
            {/* Background Blob */}
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-800 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-gold-400 mb-6 border border-white/20">
                <Target className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Misi Kami
              </h3>
              {/* [TODO: Ganti dengan Misi asli dari client] */}
              <ul className="space-y-4">
                {[
                  "Menyelenggarakan pendidikan tahfidz Al-Qur'an yang sistematis dan menyenangkan.",
                  "Memberikan beasiswa dan santunan bagi anak-anak dhuafa dan yatim.",
                  "Membekali orang tua dengan ilmu pengasuhan anak berbasis nilai Islam.",
                  "Menjalin kemitraan sinergis dengan berbagai pihak untuk memperluas manfaat.",
                ].map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-700 text-white text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-primary-100 leading-relaxed">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
