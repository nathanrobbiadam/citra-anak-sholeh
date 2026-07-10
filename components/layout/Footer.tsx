import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Leaf,
  Heart,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import {
  SITE_NAME,
  SITE_ADDRESS,
  SITE_PHONE,
  SITE_EMAIL,
  SOCIAL_LINKS,
  NAV_LINKS,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main Footer Content */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Deskripsi */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
              aria-label={`${SITE_NAME} - Kembali ke beranda`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800 text-white">
                <Leaf className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base tracking-wide">
                  CITRA ANAK
                </span>
                <span className="font-display font-bold text-neutral-300 text-base tracking-wide">
                  SHOLEH
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Membangun generasi Qur&apos;ani yang berakhlak mulia melalui
              pendidikan, pemberdayaan, dan pelayanan sosial berbasis nilai Islam.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3" aria-label="Media sosial">
              <a
                id="footer-instagram"
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-200 border border-neutral-800"
                aria-label="Instagram Citra Anak Sholeh"
              >
                <FaInstagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                id="footer-facebook"
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-200 border border-neutral-800"
                aria-label="Facebook Citra Anak Sholeh"
              >
                <FaFacebookF className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                id="footer-youtube"
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-200 border border-neutral-800"
                aria-label="YouTube Citra Anak Sholeh"
              >
                <FaYoutube className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                id="footer-whatsapp"
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-200 border border-neutral-800"
                aria-label="WhatsApp Citra Anak Sholeh"
              >
                <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigasi */}
          <nav aria-labelledby="footer-nav-heading">
            <h3
              id="footer-nav-heading"
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-neutral-800"
            >
              Navigasi
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Kontak */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-neutral-800">
              Hubungi Kami
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-neutral-400 text-sm leading-relaxed">
                  {SITE_ADDRESS}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SITE_PHONE}`}
                  className="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {SITE_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {SITE_EMAIL}
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-neutral-950">
        <div className="section-container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-neutral-500 text-xs text-center sm:text-left">
              &copy; {currentYear} {SITE_NAME}. Hak cipta dilindungi undang-undang.
            </p>
            <p className="text-neutral-600 text-xs flex items-center gap-1">
              Dibuat dengan{" "}
              <Heart
                className="w-3 h-3 text-neutral-500 inline"
                aria-label="cinta"
              />{" "}
              untuk generasi masa depan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
