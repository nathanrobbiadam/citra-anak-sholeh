// lib/utils.ts
// Helper functions yang digunakan di seluruh aplikasi

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan class Tailwind dengan aman (menghindari konflik)
 * Bergantung pada: clsx + tailwind-merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format tanggal ISO ke format bahasa Indonesia
 * @example formatDate("2025-01-15") → "15 Januari 2025"
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("id-ID", {
    day:   "numeric",
    month: "long",
    year:  "numeric",
  });
}

/**
 * Format tanggal ISO ke format pendek
 * @example formatDateShort("2025-01-15") → "Jan 2025"
 */
export function formatDateShort(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("id-ID", {
    month: "short",
    year:  "numeric",
  });
}

/**
 * Potong teks panjang menjadi excerpt
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

/**
 * Buat slug dari teks biasa
 * @example slugify("Kelas Parenting Islami") → "kelas-parenting-islami"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
