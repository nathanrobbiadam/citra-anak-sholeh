"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import { programs } from "@/data/programs";
import { PROGRAM_STATUS_LABEL, PROGRAM_STATUS_COLOR } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

// Tampilkan maksimal 3 program teratas (status berjalan & akan-datang diprioritaskan)
const FEATURED_PROGRAMS = programs
  .sort((a) => (a.status === "berjalan" ? -1 : 0))
  .slice(0, 3);

interface ProgramCardProps {
  program: (typeof programs)[number];
  index: number;
}

function ProgramCard({ program, index }: ProgramCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="h-full"
    >
      <Tilt 
        tiltMaxAngleX={5} 
        tiltMaxAngleY={5} 
        scale={1.02} 
        transitionSpeed={2000} 
        className="group relative flex flex-col h-full bg-white rounded-2xl shadow-brand-sm hover:shadow-brand-md overflow-hidden border border-neutral-100"
      >
        {/* Cover Image Placeholder */}
      {/* [TODO: Ganti dengan next/image ketika ada gambar nyata] */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-primary-300 opacity-40">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="80" height="80" rx="16" fill="currentColor" />
              <path
                d="M20 55L35 35L45 47L55 35L60 55H20Z"
                fill="white"
                opacity="0.6"
              />
              <circle cx="55" cy="28" r="7" fill="white" opacity="0.6" />
            </svg>
          </div>
        </div>
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
              PROGRAM_STATUS_COLOR[program.status]
            )}
          >
            {program.status === "berjalan" && (
              <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse-slow" />
            )}
            {PROGRAM_STATUS_LABEL[program.status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-primary-900 font-display font-bold text-lg mb-2 leading-snug group-hover:text-primary-700 transition-colors duration-200">
          {program.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">
          {program.shortDescription}
        </p>

        {/* Meta info */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Clock className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
            <span>
              Mulai: {formatDate(program.startDate)}
              {program.endDate && ` — ${formatDate(program.endDate)}`}
            </span>
          </div>
          {program.location && (
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
              <span className="line-clamp-1">{program.location}</span>
            </div>
          )}
          {program.targetParticipants && (
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Users className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
              <span className="line-clamp-1">{program.targetParticipants}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <Link
            href={`/program/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-primary-700 text-sm font-semibold hover:gap-2.5 transition-all duration-200 group/link"
            aria-label={`Lihat detail program ${program.title}`}
          >
            Lihat Detail
            <ArrowRight
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
      </Tilt>
    </motion.div>
  );
}

export default function ProgramHighlightSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <section
      id="program-highlight"
      className="py-16 md:py-24 bg-neutral-50"
      aria-labelledby="program-highlight-heading"
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Apa yang Kami Tawarkan
          </span>
          <h2
            id="program-highlight-heading"
            className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4"
          >
            Program Unggulan Kami
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {/* [TODO: Ganti dengan kalimat pengantar program dari client] */}
            Setiap program dirancang dengan cermat untuk membentuk karakter Islami
            anak-anak secara menyeluruh — jiwa, akal, dan akhlak.
          </p>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FEATURED_PROGRAMS.map((program, idx) => (
            <ProgramCard key={program.slug} program={program} index={idx} />
          ))}
        </div>

        {/* See All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeadingInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <Link
            id="program-see-all-btn"
            href="/program"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-200 shadow-brand-sm hover:shadow-brand-md group"
          >
            Lihat Semua Program
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
