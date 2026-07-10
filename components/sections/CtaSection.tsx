"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="cta"
      className="py-16 md:py-24 bg-primary-900 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-700/50 blur-3xl translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-500" />
            <span className="text-gold-400 text-2xl" aria-hidden="true">
              ✦
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-500" />
          </div>

          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 leading-tight"
          >
            Bergabunglah Bersama{" "}
            <span className="text-gold-400">Gerakan Kebaikan</span> Ini
          </h2>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {/* [TODO: Ganti dengan kalimat ajakan nyata dari client] */}
            Jadilah bagian dari keluarga besar Citra Anak Sholeh — sebagai peserta,
            donatur, relawan, atau mitra. Setiap kontribusi Anda bermakna besar.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              id="cta-contact-btn"
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-primary-900 font-bold rounded-xl hover:bg-gold-400 active:bg-gold-600 transition-all duration-200 shadow-gold-sm hover:shadow-md group text-base"
            >
              Hubungi Kami Sekarang
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              />
            </Link>
            <a
              id="cta-whatsapp-btn"
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm text-base"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Chat via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
