"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// [TODO: Ganti dengan data pengurus asli dari client]
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Ustadz HM. Syifa'uddin, S.Ag",
    role: "Ketua Yayasan",
    image: "/images/PAK.png",
    description: "Ketua Yayasan Citra Anak Sholeh Surabaya.",
  },
  {
    id: 2,
    name: "Ustadzah Laily Nur Fadhilah, S.HI",
    role: "Kepala Unit",
    image: "/images/BU.png",
    description: "Kepala Unit TK TPQ Diniyah Tarbawi dan Pesantren Tahfidz Anak Sholeh.",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 bg-neutral-50" aria-labelledby="team-heading">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Tim Penggerak
          </span>
          <h2
            id="team-heading"
            className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4"
          >
            Mengenal Pengurus Yayasan
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Dikelola oleh tim yang berdedikasi dan memiliki kompetensi di bidangnya
            untuk memastikan seluruh program berjalan optimal.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-brand-sm border border-neutral-100 text-center card-lift group"
            >
              {/* Image Placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-primary-100 border-4 border-white shadow-sm">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Foto ${member.name}`}
                    fill
                    sizes="128px"
                    className={`object-cover ${
                      member.id === 2 ? "object-[50%_20%]" : "object-[50%_0%]"
                    }`}
                  />
                ) : (
                  // Placeholder jika gambar belum ada
                  <div className="flex items-center justify-center w-full h-full text-primary-300 font-display text-4xl font-bold group-hover:bg-primary-200 transition-colors duration-300">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-xl font-display font-bold text-primary-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gold-600 font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
