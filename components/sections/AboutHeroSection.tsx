"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-900 overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero-bg.jpg"
          alt="Latar Belakang Tentang Kami"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-overlay"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/70 to-primary-900/95" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-gold-400">
            <Leaf className="w-8 h-8" aria-hidden="true" />
          </div>
          <h1
            id="about-hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Mengenal Lebih Dekat <br className="hidden md:block" />
            <span className="text-gold-400">Citra Anak Sholeh</span>
          </h1>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Berawal dari kepedulian terhadap pendidikan generasi Qur&apos;ani,
            kami hadir untuk membersamai langkah keluarga dalam mendidik putra-putrinya.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
