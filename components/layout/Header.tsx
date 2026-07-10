"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(pathname === "/");
  const { scrollY } = useScroll();

  // Deteksi scroll untuk mengubah style header dan menyembunyikan di Splash Screen
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      if (pathname === "/") {
        // Sembunyikan header selama masih di layar Splash (kisaran 50% layar)
        setIsHidden(currentScroll < window.innerHeight * 0.5);
      } else {
        setIsHidden(false);
      }
    };
    
    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Tutup mobile menu saat route berubah
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-brand-sm border-b border-primary-100"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label={`${SITE_NAME} - Kembali ke beranda`}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image
                src="/images/LOGOCAS.png"
                alt="Logo Citra Anak Sholeh"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-primary-900 text-sm md:text-base tracking-wide">
                CITRA ANAK
              </span>
              <span className="font-display font-bold text-primary-600 text-sm md:text-base tracking-wide">
                SHOLEH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "text-primary-700 bg-primary-50"
                      : "text-neutral-600 hover:text-primary-700 hover:bg-primary-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-600 rounded-full"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              id="header-cta-btn"
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 active:bg-primary-800 transition-all duration-200 shadow-brand-sm hover:shadow-brand-md"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-md border-t border-primary-100"
            role="navigation"
            aria-label="Navigasi mobile"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
                        isActive
                          ? "bg-primary-50 text-primary-700 border border-primary-200"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-primary-700"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mt-3 pt-3 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-200"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
