"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CreditCard, Heart } from "lucide-react";
import { SITE_ADDRESS, SITE_PHONE, SITE_EMAIL, SITE_MAPS_EMBED_URL } from "@/lib/constants";

export default function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="contact-info-heading">
      <h2 id="contact-info-heading" className="sr-only">Informasi Kontak & Lokasi</h2>
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Contact & Donation Info */}
          <div className="space-y-12">
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gold-500 rounded-full" aria-hidden="true" />
                Informasi Kontak Resmi
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 shrink-0">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 mb-1">Alamat Kantor</p>
                    <p className="text-neutral-600 leading-relaxed">{SITE_ADDRESS}</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 shrink-0">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 mb-1">Telepon / WhatsApp</p>
                    <a href={`tel:${SITE_PHONE}`} className="text-neutral-600 hover:text-primary-700 transition-colors">
                      {SITE_PHONE}
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 shrink-0">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 mb-1">Email</p>
                    <a href={`mailto:${SITE_EMAIL}`} className="text-neutral-600 hover:text-primary-700 transition-colors">
                      {SITE_EMAIL}
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 shrink-0">
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 mb-1">Jam Operasional</p>
                    <p className="text-neutral-600">Senin - Jumat: 08:00 - 16:00 WIB</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Donation Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 shadow-brand-md relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400">
                    <Heart className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Salurkan Donasi
                  </h3>
                </div>
                
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  Dukung berbagai program kebaikan kami melalui transfer ke rekening resmi yayasan berikut:
                </p>
                
                <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="w-5 h-5 text-gold-400" aria-hidden="true" />
                    <span className="text-white font-semibold tracking-wide">Bank Syariah Indonesia (BSI)</span>
                  </div>
                  {/* [TODO: Ganti dengan no rekening asli dari client] */}
                  <div className="text-3xl font-display font-bold text-gold-400 tracking-wider mb-2">
                    123 456 7890
                  </div>
                  <p className="text-primary-200 text-xs">a.n. Yayasan Citra Anak Sholeh</p>
                </div>
                
                <p className="text-primary-200 text-xs italic">
                  *Mohon tambahkan kode unik 001 di akhir nominal untuk program beasiswa.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-brand-sm border border-neutral-100 relative bg-neutral-100"
          >
            {SITE_MAPS_EMBED_URL ? (
              <iframe
                src={SITE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Citra Anak Sholeh"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-12 h-12 text-neutral-300 mb-4" />
                <p className="text-neutral-500 font-medium">Peta belum dikonfigurasi.</p>
                <p className="text-neutral-400 text-sm mt-2">Tambahkan URL Embed Google Maps di file constants.ts</p>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
