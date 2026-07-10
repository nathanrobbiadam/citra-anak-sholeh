"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

// [TODO: Ganti dengan testimoni nyata dari client]
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ibu Sari Dewi",
    role: "Orang Tua Peserta Tahfidz",
    content:
      "Alhamdulillah, anak saya yang tadinya susah fokus belajar, sekarang sangat semangat menghafal Al-Qur'an. Metode yang digunakan para ustadz sangat sabar dan menyenangkan.",
    rating: 5,
    initials: "SD",
  },
  {
    id: 2,
    name: "Bapak Ahmad Fauzi",
    role: "Donatur Program Beasiswa",
    content:
      "Saya sangat terkesan dengan transparansi dan profesionalisme Citra Anak Sholeh dalam mengelola program beasiswa. Laporan kegiatan selalu jelas dan tepat waktu.",
    rating: 5,
    initials: "AF",
  },
  {
    id: 3,
    name: "Ibu Rahma Nurhayati",
    role: "Alumni Kelas Parenting Islami",
    content:
      "Kelas parenting ini benar-benar mengubah cara saya mendidik anak. Ilmunya sangat praktis dan sesuai ajaran Islam. Sangat recommended untuk semua orang tua!",
    rating: 5,
    initials: "RN",
  },
  {
    id: 4,
    name: "Bapak Hermawan",
    role: "Warga Sekitar",
    content:
      "Kehadiran yayasan ini membawa banyak manfaat bagi lingkungan kami. Anak-anak sekitar jadi punya kegiatan positif setiap sore.",
    rating: 5,
    initials: "HW",
  },
];

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[number];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="relative flex flex-col h-full bg-white rounded-2xl p-6 shadow-brand-sm border border-neutral-100 card-lift">
      <Quote className="w-8 h-8 text-primary-200 mb-4" aria-hidden="true" />
      <div className="flex items-center gap-1 mb-4" aria-label={`Rating ${testimonial.rating} dari 5 bintang`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="text-neutral-600 text-sm leading-relaxed flex-1 mb-6 italic">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <footer className="flex items-center gap-3 mt-auto">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white text-sm font-bold shrink-0" aria-hidden="true">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-primary-900 font-semibold text-sm">{testimonial.name}</p>
          <p className="text-neutral-400 text-xs">{testimonial.role}</p>
        </div>
      </footer>
    </article>
  );
}

export default function TestimoniSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimoni" className="py-16 md:py-24 bg-white" aria-labelledby="testimoni-heading">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Kata Mereka
            </span>
            <h2 id="testimoni-heading" className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Testimoni Keluarga &amp; Mitra
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              Kepercayaan keluarga dan mitra adalah motivasi terbesar kami untuk
              terus berbuat yang terbaik.
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-200",
                prevBtnEnabled ? "border-primary-200 text-primary-700 hover:bg-primary-50" : "border-neutral-100 text-neutral-300 cursor-not-allowed"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-200",
                nextBtnEnabled ? "border-primary-200 text-primary-700 hover:bg-primary-50" : "border-neutral-100 text-neutral-300 cursor-not-allowed"
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="overflow-hidden -mx-4 px-4 py-4" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 pl-4 min-w-0">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
