"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import { programs } from "@/data/programs";
import { type ProgramStatus } from "@/types/program";
import { PROGRAM_STATUS_LABEL, PROGRAM_STATUS_COLOR } from "@/lib/constants";
import { cn, formatDate } from "@/lib/utils";

type FilterOption = "semua" | ProgramStatus;

const FILTER_OPTIONS: { value: FilterOption; label: string }[] = [
  { value: "semua", label: "Semua Program" },
  { value: "berjalan", label: "Sedang Berjalan" },
  { value: "akan-datang", label: "Akan Datang" },
  { value: "selesai", label: "Selesai" },
];

export default function ProgramListSection() {
  const [filter, setFilter] = useState<FilterOption>("semua");

  const filteredPrograms = useMemo(() => {
    if (filter === "semua") return programs;
    return programs.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <section className="py-16 md:py-24 bg-neutral-50 min-h-[50vh]">
      <div className="section-container">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {FILTER_OPTIONS.map((option) => {
            const isActive = filter === option.value;
            return (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={cn(
                  "relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  isActive ? "text-primary-900" : "text-neutral-500 hover:text-primary-700 hover:bg-primary-50"
                )}
                aria-pressed={isActive}
              >
                <span className="relative z-10">{option.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 border-2 border-primary-200 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-primary-300 opacity-40 font-medium">
                        [Placeholder Gambar]
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
            ))}
          </AnimatePresence>

          {filteredPrograms.length === 0 && (
            <div className="col-span-full py-12 text-center text-neutral-500">
              Belum ada program untuk kategori ini.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
