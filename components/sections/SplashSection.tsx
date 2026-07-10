"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Optional: subtle background pattern/gradient to make the white less flat */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      >
        <Image
          src="/images/LOGOCAS.png"
          alt="Logo Citra Anak Sholeh"
          fill
          priority
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-400 text-xs font-semibold tracking-widest uppercase">Scroll ke bawah</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-neutral-300 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-neutral-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
