"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

// [TODO: Sesuaikan nilai-nilai inti ini dengan data dari client]
const CORE_VALUES = [
  {
    icon: BookOpen,
    title: "Qur'ani",
    description: "Menjadikan Al-Qur'an sebagai pedoman utama dalam setiap langkah pengajaran dan pengelolaan yayasan.",
  },
  {
    icon: ShieldCheck,
    title: "Amanah",
    description: "Menjaga kepercayaan masyarakat dan donatur dengan pengelolaan yang transparan dan profesional.",
  },
  {
    icon: HeartHandshake,
    title: "Peduli",
    description: "Menebar manfaat tanpa batas, merangkul mereka yang membutuhkan dengan keikhlasan hati.",
  },
  {
    icon: Sparkles,
    title: "Inovatif",
    description: "Terus beradaptasi dengan perkembangan zaman untuk menyajikan metode pendidikan yang relevan dan menyenangkan.",
  },
];

export default function CoreValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="core-values-heading">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Landasan Kami
          </span>
          <h2
            id="core-values-heading"
            className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4"
          >
            Nilai-Nilai Inti
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Dalam menjalankan setiap program, kami berpegang teguh pada empat pilar utama
            yang menjadi identitas Citra Anak Sholeh.
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CORE_VALUES.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-neutral-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-brand-lg transition-all duration-300 border border-transparent hover:border-primary-100 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-6 group-hover:scale-110 group-hover:bg-primary-50 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
