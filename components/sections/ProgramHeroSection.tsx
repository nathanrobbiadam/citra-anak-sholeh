"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function ProgramHeroSection() {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-900 overflow-hidden"
      aria-labelledby="program-hero-heading"
    >
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-hero-pattern opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-700/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-gold-400">
            <BookOpen className="w-8 h-8" aria-hidden="true" />
          </div>
          <h1
            id="program-hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Jelajahi <span className="text-gold-400">Program</span> Kami
          </h1>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dari kelas tahfidz hingga pemberdayaan sosial, temukan berbagai
            kesempatan untuk belajar dan berbagi kebaikan bersama Citra Anak Sholeh.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
