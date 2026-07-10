"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight, BookOpen, Heart, Users, Star } from "lucide-react";
import { STATS } from "@/lib/constants";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Pendidikan Qur'ani",
    description:
      "Program tahfidz dan talaqqi dengan metode terbukti efektif bagi anak-anak usia dini.",
    color: "bg-primary-100 text-primary-700",
  },
  {
    icon: Heart,
    title: "Kepedulian Sosial",
    description:
      "Menyentuh hati dan membantu keluarga dhuafa melalui berbagai program sosial berkelanjutan.",
    color: "bg-gold-100 text-gold-700",
  },
  {
    icon: Users,
    title: "Komunitas Keluarga",
    description:
      "Membangun komunitas orang tua yang saling menguatkan dalam mendidik anak secara Islami.",
    color: "bg-primary-100 text-primary-600",
  },
];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numberMatch = value.match(/\d+/);
  const number = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, "");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
        {isInView ? (
          <CountUp start={0} end={number} duration={2.5} suffix={suffix} separator="." />
        ) : (
          "0" + suffix
        )}
      </div>
      <div className="text-primary-200 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const isHeroInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-900"
      aria-labelledby="hero-heading"
    >
      {/* Background Image & Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/HEROSECTIONCAS.JPG"
          alt="Latar Belakang Hero"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/80 to-primary-700/90" />
      </motion.div>

      {/* Decorative circles */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary-600/20 blur-3xl -translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-3xl translate-y-1/4 -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
            >
              <Star className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                Yayasan Pendidikan &amp; Sosial Islami
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Membangun{" "}
              <span className="text-gold-400">Generasi Qur&apos;ani</span>{" "}
              yang Berakhlak Mulia
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-primary-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Bersama kami, anak-anakmu tumbuh menjadi generasi hafidz yang
              cerdas, berakhlak, dan siap menjadi pemimpin masa depan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                id="hero-cta-primary"
                href="/program"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 text-primary-900 font-bold rounded-xl hover:bg-gold-400 active:bg-gold-600 transition-all duration-200 shadow-gold-sm hover:shadow-md group"
              >
                Lihat Program Kami
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
              <Link
                id="hero-cta-secondary"
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                Tentang Kami
              </Link>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:grid gap-4">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 32 }}
                  animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl hover:bg-white/15 transition-all duration-200"
                >
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 ${feature.color}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-primary-200 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/15"
        >
          {STATS.map((stat, idx) => (
            <StatCard key={stat.label} {...stat} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
