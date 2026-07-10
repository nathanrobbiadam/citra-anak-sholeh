// lib/constants.ts
// Konstanta global yang digunakan di seluruh aplikasi

export const SITE_NAME = "Citra Anak Sholeh";
export const SITE_TAGLINE = "Membangun Generasi Qur'ani yang Berakhlak Mulia";
export const SITE_DESCRIPTION =
  "Yayasan Citra Anak Sholeh adalah lembaga pendidikan dan sosial berbasis nilai Islam yang berkomitmen membentuk generasi muda yang cerdas, berakhlak, dan mencintai Al-Qur'an.";
export const SITE_URL = "https://citraanaksholeh.org"; // [TODO: Ganti dengan domain nyata]
export const SITE_PHONE = "[TODO: Isi nomor telepon]";
export const SITE_EMAIL = "[TODO: Isi email resmi]";
export const SITE_ADDRESS = "[TODO: Isi alamat lengkap lembaga]";
export const SITE_MAPS_EMBED_URL = ""; // [TODO: Isi URL embed Google Maps]

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/citraanaksholeh", // [TODO: Konfirmasi username]
  facebook:  "https://facebook.com/citraanaksholeh",  // [TODO: Konfirmasi URL]
  youtube:   "https://youtube.com/@citraanaksholeh",  // [TODO: Konfirmasi channel]
  whatsapp:  "https://wa.me/62",                      // [TODO: Isi nomor WhatsApp]
} as const;

export const NAV_LINKS = [
  { label: "Beranda",       href: "/" },
  { label: "Tentang Kami",  href: "/about" },
  { label: "Program",       href: "/program" },
  { label: "Portofolio",    href: "/portfolio" },
  { label: "Kontak",        href: "/contact" },
] as const;

export const PROGRAM_STATUS_LABEL: Record<string, string> = {
  "berjalan":    "Sedang Berjalan",
  "akan-datang": "Akan Datang",
  "selesai":     "Selesai",
};

export const PROGRAM_STATUS_COLOR: Record<string, string> = {
  "berjalan":    "bg-primary-100 text-primary-700 border-primary-300",
  "akan-datang": "bg-gold-100 text-gold-700 border-gold-300",
  "selesai":     "bg-neutral-100 text-neutral-600 border-neutral-300",
};

// Statistik dummy untuk section hero/beranda
// [TODO: Ganti dengan data nyata dari lembaga]
export const STATS = [
  { value: "500+",  label: "Anak Terbina" },
  { value: "10+",   label: "Program Aktif" },
  { value: "5+",    label: "Tahun Berdiri" },
  { value: "1000+", label: "Keluarga Terbantu" },
];
