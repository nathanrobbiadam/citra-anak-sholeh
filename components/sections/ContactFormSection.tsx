"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // [TODO: Integrasikan dengan backend/API pengiriman email sesungguhnya]
    // Contoh: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    
    // Simulasi delay jaringan
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form Submitted:", data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50" aria-labelledby="contact-form-heading">
      <div className="section-container max-w-4xl">
        
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Kirim Pesan
          </span>
          <h2 id="contact-form-heading" className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
            Kami Ingin Mendengar dari Anda
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Silakan isi formulir di bawah ini dan tim kami akan segera menghubungi Anda kembali.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-brand-sm border border-neutral-100">
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">
                Pesan Berhasil Terkirim!
              </h3>
              <p className="text-neutral-600 max-w-md mx-auto">
                Terima kasih telah menghubungi kami. Kami telah menerima pesan Anda dan akan segera merespons ke alamat email yang Anda berikan.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-xl transition-colors"
              >
                Kirim Pesan Baru
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary-900">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Masukkan nama Anda"
                    className={cn(
                      "w-full px-4 py-3 bg-neutral-50 border rounded-xl outline-none transition-all duration-200 focus:bg-white",
                      errors.name 
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                        : "border-neutral-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-medium mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-primary-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="alamat@email.com"
                    className={cn(
                      "w-full px-4 py-3 bg-neutral-50 border rounded-xl outline-none transition-all duration-200 focus:bg-white",
                      errors.email 
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                        : "border-neutral-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-medium mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-primary-900">
                  Subjek <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  placeholder="Hal yang ingin didiskusikan"
                  className={cn(
                    "w-full px-4 py-3 bg-neutral-50 border rounded-xl outline-none transition-all duration-200 focus:bg-white",
                    errors.subject 
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                      : "border-neutral-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                  )}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs font-medium mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-primary-900">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  className={cn(
                    "w-full px-4 py-3 bg-neutral-50 border rounded-xl outline-none transition-all duration-200 focus:bg-white resize-none",
                    errors.message 
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                      : "border-neutral-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                  )}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-medium mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-700 text-white font-bold rounded-xl hover:bg-primary-600 disabled:bg-primary-400 disabled:cursor-not-allowed transition-all duration-200 shadow-brand-sm group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
