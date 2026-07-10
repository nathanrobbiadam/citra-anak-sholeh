"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { formatDate } from "@/lib/utils";

export default function PortfolioListSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 min-h-[50vh]">
      <div className="section-container">
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
                <div className="relative h-56 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary-300 opacity-40 font-medium">
                      [Placeholder Gambar Kegiatan]
                    </div>
                  </div>
                  {/* Category Badge */}
                  {item.category && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-primary-700 backdrop-blur-sm shadow-sm uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <h3 className="text-primary-900 font-display font-bold text-xl mb-3 leading-snug group-hover:text-primary-700 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">
                    {item.shortDescription}
                  </p>

                  {/* Meta info */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <CalendarDays className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                      <span>Terlaksana: {formatDate(item.completedDate)}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <MapPin className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                        <span className="line-clamp-1">{item.location}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2 text-primary-700 text-sm font-semibold hover:gap-3 transition-all duration-200 group/link"
                      aria-label={`Lihat detail dokumentasi ${item.title}`}
                    >
                      Lihat Dokumentasi
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

          {portfolioItems.length === 0 && (
            <div className="col-span-full py-12 text-center text-neutral-500">
              Belum ada data portofolio.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
